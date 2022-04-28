function plusClick(){
  number.textContent ++ 
}

function minusClick(){
  number.textContent -= 1
}

plusElem = document.querySelector('#plusBtn')
minusElem = document.querySelector('#minusBtn')
number = document.querySelector('#number')
plusElem.addEventListener('click', plusClick)
minusElem.addEventListener('click', minusClick)