const card = document.getElementById('card');
let frontCard = document.querySelector('.flip-card-front');
let backCard = document.querySelector('.flip-card-back');
console.log(card);
console.log(frontCard);
console.log(backCard);
console.log(document.body.children);
const onClick = ()  => {
    (card.className === 'flip-card-inner' )?
        card.classList.remove('flip-card-inner') :
        card.classList.add('flip-card-inner');
};
card.classList.add('flip-card-inner');
card.addEventListener('click', onClick);
