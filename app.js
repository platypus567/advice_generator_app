let advicePar = document.querySelector('#advicePar');
let adviceBtn = document.querySelector('#changeAdvice');
let adviceNum = document.querySelector('#adviceNumber');


adviceBtn.addEventListener('click',function(e){
    loadAdvice();
}

)

async function loadAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    console.log(data.slip.advice); 
    adviceNum.innerText = `Advice #${data.slip.id}`
    advicePar.innerText = `"${data.slip.advice}"`;
    
  }
  loadAdvice();