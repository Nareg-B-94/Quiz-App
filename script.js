let questions = [
    {
        "question": "Welche Klöße schmecken Fritz am besten?",
        "option1": "Wiener Klöße",
        "option2": "Bayrische Klöße",
        "option3": "Thüringer Klöße",
        "option4": "Frankfurter Klöße",
        "rightAnswer": "3"
    },
    {
        "question": "Was ist den mit ......... los?",
        "option1": "Jürgen",
        "option2": "Thomas",
        "option3": "Helmut",
        "option4": "Karsten",
        "rightAnswer": "4"
    },
    {
        "question": "wer ist der wasch echter Isländer?",
        "option1": "Henry Henrissohn",
        "option2": "sein Bruder Jürgen Hurensohn",
        "option3": "David Gudjohnsohn",
        "option4": "Björn Bjorensohn",
        "rightAnswer": "2"
    },
    {
        "question": "wer ist von den 4 hier ! nicht ! am Samstag für die fette Party dabei?",
        "option1": "Safari",
        "option2": "Patrick",
        "option3": "UWE",
        "option4": "Gundula :D",
        "rightAnswer": "4"
    },
    {
        "question": "was hat Walter Frosch versucht Jahre lang zu machen?",
        "option1": "versucht sauber und fair zu spielen",
        "option2": "versucht die Kippe aus Mund weg zu halten",
        "option3": "in der schnelle eine durchziehen",
        "option4": "eeee keine Ahnung!",
        "rightAnswer": "1"
    },
    {
        "question": "Was sagt ein Gen, wenn es ein anderes trifft?",
        "option1": "moin na du?",
        "option2": "Halogen",
        "option3": "moinsen",
        "option4": "ciao papito",
        "rightAnswer": "2"
    },
    {
        "question": "Egal, wie gut du schläfst: Albert schläft wie...",
        "option1": "Zweistein",
        "option2": "ein Block",
        "option3": "Einstein",
        "option4": "drei Steine vielleicht?",
        "rightAnswer": "3"
    },
    {
        "question": "Was hat vier Beine und kann fliegen?",
        "option1": "Zwei Vögel",
        "option2": "einer der Red Bull rein knallt!",
        "option3": "ja du vielleicht! wenn du besoffen bist :D",
        "option4": "brudi muss los keine Ahnung",
        "rightAnswer": "1"
    },
    {
        "question": "Wie lautet der Vorname vom Reh?",
        "option1": "Reh-Reh",
        "option2": "Kartoffelpü",
        "option3": "reh-reh aber klein geschrieben",
        "option4": "....",
        "rightAnswer": "2"
    },
    {
        "question": "Welche Schuhe tragen BILD-Redakteure?",
        "option1": "Crocs",
        "option2": "Flip-Flops",
        "option3": "Yeezys",
        "option4": "Skandalen",
        "rightAnswer": "4"
    },
];

let rightAnsweredQuestions = 0;
let currentQuestion = 0;

let rightAnswerSound = new Audio('sounds/rightAnswer.mp3');
let wrongAnswerSound = new Audio('sounds/wrongAnswer.mp3');
let endingSound = new Audio('sounds/cheering.mp3');

function initialize() {
    document.getElementById('remainingQuestions').innerHTML = questions.length;
    askingTheQuestion();

}

function askingTheQuestion() {
    if (currentQuestion >= questions.length) {
        endGame();
    } else {
        normalProgress();
    }
}
function endGame() {

    document.getElementById('endGameScreen').style = '';
    document.getElementById('startGame').style = 'display: none';
    document.getElementById('allQuestions').innerHTML = questions.length;
    document.getElementById('rightAnsweredQuestions').innerHTML = rightAnsweredQuestions;
    endingSound.play();
}

function normalProgress() {
    let progressPercent = currentQuestion / questions.length;
    progressPercent = Math.round(progressPercent * 100);
    // console.log('progress', progressPercent);
    let question = questions[currentQuestion];
    document.getElementById('progressBar').innerHTML = `
        ${progressPercent}%`;
    document.getElementById('progressBar').style.width = `
        ${progressPercent}%`;
    document.getElementById('currentQuestionNumber').innerHTML = currentQuestion + 1;
    document.getElementById('theQuestion').innerHTML = `Frage : ${question['question']}`;
    document.getElementById('answer1').innerHTML = question['option1'];
    document.getElementById('answer2').innerHTML = question['option2'];
    document.getElementById('answer3').innerHTML = question['option3'];
    document.getElementById('answer4').innerHTML = question['option4'];
}

function clickingOnAnswer(answer) {
    let question = questions[currentQuestion];
    // console.log('Selected answer is', x);
    let selectedQuestionEnding = answer.slice(-1);
    // console.log('selected Question is', selectedQuestionEnding);
    // console.log('the right Answer is', question['rightAnswer']);
    let idOfRightAnswer = `answer${question['rightAnswer']}`;
    if (selectedQuestionEnding == question['rightAnswer']) {
        // console.log('Richtige Antwort!');
        document.getElementById(answer).parentNode.classList.add('bg-success');
        rightAnswerSound.play();
        rightAnsweredQuestions++;
    } else {
        // console.log('falsche Antwort!');
        document.getElementById(answer).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        wrongAnswerSound.play();
    }
    document.getElementById('nextButton').disabled = false;
}

function nextQuestion() {
    currentQuestion++; // beim klicken wird die vaiable um 1 erhöht bzw. kommt die nächste Frage
    document.getElementById('nextButton').disabled = true;
    resetAddedClasses();
    askingTheQuestion();
}

function resetAddedClasses() {
    document.getElementById('answer1').parentNode.classList.remove('bg-success');
    document.getElementById('answer1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer2').parentNode.classList.remove('bg-success');
    document.getElementById('answer2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer3').parentNode.classList.remove('bg-success');
    document.getElementById('answer3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer4').parentNode.classList.remove('bg-success');
    document.getElementById('answer4').parentNode.classList.remove('bg-danger');
}


function restart() {
    rightAnsweredQuestions = 0;
    currentQuestion = 0;
    document.getElementById('endGameScreen').style = 'display: none';
    document.getElementById('startGame').style = '';
    initialize();
}


