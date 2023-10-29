const questions = [
  {
   question: 'What is the smallest country in the world?',
   answers: [
       {text: 'San Marino', correct: false},
       {text: 'Vatican City', correct: true},
       {text: 'Bahamas', correct: false},
       {text: 'Maldives', correct: false}
   ]
  }, 
  {
   question: 'What is the name of the paradise Viking warriors go to after death?',
   answers: [
       {text: 'Heaven', correct: false},
       {text: 'Nirvana', correct: false},
       {text: 'Valhalla', correct: true},
       {text: 'Jannah', correct: false}
   ]
  }, 
  {
   question: 'What was the first feature-length movie made by Pixar?',
   answers: [
       {text: 'Toy Story', correct: true},
       {text: 'Cars', correct: false},
       {text: 'Monsters University', correct: false},
       {text: 'Finding Nemo', correct: false}
   ]
  }, 
  {
   question: 'What is the name of the coffee shop in the sitcom Friends?',
   answers: [
       {text: 'Big Apple', correct: false},
       {text: 'Central Perk', correct: true},
       {text: 'Munchattan', correct: false},
       {text: 'Liberty cafe', correct: false}
   ]
  }, 
  {
   question: 'What year was the first model of the Iphone released?',
   answers: [
       {text: '2002', correct: false},
       {text: '2005', correct: false},
       {text: '1999', correct: false},
       {text: '2007', correct: true}
   ]
  }, 
  {
   question: 'What is the capital of Texas?',
   answers: [
       {text: 'San Antonio', correct: false},
       {text: 'Austin', correct: true},
       {text: 'Houston', correct: false},
       {text: 'Dallas', correct: false}
   ]
  }, 
  {
   question: "Which famous American band was originally called 'Kara's Flowers'?",
   answers: [
       {text: 'Blink 182', correct: false},
       {text: 'Red Hot Chilli Peppers', correct: false},
       {text: 'Sum 41', correct: false},
       {text: 'Maroon 5', correct: true}
   ]
  },
  {
   question: 'What country were the French fries created in?',
   answers: [
       {text: 'Belgium', correct: true},
       {text: 'USA', correct: false},
       {text: 'France', correct: false},
       {text: 'United Kingdom', correct: false}
   ]
  },  
  {
   question: 'How many teeth does an adult have?',
   answers: [
       {text: '28', correct: false},
       {text: '34', correct: false},
       {text: '26', correct: false},
       {text: '32', correct: true}
   ]
  }, 
  {
   question: 'How many years are there in a century?',
   answers: [
       {text: '50', correct: false},
       {text: '10', correct: false},
       {text: '100', correct: true},
       {text: '1000', correct: false}
   ]
  } 
]

<<<<<<< HEAD
=======

>>>>>>> 603fb6d72366d859516f3c0aa6ca25ea12816191
const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-btn');
const startButton = document.getElementById('startButton');
const nextButton = document.getElementById('nextButton');
let currentQuestionIndex = 0;
<<<<<<< HEAD
let score = 0; // To track the score

answerButtons.forEach((button, index) => {
  button.addEventListener('click', () => handleAnswerClick(index));
});

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', goToNextQuestion);

function handleAnswerClick(selectedIndex) {
  checkAnswer(selectedIndex, questions[currentQuestionIndex]);
}

function startQuiz() {
  score = 0; // Reset the score when the quiz starts
=======

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    showResults();
  }
});

function startQuiz() {
>>>>>>> 603fb6d72366d859516f3c0aa6ca25ea12816191
  startButton.classList.add('hide');
  currentQuestionIndex = 0;
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  nextButton.classList.add('hide');
<<<<<<< HEAD
  
  answerButtons.forEach((button, index) => {
    button.innerText = question.answers[index].text;
    button.classList.remove('correct', 'wrong', 'selected');
  });

=======
  answerButtons.forEach((button, index) => {
    button.innerText = question.answers[index].text;
    button.classList.remove('correct', 'wrong', 'selected');
    button.addEventListener('click', () => checkAnswer(index, question));
  });
  // Show answer buttons
>>>>>>> 603fb6d72366d859516f3c0aa6ca25ea12816191
  answerButtons.forEach(button => {
    button.style.display = 'block';
  });
}

<<<<<<< HEAD
function checkAnswer(selectedIndex, question) {
  if (question.answers[selectedIndex].correct) {
    score++; // Increase score if selected answer is correct
  }

  answerButtons.forEach((button, index) => {
    if (question.answers[index].correct) {
=======

function checkAnswer(selectedIndex, question) {
  const currentQuestion = question;
  answerButtons.forEach((button, index) => {
    if (currentQuestion.answers[index].correct) {
>>>>>>> 603fb6d72366d859516f3c0aa6ca25ea12816191
      button.classList.add('correct');
    } else {
      button.classList.add('wrong');
    }
  });
<<<<<<< HEAD
  
=======
  // Change the correct answer to green
  answerButtons.forEach((button, index) => {
    if (currentQuestion.answers[index].correct) {
      button.classList.remove('wrong');
      button.classList.add('correct');
    }
  });
  // Mark the selected answer
>>>>>>> 603fb6d72366d859516f3c0aa6ca25ea12816191
  answerButtons[selectedIndex].classList.add('selected');
  nextButton.classList.remove('hide');
}

<<<<<<< HEAD
function goToNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    showResults();
  }
}

function showResults() {
  questionElement.innerText = `Quiz Completed! You scored ${score}/10`;
  answerButtons.forEach((button) => {
    button.classList.add('hide');
  });
  nextButton.innerText = 'Home';
  nextButton.removeEventListener('click', goToNextQuestion);
  nextButton.addEventListener('click', homePage);
}

function homePage() {
  questionElement.innerText = "General Knowledge Quiz";
  startButton.classList.remove('hide');
  nextButton.classList.add('hide');
  nextButton.innerText = 'Next Question'; // Reset the nextButton text
  nextButton.removeEventListener('click', homePage);
  nextButton.addEventListener('click', goToNextQuestion);
  score = 0; // Reset score
  currentQuestionIndex = 0; // Reset question index
}


=======

function showResults() {
  questionElement.innerText = 'Quiz Completed';
  answerButtons.forEach((button) => {
    button.classList.add('hide');
  });
  nextButton.innerText = 'Restart Quiz';
  nextButton.classList.remove('hide');
  nextButton.addEventListener('click', startQuiz);
}
>>>>>>> 603fb6d72366d859516f3c0aa6ca25ea12816191
