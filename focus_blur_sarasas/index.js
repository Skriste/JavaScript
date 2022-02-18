let form = document.querySelector('form');
let ul = document.querySelector('ul');
let input = document.querySelector('input');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let listItem = form['listItem'].value;
    let sarasas = document.createElement('li');
    sarasas.textContent = listItem

    ul.appendChild(sarasas);
});

input.addEventListener('focus', function(e) {
    e.target.style.background = 'aqua'
});

input.addEventListener('blur', function(e) {
    e.target.style,background = ''
});