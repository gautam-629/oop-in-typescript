## 1. Prototype
> In TypeScript, a prototype is a way to add methods or properties to all instances of a particular object type. This is achieved by attaching properties and methods to the prototype object of a constructor function. When you create a new instance of that constructor function, it inherits those properties and methods from its prototype.

```javascript
interface IBankAccount {
    balance: number;
}

function BankAccount(this: IBankAccount, initialBalance: number) {
    this.balance = initialBalance;
}

BankAccount.prototype.deposit = function(this: IBankAccount, amount: number): void {
    this.balance += amount;
    console.log(`Deposit ${amount} Nrs`);
};

BankAccount.prototype.withdraw = function(this: IBankAccount, amount: number): void {
    if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdraw ${amount} Nrs`);
    } else {
        console.log("Insufficient funds");
    }
};

BankAccount.prototype.checkBalance = function(this: IBankAccount): void {
    console.log(`Current Balance is: ${this.balance} Nrs`);
};

// Example of usage
let account1 = new (BankAccount as any)(1000); // Workaround for constructor signature issue
account1.deposit(2000);
account1.checkBalance();
account1.withdraw(1000);
account1.checkBalance();

```
## 2. class
>In TypeScript, a class is a blueprint for creating objects with properties and methods. 

``` javascript
class BankAccount{
   private balance:number
   constructor(amount:number){
        this.balance=amount;
   }

   deposit(amout:number):void{
    this.balance +=amout;
    console.log(`Deposited ${amout} Nrs`)
   }
   withdraw(amount:number):void{
       if(amount>=this.balance){
          console.log("Insufficient funds")
       }
       else{
          this.balance -=amount;
          console.log(`withdrawn ${amount} Nrs`)
       }
   }
   
   checkBalance():void{
      console.log(`current Balance:${this.balance} Nrs`)
   }
}

let account1=new BankAccount(1000);
account1.deposit(200)
account1.checkBalance()
account1.withdraw(100)
account1.checkBalance()
```
## 3. Static keyword
> Static methods are called on the class itself rather than on instances of the class. They are commonly used for utility functions or methods that are not dependent on any specific instance of the class.

```javascript
class BankAccount{
   private static numberOfAccount:number=0;
    private balance:number
    constructor(initialBalance:number){
         this.balance=initialBalance;
         BankAccount.numberOfAccount++;
    }
 
    deposit(amout:number):void{
     this.balance +=amout;
     console.log(`Deposited ${amout} Nrs`)
    }
    withdraw(amount:number):void{
        if(amount>=this.balance){
           console.log("Insufficient funds")
        }
        else{
           this.balance -=amount;
           console.log(`withdrawn ${amount} Nrs`)
        }
    }
    
    checkBalance():void{
       console.log(`current Balance:${this.balance} Nrs`)
    }

   static getTotalNumberOfAccounts():number{
           return BankAccount.numberOfAccount;
    }
 }
 
 let account1=new BankAccount(1000);
 account1.deposit(200)
 account1.checkBalance()
 account1.withdraw(100)
 account1.checkBalance();

 console.log("Total Number of Account",BankAccount.getTotalNumberOfAccounts())
```
## 3. Inheritance
> Inheritance in programming enables a new class to inherit properties and methods from an existing class, promoting code reuse and extension of functionality. It allows for organizing code hierarchically, similar to how traits are passed down from parents to children.

``` javascript
class BankAccount {
    protected balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ${amount} dollars.`);
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} dollars.`);
        } else {
            console.log("Insufficient funds.");
        }
    }

    checkBalance(): void {
        console.log(`Current balance: ${this.balance} dollars.`);
    }
}

class SavingAccount extends BankAccount{
   private interestRate:number

   constructor(initialBalance:number,interestRate:number){
           super(initialBalance)
           this.interestRate=interestRate;
   }
   // override withdraw method to add interest calculation
   withdraw(amount: number): void {
        super.withdraw(amount);
        this.addInterest()
   }

   addInterest():void{
     const interestAmout= this.balance * (this.interestRate/100);
     this.balance += interestAmout;
     console.log(`Added interest of ${interestAmout} Nrs`)
   }
}

let savingAccount= new SavingAccount(1000,5);
savingAccount.deposit(1000);
savingAccount.checkBalance();
savingAccount.withdraw(1000);
savingAccount.checkBalance()
```
## 4. Polymerphism
> (Many Form) In programming, it means different objects can respond to the same message in different ways.

```javascript
class BankAccount {
    protected balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} dollars.`);
        } else {
            console.log("Insufficient funds.");
        }
    }

    checkBalance(): void {
        console.log(`Current balance: ${this.balance} dollars.`);
    }
}

class SavingsAccount extends BankAccount {
    private interestRate: number;

    constructor(initialBalance: number, interestRate: number) {
        super(initialBalance);
        this.interestRate = interestRate;
    }

    withdraw(amount: number): void {
        super.withdraw(amount); // Call superclass method
        this.addInterest();
    }

    private addInterest(): void {
        const interestAmount = this.balance * (this.interestRate / 100);
        this.balance += interestAmount;
        console.log(`Added interest of ${interestAmount.toFixed(2)} dollars.`);
    }
}

class CheckingAccount extends BankAccount {
    withdraw(amount: number): void {
        super.withdraw(amount); // Call superclass method
        console.log("No fees for withdrawing from a checking account.");
    }
}

// Example usage
let savingsAccount = new SavingsAccount(1000, 5); // Initial balance of $1000, interest rate of 5%
let checkingAccount = new CheckingAccount(2000); // Initial balance of $2000

// Polymorphic behavior: calling withdraw on objects of different account types
savingsAccount.withdraw(200); // Output: Withdrawn 200 dollars. Added interest of 10.00 dollars.
checkingAccount.withdraw(300); // Output: Withdrawn 300 dollars. No fees for withdrawing from a checking account.

1.Both SavingsAccount and CheckingAccount inherit from BankAccount, sharing the withdraw method.
2.Each subclass overrides the withdraw method to provide its own implementation.
3.When calling withdraw on savingsAccount and checkingAccount, polymorphism ensures that the appropriate implementation is invoked based on the type of account, allowing for different behaviors without changing the method call.

```
## 5. Abstraction
> Abstraction in programming refers to the concept of hiding the complex implementation details of a system and exposing only the essential features or functionalities to the outside world. 

``` javascript
interface BankAccount{
    balance:number;
    deposit(amount:number):void;
    withdraw(amount:number):void;
    checkBalance():void;
}
class SimpleBankAccount implements BankAccount{
    balance: number;
    constructor(initialBalance:number){
        this.balance=initialBalance;
    }
    deposit(amount: number): void {
        this.balance += amount;
    }
    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} dollars.`);
        } else {
            console.log("Insufficient funds.");
        }
    }
    checkBalance(): void {
        console.log(`Current balance: ${this.balance} dollars.`);
    }
}

let account1: BankAccount = new SimpleBankAccount(1000); // Initial balance of $1000
account1.deposit(500);
account1.checkBalance(); // Output: Current balance: 1500 dollars.
account1.withdraw(200);
account1.checkBalance(); // Output: Current balance: 1300 dollars.
account1.withdraw(150); 

1.Users only need to interact with the deposit, withdraw, and checkBalance methods,(hide implementation) which provide a high-level interface for managing bank accounts.
```