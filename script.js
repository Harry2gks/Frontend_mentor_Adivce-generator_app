const loadAdvice = async () => {
    let res = await fetch("https://api.adviceslip.com/advice");
    let data = await res.json();
    let id = document.querySelector('#id');
    let quote = document.querySelector('#quote');
    id.innerHTML = `ADVICE #${data.slip.id}`;
    quote.innerHTML = data.slip.advice;
}
loadAdvice();
let dice = document.querySelector('.dice');
dice.addEventListener('click', () => {
    loadAdvice();
})