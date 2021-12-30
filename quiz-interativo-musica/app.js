const form = document.querySelector('.quiz-form')
const button = document.querySelector('.btn')
const popup = document.querySelector('.pop-wrapper')
const paragraph = document.querySelector('.result')
const buttonResult = document.querySelector('.popup-button')
const answers = ['A', 'B', 'A', 'B']

const showMessage = score => {
  paragraph.textContent = `Você acertou ${score}% do quiz`
}

const compareAnswers = (arrayUserAnswers) => {
  let score = 0

  answers.forEach( ( answer, index ) => {
    if (answer === arrayUserAnswers[index]) {
      score += 25
    }
  })

  showMessage(score)
}

const answersUser = event => {
  event.preventDefault()
  form.style.visibility = 'hidden'
  
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ]

  compareAnswers(userAnswers)
}


buttonResult.addEventListener('click', () => {
  popup.style.display = 'none'
  location.reload()
})

button.addEventListener('click', () => {
  popup.style.display = 'block'
})

form.addEventListener('submit', answersUser)
