const normalPerson = {
    firstName : 'Tarek',
    lastNmae : 'Jamir',
    salary : '15000',
    getFullName : function(){
        console.log(this.firstName, this.lastNmae);
    },
    chargeBill : function(ammount){
        console.log(this);
        this.salary = this.salary - ammount;
        return this.salary;
    }
}

const heroPerson ={
    firstName : 'Hero',
    lastNmae : 'Balam',
    salary : 22000
}

const friendlyPerson ={
    firstName : 'Hero',
    lastNmae : 'Golam',
    salary : 24000
}

// option=1   bind 

// normalPerson.chargeBill();

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000)


const friendChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendChargeBill(2000)


console.log(heroPerson.salary);
console.log(normalPerson.salary);

// console.log(normalPerson.getFullName);
// console.log(normalPerson.chargeBill(5000));


// option=2   call 

const TinyPerson ={
    firstName : 'Hero',
    lastNmae : 'Golam',
    salary : 24000
}
normalPerson.chargeBill.call(TinyPerson, 5000, 100, 10);
console.log(TinyPerson.salary);


// option=3  apply

const childPerson ={
    firstName : 'Hero',
    lastNmae : 'Golam',
    salary : 24000
}

normalPerson.chargeBill.apply(childPerson, [300, 200, 10]);
console.log(childPerson.salary);
