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


const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-btn');
const startButton = document.getElementById('startButton');
const nextButton = document.getElementById('nextButton');
let currentQuestionIndex = 0;

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
  startButton.classList.add('hide');
  currentQuestionIndex = 0;
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  nextButton.classList.add('hide');
  answerButtons.forEach((button, index) => {
    button.innerText = question.answers[index].text;
    button.classList.remove('correct', 'wrong', 'selected');
    button.addEventListener('click', () => checkAnswer(index, question));
  });
  // Show answer buttons
  answerButtons.forEach(button => {
    button.style.display = 'block';
  });
}


function checkAnswer(selectedIndex, question) {
  const currentQuestion = question;
  answerButtons.forEach((button, index) => {
    if (currentQuestion.answers[index].correct) {
      button.classList.add('correct');
    } else {
      button.classList.add('wrong');
    }
  });
  // Change the correct answer to green
  answerButtons.forEach((button, index) => {
    if (currentQuestion.answers[index].correct) {
      button.classList.remove('wrong');
      button.classList.add('correct');
    }
  });
  // Mark the selected answer
  answerButtons[selectedIndex].classList.add('selected');
  nextButton.classList.remove('hide');
}


function showResults() {
  questionElement.innerText = 'Quiz Completed';
  answerButtons.forEach((button) => {
    button.classList.add('hide');
  });
  nextButton.innerText = 'Restart Quiz';
  nextButton.classList.remove('hide');
  nextButton.addEventListener('click', startQuiz);
}