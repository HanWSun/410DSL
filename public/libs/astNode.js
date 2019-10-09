export default class AstNode {
    static names = [];
    static types = {};
    tokenizer = Tokenizer.getTokenizer();
    fs = require('fs');

    parse() {
        throw new Error("Method parse in abstract class not implemented!");
    }

    evaluate() {
        throw new Error("Method evaluate in abstract class not implemented!");
    }
}