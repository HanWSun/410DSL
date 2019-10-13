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
    constructor() {
        
    }

    static names() {
        return _names;
    }

    static addToNames(nm) {
        _names.push(nm);
    }

    static types() {
        //console.log(_types);
        return _types;
    }

    static addToTypes(tp) {
        _types.push(tp);
    }

    static nodeTokenizer() {
        //console.log("astnode.js nodeTokenizer: " + _tokenizer);
        return Tokenizer.getTokenizer();
        //return _tokenizer;
    }

    static nodeFs() {
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
