import Tokenizer from "./libs/tokenizer.js";
import astNode from "./libs/astNode.js";

const font_lit = "font";
const font_size_lit = "font-size";
const alightment_lit = "alignment";

export default class Format extends astNode{
    // TODO: getting the user input for background, font, size, alignment
    // appent css elemnt to output.css file


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
    parse(value){
        this.tokenizer.getAndCheckNext("Format");
        this.tokenizer.getAndCheckNext("{");
        if(value == ".globalFormat"){
            //this format includes changing the global background color
            this.tokenizer.getAndCheckNext("blog-background");
            this.background = this.tokenizer.getNext();
            this.tokenizer.getAndCheckNext("font");
            this.font = this.tokenizer.getNext();
            this.tokenizer.getAndCheckNext("font-size");
            this.size = this.tokenizer.getNext();
            this.tokenizer.getAndCheckNext("alignment");
            this.alignment = this.tokenizer.getNext();

        }else{
            // this format is only for changing the post or about me
            if(this.tokenizer.getNext() == font_lit){
                this.font = this.tokenizer.getNext();
            }else if (this.tokenizer.getNext() == font_size_lit){
                this.size = this.tokenizer.getNext();
            }else if(this.tokenizer.getNext() == alightment_lit){
                this.alignment = this.tokenizer.getNext();
            }
        }
    }

    evaluate(){
        var cssContent = ''
        this.fs.appendFile("output.css", "", function (err) {
            if (err) throw err;
            console.log("something fucked up in the format evaluation process");
        });
    }


}