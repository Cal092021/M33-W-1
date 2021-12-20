//const me ={
    //name: "Alex",
    //age: 25,
    //favSongs: ["The Chain", "Dreams", "Love & Pride"]
//};
//me.name
//console.log(me.name);
//console.log(me.favSongs)
//if(me.name=="Alex");
//{console.log(me.favSongs)}

//task 1


let name1 = "Susan"

const sayHi = (name) => {
    console.log(`Hi my name is ${name1}`);
}


console.log(sayHi())


// create a function called sayHi, and when it's called should return function, "Hi, my name is {this.$name}"

let meal = "";
let time = 11;
const pet={
    name: "Harley",
    typeOfPet: "cat",
    age: 10,
    colour: "Tabby",
    snackTime:"Your pet is eating dreamies",
    lunchTime:"Your pet is having lunch",
    afternoon:"Your pet is having a drink of water",
};
if(time<12){meal = pet.snackTime;
console.log(pet.snackTime);}
else if(time>12){meal = pet.lunchTime;
console.log(pet.lunchTime);
}

let choice = "coffee";
let choice1 = "orange";
let cost = 2.50;
let cost1 = 3;
let sum = cost+cost1;
let choice2 = "toastie";
let choice3 = "soup";


const coffeeShop={
    branch:"Frodsham",
    coffee:"Cappuccino",
    cappuPrice: 2.50,
    orange: "orange juice",
    orangePrice: 3,
    toastie: "Cheese and tomato toastie",
    soup: "tomato soup",
    toatiePrice: 5,
    
    
    drinksOrdered:  `Your drinks order is ${choice} and ${choice1}`,
    foodOrdered:  `Your food order is ${choice2} and ${choice3}`,
    totalCosts: `That will cost £${sum}`,
};

console.log(coffeeShop.drinksOrdered);
console.log(coffeeShop.totalCosts);
console.log(coffeeShop.foodOrdered);
console.log(coffeeShop.orange);


