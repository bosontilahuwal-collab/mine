/* =========================================
   💗 BOYFRIEND'S DAY WEBSITE
   script.js
========================================= */


/* =========================================
   🌷 OPENING → LOADING → MENU
========================================= */

function startWebsite() {

    const opening =
        document.getElementById("opening");

    const loading =
        document.getElementById("loading");

    opening.classList.add("hidden");

    loading.classList.remove("hidden");


    setTimeout(function () {

        loading.classList.add("hidden");

        document
            .getElementById("menu")
            .classList.remove("hidden");

    }, 1800);
}



/* =========================================
   🔓 UNLOCK STAGES
========================================= */

function unlock(id) {

    const stage =
        document.getElementById(id);

    if (!stage) return;

    stage.classList.remove("locked");
}



/* =========================================
   🎀 STAGE 1 — QUESTIONS
========================================= */

let currentQuestion = 0;


const questions = [

    {
        question:
            "kune besii kagiyaa koree kow? 😌",

        answers: [
            "moi 😌",
            "toi obviously 💅🏻"
        ],

        correct: 1
    },


    {
        question:
            "moi tuk bhl paoo nee? 😭",

        answers: [
            "no",
            "yesss💗"
        ],

        correct: 1
    },


    {
        question:
            "kow ami ketiya ahisilu? 👀❤️",

        answers: [
            "may",
            "march"
        ],

        correct: 0
    },


    {
        question:
            "moi khong uthile muk ki kri dibo lge kow? 👀",

        answers: [
            "ahi morom kri diya ",
            "okole eri diya"
        ],

        correct: 0
    }

];



function openGame() {

    hideAll();

    document
        .getElementById("game")
        .classList.remove("hidden");

    currentQuestion = 0;

    showQuestion();
}



function showQuestion() {

    const questionElement =
        document.getElementById("question");

    const answersElement =
        document.getElementById("answers");

    const resultElement =
        document.getElementById("gameResult");

    const cat =
        document.getElementById("gameCat");

    const next =
        document.getElementById("gameNext");


    questionElement.innerText =
        questions[currentQuestion].question;


    answersElement.innerHTML = "";


    resultElement.innerText = "";


    cat.classList.add("hidden");


    next.classList.add("hidden");


    questions[currentQuestion].answers.forEach(
        function(answer, index) {

            const button =
                document.createElement("button");


            button.innerText =
                answer;


            button.className =
                "answer-button";


            button.onclick =
                function() {

                    answerQuestion(index);

                };


            answersElement.appendChild(button);

        }
    );
}



function answerQuestion(selectedAnswer) {

    const current =
        questions[currentQuestion];

    const result =
        document.getElementById("gameResult");


    if (selectedAnswer === current.correct) {

        result.innerText =
            "Heheee correcttt 😌💗";


        currentQuestion++;


        setTimeout(function() {

            if (
                currentQuestion <
                questions.length
            ) {

                showQuestion();

            } else {

                finishQuestions();

            }

        }, 800);


    } else {

        result.innerText =
            "WRONGGG 😭 try again babyyy 💀💗";

    }

}



function finishQuestions() {

    document
        .getElementById("question")
        .innerText =
        "You passed all 4 questions! 🥹💗";


    document
        .getElementById("answers")
        .innerHTML = "";


    document
        .getElementById("gameResult")
        .innerText =
        "Okayyy you actually know me 😭❤️";


    document
        .getElementById("gameCat")
        .classList.remove("hidden");


    document
        .getElementById("gameNext")
        .classList.remove("hidden");

}



function finishGame() {

    unlock("stagePhotos");

    hideAll();

    document
        .getElementById("photos")
        .classList.remove("hidden");

}



/* =========================================
   📸 STAGE 2 — PHOTOS
========================================= */

function openPhotos() {

    const stage =
        document.getElementById("stagePhotos");


    if (
        stage &&
        stage.classList.contains("locked")
    ) {

        return;

    }


    hideAll();


    document
        .getElementById("photos")
        .classList.remove("hidden");

}



function finishPhotos() {

    unlock("stageLove");

    hideAll();

    document
        .getElementById("menu")
        .classList.remove("hidden");

}



/* =========================================================
   🎁 STAGE 3 — GIFT BOX + REALISTIC BOUQUET
========================================================= */

let loveStep = 0;



/* =========================================
   OPEN STAGE 3
========================================= */

function openLove() {

    const stage =
        document.getElementById("stageLove");


    if (
        stage &&
        stage.classList.contains("locked")
    ) {

        return;

    }


    hideAll();


    document
        .getElementById("love")
        .classList.remove("hidden");


    loveStep = 0;


    const scene =
        document.getElementById("giftScene");

    const message =
        document.getElementById("loveMessage");

    const button =
        document.getElementById("loveNext");


    scene.classList.remove("opened");


    message.classList.remove("love-message-pop");


    message.innerText =
        "Click the gift... 🎁💗";


    button.innerText =
        "OPEN THE GIFT 🎁";

}



/* =========================================
   NEXT GIFT ANIMATION
========================================= */

function nextLoveAnimation() {

    loveStep++;


    const scene =
        document.getElementById("giftScene");

    const message =
        document.getElementById("loveMessage");

    const button =
        document.getElementById("loveNext");


    /* =====================================
       STEP 1 — OPEN GIFT
    ===================================== */

    if (loveStep === 1) {

        scene.classList.add("opened");


        message.classList.remove(
            "love-message-pop"
        );


        void message.offsetWidth;


        message.innerText =
            "loo bouquettt 🥹💗";


        message.classList.add(
            "love-message-pop"
        );


        button.innerText =
            "LOOK AT YOUR BOUQUET... 🌷";

    }


    /* =====================================
       STEP 2 — LOVE MESSAGE
    ===================================== */

    else if (loveStep === 2) {

        message.classList.remove(
            "love-message-pop"
        );


        void message.offsetWidth;


        message.innerText =
            "I LOVE YOUUU THEE MOSTTT 💗🌷🥹";


        message.classList.add(
            "love-message-pop"
        );


        button.innerText =
            "ONE LAST THING... 💌";

    }


    /* =====================================
       STEP 3 — LETTERS
    ===================================== */

    else if (loveStep === 3) {

        hideAll();


        document
            .getElementById("lettersMenu")
            .classList.remove("hidden");

    }

}



/* =========================================
   💌 LETTERS
========================================= */

function openLetter1() {

    hideAll();

    document
        .getElementById("letter1")
        .classList.remove("hidden");

}



function openLetter2() {

    hideAll();

    document
        .getElementById("letter2")
        .classList.remove("hidden");

}



function openLetter3() {

    hideAll();

    document
        .getElementById("letter3")
        .classList.remove("hidden");

}



/* =========================================
   💋 FINAL CELEBRATION
========================================= */

function startCelebration() {

    hideAll();

    document
        .getElementById("celebration")
        .classList.remove("hidden");


    createCelebrationStars();

}



function createCelebrationStars() {

    const container =
        document.getElementById(
            "celebrationStars"
        );


    container.innerHTML = "";


    const stars = [

        "⭐",
        "✨",
        "⭐",
        "✦",
        "✨",
        "⭐",
        "✧",
        "✨",
        "⭐",
        "✦",
        "✨",
        "⭐"

    ];


    stars.forEach(
        function(star, index) {

            setTimeout(
                function() {

                    const element =
                        document.createElement("div");


                    element.className =
                        "celebration-star";


                    element.innerText =
                        star;


                    element.style.left =
                        Math.random() * 95 + "%";


                    element.style.top =
                        Math.random() * 90 + "%";


                    container.appendChild(element);

                },
                index * 250
            );

        }
    );

}



/* =========================================
   🌷 HIDE ALL SCREENS
========================================= */

function hideAll() {

    const screens =
        document.querySelectorAll(
            ".screen, .letter-screen"
        );


    screens.forEach(
        function(screen) {

            screen.classList.add("hidden");

        }
    );

}