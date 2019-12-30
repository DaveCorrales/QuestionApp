
//CONSTRUCTOR
var Question = function (question, answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

Question.prototype.showQuestion = function(){
    console.log(this.question)
for (var i = 0;i < this.answers.length;i++){
    console.log(i + ":" + this.answers[i])
    }   
}

Question.prototype.checkAnswer = function(ans, callback){
    var sc;
    if(ans === this.correctAnswer){
        console.log("*******CORRECT ANSWER*************");
        sc = callback(true);

    }else{
        console.log("*******WRONG ANSWER*************")

        sc = callback(false);
    }
    this.displayScore(sc);
}

Question.prototype.displayScore = function(score){
    console.log("your current score is: " + score);
    console.log("------------------------------------");
}

var q1 = new Question ("what is my name? ", ["dave", "dan","renz"], 0);
var q2 = new Question ("what is my favorite destination in philippines? ",["boracay","siargao","cagayan"], 1);
var q3 = new Question ("what is the name of my dog? ",["brownie","smarf","humpy"],2);

var questions = [q1,q2,q3];



//using closure
function score() {
    var sc = 0;
    return function(correct){
        if (correct){
            sc++;
        }
        return sc;
    }
}

var keepScore = score();


var randomQuestion = function (){
    
    var n = Math.floor(Math.random() * questions.length);
    
    questions[n].showQuestion();
    
    var answe = prompt("type your answer: ");
    
    
    // parseINT to convert string to a number

    if(answe !== "exit"){
        questions[n].checkAnswer(parseInt(answe), keepScore);
        randomQuestion();
    }
    
}

randomQuestion();