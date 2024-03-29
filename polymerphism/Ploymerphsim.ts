// class BankAccount {
//     protected balance: number;

//     constructor(initialBalance: number) {
//         this.balance = initialBalance;
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

// class SavingsAccount extends BankAccount {
//     private interestRate: number;

//     constructor(initialBalance: number, interestRate: number) {
//         super(initialBalance);
//         this.interestRate = interestRate;
//     }

//     withdraw(amount: number): void {
//         super.withdraw(amount); // Call superclass method
//         this.addInterest();
//     }

//     private addInterest(): void {
//         const interestAmount = this.balance * (this.interestRate / 100);
//         this.balance += interestAmount;
//         console.log(`Added interest of ${interestAmount.toFixed(2)} dollars.`);
//     }
// }

// class CheckingAccount extends BankAccount {
//     withdraw(amount: number): void {
//         super.withdraw(amount); // Call superclass method
//         console.log("No fees for withdrawing from a checking account.");
//     }
// }

// // Example usage
// let savingsAccount = new SavingsAccount(1000, 5); // Initial balance of $1000, interest rate of 5%
// let checkingAccount = new CheckingAccount(2000); // Initial balance of $2000

// // Polymorphic behavior: calling withdraw on objects of different account types
// savingsAccount.withdraw(200); // Output: Withdrawn 200 dollars. Added interest of 10.00 dollars.
// checkingAccount.withdraw(300); // Output: Withdrawn 300 dollars. No fees for withdrawing from a checking account.

// 1.Both SavingsAccount and CheckingAccount inherit from BankAccount, sharing the withdraw method.
// 2.Each subclass overrides the withdraw method to provide its own implementation.
// 3.When calling withdraw on savingsAccount and checkingAccount, polymorphism ensures that the appropriate implementation is invoked based on the type of account, allowing for different behaviors without changing the method call.