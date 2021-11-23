const container = document.querySelector('.container');

for (let i = 1; i <= 100; i++) {
    // console.log(i);
    const element = document.createElement('div');
    element.classList.add('box');
    // console.log(element);
    element.innerHTML = i;
    container.append(element);
}