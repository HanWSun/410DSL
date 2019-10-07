/* Initializes the tokenizer, gets literals,
 * makes call to parse/eval for the program
 * @ param args            {string}
*/
//Read the whole program into a single string
// Kill the newlines check
// Replace all literals with “RESERVEDWORD”<the literal>”RESERVEDWORD”
// Replace all RESERVEDWORDRESERVEDWORD with just “RESERVEDWORD”
// Split on “RESERVEDWORD”

var fs = require("fs");


export default class Tokenizer {
    //this.Tokenizer.theTokenizer;

    constructor(literals, filename) {
        this.currentToken = 0;
        this.literals = literals;
        this.filename = filename;
        try {
        this.program = fs.readFileSync(this.filename,'utf8');

        } catch (e) {
          console.log("Didn't find file");
          process.exit(0);
        }
        console.log(this.program);
        this.spaceKillingTokenize();
    }

    init() {

        console.log("sample function for tokenizer");
    }


    spaceKillingTokenize(){
      function name(str,replaceWhat,replaceTo){
        var re = new RegExp(replaceWhat, 'g');
        return str.replace(re,replaceTo);
        }

      this.tokenizedProgram = this.program;
      this.tokenizedProgram = this.tokenizedProgram.replace(/\n/g,"");
      var RW = "@@" //RESERVEDWORD
      for(var i=0;i<this.literals.length;i++){
        var token = this.literals[i]
        this.tokenizedProgram = name(this.tokenizedProgram,token,`${RW}${token}${RW}`)
      }
      this.tokenizedProgram = name(this.tokenizedProgram,`${RW}${RW}`,`${RW}`)
      this.tokenizedProgram = this.tokenizedProgram.split(`${RW}`)
      this.tokens = this.tokenizedProgram;
      console.log(this.tokenizedProgram);
    }

    checkNext(){
      var token = "";
      if (this.currentToken<this.tokens.length){
        token = this.tokens[this.currentToken];
      }
      else {
        token = "NO_MORE_TOKENS";
      }
      return token;
    }

    getNext(){
      var token = "";
      if (this.currentToken<this.tokens.length){
        token = this.tokens[this.currentToken];
        this.currentToken++;
      }
      else{
        token="NULLTOKEN";
      }
    return token;
    }

    checkToken(regexp){
      var s = this.checkNext();
      console.log(`comparing: ${s} to ${regexp}`);
      return s==regexp;

    }

    getAndCheckNext(regexp){
      s = this.getNext();
      if (!s==regexp){
        process.exit(0);
      }
      console.log(`matched: ${s} to ${regexp}`);
      return s
    }

    moreTokens(){
        return this.currentToken<this.tokens.length;
    }

    makeTokenizer(filename, literals){
        if (this.theTokenizer==null){
          this.theTokenizer = new Tokenizer(filename,literals);
        }

    getTokenizer(){
          return this.theTokenizer;
        }

}
