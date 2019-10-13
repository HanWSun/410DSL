import Format from "./format";
import AstNode from "../libs/astNode";

export default class MeBlock extends AstNode{

    constructor() {
        super();
        this.tokenizer = AstNode.nodeTokenizer();
        this.text = "";
        this.fs = AstNode.nodeFs();
    }

    parse() {
        this.tokenizer.getAndCheckNext("Aboutme");
        this.tokenizer.getAndCheckNext("{");
        this.text = this.tokenizer.getNext();
        console.log("meBlock.js text is: " + this.text);
        if (this.tokenizer.checkNext("Format")) {
            this.format = new Format();
        }
        this.format.parse();
    }

    evaluate() {
        this.fs.appendFileSync("output.html", '<div class="aboutme">\n');
        this.fs.appendFileSync("output.html", "<h2>About Me</h2>\n");
        this.fs.appendFileSync("output.html", "<p>" + this.text + "</p>\n");
        this.fs.appendFileSync("output.html", "</div>\n");
        this.format.evaluate();
    }
}