class ClozeCard {
    constructor(text, cloze) {
        this.cloze = cloze; //George Washington
        // this.partial = this.full - partial; //Full subtract cloze text - was the first president of the United States
        this.full = text; //George Washington was the first president of the United States
        this.partial = text.replace(cloze,"...."); //Full subtract cloze text - was the first president of the United States
    }
}

module.exports = ClozeCard;