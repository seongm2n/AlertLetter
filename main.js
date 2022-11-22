const letterOut = document.querySelector('.letterOut');
const letterIn = document.querySelector('.letterIn');
const letterClose = document.querySelector('.letterClose');

letterOut.addEventListener('click', () => {
    letterIn.classList.toggle('open');
    letterOut.classList.add('close');
});

letterClose.addEventListener('click', () => {
    letterIn.classList.remove('open');
    letterOut.classList.remove('close');
})