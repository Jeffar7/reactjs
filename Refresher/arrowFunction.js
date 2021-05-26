function printMyname(name) {
    console.log(name);
}

const printMyNameAgain = (name, age) => {
    console.log(name, age);
}

const multiply = (number) => {
    return number * 2;
}

const multiplySimple = number => number * 2;

const divided = (number) => {
    console.log(number * 2);
}



printMyname('jeff');
printMyNameAgain('manroe', 22);
console.log(multiply(2));
console.log(multiply(3));
divided(3);