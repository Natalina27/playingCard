const card = document.getElementById('card');
console.log(card);
card.addEventListener('click', event => event.target.classList.add('.flip-card-inner'));

