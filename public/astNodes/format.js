import astNode from "./libs/astNode.js";

const font_lit = "font";
const font_size_lit = "font-size";
const alightment_lit = "alignment";

export default class Format extends astNode {
    // TODO: getting the user input for background, font, size, alignment
    // appent css elemnt to output.css file


    constructor(cssClass) {
        this.cssClass = cssClass;
        this.background = "";
        this.font = "";
        this.size = "";
        this.alignment = "";
    }


    //parsing the formatting block into placeholders
    //two types of format blocks: one includes changing global background colour, and one without
    parse() {
        this.tokenizer.getAndCheckNext("Format");
        this.tokenizer.getAndCheckNext("{");
        if (this.cssClass == ".globalFormat") {
            //this format includes changing the global background color
            this.tokenizer.getAndCheckNext("blog-background");
            this.background = this.tokenizer.getNext();
            this.tokenizer.getAndCheckNext("font");
            this.font = this.tokenizer.getNext();
            this.tokenizer.getAndCheckNext("font-size");
            this.size = this.tokenizer.getNext();
            this.tokenizer.getAndCheckNext("alignment");
            this.alignment = this.tokenizer.getNext();

        } else {
            // this format is only for changing the post or about me
            while (this.tokenizer.getNext() != "}") {
                if (this.tokenizer.getNext() == font_lit) {
                    this.font = this.tokenizer.getNext();
                } else if (this.tokenizer.getNext() == font_size_lit) {
                    this.size = this.tokenizer.getNext();
                } else if (this.tokenizer.getNext() == alightment_lit) {
                    this.alignment = this.tokenizer.getNext();
                }
            }
        }
    }

    evaluate() {
        var cssContent;
        if (this.cssClass == ".globalFormat") {
            cssContent = '.globalFormat { background-color: ' + this.background + ';'
                + 'font-family: ' + this.font + ';'
                + 'font-size: ' + this.size + ';'
                + 'text-align' + this.alignment + '; }';
        } else {

            //getting default values from css file if user input is missing
            function readData(err, data) {
                var globalFormat,
                    style;
                globalFormat = data.querySelector('.globalFormat');
                style = getComputedStyle(globalFormat);
                if (this.font == "") {
                    this.font = style.font - family;
                }
                if (this.size == "") {
                    this.size = style.font - size;
                }
                if (this.alignment == "") {
                    this.alignment = style.text - align;
                }
            }

            fs.readFile('output.css', 'utf8', readData);

            cssContent = '.' + this.cssClass + ' {'
                + 'font-family: ' + this.font + ';'
                + 'font-size: ' + this.size + ';'
                + 'text-align' + this.alignment + '; }';
        }

        this.fs.appendFile("output.css", cssContent, function (err) {
            if (err) throw err;
            console.log("something went wrong in adding format to css file");
        });
    }
}