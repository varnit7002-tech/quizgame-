function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "flex";
   loadQuestion();
}
 const quizData = [   
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    }   
]
let currentQuestion = 0;




function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];

    document.getElementById("question").textContent =
        currentQuiz.question;

    const buttons = document.querySelectorAll(".btn");

    buttons[0].textContent = currentQuiz.options[0];
    buttons[1].textContent = currentQuiz.options[1];
    buttons[2].textContent = currentQuiz.options[2];
    buttons[3].textContent = currentQuiz.options[3];

  
}

function checkAnswer(checkinganswer) {
    const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        checkAnswer(index);
    });
});


}



