class Account{
    constructor(firstName, lastName, age, gender){
        this.firstName = firstName || "Saheed";
        this.lastName = lastName || "Bilal";
        this.age = age;
        this.gender = gender;
    }
    setFirstName(firstName){
        this.firstName = firstName;
    }
    getFirstName(){
        return this.firstName;
    }
}

class BankAccount extends Account{
    constructor(firstName, lastName, age, gender, balance, accountNumber){
        super(firstName, lastName, age, gender);
        this.balance = balance ;
        this.accountNumber = accountNumber;
    }
    getBalance(){
        return this.balance;
    }
    setBalance(balance){
        this.balance = balance;
    }
}

let myAccount = new BankAccount();
console.log(myAccount.setFirstName("David"));
console.log(myAccount.getFirstName());

