export default class Formatting {
    // TODO: getting the user input for background, font, size, alignment
    // and output css elements for the corresponding elements.
    // BACKGROUND
    // FONT
    // SIZE
    // ALIGNMENT
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


    setBackgroundCSS(){
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '.cssClass { color: #F00; }';
        document.getElementsByTagName('head')[0].appendChild(style);

        document.getElementById('someElementId').className = 'cssClass';
    }
}