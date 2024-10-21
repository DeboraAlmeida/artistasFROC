// import questions from "./questions.json" assert { type: 'json '}
// const cardData = questions.cardData

const cardData = [
  {
    "id": 1,
    "information": "Contexto artista 1 pergunta 1",
    "question": "Pergunta do Artista 1",
    "answers": [
      {
        "id": 1,
        "answer": "Resposta 1",
        "value": true
      },
      {
        "id": 2,
        "answer": "Resposta 2",
        "value": false
      },
      {
        "id": 3,
        "answer": "Resposta 3",
        "value": false
      },
      {
        "id": 4,
        "answer": "Resposta 4",
        "value": false
      }
    ]
  },
  {
    "id": 2,
    "information": "Contexto artista 2 pergunta 2",
    "question": "Pergunta do Artista 2",
    "answers": [
      {
        "id": 1,
        "answer": "Resposta 1",
        "value": false
      },
      {
        "id": 2,
        "answer": "Resposta 2",
        "value": false
      },
      {
        "id": 3,
        "answer": "Resposta 3",
        "value": false
      },
      {
        "id": 4,
        "answer": "Resposta 4",
        "value": true
      }
    ]
  },
  {
    "id": 3,
    "information": "Contexto artista 3 pergunta 3",
    "question": "Pergunta do Artista 3",
    "answers": [
      {
        "id": 1,
        "answer": "Resposta 1",
        "value": false
      },
      {
        "id": 2,
        "answer": "Resposta 2",
        "value": true
      },
      {
        "id": 3,
        "answer": "Resposta 3",
        "value": false
      },
      {
        "id": 4,
        "answer": "Resposta 4",
        "value": false
      }
    ]
  },
  {
    "id": 4,
    "information": "Contexto artista 4 pergunta 4",
    "question": "Pergunta do Artista 4",
    "answers": [
      {
        "id": 1,
        "answer": "Resposta 1",
        "value": true
      },
      {
        "id": 2,
        "answer": "Resposta 2",
        "value": false
      },
      {
        "id": 3,
        "answer": "Resposta 3",
        "value": false
      },
      {
        "id": 4,
        "answer": "Resposta 4",
        "value": false
      }
    ]
  },
  {
    "id": 5,
    "information": "Contexto artista 5 pergunta 5",
    "question": "Pergunta do Artista 5",
    "answers": [
      {
        "id": 1,
        "answer": "Resposta 1",
        "value": false
      },
      {
        "id": 2,
        "answer": "Resposta 2",
        "value": true
      },
      {
        "id": 3,
        "answer": "Resposta 3",
        "value": false
      },
      {
        "id": 4,
        "answer": "Resposta 4",
        "value": false
      }
    ]
  },
  {
    "id": 6,
    "information": "Contexto artista 6 pergunta 6",
    "question": "Pergunta do Artista 6",
    "answers": [
      {
        "id": 1,
        "answer": "Resposta 1",
        "value": false
      },
      {
        "id": 2,
        "answer": "Resposta 2",
        "value": false
      },
      {
        "id": 3,
        "answer": "Resposta 3",
        "value": true
      },
      {
        "id": 4,
        "answer": "Resposta 4",
        "value": false
      }
    ]
  },
  {
    "id": 7,
    "information": "Contexto artista 7 pergunta 7",
    "question": "Pergunta do Artista 7",
    "answers": [
      {
        "id": 1,
        "answer": "Resposta 1",
        "value": false
      },
      {
        "id": 2,
        "answer": "Resposta 2",
        "value": false
      },
      {
        "id": 3,
        "answer": "Resposta 3",
        "value": false
      },
      {
        "id": 4,
        "answer": "Resposta 4",
        "value": true
      }
    ]
  }
]

let idCount = 0
let score = 0
const randomIds = []

const card = document.getElementById('quiz')
card.style.setProperty('display', 'none')

const quizBtn = document.getElementById('quiz-btn')

const createCard = () => {
  // card.innerHTML = ''
  card.style.setProperty('display', 'block')

  const questionCard = document.createElement('div')
  questionCard.setAttribute('class', 'card')

  const cardInfo = document.createElement('p')
  cardInfo.setAttribute('class', 'card__info')
  cardInfo.textContent = cardData[randomIds[idCount]].information

  const cardTitle = document.createElement('h3')
  cardTitle.setAttribute('class', 'card__title')
  cardTitle.textContent = cardData[randomIds[idCount]].question

  /* const cardAnswer1 = document.createElement('button')
  cardAnswer1.setAttribute('class', 'answer__button')
  cardAnswer1.textContent = cardData[randomIds[idCount]].answers[0]

  const cardAnswer2 = document.createElement('button')
  cardAnswer2.setAttribute('class', 'answer__button')
  cardAnswer2.textContent = cardData[randomIds[idCount]].answers[1]

  const cardAnswer3 = document.createElement('button')
  cardAnswer3.setAttribute('class', 'answer__button')
  cardAnswer3.textContent = cardData[randomIds[idCount]].answers[2]

  const cardAnswer4 = document.createElement('button')
  cardAnswer4.setAttribute('class', 'answer__button')
  cardAnswer4.textContent = cardData[randomIds[idCount]].answers[3] */

  const answersBox = document.createElement('div')
  answersBox.setAttribute('class', 'answers__box')

  /* for (let i = 0; i < cardData[randomIds[idCount]].answers.length; i++) {
    const answer = document.createElement('input')
    answer.setAttribute('class', 'answer__radio')
    answer.setAttribute('type', 'radio')
    answer.setAttribute('id', `answer__${i}`)
    answer.setAttribute('name', `answer__${i}`)
    answer.setAttribute('label', `${cardData[randomIds[idCount]].answers[i]}`)
    // answer.textContent = types[i]
    answersBox.append(answer)
  } */
  
  for (let i = 0; i < cardData[randomIds[idCount]].answers.length; i++) {
    const answer = document.createElement('button')
    answer.setAttribute('class', 'answer__btn')
    answer.setAttribute('id', `answerBtn__${i+1}`)
    answer.textContent = `${cardData[randomIds[idCount]].answers[i].answer}`
    answersBox.append(answer)
  }

  const nextCard = document.createElement('button')
  nextCard.disabled = true
  nextCard.textContent = idCount < 4 ? 'Próximo' : 'Finalizar'
  
  questionCard.append(cardInfo)
  questionCard.append(cardTitle)
  questionCard.append(answersBox)
  questionCard.append(nextCard)
  card.append(questionCard)

  const answerBtn__1 = document.getElementById('answerBtn__1')
  const answerBtn__2 = document.getElementById('answerBtn__2')
  const answerBtn__3 = document.getElementById('answerBtn__3')
  const answerBtn__4 = document.getElementById('answerBtn__4')

  answerBtn__1.addEventListener('click', function() {
    if (cardData[randomIds[idCount]].answers[0].value) {
      this.style.setProperty("color", 'green')
      score += 1
    } else {
      this.style.setProperty("color", 'red')
    }
    nextCard.removeAttribute("disabled")
    answerBtn__2.disabled = true
    answerBtn__3.disabled = true
    answerBtn__4.disabled = true
    idCount = idCount + 1
  })

  answerBtn__2.addEventListener('click', function() {
    if (cardData[randomIds[idCount]].answers[1].value) {
      this.style.setProperty("color", 'green')
      score += 1
    } else {
      this.style.setProperty("color", 'red')
    }
    nextCard.removeAttribute("disabled")
    answerBtn__1.disabled = true
    answerBtn__3.disabled = true
    answerBtn__4.disabled = true
    idCount = idCount + 1
  })

  answerBtn__3.addEventListener('click', function() {
    if (cardData[randomIds[idCount]].answers[2].value) {
      this.style.setProperty("color", 'green')
      score += 1
    } else {
      this.style.setProperty("color", 'red')
    }
    nextCard.removeAttribute("disabled")
    answerBtn__1.disabled = true
    answerBtn__2.disabled = true
    answerBtn__4.disabled = true
    idCount = idCount + 1
  })

  answerBtn__4.addEventListener('click', function() {
    if (cardData[randomIds[idCount]].answers[3].value) {
      this.style.setProperty("color", 'green')
      score += 1
    } else {
      this.style.setProperty("color", 'red')
    }
    nextCard.removeAttribute("disabled")
    answerBtn__1.disabled = true
    answerBtn__2.disabled = true
    answerBtn__3.disabled = true
    idCount = idCount + 1
  })

  nextCard.addEventListener('click', function() {
    card.innerHTML = ''
    if (idCount < 5) {
      createCard()
    } else {
      card.innerHTML = `Acabou!! Pontiação final: ${score} / 5`
      idCount = 0
    }
  })

  return questionCard
}

quizBtn.addEventListener('click', function() {
  card.innerHTML = ''
  min = Math.ceil(1);
  max = Math.floor(cardData.length);
  while (randomIds.length <= 5) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    if (!randomIds.includes(randomNumber) && cardData.filter(item => item.id === randomNumber)) {
      randomIds.push(randomNumber)
    }
  }
  createCard()
})