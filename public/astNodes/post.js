import AstNode from "../libs/astNode";
import { format } from "util";

const photo = "imge";
const audio = "msic";
const video = "mvie";

export default class Post extends AstNode{

    mockParse() {
        console.log("mock parse for post");
    }

    constructor() {
        super();
        this.postTitle = "";
        this.media = "";
        this.caption = "";
        this.url = new URL();
        this.postClass = Math.random().toString();
        this.tokenizer = AstNode.nodeTokenizer();
        this.fs = AstNode.nodeFs();
        console.log(this.fs);
    }

    // POST  ::= “Post {” MEDIA “for” TITLE “Caption” TEXT URL     #* + FORMATTING* “}”

    parse(){
        console.log("post.js parsing post");
        this.tokenizer.getAndCheckNext("Post");
        this.tokenizer.getAndCheckNext("{");
        if(this.tokenizer.checkNext() === this.photo || this.tokenizer.checkNext() === this.audio || this.tokenizer.checkNext() === this.video){
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
            var format = new Format(this.postClass);
            format.parse();
        }
        this.tokenizer.getAndCheckNext("}");
    }

    evaluate(){

        var postContent = `<div class=${this.postClass}>
                            ${this.caption}
                            ${this.url.evaluate()}
                            </div>`;
        console.log("here is the post content being added to html");
        this.fs.appendFileSync("output.html", postContent);
    }
}