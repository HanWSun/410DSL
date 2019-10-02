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
                    , "Format", "Caption", "URL", "photo", "audio", "video"
                    , "blog-background", "font", "font-size", "cm", "px"
                    , "center", "left", "right", "justify", "alignment",
                    , ":", ";", "{", "}"];

    var input = "sampleInput";
    var tokenizer = new Tokenizer(literals, input);
    var program = new Program();
    program.parse();
    program.evaluate();
}

function mock() {
    var program = new Program();
    program.mockParse(1);
}

//initializeApp();
mock();