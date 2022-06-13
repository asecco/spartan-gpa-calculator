import '../styles/popup.scss';
import Swal from 'sweetalert2';

const calculateBtn = document.getElementById('calculate-btn')
const inputColumn = document.querySelectorAll('input')
const gpaLabel = document.getElementById('gpa-label')
const helpBtn = document.getElementById('help-btn')
const logoBtn = document.getElementById('logo-btn')

const checkActive = () => {
  for (let i = 0; i < 6; i++) {
    if (inputColumn[i] === document.activeElement || inputColumn[i + 6] === document.activeElement) {
      inputColumn[i].style.border = '2px solid #1BFD9C'
      inputColumn[i + 6].style.border = '2px solid #1BFD9C'
    } else {
      inputColumn[i].style.border = ''
      inputColumn[i + 6].style.border = ''
    }
  }
}

setInterval(checkActive, 1);

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
                    
helpBtn.addEventListener('click', (): void => {
  Swal.fire({
    title: 'How To Use:',
    html: "• Each row corresponds to a course.<br><br>" + "• Enter the credit amount on the left and GPA grade on the right.<br><br>" +  "• Click the calculate button.",
    confirmButtonText: 'Start Calculating!',
    confirmButtonColor: '#18453B',
    width: '75%',
    customClass: 'swal',
  })
})

logoBtn.addEventListener('click', (): void => {
  Swal.fire({
    title: 'Thanks for using this extension!',
    html: "If this extension helped you, please consider giving it a <a href='https://chrome.google.com/webstore/detail/spartan-gpa-calculator/fdaobippifgiaigkefmccocjgdhhkoph' target='_blank'>rating</a>.",
    confirmButtonText: 'Done!',
    confirmButtonColor: '#18453B',
    width: '75%',
    customClass: 'swal',
  })
})