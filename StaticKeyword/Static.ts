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