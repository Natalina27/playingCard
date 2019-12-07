const card = document.getElementById('card');
const onClick = ()  => {
    (card.className === 'flip-card' )?
        card.classList.remove('flip-card') :
        card.classList.add('flip-card');
};
card.addEventListener('click', onClick);