// creo variabile container 
const container = document.querySelector('.container');
// creo ciclo for per i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
// creo variabile element per creare 100 div nel ciclo 
    const element = document.createElement('div');
//aggiungo alla variabile element la classe box 
    element.classList.add('box');
// sovrascrivo in html la variabile i    
    element.innerHTML = i;
    
// creo istruzione if 
// istruzione per numeri divisibili per 15 e suoi multipli 
    if (i % 15 == 0) {
        element.classList.add('red');
        element.innerHTML = 'fizzbuzz';
// istruzione per numeri divisibili per 5 e suoi multipli         
    } else if (i % 5 == 0) {
        element.classList.add('yellow');
        element.innerHTML = 'buzz';
// istruzione per numeri divisibili per 3 e suoi multipli         
    } else if (i % 3 == 0) {
        element.classList.add('green');
        element.innerHTML = 'fizz';
    } else {
        element.classList.add('blue');
    }
// appendo la variabile element in var container per farla vedere in html 
    container.append(element);
}