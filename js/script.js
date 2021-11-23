const container = document.querySelector('.container');

for (let i = 1; i <= 100; i++) {
    // console.log(i);
    const element = document.createElement('div');
    element.classList.add('box');
    // console.log(element);
    element.innerHTML = i;
    

    if (i % 15 == 0) {
        element.classList.add('red');
        element.innerHTML = 'fizzbuzz';
        
    } else if (i % 5 == 0) {
        element.classList.add('yellow');
        element.innerHTML = 'buzz';
    } else if (i % 3 == 0) {
        element.classList.add('green');
        element.innerHTML = 'fizz';
    } else {
        element.classList.add('blue');
    }

    container.append(element);
}