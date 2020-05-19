function showUsersTable(persons = []) {
    console.log(persons);
    const sortedPersons = persons.sort(function (a, b) {
        return a.age - b.age;
    });

    let averageAge = 0;
    let maxAge = person[0].age;
    let maxAge = person[0].age;
    let innerHtmlTableBody = '';
    for (let i = 0; i < persons.length; i++) {
        innerHtmlTableBody += '<tr><td>' + sortedPersons[i].firstName + '</td><td>' + sortedPersons[i].lastName + '</td><td>' + sortedPersons[i].age + '</td></tr>';
        console.log('Person ' + (i + 1) + ': firstName = ' + sortedPersons[i].firstName + ': lastName = ' + sortedPersons[i].lastName + ' age = ' + sortedPersons[i].age);
        averageAge += + sortedPersons[i].age;
        if (persons[i].age > maxAge) {
            maxAge = persons[i].age;
        }
        if (persons[i].age < minAge) {
            minAge = persons[i].age;
        }
    }

    averageAge /= +persons.length;

    document.getElementsByTagName('tbody')[0].innerHTML = innerHtmlTableBody;

    console.log('Average age of person:' + averageAge + ', max age: ' + maxAge + ', min age: ' + minAge);
    document.querySelector('tfoot div.alert').innerHTML = 'Average age: <b>' + averageAge + '</b>, max age: <b>' + maxAge + '</b>, min age: <b>' + minAge + '</b>';
}

let persons = [];
let averageAge = 0;

const personsNumber = prompt('Please enter the number of persons:');
console.log(personsNumber);


for (let i = 0; i < personsNumber; i++) {
    setTimeout(function() {
        const person = {};
        person.firstName = prompt('Please enter First name of the ' + (i + 1) + ' person');
        person.lastName = prompt('Please enter Last name of the ' + (i + 1) + ' person');
        person.age = prompt('Please enter age of the ' + (i + 1) + 'person');
        persons[i] = person;

        showUsersTable(persons);
    }, 500)
}    
