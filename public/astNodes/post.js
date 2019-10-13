import AstNode from "../libs/astNode";

export default class Post extends AstNode{
    photo = "imge";
    audio = "msic";
    video = "mvie";

    mockParse() {
        console.log("mock parse for post");
    }

    constructor() {
        super();
        this.postTitle = "";
        this.media = "";
        this.caption = "";
        this.url = new URL();
    }

    // POST  ::= “Post {” MEDIA “for” TITLE “Caption” TEXT URL     #* + FORMATTING* “}”

    parse(){
        this.tokenizer.getAndCheckNext("Post");
        this.tokenizer.getAndCheckNext("{");
        if(this.tokenizer.getNext() === this.photo || this.tokenizer.getNext() === this.audio || this.tokenizer.getNext() === this.video){
            this.media = this.tokenizer.getNext();
        } else {
            this.tokenizer.getAndCheckNext(this.photo);
        }
        this.tokenizer.getAndCheckNext("for");
        this.postTitle = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext("Caption");
        this.caption = this.tokenizer.getNext();
        this.url.parse();
        if(this.tokenizer.checkToken("Format")){
            var format = new Formatting();
            format.parse();
        }
        this.tokenizer.getAndCheckNext("}");
    }

    evaluate(){
        // create a new div element
        var newDiv = document.createElement("div");
        // create post
        var newContent = document.createTextNode(this.caption);
        // add the text node to the newly created div
        newDiv.appendChild(newContent);
        var urlContent = this.url.evaluate();
        newDiv.appendChild(urlContent);
        // add the newly created element and its content into the DOM
        var currentDiv = document.getElementById("div1");
        document.body.insertBefore(newDiv, currentDiv);
    }
}