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