
//use ES6 & ES7

class Human {

    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {

    name = 'max';
    gender = 'female';

    printMyname = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyname();
person.printGender();