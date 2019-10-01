import Tokenizer from "../libs/tokenizer";
import AstNode from "../libs/tokenizer";
import Post from "./post";
import MeBlock from "./meBlock.js";

export default class Program {//extends AstNode {

    constructor() {
        //super();
        this.statements = [];
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
        this.statements.push(s);;
        console.log(this.statements.length);
    }

    parse() {
        tokenizer.getAndCheckNext("Create Blog");
        while(!tokenizer.checkToken("Done for now")) {
                var statement = null;
                if (tokenizer.CheckToken("About me")) {
                    statement = new MeBlock();
                }
                if (tokenizer.CheckToken("Post")) {
                    statement = new Post();
                }
                statement.parse();
                this.statements.push(statement);
        }
    }
}