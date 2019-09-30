const express = require('express');
const app = express();
var body_parser = require('body-parser');
app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());

import Tokenizer from "./public/libs/tokenizer.js";
console.log("hello, this will be where the 'main' function will be. Js doesn't use main but w/e");

function initializeApp() {
    var literals = ["a", "b"]
    var input = "sampleInput"
    var tokenizer = new Tokenizer(literals, input);
    tokenizer.init();
}

initializeApp();