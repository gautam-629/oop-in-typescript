// interface BankAccount{
//     balance:number;
//     deposit(amount:number):void;
//     withdraw(amount:number):void;
//     checkBalance():void;
// }
// class SimpleBankAccount implements BankAccount{
//     balance: number;
//     constructor(initialBalance:number){
//         this.balance=initialBalance;
//     }
//     deposit(amount: number): void {
//         this.balance += amount;
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

// let account1: BankAccount = new SimpleBankAccount(1000); // Initial balance of $1000
// account1.deposit(500);
// account1.checkBalance(); // Output: Current balance: 1500 dollars.
// account1.withdraw(200);
// account1.checkBalance(); // Output: Current balance: 1300 dollars.
// account1.withdraw(150); 

// 1.Users only need to interact with the deposit, withdraw, and checkBalance methods,(hide implementation) which provide a high-level interface for managing bank accounts.