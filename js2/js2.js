// 'use strict'

document.querySelector('button').addEventListener('click', ()=>{
  
  const fizzNum = document.querySelector('input[name="fizzNum"]');
  const buzzNum = document.querySelector('input[name="buzzNum"]');
  
  for (let i = 1; i < 100; i++){
    if ((fizzNum.value === '') || (buzzNum.value === '') || (fizzNum.value.match(/\.d^\d/i)) || (buzzNum.value.match(/\.d^\d/i))) {
    const errorMessage = document.createElement('li');
    errorMessage.textContent='整数値を入力してください';
    document.querySelector('ul').appendChild(errorMessage);
    break;
    } else if(i % fizzNum.value ===0 && i % buzzNum.value===0) {
      const fizzBuzzList =document.createElement('li');
      fizzBuzzList.textContent='FizzBuzz ' + i;
      document.querySelector('ul').appendChild(fizzBuzzList)
    } else if (i % buzzNum.value === 0) {
      const buzzList =document.createElement('li');
      buzzList.textContent= 'Buzz ' + i;
      document.querySelector('ul').appendChild(buzzList); 
    } else if (i % fizzNum.value === 0) {
      const fizzList = document.createElement('li');
      fizzList.textContent = 'Fizz ' + i;
      document.querySelector('ul').appendChild(fizzList)
    };
  };
});
