# TypeScript Object-Oriented Programming (OOP) Tutorial

## Overview

This repository provides a comprehensive tutorial on Object-Oriented Programming (OOP) concepts in TypeScript, focusing on practical examples and in-depth explanations.

## 1. Prototype

Prototypes in TypeScript allow dynamically adding methods to object instances after their creation.

### Detailed Example:

```typescript
// Define an interface to ensure type safety for the prototype-based object
interface IEmployee {
  name: string;
  salary: number;
  // Declare methods that will be added to the prototype
  calculateBonus(): number;
  applyRaise(percentage: number): void;
}

// Create a constructor function for Employee
function EmployeePrototype(
  this: IEmployee,
  name: string,
  initialSalary: number
) {
  // Initialize basic properties
  this.name = name;
  this.salary = initialSalary;
}

// Dynamically add methods to the prototype AFTER initial definition
// This demonstrates the flexibility of prototype-based programming
EmployeePrototype.prototype.calculateBonus = function (): number {
  // Bonus calculation logic - 10% of current salary
  return this.salary * 0.1;
};

EmployeePrototype.prototype.applyRaise = function (percentage: number): void {
  // Increase salary by given percentage
  this.salary += this.salary * (percentage / 100);
};

// Usage demonstration
// Cast to 'any' to bypass TypeScript's strict prototype checking
const john = new (EmployeePrototype as any)("John Doe", 50000);

// Use dynamically added methods
console.log(john.calculateBonus()); // Outputs: 5000
john.applyRaise(10); // Increases salary by 10%
```

### Key Points:

- Allows adding methods to objects after initial creation
- Provides dynamic extensibility
- Common in JavaScript-based inheritance models

## 2. Classes

Classes provide a more structured and modern approach to creating objects with methods and properties.

### Detailed Example:

```typescript
class BankAccount {
  // Private property - can only be accessed within the class
  private accountBalance: number;
  // Readonly property that can't be changed after initialization
  readonly accountNumber: string;

  // Constructor to initialize the account
  constructor(initialBalance: number, accountNumber: string) {
    // Validate input before setting properties
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative");
    }
    this.accountBalance = initialBalance;
    this.accountNumber = accountNumber;
  }

  // Public method to deposit funds
  deposit(amount: number): void {
    // Add input validation
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this.accountBalance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.accountBalance}`);
  }

  // Public method to withdraw funds
  withdraw(amount: number): boolean {
    // Check for sufficient funds
    if (amount > this.accountBalance) {
      console.log("Insufficient funds");
      return false;
    }
    this.accountBalance -= amount;
    console.log(
      `Withdrawn ${amount}. Remaining balance: ${this.accountBalance}`
    );
    return true;
  }

  // Getter method to safely access balance
  getBalance(): number {
    return this.accountBalance;
  }
}

// Usage
const personalAccount = new BankAccount(1000, "AC001");
personalAccount.deposit(500); // Deposits 500
personalAccount.withdraw(200); // Withdraws 200
console.log(personalAccount.getBalance()); // Outputs current balance
```

### Key Points:

- Encapsulates data and behavior
- Provides type-safe object creation
- Supports access modifiers (private, public, protected)

## 3. Static Methods and Properties

Static members belong to the class itself, not to instances of the class.

### Detailed Example:

```typescript
class BankBranch {
  // Static property shared across all instances
  private static totalBranchCount: number = 0;

  // Instance properties
  private branchName: string;
  private branchLocation: string;

  constructor(name: string, location: string) {
    this.branchName = name;
    this.branchLocation = location;

    // Increment total branch count each time a new branch is created
    BankBranch.totalBranchCount++;
  }

  // Static method to get total number of branches
  static getTotalBranchCount(): number {
    return BankBranch.totalBranchCount;
  }

  // Static method to create a default branch
  static createDefaultBranch(): BankBranch {
    return new BankBranch("Main Branch", "Headquarters");
  }

  // Instance method
  getBranchDetails(): string {
    return `${this.branchName} located at ${this.branchLocation}`;
  }
}

// Creating branch instances
const branch1 = new BankBranch("Downtown Branch", "City Center");
const branch2 = new BankBranch("Suburban Branch", "Residential Area");

// Accessing static method
console.log(BankBranch.getTotalBranchCount()); // Outputs: 2
const defaultBranch = BankBranch.createDefaultBranch();
```

### Key Points:

- Shared across all instances of the class
- Accessed directly through the class name
- Useful for utility functions and class-level data

## 4. Inheritance

Inheritance allows creating new classes based on existing classes, promoting code reuse and specialization.

### Detailed Example:

```typescript
// Base class representing a generic payment method
abstract class PaymentMethod {
  // Protected property accessible by child classes
  protected transactionFee: number;

  constructor(fee: number) {
    this.transactionFee = fee;
  }

  // Abstract method to be implemented by child classes
  abstract processPayment(amount: number): boolean;

  // Concrete method available to all child classes
  calculateTotalAmount(amount: number): number {
    return amount + this.transactionFee;
  }
}

// Inherited class for credit card payments
class CreditCardPayment extends PaymentMethod {
  // Additional property specific to credit card
  private cardType: string;

  constructor(fee: number, cardType: string) {
    // Call parent class constructor
    super(fee);
    this.cardType = cardType;
  }

  // Implement the abstract method
  processPayment(amount: number): boolean {
    // Simulate payment processing logic
    console.log(`Processing ${this.cardType} payment of ${amount}`);
    return true;
  }

  // Additional method specific to credit card
  getCardType(): string {
    return this.cardType;
  }
}

// Usage
const visaPayment = new CreditCardPayment(5, "Visa");
visaPayment.processPayment(100); // Processes payment
console.log(visaPayment.calculateTotalAmount(100)); // Includes transaction fee
```

### Key Points:

- `extends` keyword creates a child class
- `super()` calls the parent class constructor
- Can override and extend parent class methods

## 5. Polymorphism

Polymorphism allows different classes to implement methods differently while sharing a common interface.

### Detailed Example:

```typescript
// Abstract base class defining a common interface
abstract class Shape {
  // Abstract method to be implemented by child classes
  abstract calculateArea(): number;

  // Concrete method with default implementation
  describe(): string {
    return `Area: ${this.calculateArea()}`;
  }
}

// Circle implementation
class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  // Implement area calculation specific to circle
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Rectangle implementation
class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  // Implement area calculation specific to rectangle
  calculateArea(): number {
    return this.width * this.height;
  }
}

// Usage demonstrates polymorphism
const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];

// Each shape calculates area differently
shapes.forEach((shape) => {
  console.log(shape.describe());
});
```

### Key Points:

- Different classes can implement the same method differently
- Enables flexible and extensible code design
- Supports method overriding

## 6. Abstraction

Abstraction hides complex implementation details and exposes only essential features.

### Detailed Example:

```typescript
// Interface defining a contract for data storage
interface DataStorage {
  save(data: string): void;
  retrieve(): string;
}

// Concrete implementation for local storage
class LocalStorageService implements DataStorage {
  private storageKey: string;

  constructor(key: string) {
    this.storageKey = key;
  }

  // Implementation of save method
  save(data: string): void {
    localStorage.setItem(this.storageKey, data);
  }

  // Implementation of retrieve method
  retrieve(): string {
    return localStorage.getItem(this.storageKey) || "";
  }
}

// Concrete implementation for cloud storage
class CloudStorageService implements DataStorage {
  private cloudEndpoint: string;

  constructor(endpoint: string) {
    this.cloudEndpoint = endpoint;
  }

  // Cloud-specific save implementation
  save(data: string): void {
    // Simulated cloud storage logic
    console.log(`Saving to cloud: ${data}`);
  }

  // Cloud-specific retrieve implementation
  retrieve(): string {
    // Simulated retrieval from cloud
    return "Retrieved cloud data";
  }
}

// Usage demonstrates abstraction
class DataManager {
  private storage: DataStorage;

  constructor(storage: DataStorage) {
    this.storage = storage;
  }

  // Uses storage without knowing implementation details
  processData(data: string): void {
    this.storage.save(data);
    const retrieved = this.storage.retrieve();
    console.log(retrieved);
  }
}

// Can switch storage implementations easily
const localManager = new DataManager(new LocalStorageService("app-data"));
const cloudManager = new DataManager(
  new CloudStorageService("https://cloud.example.com")
);
```

### Key Points:

- Hides complex implementation details
- Provides a clean, simple interface
- Allows easy swapping of implementations

## 7. Encapsulation

Encapsulation restricts direct access to some of an object's components and can prevent unauthorized access.

### Detailed Example:

```typescript
class SecureAccount {
  // Private property - can only be accessed within the class
  private balance: number;
  // Private property to track transaction history
  private transactionLog: string[] = [];

  constructor(initialBalance: number) {
    // Validate initial balance
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative");
    }
    this.balance = initialBalance;
  }

  // Controlled method to deposit funds
  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this.balance += amount;
    this.logTransaction(`Deposit: ${amount}`);
  }

  // Controlled method to withdraw funds
  withdraw(amount: number): boolean {
    if (amount > this.balance) {
      this.logTransaction(`Failed withdrawal attempt: ${amount}`);
      return false;
    }
    this.balance -= amount;
    this.logTransaction(`Withdrawal: ${amount}`);
    return true;
  }

  // Private method for logging transactions
  private logTransaction(message: string): void {
    const timestamp = new Date().toISOString();
    this.transactionLog.push(`${timestamp}: ${message}`);
  }

  // Controlled access to balance
  getBalance(): number {
    return this.balance;
  }

  // Controlled access to transaction history
  getTransactionHistory(): string[] {
    return [...this.transactionLog]; // Return a copy to prevent direct modification
  }
}

// Usage
const account = new SecureAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // Safely access balance
console.log(account.getTransactionHistory()); // Access transaction log
```

### Key Points:

- Prevents direct access to internal state
- Provides controlled access through methods
- Adds validation and logging capabilities

## Conclusion

Object-Oriented Programming in TypeScript provides powerful tools for creating structured, maintainable, and scalable code. By understanding and applying these principles, you can write more robust and flexible applications.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues.

## License

[Specify your license here]
