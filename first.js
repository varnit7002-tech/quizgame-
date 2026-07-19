function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "flex";

    loadQuestion();

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            checkAnswer(index);
        });
    });
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
        question: "which is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    },
    {    
        question: "which country flag is this 🇧🇷 ?",
        options: ["india","portugal","peru","brazil"],
        answer: 3
    },
    {
        question: "formula of formic acid ",
        options: ["CH₂O₂","H₂C₂O₄","C₂H₄O₂(HCOOH)","H₂O"],
        answer: 0
        
    },

    {
        question: "what is 40% of 400",
        options: ["200","160","140","120"],
        answer: 1
    },
    {
        question: "what is full form of ISRO",
        option: ["international space research organization","Indian Scientific Research Office","Indian Space Research Organisation","International Scientific Rocket Organization"],
        answer: 2
    },
    {
        question: "who is current president of india",
        option: ["dropati murmur","narendra modi","dhruv rathee","THE CREATOR"],
        answer: 1
        
    },
    {
        question: "calculate 15*15",
        option: ["25","625","125","120"],
        answer: 1
    }
];

var currentQuestion = 0;

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

function toggleMenu() {
    const menu = document.getElementById("menu-content");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

function checkAnswer(checkinganswer) {
    

    const currentQuiz = quizData[currentQuestion];

    if (checkinganswer === currentQuiz.answer) {
        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuestion();
        }
    }

    else {
        document.getElementById("menu-content").style.display = "flex";
        document.getElementById("restart-button").style.display = "block";
        document.getElementById("exit-button").style.display = "block";
        document.getElementById("game-screen").classList.add("blur");
        document.getElementById("lifelines").classList.add("blur");
    }
}

function restartQuiz() {
    currentQuestion = 0;
    loadQuestion();

    document.getElementById("menu-content").style.display = "none";

    document.getElementById("game-screen").classList.remove("blur");
    document.getElementById("lifelines").classList.remove("blur");
}

function exitQuiz() {
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("start-screen").style.display = "flex";

    document.getElementById("menu-content").style.display = "none";

    currentQuestion = 0;

    document.getElementById("game-screen").classList.remove("blur");
    document.getElementById("lifelines").classList.remove("blur");
}


