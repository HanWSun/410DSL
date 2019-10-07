console.log("importing tokenizer");
import Tokenizer from "./tokenizer.js";

let _names = [];
let _types = [];
let _tokenizer = Tokenizer.getTokenizer();
let _fs = require('fs');

export default class AstNode {
    // static names = [];
    // static types = {}; 
    // tokenizer = Tokenizer.getTokenizer();
    // fs = require('fs');

    static get names() {
        return _names;
    }

    static get types() {
        //console.log(_types);
        return _types;
    }

    static get nodeTokenizer() {
        return _tokenizer;
    }

    static get nodeFs() {
        return _fs;
    }

    parse() {
        throw new Error("Method parse in abstract class not implemented!");
    }

    evaluate() {
        throw new Error("Method evaluate in abstract class not implemented!");
    }

    nameCheck() {
        throw new Error("Method nameCheck in abstract class not implemented!");
    }

    typeCheck() {
        throw new Error("Method typeCheck in abstract class not implemented!");
    }
}
