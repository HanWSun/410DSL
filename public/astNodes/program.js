import Tokenizer from "../libs/tokenizer";
import AstNode from "../libs/tokenizer";
import Post from "./post";
import MeBlock from "./meBlock.js";
import { format } from "util";

export default class Program { // extends AstNode {

    constructor() {
        // console.log("calling super");
        // super();
        this.blogItems = [];
        this.blogType = "";
        this.blogName = "";
        this.tokenizer = Tokenizer.getTokenizer();
    }

    mockParse(val) {
        console.log("mock parse for program");
        var s = null;
        if (val == 1) {
            s = new MeBlock();
        } else {
            s = new Post();
        }
        s.mockParse();
        this.blogItems.push(s);;
        console.log(this.blogItems.length);
    }

    parse() {
        console.log("program.js, beginning parsing");
        this.tokenizer.getAndCheckNext("Create");
        this.blogType = this.tokenizer.getNext();
        this.blogName = this.tokenizer.getNext();

        console.log("Blog type: " + this.blogType);
        console.log("Blog name: " + this.blogName);

        if (this.tokenizer.checkToken("Format")) {
            var blogFormat = new Format();
            blogFormat.parse();
        } else {
            console.log("Blog Format not found");
            process.exit(0);
        }

        if (tokenizer.CheckToken("Aboutme")) {
            var meBlock = new MeBlock();
            meBlock.parse();
        } else {
            console.log("MeBlock (About me) not found");
            process.exit(0);
        }

        while(!tokenizer.checkToken("Donefornow")) {
                var post = null;
                
                if (tokenizer.CheckToken("Post")) {
                    post = new Post();
                    post.parse();
                    this.blogItems.push(post);
                }
        }
    }

    evaluate() {
        var htmlBeginning = `<!DOCTYPE html>
                            <html>
                            <meta name="viewport" content = "width=device-width, initial-scale=1">
                            <body>
                            <div class="blogTitle">
                                <h2>${this.blogName}</h2>
                            </div>`;
        var htmlEnding = `</body>
                            </html>`;
        this.fs.appendFile("output.html", htmlBeginning, function (err) {
            if (err) throw err;
            console.log("something fucked up in the program evaluation process");
        });
        var itemLength = this.blogItems.length;
        for (var i = 0; i < itemLength; i++) {
            blogItems[i].evaluate();
        }
        this.fs.appendFile("output.html", htmlEnd, function (err) {
            if (err) throw err;
            console.log("something fucked up in the program evaluation process");
        });
    }
}