let gameQuestions = [];
let currentQuestion = 0;
let timerInterval;
let timeLeft = 60;
let lifeline7525Used = false;
let hintUsed = false;
let memoryChallengeUsed = false;
let glitchUsed = false;
let gamePaused = false;
let glitchMode = false;
let selecting7525 = false;

function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("ultimate-intro").style.display = "flex";
}

function beginUltimate40() {
    document.getElementById("ultimate-intro").style.display = "none";
    document.getElementById("game-screen").style.display = "flex";
    document.getElementById("menu-bar").style.display = "flex";
    document.getElementById("lifelines").style.display = "flex";
    currentQuestion = 0;
    timeLeft = 60;
    resetLifelines();
    selectRandomQuestions();
    loadQuestion();
    startTimer();
}

function selectRandomQuestions() {
    gameQuestions = [...quizData]
        .sort(() => Math.random() - 0.5)
        .slice(0, 40);
}

function loadQuestion() {
    gamePaused = false;
    glitchMode = false;
    selecting7525 = false;

    const currentQuiz = gameQuestions[currentQuestion];

    document.getElementById("question-number").textContent =
        `Question ${currentQuestion + 1} / 40`;

    document.getElementById("question").textContent =
        currentQuiz.question;

    document.getElementById("hint-text").style.display = "none";
    document.getElementById("glitch-message").style.display = "none";
    document.getElementById("memory-message").style.display = "none";
    document.getElementById("explanation").style.display = "none";

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function(button, index) {
        button.textContent = currentQuiz.options[index];
        button.style.display = "block";
        button.style.visibility = "visible";
        button.disabled = false;
        button.classList.remove("correct");
        button.classList.remove("wrong");
    });

    document.getElementById("lifeline-75-25").disabled =
        lifeline7525Used;

    document.getElementById("hint").disabled =
        hintUsed;

    document.getElementById("memory-challenge").disabled =
        memoryChallengeUsed;

    document.getElementById("glitch").disabled =
        glitchUsed;
}

function startTimer() {
    clearInterval(timerInterval);

    document.getElementById("timer").textContent =
        `Time: ${timeLeft}s`;

    timerInterval = setInterval(function() {
        if (gamePaused) {
            return;
        }

        timeLeft--;

        document.getElementById("timer").textContent =
            `Time: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeUp();
        }
    }, 1000);
}

function timeUp() {
    gamePaused = true;
    disableAnswers();

    document.getElementById("menu-content").style.display = "flex";
    document.getElementById("restart-button").style.display = "block";
    document.getElementById("exit-button").style.display = "block";
    document.getElementById("game-screen").classList.add("blur");
    document.getElementById("lifelines").classList.add("blur");
}

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        if (selecting7525) {
            select7525Option(index);
            return;
        }

        if (glitchMode) {
            checkGlitch(index);
        } else {
            checkAnswer(index);
        }
    });
});

function checkAnswer(index) {
    if (gamePaused || timeLeft <= 0) {
        return;
    }

    const currentQuiz = gameQuestions[currentQuestion];

    gamePaused = true;
    clearInterval(timerInterval);
    disableAnswers();

    const buttons = document.querySelectorAll(".btn");

    if (index === currentQuiz.answer) {
        timeLeft += 10;
        buttons[index].classList.add("correct");
        showExplanation(true);
    } else {
        buttons[index].classList.add("wrong");
        buttons[currentQuiz.answer].classList.add("correct");
        showExplanation(false);
    }
}

function showExplanation(correct) {
    const currentQuiz = gameQuestions[currentQuestion];

    const result = document.getElementById("answer-result");
    const correctAnswer = document.getElementById("correct-answer");
    const explanation = document.getElementById("explanation");
    const explanationText = document.getElementById("explanation-text");

    if (correct) {
        result.textContent = "✓ Correct!";
        result.className = "answer-correct";
    } else {
        result.textContent = "✗ Incorrect!";
        result.className = "answer-wrong";
    }

    correctAnswer.textContent =
        `Correct answer: ${currentQuiz.options[currentQuiz.answer]}`;

    explanationText.textContent =
        currentQuiz.fact || currentQuiz.explanation || "No explanation available.";

    explanation.style.display = "block";

    setTimeout(function() {
        explanation.style.display = "none";

        if (correct) {
            currentQuestion++;

            if (currentQuestion < gameQuestions.length) {
                loadQuestion();
                gamePaused = false;
                startTimer();
            } else {
                finishQuiz();
            }
        } else {
            document.getElementById("menu-content").style.display = "flex";
            document.getElementById("restart-button").style.display = "block";
            document.getElementById("exit-button").style.display = "block";
            document.getElementById("game-screen").classList.add("blur");
            document.getElementById("lifelines").classList.add("blur");
        }
    }, 2000);
}

function useLifeline7525() {
    if (lifeline7525Used || gamePaused) {
        return;
    }

    selecting7525 = true;

    document.getElementById("lifeline-75-25").disabled = true;

    document.getElementById("glitch-message").textContent =
        "75-25 activated One wrong option will be removed.";

    document.getElementById("glitch-message").style.display =
        "block";
}

function select7525Option(index) {
    const currentQuiz = gameQuestions[currentQuestion];

    if (index === currentQuiz.answer) {
        document.getElementById("glitch-message").textContent =
            "❌ You cannot remove the correct answer. Choose a wrong option.";
        return;
    }

    const buttons = document.querySelectorAll(".btn");

    buttons[index].style.display = "none";
    buttons[index].disabled = true;

    selecting7525 = false;
    lifeline7525Used = true;

    document.getElementById("glitch-message").style.display =
        "none";
}

function useHint() {
    if (hintUsed || gamePaused) {
        return;
    }

    hintUsed = true;

    const currentQuiz = gameQuestions[currentQuestion];

    document.getElementById("hint-text").textContent =
        `💡 Hint: ${currentQuiz.fact || currentQuiz.explanation || "No hint available."}`;

    document.getElementById("hint-text").style.display =
        "block";

    document.getElementById("hint").disabled =
        true;
}

function useMemoryChallenge() {
    if (memoryChallengeUsed || gamePaused) {
        return;
    }

    if (currentQuestion < 15) {
        document.getElementById("memory-message").textContent =
            "🔒 Memory Challenge unlocks after Question 15.";

        document.getElementById("memory-message").style.display =
            "block";

        setTimeout(function() {
            document.getElementById("memory-message").style.display =
                "none";
        }, 2500);

        return;
    }

    memoryChallengeUsed = true;
    startMemoryChallenge();
}

function startMemoryChallenge() {
    gamePaused = true;
    clearInterval(timerInterval);

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function(button) {
        button.disabled = true;
        button.style.display = "none";
    });

    const memoryQuestion =
        Math.floor(Math.random() * currentQuestion);

    const selectedQuestion =
        gameQuestions[memoryQuestion];

    document.getElementById("question").textContent =
        selectedQuestion.question;

    document.getElementById("memory-message").textContent =
        "🧠 What was the question number of this question?";

    document.getElementById("memory-message").style.display =
        "block";

    document.getElementById("hint-text").style.display =
        "none";

    document.getElementById("glitch-message").style.display =
        "none";

    showMemoryInput(memoryQuestion + 1);
}

function showMemoryInput(correctNumber) {
    let input = document.getElementById("memory-input");
    let submit = document.getElementById("memory-submit");

    if (!input) {
        input = document.createElement("input");
        input.id = "memory-input";
        input.type = "number";
        input.min = "1";
        input.max = currentQuestion;
        input.placeholder = "Question number";
        input.style.width = "220px";
        input.style.height = "50px";
        input.style.fontSize = "20px";
        input.style.textAlign = "center";
        input.style.borderRadius = "15px";
        input.style.border = "none";
        input.style.marginTop = "20px";

        document.getElementById("game-screen").appendChild(input);
    }

    if (!submit) {
        submit = document.createElement("button");
        submit.id = "memory-submit";
        submit.textContent = "CHECK";
        submit.style.width = "150px";
        submit.style.height = "50px";
        submit.style.marginTop = "15px";
        submit.style.borderRadius = "20px";
        submit.style.border = "none";
        submit.style.cursor = "pointer";
        submit.style.fontWeight = "bold";

        document.getElementById("game-screen").appendChild(submit);
    }

    submit.onclick = function() {
        const userAnswer = Number(input.value);

        if (userAnswer === correctNumber) {
            document.getElementById("memory-message").textContent =
                "✓ Correct! Great memory.";
        } else {
            document.getElementById("memory-message").textContent =
                `✗ Incorrect. It was Question ${correctNumber}.`;
        }

        setTimeout(function() {
            input.remove();
            submit.remove();
            buttonsBackAfterMemory();
        }, 3000);
    };
}

function buttonsBackAfterMemory() {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function(button) {
        button.style.display = "block";
        button.disabled = false;
    });

    document.getElementById("memory-message").style.display =
        "none";

    loadQuestion();
    gamePaused = false;
    startTimer();
}

function useGlitch() {
    if (glitchUsed || gamePaused) {
        return;
    }

    glitchUsed = true;
    glitchMode = true;

    document.getElementById("glitch-message").textContent =
        "⚡ Glitch activated — choose one answer to check it.";

    document.getElementById("glitch-message").style.display =
        "block";

    document.getElementById("glitch").disabled =
        true;
}

function checkGlitch(index) {
    if (!glitchMode || gamePaused) {
        return;
    }

    const currentQuiz =
        gameQuestions[currentQuestion];

    const message =
        document.getElementById("glitch-message");

    if (index === currentQuiz.answer) {
        message.textContent =
            "✓ This answer is correct!";
    } else {
        message.textContent =
            "✗ This answer is incorrect.";
    }

    setTimeout(function() {
        message.style.display = "none";
        glitchMode = false;
    }, 2500);
}

function disableAnswers() {
    const buttons =
        document.querySelectorAll(".btn");

    buttons.forEach(function(button) {
        button.disabled = true;
    });
}

function toggleMenu() {
    const menu =
        document.getElementById("menu-content");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        document.getElementById("restart-button").style.display = "block";
        document.getElementById("exit-button").style.display = "block";
    }
}

function restartQuiz() {
    clearInterval(timerInterval);

    currentQuestion = 0;
    timeLeft = 60;

    resetLifelines();
    selectRandomQuestions();

    document.getElementById("menu-content").style.display =
        "none";

    document.getElementById("game-screen").classList.remove("blur");
    document.getElementById("lifelines").classList.remove("blur");

    loadQuestion();
    startTimer();
}

function resetLifelines() {
    lifeline7525Used = false;
    hintUsed = false;
    memoryChallengeUsed = false;
    glitchUsed = false;
    glitchMode = false;
    selecting7525 = false;

    document.getElementById("lifeline-75-25").disabled = false;
    document.getElementById("hint").disabled = false;
    document.getElementById("memory-challenge").disabled = false;
    document.getElementById("glitch").disabled = false;
}

function exitQuiz() {
    clearInterval(timerInterval);

    document.getElementById("game-screen").style.display = "none";
    document.getElementById("ultimate-intro").style.display = "none";
    document.getElementById("start-screen").style.display = "flex";
    document.getElementById("menu-bar").style.display = "none";
    document.getElementById("lifelines").style.display = "none";
    document.getElementById("menu-content").style.display = "none";

    currentQuestion = 0;
    timeLeft = 60;
    gamePaused = false;
    selecting7525 = false;

    document.getElementById("game-screen").classList.remove("blur");
    document.getElementById("lifelines").classList.remove("blur");
}

function finishQuiz() {
    clearInterval(timerInterval);

    alert("🏆 ULTIMATE 40 ACHIEVED!");

    currentQuestion = 0;
    timeLeft = 60;

    document.getElementById("game-screen").style.display = "none";
    document.getElementById("menu-bar").style.display = "none";
    document.getElementById("lifelines").style.display = "none";
    document.getElementById("ultimate-intro").style.display = "none";
    document.getElementById("start-screen").style.display = "flex";

    resetLifelines();
}