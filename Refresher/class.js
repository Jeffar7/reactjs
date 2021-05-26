class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super(); //for call Human Constructor
        this.name = 'max';
        this.gender = 'female';
    }

    printMyname() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyname();
person.printGender();