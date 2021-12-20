//const pressGrindBeans = () => {
    //console.log("Grinding for 20 seconds");

//}
//pressGrindBeans();

let coffeeIsGrinding = false;

const pressGrindBeans = () => {
if (coffeeIsGrinding) {
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
}
else {(console.log("grinding is about to begin"));
coffeeIsGrinding = true;
}
}
pressGrindBeans()

let accnumber = 50449921

const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account 4{accnum}`);
    }
cashWithdrawal(300, 50449921);
cashWithdrawal(30, 50449921);
cashWithdrawal(200, 50447921);

const addUp = (num1, num2) => {
    return num1 + num2;

}
addUp(7, 3);
console.log(addUp(2, 5));

const factorial = (n) => {
    if((n===0) || (n===1)){
        return 1;
    }else{return (n*factorial(n-1));
    }
}
console.log(factorial(33));

let orderCount = 0;

const takeOrder = topping => {
    console.log(`Pizza with ${topping}`);
    orderCount++;
}
takeOrder("pineapple")
takeOrder("olives and feta")

newFunction();

function newFunction() {
    const orderTotal = orderCount++; {
        console.log(orderTotal)
    }
};


let pin = 2345
let balance = 5000

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
readline.question("Please input pin", pin1 => {
console.log("Thank you");

readline.close()
})


let pin1 = 2345
let balance1 = 6000
let amount = 500
let newAmount = balance1-amount

const cashMachine = (pin1, amount) => {
    if(pin1!=2345) {console.log("Incorrect pin")}
    if(amount>=6000) {console.log("Insufficient funds");}
    else{console.log(`withdrawing ${amount}`)
        console.log(`New balance is ${newAmount}`);
    }
}
 
 cashMachine(pin1, amount)
 cashMachine(4567, 6000)
 cashMachine(2345, 7000)


