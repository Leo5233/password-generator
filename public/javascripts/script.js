const lowerbox = document.querySelector('#lowercase')
const upperbox = document.querySelector('#uppercase')
const numberbox = document.querySelector('#number')
const symbolbox = document.querySelector('#symbol')
const form = document.querySelector('#form')
const pwdArea = document.querySelector('.final-pwd')
const lenbox = document.querySelector('.pwd-len')


form.addEventListener('submit', event => {
  if (!(lowerbox.checked || upperbox.checked || numberbox.checked || symbolbox.checked)){
    pwdArea.innerText = 'Please select at least one checkbox!'
    event.preventDefault()
    event.stopPropagation()
  }
  if (!form.checkValidity()){
    event.preventDefault()
    event.stopPropagation()
    lenbox.classList.add('validated')
  }
})
