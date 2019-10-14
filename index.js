const express = require('express');
const app = express();
var body_parser = require('body-parser');
app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());

import Tokenizer from "./public/libs/tokenizer.js";
import Program from "./public/astNodes/program.js";
import AstNode from "./public/libs/astNode.js";

console.log("hello, this will be where the 'main' function will be. Js doesn't use main but w/e");

function initializeApp() {
    var literals = ["Create", "Done for now", "Post", "About me"
                    , "Format", "Caption", "URL", "imge", "msic", "mvie"
                    , "blog-background", "font", "fsize", "cm", "px"
                    , "center", "left", "right", "justify", "alignment"
                    , ":", ";", "{", "}", "photoblog", "audioblog", "videoblog"];

    console.log("index.js, making tokenizer");
    Tokenizer.makeTokenizer(literals, "input.txt");
    console.log("index.js, creating program");
    var program = new Program();
    console.log("index.js, parsing program");
    program.parse();
    //program.evaluate();
}

function mock() {
    var program = new Program();
    program.mockParse(1);
}

initializeApp();
//mock();
