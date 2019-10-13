import Formatting from "./format";

export default class MeBlock {
    parse() {
        tokenizer.getAndCheckNext("About me");
        text = tokenizer.getNext();
        if (tokenizer.checkToken("Format")) {
            format = new Formatting();
        }
        format.parse();
    }

    evaluate() {
        this.fs.appendFileSync("../output.html", '<div class="aboutme">\n');
        this.fs.appendFileSync("../output.html", "<h2>About Me</h2>\n");
        this.fs.appendFileSync("../output.html", "<p>" + text + "</p>\n");
        this.fs.appendFileSync("../output.html", "</div>\n");
        format.evaluate();
    }
}