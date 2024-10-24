const cardData = [
  {
    "id": 1,
    "information": "Dorival Caymmi influenciou muitos artistas e foi referência para diversos movimentos como a Bossa Nova, de João Gilberto, Antônio Carlos Jobim, Vinicius de Moraes, Baden Powell, entre outros, e o Tropicalismo, de Caetano Veloso, Gilberto Gil, Tom Zé e Gal Costa. Suas obras também inspiraram muitos outros grupos e bandas brasileiras, como Os Novos Baianos.",
    "question": "Das seguintes opções, qual delas contém apenas canções do compositor Dorival Caymmi?",
    "answers": [
      {
        "id": 1,
        "answer": "'O que é que a baiana tem?', 'Marina', 'Samba da Minha Terra'",
        "value": true
      },
      {
        "id": 2,
        "answer": "'Maria, Maria', 'Certas Canções', 'Ponta de Areia'",
        "value": false
      },
      {
        "id": 3,
        "answer": "'Toda Menina Baiana', 'Aqui e Agora', 'Vento'",
        "value": false
      },
      {
        "id": 4,
        "answer": "'Carnavália', 'Eu sei', 'Quanto Tempo'",
        "value": false
      }
    ]
  },
  {
    "id": 2,
    "information": "Suas canções falam do mar, dos pescadores e de ritos e entidades do candomblé, como em 'Olorum que mandou essa filha de Oxum / Tomar conta da gente e de tudo cuidar / Olorum que mandou, ê, ô, ora, iê, iê, ô / Ora, iê, iê, ô, ora, iê, iê, ô'.",
    "question": "Esse é trecho de uma música de:",
    "answers": [
      {
        "id": 1,
        "answer": "Chico Buarque de Holanda",
        "value": false
      },
      {
        "id": 2,
        "answer": "Milton Nascimento",
        "value": false
      },
      {
        "id": 3,
        "answer": "Pernambuco de Oliveira",
        "value": false
      },
      {
        "id": 4,
        "answer": "Dorival Caymmi",
        "value": true
      }
    ]
  },
  {
    "id": 3,
    "information": "Gilberto Gil, certa vez, presenteou Pepeu Gomes com o disco de um artista que muito o influenciaria ao longo de sua carreira.",
    "question": "Qual foi esse disco do artista que tanto inspirou o trabalho Pepeu Gomes?",
    "answers": [
      {
        "id": 1,
        "answer": "Diver Down de Van Halen",
        "value": false
      },
      {
        "id": 2,
        "answer": "Smash Hits de Jimi Hendrix",
        "value": true
      },
      {
        "id": 3,
        "answer": "At Folsom Prison de Johnny Cash",
        "value": false
      },
      {
        "id": 4,
        "answer": "Blizzard of Ozz de Ozzy Osbourn",
        "value": false
      }
    ]
  },
  {
    "id": 4,
    "information": "Na década de 70, Pepeu Gomes formou um grupo com Moraes Moreira, Paulinho Boca de Cantor, Luiz Galvão e Baby Consuelo, no qual tocava guitarra, cumpunha músicas e fazia arranjos.",
    "question": "Qual era o nome desse grupo?",
    "answers": [
      {
        "id": 1,
        "answer": "Novos Baianos",
        "value": true
      },
      {
        "id": 2,
        "answer": "Os Leif's",
        "value": false
      },
      {
        "id": 3,
        "answer": "Os Minos",
        "value": false
      },
      {
        "id": 4,
        "answer": "Brasileirinhos",
        "value": false
      }
    ]
  },
  {
    "id": 5,
    "information": "Ana Botafogo nasceu em 1957 no Rio de Janeiro, onde começou desde criança seus estudos de balé.",
    "question": "Onde Ana Botafogo ingressou, em 1981, como Primeira Bailarina, cargo em que permanece até os dias atuais?",
    "answers": [
      {
        "id": 1,
        "answer": "Broadway Theatre",
        "value": false
      },
      {
        "id": 2,
        "answer": "Theatro Municipal do Rio de Janeiro",
        "value": true
      },
      {
        "id": 3,
        "answer": "Palais Garnier",
        "value": false
      },
      {
        "id": 4,
        "answer": "Theatro Municipal de São Paulo",
        "value": false
      }
    ]
  },
  {
    "id": 6,
    "information": "Nos anos 1990, Robertinho Silva montou um grupo com seus filhos Ronaldo Silva, Pablo Silva, Tiago Silva e Vanderlei Silva. O grupo se apresentou em shows solo e também integrou a banda de Milton Nascimento.",
    "question": "Qual era o nome do grupo de Robertinho Silva e seus filhos?",
    "answers": [
      {
        "id": 1,
        "answer": "Pai e Filhos",
        "value": false
      },
      {
        "id": 2,
        "answer": "Família Percussão",
        "value": false
      },
      {
        "id": 3,
        "answer": "Família Silva",
        "value": true
      },
      {
        "id": 4,
        "answer": "Os Silvas",
        "value": false
      }
    ]
  },
  {
    "id": 7,
    "information": "Em 1977, para o Jornal Última Hora, foi dito: 'O cenógrafo tem a responsabilidade de vestir o espaço. Amparar os atores e o diretor com um trabalho que é individual, mas que diz respeito a todo um grupo. Um cenário destrói ou valoriza uma peça e para isso é preciso distinguir o cenário bonito do cenário correto. Ele até pode ser muito bonito e não atingir o dramático do texto, a proposta do diretor.'",
    "question": "Essa citação representa a visão de qual nome do teatro brasilerio?",
    "answers": [
      {
        "id": 1,
        "answer": "Dulcina de Morais",
        "value": false
      },
      {
        "id": 2,
        "answer": "Nelson Rodrigues",
        "value": false
      },
      {
        "id": 3,
        "answer": "Plínio Marcos",
        "value": false
      },
      {
        "id": 4,
        "answer": "Pernambuco de Oliveira",
        "value": true
      }
    ]
  }
]

let idCount = 0
let score = 0
const randomIds = []

const header = document.querySelector('header')

const card = document.getElementById('quiz')
card.style.setProperty('display', 'none')

const scoreBox = document.getElementById('banner__headline')

const bannerInfo = document.getElementById('banner__info')

const info = document.getElementById('info')
info.style.setProperty('display', 'none')

const quizBtn = document.getElementById('quiz-btn')

const infoBtn = document.getElementById('info-btn')

const createCard = () => {
  card.style.setProperty('display', 'flex')

  const questionCard = document.createElement('div')
  questionCard.setAttribute('class', 'card')

  const cardInfo = document.createElement('p')
  cardInfo.setAttribute('class', 'card__info')
  cardInfo.textContent = cardData[randomIds[idCount]].information

  const cardTitle = document.createElement('h3')
  cardTitle.setAttribute('class', 'card__title')
  cardTitle.textContent = cardData[randomIds[idCount]].question

  const answersBox = document.createElement('div')
  answersBox.setAttribute('class', 'answers__box')
  
  for (let i = 0; i < cardData[randomIds[idCount]].answers.length; i++) {
    const answer = document.createElement('button')
    answer.setAttribute('class', 'answer__btn')
    answer.setAttribute('id', `answerBtn__${i+1}`)
    answer.textContent = `${cardData[randomIds[idCount]].answers[i].answer}`
    answersBox.append(answer)
  }

  const nextCard = document.createElement('button')
  nextCard.setAttribute('class', 'next__btn')
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
      card.innerHTML = ''
      scoreBox.textContent = `Acabou!! Pontuação final: ${score} / 5`
      bannerInfo.style.setProperty('display', 'none')
      quizBtn.textContent ='Jogar Novamente'
      header.style.setProperty('display', 'flex')
      idCount = 0
    }
  })

  return questionCard
}

quizBtn.addEventListener('click', function() {
  header.style.setProperty('display', 'none')
  info.style.setProperty('display', 'none')
  card.innerHTML = ''
  min = Math.ceil(0); // vou pegar no cardData por posição no array, não por id
  max = Math.floor(cardData.length - 1); // logo tem q ser da posição 0 até a última (length -1)
  while (randomIds.length < 5) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    if (!randomIds.includes(randomNumber) && cardData.filter(item => item.id === randomNumber)) {
      randomIds.push(randomNumber)
    }
  }
  createCard()
})

infoBtn.addEventListener('click', function() {
  info.style.setProperty('display', 'flex')
})