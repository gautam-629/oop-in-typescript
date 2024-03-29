// interface IBankAccount {
//     balance: number;
// }

// function BankAccount(this: IBankAccount, initialBalance: number) {
//     this.balance = initialBalance;
// }

// BankAccount.prototype.deposit = function(this: IBankAccount, amount: number): void {
//     this.balance += amount;
//     console.log(`Deposit ${amount} Nrs`);
// };

// BankAccount.prototype.withdraw = function(this: IBankAccount, amount: number): void {
//     if (amount <= this.balance) {
//         this.balance -= amount;
//         console.log(`Withdraw ${amount} Nrs`);
//     } else {
//         console.log("Insufficient funds");
//     }
// };

// BankAccount.prototype.checkBalance = function(this: IBankAccount): void {
//     console.log(`Current Balance is: ${this.balance} Nrs`);
// };

// // Example of usage
// let account1 = new (BankAccount as any)(1000); // Workaround for constructor signature issue
// account1.deposit(2000);
// account1.checkBalance();
// account1.withdraw(1000);
// account1.checkBalance();
