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

  if (Number.isNaN(totalScore/totalCredits)) {
    gpaLabel.innerHTML = 'Invalid Input'
  } else {
    gpaLabel.innerHTML = `${(totalScore / totalCredits).toFixed(2)}`
  }
})