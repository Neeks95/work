function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// quiz questions here
var questions = [
    new Question("What are the main functions of the skin?", ["Sensation, Heat Regulation, Absorption, Protection, Excretion, Secretion", "Sensation, Temperature, Dissolve, Sedate,","Protection and moisture barrier ", "Vision, Hearing, Smell, Tastes, Touch"], "Sensation, Heat Regulation, Absorption, Protection, Excretion, Secretion"),
    new Question("Which ingredient helps to hold onto water in the skin?", ["Glycolic Acid", "Polyglutamic Acid", "Hyaluronic Acid", "Lactic Acid"], "Hyaluronic Acid"),
    new Question("Which is not a AHA?", ["Lactic Acid", "Salicylic Acid","Citric Acid", "Mandelic Acid"], "Salicylic Acid"),
    new Question("What product is great for dry skin?", ["Oil-free moisturiser", "BHA Exfoliator", "Ceramide Cream", "Vitamic C serum"], "Ceramide Cream"),
    new Question("The gold standard skincare ingredient is...", ["Niacinamide", "SPF", "Hyaluronic Acid", "Retinol"], "Retinol")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();




//old code below


// function showQuestions(question) {
//     questionElement.innerText = question.question
//     question.answers.forEach(answer =>{
//      const button = document.createElement("button")
//      button.innerText - answer.text
//      button.classList.add("btn")
//      if(answer.correct){
//          button.dataset.correct = answer.correct
//      }
//      button.addEventListener("click", selectAnswer)
//      answerButtonElement.appendChild(button)
//     }
//     );
// }

// function resetState(){
//     nextButton.classList.add("hide")
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild
//         (answerButtonsElement.firstChild)
//     }
// }

// function selectAnswer(a){
    
// function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
//     function showQuestions(questions, quizContainer){

//     }
// }
// funtion ;(questions, quizContainer, resultsContainer);{

//  var question1 = "What are the main functions of the skin?"  
//     // code here 
// }

// //questions
// showQuestions(questions, quizContainer);

// //submit results
// submitButton.onclick = function(){
//     showResults(questions, quizContainer, resultsContainer);

// }

// var myQuestions = [
//     {
//       question: "What are the main function of the skin?",
//       answers:{ 
//             a: 'Sensation, Heat Regulation, Absorption, Protection, Excretion, Secretion',
//             b: 'Sensation, Temperature, Dissolve, Sedate,',
//             c: 'Vision, Hearing, Smell, Tastes, Touch'
//         }, 
//         correcctAnswer: 'a'
//      },
     
// ];

// var quizContainer = document.getElementById('#quiz');
// var resultsContainer = document.getElementById('#results');
// var submitButton = document.getElementById('#submit');

// generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton); 

// function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

// }
// function showQuestions(questions, quizContainer){

//     var output = [];
//     var answers; 

//     for(var i=0; i<questions.length; i++){

//         answers = [];

//         for(letter in questions[i].answers){

//             answers.push(
//                 '<label>'
//                   +'<input type="radio" name="question"'+i+' "value="'+letter+'">'
//                   + letter + 'a:'
//                   + questions[i].answers[a]

//                 +'</label>'
//             );
//         }
// output.push(
//     '<div class="answers">' + questions[i].question + '</div>'
//     + '<div class="answers">' + answers.join('') + '</div>'
//     );
//     }
// quizContainer,innerHTML =output.join('');
// }

// showQuestions(questions, quizContainer);

// function showResults(questions, quizContainer, resultsContainer){

//  var answerContainers = quizContainer.querySelectorAll('.answers');

//  var userAnser = '';
//  var numCorrect =  0;

//  for(var i=0; i<question.length; i++){

//     userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
//     if(userAnswer===questions[i].correctAnswer)
//     {
//         numCorrect++;

//         answerContainers[i].style.color = 'lightgreen'; 

//     }

//     else{
//         answerContainers[i].style.color = 'red'
//     }

//  }
//  resultsContainer.innerHTML = numCorrect + 'out of' + questions.length;

// }

// showQuestions(questions, quizContainer);

// submitButton.onclick = function(){
//     showResults(questions, quizContainer, resultsContainer);
// }

