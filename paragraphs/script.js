const colors = ['red', 'green', 'blue'];

console.log(this);

document.querySelector('p').addEventListener('click', function() {
    this.style['background-color'] = 'red';
});

const person = {
    'name-of-person':'Vasya',
    age: 25
}

function printField(field) {
    console.log(person[field]);
}

