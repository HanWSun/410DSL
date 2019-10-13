import AstNode from "../libs/astNode";

const photo = "imge";
const audio = "msic";
const video = "mvie";
const photoblog = "photoblog";
const audioblog = "audioblog";
const videoblog = "videoblog";

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
    }

    // POST  ::= “Post {” MEDIA “for” TITLE “Caption” TEXT URL     #* + FORMATTING* “}”

    parse(blogType){
        console.log("post.js parsing post");
        this.tokenizer.getAndCheckNext("Post");
        this.tokenizer.getAndCheckNext("{");

        if(blogType === photoblog){
            this.media = this.tokenizer.getAndCheckNext(photo);
        } else if (blogType === audioblog){
            this.media = this.tokenizer.getAndCheckNext(audio);
        } else if (blogType === videoblog){
            this.media = this.tokenizer.getAndCheckNext(video);
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