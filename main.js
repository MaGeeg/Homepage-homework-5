console.log('Wtaj w digitalowym Świecie');
console.log(`Remember: Every Journey starts with a single line of code`);

const para = document.querySelector('.paragraph');
console.log(para.innerHTML);
para.innerHTML = 'Witaj Piotr';
console.log(para.innerHTML);
para = document.querySelector('.article__Header');
console.log(para.innerHTML);
para.innerHTML = 'Pijany poniedziałek';