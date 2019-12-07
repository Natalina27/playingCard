const card = document.getElementById('card');
const onClick = ()  => {
    (card.className === 'flip-card-inner' )?
        card.classList.remove('flip-card-inner') :
        card.classList.add('flip-card-inner');
};
card.addEventListener('click', onClick);
