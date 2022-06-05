import '../styles/popup.scss';

const calculateBtn = document.getElementById('calculate-btn')
const inputColumn = document.querySelectorAll('input')
const gpaLabel = document.getElementById('gpa-label')

calculateBtn.addEventListener('click', (): void => {
  let totalCredits = 0
  let totalScore = 0
  for (let i = 0; i < 6; i++) {
    const inputCredits = parseInt(inputColumn[i].value)
    if (inputCredits) {
      totalCredits += inputCredits
    }
  }
  
  for (let i = 6; i < 12; i++) {
    const inputGrade = parseFloat(inputColumn[i].value)
    if (inputGrade) {
      totalScore += inputGrade * parseInt(inputColumn[i - 6].value)
    }
  }

  if (Number.isNaN(totalScore / totalCredits)) {
    gpaLabel.innerHTML = 'Invalid Input'
    gpaLabel.style.backgroundColor = ''
  } else {
    gpaLabel.innerHTML = `${(totalScore / totalCredits).toFixed(2)}`

    if (totalScore / totalCredits >= 3.25) {
      gpaLabel.style.backgroundColor = '#54B725'
    } else if (totalScore / totalCredits >= 2.0) {
      gpaLabel.style.backgroundColor = '#B7B400'
    } else {
      gpaLabel.style.backgroundColor = '#B71919'
    }
  }
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault()
    event.stopPropagation()
    calculateBtn.click()
  }
});