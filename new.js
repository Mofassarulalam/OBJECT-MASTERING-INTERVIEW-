class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Jamir', 'Tarek', 2000);
console.log(heroPerson);

const friendlyPerson = new Person('Mofassir', 'Jamir', 3000);
console.log(friendlyPerson);

/// using function

function Person1 (firstName, lastName, salary){
    this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
}
const oldPerson = new Person1('Karim', 'Akber', 5000);
console.log(oldPerson);