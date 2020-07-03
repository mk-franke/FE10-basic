class Pet {

    name;
    age;

    #chipNumber;

    constructor(name, age, chipNumber) {
        this.name = name;
        this.age = age;
        this.#chipNumber = chipNumber;
    }

    static greetEachOther(pet1, pet2) {
        console.log(pet1.sayHello());
        console.log(pet2.sayHello());
    }

    get nameAndAge() {
        return this.name + ' ' + this.age;
    }

    get registered() {
        return !!this.#chipNumber;
    }

    sayHello() {
        return "Hello!";
    }
}

class Cat extends Pet {
    constructor(name, age) {
        super(name, age);
    }

    sayHello() {
        return "Meowwwww";
    }
}

const vasya = new Pet('Vasya', 3, 1234567);
const sharik = new Pet('Sharik', 10);

const cat = new Cat('Barsik', 5);