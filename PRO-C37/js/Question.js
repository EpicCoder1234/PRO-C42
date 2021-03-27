class Question{
    constructor(){ 
        this.title = createElement('h1')
        this.question = createElement('h2')
        this.option1 = createElement('h3')
        this.option2 = createElement('h4')
        this.input1 = createInput(" ");
    }
    display(){
        this.title.html("My Quiz Game");
        this.title.position(350,0);

        this.question.html("Question:- What starts and ends with the letter E, but only has one letter?");
        this.question.position(150,80);
        this.option1.html("1. Everyone");
        this.option1.position(150,100);
        this.option2.html("2: Envelope");
        this.option2.position(150,120);

        this.input1.position(150,230);
    }
}