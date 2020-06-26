const persons = [
    {
        name: 'Vasya',
        age: 25,
        personSays: function() {
           console.log("My name " + this.name + " I'm " + this.age)    
        }
    },
    {
        name: 'Petya',
        age: 30,
        personSays: () => {
            console.log(this);
            console.log("My name " + this.name + " I'm " + this.age)
        }
    }
];
