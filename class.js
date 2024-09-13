// class Car {
//   constructor() {
//     this.setName("Test Name");
//   }

//   setName(name) {
//     this.name = name;
//   }
// }

// const dodge = new Car();
// dodge.setName("BMW M5");
// const teslaM2 = new Car("Tesla M2");

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    return `${this.make} ${this.model} engine started.`;
  }

  displayInfo() {
    return `Car: ${this.year} ${this.make} ${this.model}`;
  }
}

const tesla = new Car("Tesla", " Model 4", "2022");

// console.log();

/*
  Exercise 3: Bank Account Class
  Create a BankAccount class that simulates basic banking operations. Each account should have an accountHolderName, balance, and accountNumber. Implement the following methods:
  * deposit(amount): Adds money to the account balance.
  * withdraw(amount): Subtracts money from the balance, if there is enough balance.
  * getBalance(): Returns the current balance.
  * transfer(amount, anotherAccount): Transfers a certain amount to another account, if balance allows.
*/

class BankAccount {
  constructor(accountHolderName, balance, accountNumber) {
    this.accountHolderName = accountHolderName;
    this.balance = balance;
    this.accountNumber = accountNumber;
  }

  deposit(amount) {
    this.balance += amount;

    return `CREDIT: Your current balance is ${this.balance}`;
  }

  withdraw(amount) {
    this.balance -= amount;

    return `DEBITED: Your current balance is ${this.balance}`;
  }

  getBalance() {
    return `Your current balance is ${this.balance}`;
  }

  transfer(amount, accountNumber) {
    this.balance -= amount;
    return `TRANSFER: You has successfully transferred ${amount} to ${accountNumber}. Your current balance is ${this.balance}`;
  }
}

const Account1 = new BankAccount("Kenechukwu Josiah Onwe", 1000, 1111111111111);
const Account2 = new BankAccount("John Doe", 1000, 1111111111221);

// console.log(
//   Account1.accountHolderName,
//   Account1.accountNumber,
//   Account1.balance
// );

// console.log(Account1.deposit(200));
// console.log(Account1.getBalance());
// console.log(Account1.withdraw(700));
// console.log(Account1.getBalance());
// console.log(Account1.transfer(200, 1212121212));
// console.log(Account1.getBalance());

//ARRAY

const bigOne = "KC";
const bigTwo = "John Doe";
const bigThree = "Jane Doe";

// console.log(bigOne);
// console.log(bigTwo);
// console.log(bigThree);

const group = new Array(
  "Ebere",
  "Kc",
  true,
  false,
  undefined,
  Account1,
  "Jane"
);

// console.log(group); // ['Kc', 'John', 'Jane]
console.log(group);
console.log(group.length);
console.log(group[4]);

//.at(integer)
const index = 10;
console.log("At Method", group.at(index));

// array.concate(array);
const array1 = [1, 2, 3, 4, 5, 6];
const array2 = ["Ebere", "Kc", "John", "Jane"];
const concatenatedArray = array1.concat(array2); //[1, 2, 3, 4, 5, 6, "Ebere", "Kc", "John", "Jane"];
console.log("Concatenated Array", concatenatedArray);

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]

const obj = {
  firstName: "Kene",
  lasName: "Onwe",
  fullName: () => {
    returnn`${obj.firstName} ${obj.lasName}`;
  },
};

function arrayDestructure() {
  const names = ["Kenechi", "jane", "Mag", "Ebere"];

  const [kc, jane, ...rest] = names;

  console.log({ kc, rest });

  for (const [key, value] of names.entries()) {
    if (key == 0 && value == "Kene") {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
    console.log(`${value} is at ${key} index`);
  }

  const arrayKeys = names.keys();
  const objKeys = Object.keys(obj);
  Object.create({ name: "kne" });

  console.log(arrayKeys.toArray(), objKeys);

  console.log(names.entries().toArray());

  for (const key in obj) {
    //  const element = obj[key];
    console.log(key);
  }
}

// arrayDestructure();

const arryt = ["you", "me", "them"];

const result = arryt.every((item) => {
  // if (typeof item === "number") {
  //   return true;
  // } else {
  //   return false;
  // }

  return typeof item === "number";
});

console.log({ result });
