import Tokenizer from "./libs/tokenizer.js";
import astNode from "./libs/astNode.js";

export default class Format extends astNode{
    // TODO: getting the user input for background, font, size, alignment
    // and output css elements for the corresponding elements.


    constructor(background, font, size, alignment){
        this.background = background;
        this.font = font;
        this.size = size;
        this.alignment = alignment;
    }

    get background(){
        return this._background;
    }

    set background(value){
        // check type and error handling

        this._background = value;
    }

    get font(){
        return this._font;
    }

    set font(value){
        // check type and error handling

        this._font = value;
    }

    get size(){
        return this._size;
    }

    set size(value){
        // check type and error handling

        this._size = value;
    }

    get alignment(){
        return this._alignment;
    }

    set alignment(value){
        // check type and error handling

        this._alignment = value;
    }

    //parsing the formatting block into placeholders
    //two types of format blocks: one includes changing global background colour, and one without
    parse(){
        this.tokenizer.getAndCheckNext("Format");
        this.tokenizer.getAndCheckNext("{");
        if(this.tokenizer.getAndCheckNext("blog-background")){
            //this format includes changing the global background color
            this.background = this.tokenizer.getNext();
            this.tokenizer.getAndCheckNext("font");
            this.font = this.tokenizer.getNext();
            this.tokenizer.getAndCheckNext("font-size");
            this.size = this.tokenizer.getNext();
            this.tokenizer.getAndCheckNext("alignment");
            this.alignment = this.tokenizer.getNext();

        }else if(this.tokenizer.getAndCheckNext("font")){
            // this format is only for changing the post
            this.font = this.tokenizer.getNext();
            this.tokenizer.getAndCheckNext("font-size");
            this.size = this.tokenizer.getNext();
            this.tokenizer.getAndCheckNext("alignment");
            this.alignment = this.tokenizer.getNext();
        }
    }

    evaluate(){
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '.cssClass { color: ' + this.background + '; '
                        + 'font-style: ' + this.font + '; '
                        + 'font-size: ' + this.size + '; '
                        + 'text-align: ' + this.alignment +';}';

        document.getElementsByTagName('head')[0].appendChild(style);


        //this may be needed for later to identify the div in html
       // document.getElementById('someElementId').className = 'cssClass';
    }


}