import AstNode from "../libs/astNode";

export default class Post extends AstNode{
    photo = "photo";
    audio = "audio";
    video = "video";

    mockParse() {
        console.log("mock parse for post");
    }

    constructor() {
        super();
        this.postTitle = "";
        this.media = "";
        this.caption = "";
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
        var url = new URL();
        url.parse();
        if(this.tokenizer.checkToken("Format")){
            var format = new Formatting();
            format.parse();
        }
        this.tokenizer.getAndCheckNext("}");
    }
}