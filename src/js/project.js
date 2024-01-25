var questions = [
    {
        question: "Welche Branche ist das Haupttätigkeitsfeld der Atruvia AG?",
        options: ["Lebensmittel", "Technologie und Software", "Gesundheitswesen", "Bergbau und Rohstoffe"],
        correctAnswerIndex: 1
    },
    {
        question: "Wie viel Mitarbeiter hat die Atruvia?",
        options: ["2500", "4100", "5100", "6000"],
        correctAnswerIndex: 2
    },
    {
        question: "Was ist der größte Standort der Atruvia AGs",
        options: ["München", "Karlsruhe", "Münster"],
        correctAnswerIndex: 1 
    },
    {
        question: "Wie viele Azubis gibt es insgesamt an allen Standorten?",
        options: ["50", "100", "200", "300"],
        correctAnswerIndex: 2
    },
    {   
        question: "Wann war die Fusion zwischen der Fiducia & GAD?",
        options: ["2005", "2010", "2015"],
        correctAnswerIndex: 2  
    },
    {
        question: "Welche Arten von Dienstleistungen oder Produkte biete die Atruvia AG an?",
        options: ["Automobile", "Medizinische Geräte", "Softwarelösungen für Compliance und Datenschutz"],
        correctAnswerIndex: 2
    },
    {
        question: "Warum ist die Atruvia AG einer der größten Kunden der Deutschen Post?",
        options: ["Hohe Nachfrage nach Briefmarken", "Nutzung von Postdienstleistungen für den Versand von Unterlagen", "Exklusiver Vertrag für Paketlieferungen"],
        correctAnswerIndex: 1
    },
    {
        question: "Welche bekannten Kunden oder Partner hat die Atruvia AG?",
        options: ["Tesla", "Microsoft", "Volksbanken", "Alle der oben genannten"],
        correctAnswerIndex: 2 
    }
];

var questionsSecond = [ {
        question: "Verwaltet die Atruvia mehr, oder weniger als 70.000.000 Konten?",
        options: ["Mehr", "Weniger"],
        correctAnswerIndex: 0   
    },
    {
        question: "Verwaltet die Atruvia mehr, oder weniger als 70.000.000 Konten?",
        options: ["Mehr", "Weniger"],
        correctAnswerIndex: 0   
    },
    {
        question: "Verwaltet die Atruvia mehr, oder weniger als 70.000.000 Konten?",
        options: ["Mehr", "Weniger"],
        correctAnswerIndex: 0   
    },
    {
        question: "Verwaltet die Atruvia mehr, oder weniger als 70.000.000 Konten?",
        options: ["Mehr", "Weniger"],
        correctAnswerIndex: 0   
    },
    {
        question: "Verwaltet die Atruvia mehr, oder weniger als 70.000.000 Konten?",
        options: ["Mehr", "Weniger"],
        correctAnswerIndex: 0   
    },
    {
        question: "Verwaltet die Atruvia mehr, oder weniger als 70.000.000 Konten?",
        options: ["Mehr", "Weniger"],
        correctAnswerIndex: 0   
    },
    {
        question: "Verwaltet die Atruvia mehr, oder weniger als 70.000.000 Konten?",
        options: ["Mehr", "Weniger"],
        correctAnswerIndex: 0   
    },
    {
        question: "Verwaltet die Atruvia mehr, oder weniger als 70.000.000 Konten?",
        options: ["Mehr", "Weniger"],
        correctAnswerIndex: 0   
    }
];
var currentQuestionIndex = 0;
document.addEventListener('DOMContentLoaded', function () {
        // Initial setup
    updateQuestion();
});

function updateQuestion(){
    var questionContainer = document.getElementById('questionContainer');
    var currentQuestion = questions[currentQuestionIndex];
    // Clear previous Q
    questionContainer.innerHTML = '';
    var questionHeading = document.createElement('h4');
    questionHeading.className = 'buttons';
    questionHeading.textContent = currentQuestion.question;
    questionContainer.appendChild(questionHeading);
    var answerOptions = document.createElement('ul');
    answerOptions.className = "answer-options";

    currentQuestion.options.forEach(function(option, index){
        var button = document.createElement('button');
        button.className ='button-style';
        button.dataset.option = 'option' + (index + 1);
        button.textContent = option;
        button.onclick = function(){
            checkAnswer('option' + (index + 1));
        };
        var li = document.createElement('li');
        li.appendChild(button);
        answerOptions.appendChild(li);

    });
    questionContainer.appendChild(answerOptions);   
}
var correctAnswersFr = 0;

function checkAnswer(selectedOption) {
        var selectedRadioButton = document.querySelector('input[name="slide"]:checked');
    var answerButtons = selectedRadioButton.parentElement.querySelectorAll('.button-style');
    var correctAnswerButton = answerButtons[questions[currentQuestionIndex].correctAnswerIndex];
    var userAnswerButton = selectedRadioButton.parentElement.querySelector('.button-style[data-option="' + selectedOption + '"]');
    answerButtons.forEach(function (button) {
        button.disabled = true;
    });
    console.log('Selected Option:', selectedOption);
    console.log('User Answer Button:', userAnswerButton);
    console.log('Correct Answer Button:', correctAnswerButton);
    if (userAnswerButton !== correctAnswerButton) {
        console.log('Incorrect Answer!');
        userAnswerButton.style.backgroundColor = 'red';
    } else {
        console.log('Correct Answer!');
        userAnswerButton.style.backgroundColor = 'green';
        correctAnswersFr++;
    }
    correctAnswerButton.style.backgroundColor = 'green';
    console.log(correctAnswersFr)
}

function playGame() {
    if (currentQuestionIndex === questions.length - 1) {
        displayScore();
    } else {
        document.querySelector('.container').classList.add('hidden');
        setTimeout(function () {
            currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
            var answerButtons = document.querySelectorAll('.button-style');
            answerButtons.forEach(function (button) {
                button.style.backgroundColor = '';
                button.disabled = false;
            });
            if (currentQuestionIndex === 0) {
                // Display user's score
                displayScore();
            } else {
                updateQuestion();
               
                document.querySelector('.container').classList.remove('hidden');
            }
        }, 500);
    }
}

function displayScore() {
    var score = calculateScore();
    var questionContainer = document.getElementById('questionContainer');
    questionContainer.innerHTML = '';
    var scoreHeading = document.createElement('h4');
    scoreHeading.textContent = 'Your Score: ' + correctAnswersFr + ' out of ' + questions.length;
    scoreHeading.style.fontSize = '25px';

    questionContainer.appendChild(scoreHeading);
    var message = document.createElement('p');
    message.style.fontSize ='25px';
    if (score >= 6) {
        message.textContent = 'You win! 👑 Get outta here';
    } else {
        message.textContent = 'You lose! 😂';
    }
    questionContainer.appendChild(message);
    var retryButton = document.createElement('button');
    retryButton.textContent = 'Retry';
    retryButton.className = 'button-style';
    retryButton.onclick = function () {
        resetQuiz();
    };
    questionContainer.appendChild(retryButton);
}

function resetQuiz() {
    currentQuestionIndex = 0;
    correctAnswersFr = 0;
    var answerButtons = document.querySelectorAll('.button-style');
    answerButtons.forEach(function (button) {
        button.style.backgroundColor = '';
        button.disabled = false;
    });
    updateQuestion();

}

function calculateScore() {
    var correctAnswers = 0;
    questions.forEach(function (question, index) {
        var selectedOption = 'option' + (question.correctAnswerIndex + 1);
        var userAnswerButton = document.querySelector('.button-style[data-option="' + selectedOption + '"]:disabled');
        
        if (userAnswerButton) {
            if (userAnswerButton.style.backgroundColor === 'green') {
                correctAnswers++;
            }
        }
    });
    console.log('Correct Answers:', correctAnswers);
    return correctAnswers;
}