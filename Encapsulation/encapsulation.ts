class BankAccount {
    private balance: number;

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

// Example usage
let account = new BankAccount(1000); // Initial balance of $1000
account.deposit(500);
account.checkBalance(); // Output: Current balance: 1500 dollars.
account.withdraw(200);
account.checkBalance(); // Output: Current balance: 1300 dollars.
account.withdraw(1500); // Output: Insufficient funds.
