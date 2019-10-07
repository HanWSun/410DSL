import astNode from "../libs/astNode";

export default class Url extends astNode {
    // Taking in a url and returning an a href tag
    // <iframe width="420" height="345" src="https://www.youtube.com/embed/zNUhcOQ9qzs">
    // </iframe>

    constructor() {
        super();
        this.url = "";
    }

    parse(){
        this.tokenizer.getAndCheckNext("url");
        this.url = this.tokenizer.getNext();
        this.typeCheck();
    }

    evaluate(){
        var html = '<iframe width="420" height="345" src= ${this.url}> </iframe>'
    }

    typeCheck(){
        function isValidURL(str) {
            var a  = document.createElement('a');
            a.href = str;
            return (a.host && a.host != window.location.host);
        }

        if(!isValidURL(this.url))
            throw new Error("URL IS NOT VALID");
    }
}