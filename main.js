console.log('Wtaj w digitalowym Świecie');
console.log(`Remember: Every Journey starts with a single line of code`);

const para = document.querySelector('.paragraph--js');
console.log(para.innerHTML);
para.innerHTML = 'Witaj Piotr';
console.log(para.innerHTML);

function witaj(imie, wiek) {
    console.log(`Twoje imie to ${imie} i masz ${wiek} lat.`);
}
witaj('Bonifacy', '15');
