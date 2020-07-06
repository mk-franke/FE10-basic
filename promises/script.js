const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject('Hello'), 5000);
})

promise
    .then(str => console.log(str))
    .then(() => console.log('World'))
    .catch(() => console.log('All bad...'));


let randomPromise = new Promise((resolve, reject) => {
    if (randomInt(0, 2) === 0) {
        resolve("Promise resolved")
    }
    reject("Promise rejected")
})

randomPromise
    .then(str => console.log(str))
    .catch(reason => {throw new Error(reason)});

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

fetch('/promises/body.html')
    .then(response => response.text())
    .then(text => {
        console.log(text);
        document.querySelector('body').innerHTML = text;
    })

console.log("Kuku");

fetch('http://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=bed156d40174100c73406417523ddaf1')
    .then(response => response.text())
    .then(text => console.log(text))
    

