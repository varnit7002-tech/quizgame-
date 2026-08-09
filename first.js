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
        question: "calculate 15*15",
        options: ["25","625","125","120"],
        answer: 1
    },
    {
        question: "who is current president of india",
        options: ["Pranab Mukherjee","Droupadi Murmu","Ram Nath Kovind","devloper"],
        answer: 1
    },
    {
    question: "Which number is called Ramanujan's number?",
    options: ["108", "1729", "786", "2048"],
    answer: 1
    },
    {
        question: "What is the capital of Meghalaya?",
        options: ["Shillong", "Guwahati", "Agartala", "Aizawl"],
        answer: 0
    },
    {
        question: "Who was the first Indian to join the Indian Civil Service (ICS), the predecessor of the IAS?",
        options: ["Satyendranath Tagore", "Subhas Chandra Bose", "C. Rajagopalachari", "Jawaharlal Nehru"],
        answer: 0
    },
    {
    question: "Who was the first Governor-General of independent India?",
    options: ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Rajendra Prasad"],
    answer: 1
},
{
    question: "Which vitamin is produced by sunlight?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    answer: 3
},
{
    question: "Which is the hardest natural substance?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    answer: 2
},
{
    question: "What is the capital of Kazakhstan?",
    options: ["Tashkent", "Astana", "Baku", "Almaty"],
    answer: 1
},
{
    question: "Who discovered penicillin?",
    options: ["Louis Pasteur", "Alexander Fleming", "Robert Koch", "Edward Jenner"],
    answer: 1
},
{
    question: "Which planet rotates on its side?",
    options: ["Neptune", "Saturn", "Uranus", "Mercury"],
    answer: 2
},
{
    question: "What is the SI unit of force?",
    options: ["Joule", "Watt", "Newton", "Pascal"],
    answer: 2
},
{
    question: "Which Indian state has the longest coastline?",
    options: ["Tamil Nadu", "Andhra Pradesh", "Maharashtra", "Gujarat"],
    answer: 3
},
{
    question: "Who wrote the Arthashastra?",
    options: ["Kalidasa", "Chanakya", "Valmiki", "Panini"],
    answer: 1
},
{
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: 2
},
{
    question: "Which country has the most time zones?",
    options: ["Russia", "USA", "France", "China"],
    answer: 2
},
{
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: 2
},
{
    question: "Which Mughal built the Red Fort?",
    options: ["Akbar", "Babur", "Shah Jahan", "Aurangzeb"],
    answer: 2
},
{
    question: "Which metal is liquid at room temperature?",
    options: ["Mercury", "Gallium", "Sodium", "Lead"],
    answer: 0
},
{
    question: "Which is the largest organ in the human body?",
    options: ["Liver", "Brain", "Skin", "Lungs"],
    answer: 2
},
{
    question: "Which country has no capital city?",
    options: ["Nauru", "Monaco", "Vatican City", "Liechtenstein"],
    answer: 0
},
{
    question: "How many sides does a dodecagon have?",
    options: ["10", "11", "12", "13"],
    answer: 2
},
{
    question: "What is the only even prime number?",
    options: ["1", "2", "4", "6"],
    answer: 1
},
{
    question: "Which element has atomic number 1?",
    options: ["Helium", "Hydrogen", "Lithium", "Oxygen"],
    answer: 1
},
{
    question: "Who was India's first Chief Election Commissioner?",
    options: ["Sukumar Sen", "T. N. Seshan", "Rajendra Prasad", "B. N. Rau"],
    answer: 0
},
{
    question: "Which element has the highest melting point?",
    options: ["Tungsten", "Osmium", "Carbon", "Rhenium"],
    answer: 0
},
{
    question: "Who proved Fermat's Last Theorem?",
    options: ["Andrew Wiles", "Terence Tao", "John Nash", "Paul Erdős"],
    answer: 0
},
{
    question: "What is the capital of Bhutan?",
    options: ["Paro", "Thimphu", "Punakha", "Trongsa"],
    answer: 1
},
{
    question: "Which planet has the shortest day?",
    options: ["Earth", "Saturn", "Jupiter", "Neptune"],
    answer: 2
},
{
    question: "Who wrote 'Principia Mathematica'?",
    options: ["Isaac Newton", "Galileo", "Kepler", "Descartes"],
    answer: 0
},
{
    question: "Which country first adopted paper currency?",
    options: ["India", "China", "Persia", "Egypt"],
    answer: 1
},
{
    question: "What is the rarest blood type?",
    options: ["AB-", "O-", "B-", "A-"],
    answer: 0
},
{
    question: "Which scientist discovered the neutron?",
    options: ["Rutherford", "Bohr", "James Chadwick", "Faraday"],
    answer: 2
},
{
    question: "Which Indian won the first Nobel Prize?",
    options: ["C. V. Raman", "Rabindranath Tagore", "Amartya Sen", "Hargobind Khorana"],
    answer: 1
},
{
    question: "Which number is called Ramanujan's number?",
    options: ["108", "1729", "786", "2048"],
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


