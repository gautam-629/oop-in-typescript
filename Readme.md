
# TypeScript Object-Oriented Programming (OOP) Tutorial

## Introduction to Object-Oriented Programming (OOP) Concepts in TypeScript

Object-Oriented Programming (OOP) is a powerful programming paradigm that provides a structured approach to software design. In TypeScript, OOP principles help create robust, flexible, and maintainable software systems. Let's explore the key OOP concepts:

### 1. Prototype
Prototypes are the fundamental mechanism for object inheritance in JavaScript and TypeScript. They allow:
- Dynamic method addition to objects
- Runtime object behavior creation
- Flexible object capability extension
- Efficient method sharing across object instances

Prototypes act as blueprints defining shared behaviors for objects, enabling dynamic method implementation.

### 2. Classes
Classes are blueprints for creating objects with:
- Structured properties and methods
- Controlled data access
- Built-in constructors
- Support for encapsulation and inheritance

They provide a modern, clean approach to object creation, allowing robust implementation of object behaviors with built-in validation and security.

### 3. Static Methods and Properties
Static elements belong to the class itself, not individual instances:
- Shared across all class instances
- Useful for utility functions and organizational tracking
- Callable without creating object instances

Static methods are ideal for tracking organizational data and creating utility functions that don't require object instantiation.

### 4. Inheritance
Inheritance enables creating new classes based on existing ones:
- Promotes code reuse
- Allows creation of specialized classes
- Supports hierarchical class structures
- Enables child classes to extend or override parent class behaviors

This principle allows for creating complex class hierarchies while maintaining code efficiency.

### 5. Polymorphism
Polymorphism allows objects of different types to be treated uniformly:
- Enables flexible method implementations
- Supports creating generic interfaces
- Allows runtime method selection

It provides a way to perform a single action in different ways across various object types.

### 6. Abstraction
Abstraction focuses on hiding complex implementation details:
- Provides a clean, simplified interface
- Decouples implementation from usage
- Allows easy switching between different implementations

This principle helps manage complexity by exposing only necessary details and hiding internal complexities.

### 7. Encapsulation
Encapsulation protects an object's internal state:
- Restricts direct access to object components
- Provides controlled data access
- Ensures data integrity
- Implements access modifiers (public, private, protected)

It acts as a protective mechanism, maintaining the security and integrity of object data.

### Key Benefits
These OOP principles work together to create:
- More organized code
- Reusable components
- Maintainable software systems
- Flexible and scalable applications

TypeScript enhances these concepts with strong typing, making OOP implementations even more robust and predictable.

By understanding and applying these principles, developers can design more efficient, readable, and extensible software solutions.

## Repository Overview

This repository demonstrates Object-Oriented Programming (OOP) concepts in TypeScript through practical, real-world examples. Each section explores a key OOP principle with specific objectives and implementations.

## Detailed Sections

The tutorial covers seven key OOP concepts with comprehensive code examples:

1. **Prototype**: Employee Bonus and Salary Management System
2. **Classes**: Secure Bank Account Management System
3. **Static Methods and Properties**: Bank Branch Management Tracking System
4. **Inheritance**: Flexible Payment Processing System
5. **Polymorphism**: Geometric Shape Area Calculation System
6. **Abstraction**: Flexible Data Storage Management System
7. **Encapsulation**: Secure Financial Account Transaction Management

## Getting Started

### Prerequisites
- TypeScript
- Node.js
- A code editor (VS Code recommended)

### Installation
1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   ```
3. Compile TypeScript files
   ```bash
   tsc
   ```

## Running Examples
Each section contains runnable code examples demonstrating specific OOP principles.

## Contributing

Contributions are welcome! Feel free to:
- Submit pull requests
- Open issues
- Provide feedback on existing implementations

### Contribution Guidelines
1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

[Specify your license here - e.g., MIT, Apache 2.0]

## Additional Resources
- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [MDN Web Docs: Object-Oriented Programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

## Overview

This repository demonstrates Object-Oriented Programming (OOP) concepts in TypeScript through practical, real-world examples. Each section explores a key OOP principle with a specific objective and implementation.

## 1. Prototype

### Objective: Employee Bonus and Salary Management System

**Goal**: Create a flexible system for managing employee compensation that allows dynamic addition of methods to track and calculate bonuses and raises.

### Example Scenario:

Imagine a small startup needs a lightweight way to manage employee compensation without complex class structures. The prototype approach allows for dynamic method addition and flexible salary management.

```typescript
interface IEmployee {
  name: string;
  salary: number;
  calculateBonus(): number;
  applyRaise(percentage: number): void;
}

function EmployeePrototype(
  this: IEmployee,
  name: string,
  initialSalary: number
) {
  // Initialize basic employee information
  this.name = name;
  this.salary = initialSalary;
}

// Dynamically add bonus calculation method
EmployeePrototype.prototype.calculateBonus = function (): number {
  // Bonus calculation logic - 10% of current salary
  return this.salary * 0.1;
};

// Dynamically add salary raise method
EmployeePrototype.prototype.applyRaise = function (percentage: number): void {
  // Increase salary by given percentage
  this.salary += this.salary * (percentage / 100);
};

// Usage demonstration
const john = new (EmployeePrototype as any)("John Doe", 50000);
console.log(john.calculateBonus()); // Outputs: 5000
john.applyRaise(10); // Increases salary by 10%
```

### Key Takeaways:

- Allows runtime extension of object capabilities
- Provides flexibility in method addition
- Useful for scenarios requiring dynamic behavior modification

## 2. Classes

### Objective: Secure Bank Account Management System

**Goal**: Develop a robust bank account class that ensures secure financial transactions with strict validation and controlled access.

### Example Scenario:

A bank needs a secure way to manage customer accounts, preventing invalid transactions and maintaining strict control over account operations.

```typescript
class BankAccount {
  // Private properties for secure data management
  private accountBalance: number;
  readonly accountNumber: string;

  constructor(initialBalance: number, accountNumber: string) {
    // Validate initial account creation
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative");
    }
    this.accountBalance = initialBalance;
    this.accountNumber = accountNumber;
  }

  // Secure deposit method with validation
  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this.accountBalance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.accountBalance}`);
  }

  // Controlled withdrawal with balance check
  withdraw(amount: number): boolean {
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

  // Safe balance retrieval
  getBalance(): number {
    return this.accountBalance;
  }
}

// Usage
const personalAccount = new BankAccount(1000, "AC001");
personalAccount.deposit(500); // Deposits 500
personalAccount.withdraw(200); // Withdraws 200
```

### Key Takeaways:

- Provides encapsulation of account data
- Implements validation and security checks
- Offers controlled access to account operations

## 3. Static Methods and Properties

### Objective: Bank Branch Management Tracking System

**Goal**: Create a system to track and manage bank branches across an organization, maintaining a centralized count and providing utility methods.

### Example Scenario:

A bank needs to keep track of total branch count, create default branches, and manage branch-level information efficiently.

```typescript
class BankBranch {
  // Track total number of branches across the organization
  private static totalBranchCount: number = 0;

  // Instance-specific branch details
  private branchName: string;
  private branchLocation: string;

  constructor(name: string, location: string) {
    this.branchName = name;
    this.branchLocation = location;

    // Automatically increment branch count
    BankBranch.totalBranchCount++;
  }

  // Static method to get total branch count
  static getTotalBranchCount(): number {
    return BankBranch.totalBranchCount;
  }

  // Static method to create a default branch
  static createDefaultBranch(): BankBranch {
    return new BankBranch("Main Branch", "Headquarters");
  }

  // Instance method to get branch details
  getBranchDetails(): string {
    return `${this.branchName} located at ${this.branchLocation}`;
  }
}

// Creating branch instances
const branch1 = new BankBranch("Downtown Branch", "City Center");
const branch2 = new BankBranch("Suburban Branch", "Residential Area");

// Accessing static methods
console.log(BankBranch.getTotalBranchCount()); // Outputs: 2
const defaultBranch = BankBranch.createDefaultBranch();
```

### Key Takeaways:

- Centralized tracking of organizational data
- Utility methods not tied to specific instances
- Shared state across all class instances

## 4. Inheritance

### Objective: Flexible Payment Processing System

**Goal**: Create a extensible payment processing framework that allows different payment methods to share common functionality while implementing specific behaviors.

### Example Scenario:

An e-commerce platform needs a versatile payment system that can handle multiple payment types with unique processing requirements.

```typescript
// Abstract base class for payment methods
abstract class PaymentMethod {
  // Shared transaction fee across payment methods
  protected transactionFee: number;

  constructor(fee: number) {
    this.transactionFee = fee;
  }

  // Abstract method to be implemented by specific payment methods
  abstract processPayment(amount: number): boolean;

  // Shared method to calculate total amount with transaction fee
  calculateTotalAmount(amount: number): number {
    return amount + this.transactionFee;
  }
}

// Specific implementation for credit card payments
class CreditCardPayment extends PaymentMethod {
  // Additional property specific to credit cards
  private cardType: string;

  constructor(fee: number, cardType: string) {
    super(fee);
    this.cardType = cardType;
  }

  // Implement payment processing specific to credit cards
  processPayment(amount: number): boolean {
    console.log(`Processing ${this.cardType} payment of ${amount}`);
    return true;
  }

  // Additional method for credit card-specific information
  getCardType(): string {
    return this.cardType;
  }
}

// Usage
const visaPayment = new CreditCardPayment(5, "Visa");
visaPayment.processPayment(100); // Processes payment
console.log(visaPayment.calculateTotalAmount(100)); // Includes transaction fee
```

### Key Takeaways:

- Allows creation of specialized payment methods
- Shares common functionality through base class
- Enables easy extension of payment processing capabilities

## 5. Polymorphism

### Objective: Geometric Shape Area Calculation System

**Goal**: Develop a flexible system for calculating areas of different geometric shapes with a uniform interface.

### Example Scenario:

A drawing or design application needs to calculate areas of various shapes dynamically, allowing easy addition of new shape types.

```typescript
// Abstract base class for geometric shapes
abstract class Shape {
  // Abstract method to calculate area
  abstract calculateArea(): number;

  // Shared method to describe the shape
  describe(): string {
    return `Area: ${this.calculateArea()}`;
  }
}

// Circle shape implementation
class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  // Specific area calculation for circle
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Rectangle shape implementation
class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  // Specific area calculation for rectangle
  calculateArea(): number {
    return this.width * this.height;
  }
}

// Usage demonstrates polymorphic behavior
const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];

// Each shape calculates area differently
shapes.forEach((shape) => {
  console.log(shape.describe());
});
```

### Key Takeaways:

- Allows different shapes to implement area calculation uniquely
- Provides a uniform interface for shape operations
- Enables easy addition of new shape types

## 6. Abstraction

### Objective: Flexible Data Storage Management System

**Goal**: Create a generic data storage system that allows seamless switching between different storage implementations without changing the core application logic.

### Example Scenario:

An application needs to store and retrieve data, with the ability to easily switch between local and cloud storage without modifying the main application code.

```typescript
// Interface defining data storage contract
interface DataStorage {
  save(data: string): void;
  retrieve(): string;
}

// Local storage implementation
class LocalStorageService implements DataStorage {
  private storageKey: string;

  constructor(key: string) {
    this.storageKey = key;
  }

  // Local storage save method
  save(data: string): void {
    localStorage.setItem(this.storageKey, data);
  }

  // Local storage retrieve method
  retrieve(): string {
    return localStorage.getItem(this.storageKey) || "";
  }
}

// Cloud storage implementation
class CloudStorageService implements DataStorage {
  private cloudEndpoint: string;

  constructor(endpoint: string) {
    this.cloudEndpoint = endpoint;
  }

  // Cloud-specific save implementation
  save(data: string): void {
    console.log(`Saving to cloud: ${data}`);
  }

  // Cloud-specific retrieve implementation
  retrieve(): string {
    return "Retrieved cloud data";
  }
}

// Data management class using abstraction
class DataManager {
  private storage: DataStorage;

  constructor(storage: DataStorage) {
    this.storage = storage;
  }

  // Process data using storage without knowing implementation details
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

### Key Takeaways:

- Decouples storage implementation from usage
- Provides a consistent interface for different storage methods
- Allows easy switching between storage types

## 7. Encapsulation

### Objective: Secure Financial Account Transaction Management

**Goal**: Develop a secure account system that controls access to financial data and ensures safe transaction processing.

### Example Scenario:

A financial application needs to manage account transactions with strict controls, preventing unauthorized access and maintaining a comprehensive transaction log.

```typescript
class SecureAccount {
  // Private properties for secure data management
  private balance: number;
  private transactionLog: string[] = [];

  constructor(initialBalance: number) {
    // Validate initial balance
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative");
    }
    this.balance = initialBalance;
  }

  // Controlled deposit method
  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this.balance += amount;
    this.logTransaction(`Deposit: ${amount}`);
  }

  // Controlled withdrawal method
  withdraw(amount: number): boolean {
    if (amount > this.balance) {
      this.logTransaction(`Failed withdrawal attempt: ${amount}`);
      return false;
    }
    this.balance -= amount;
    this.logTransaction(`Withdrawal: ${amount}`);
    return true;
  }

  // Private method for transaction logging
  private logTransaction(message: string): void {
    const timestamp = new Date().toISOString();
    this.transactionLog.push(`${timestamp}: ${message}`);
  }

  // Safe balance retrieval
  getBalance(): number {
    return this.balance;
  }

  // Controlled transaction history access
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

### Key Takeaways:

- Protects internal account state
- Provides controlled access to financial operations
- Maintains a secure transaction logging mechanism

## Conclusion

Object-Oriented Programming in TypeScript offers powerful techniques for creating robust, flexible, and maintainable software systems. By understanding these principles, developers can design more efficient and scalable applications.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues.

## License

[Specify your license here]
