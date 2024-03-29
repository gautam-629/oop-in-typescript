// class BankAccount {
//     protected balance: number;

//     constructor(initialBalance: number) {
//         this.balance = initialBalance;
//     }

//     deposit(amount: number): void {
//         this.balance += amount;
//         console.log(`Deposited ${amount} dollars.`);
//     }

//     withdraw(amount: number): void {
//         if (amount <= this.balance) {
//             this.balance -= amount;
//             console.log(`Withdrawn ${amount} dollars.`);
//         } else {
//             console.log("Insufficient funds.");
//         }
//     }

//     checkBalance(): void {
//         console.log(`Current balance: ${this.balance} dollars.`);
//     }
// }

// class SavingAccount extends BankAccount{
//    private interestRate:number

//    constructor(initialBalance:number,interestRate:number){
//            super(initialBalance)
//            this.interestRate=interestRate;
//    }
//    // override withdraw method to add interest calculation
//    withdraw(amount: number): void {
//         super.withdraw(amount);
//         this.addInterest()
//    }

//    addInterest():void{
//      const interestAmout= this.balance * (this.interestRate/100);
//      this.balance += interestAmout;
//      console.log(`Added interest of ${interestAmout} Nrs`)
//    }
// }

// let savingAccount= new SavingAccount(1000,5);
// savingAccount.deposit(1000);
// savingAccount.checkBalance();
// savingAccount.withdraw(1000);
// savingAccount.checkBalance()