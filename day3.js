let coffeeOrder = [
    "Alex = Cortado",
    "Ben = Cortado",
    "Charlie = Whatever's new"];
    coffeeOrder.push("Donna = espresso");
    
    console.log(coffeeOrder)
    


//let favSongs = [
    //"King = Love and Pride",
    //"Fleetwood Mac = Dreams",
    //"Kishi Bashi = This must be the place"
//];

//console.log(favSongs)

//let favSongs = [
    //"King = Love and Pride",
    //"Fleetwood Mac = Dreams",
    //"Kishi Bashi = This must be the place"
//];
//favSongs.push("The Smiths = Stop me if you think you've heard this one before",
//"Cream = Strange brew")
//console.log(favSongs)

let favSongs = [
    "King = Love and Pride",
    "Fleetwood Mac = Dreams",
    "Kishi Bashi = This must be the place"
];
favSongs.push("The Smiths = Stop me if you think you've heard this one before",
"Cream = Strange brew")
favSongs.pop()
console.log(favSongs)

let myShoppingList = ["Bread", "Milk", "onions","carrots"];
let newList = myShoppingList.shift()

console.log(`myShoppingList after:`, myShoppingList)

let favDrinks = ["hot chocolate", "tea", "orange juice"];

console.log(favDrinks[0]);
console.log(favDrinks[1]);
console.log(favDrinks[2]);

for (let i = 0; i<favDrinks.length;i++){console.log(favDrinks[i]); 
}

//let multiplesTwo = [];
//for(let i=0; i<20;i++){
    //if(i%2==0){
        //multiplesTwo.push(i);

//console.log(`Numbers divisible by 2 between 0 and 20 are ${multiplesTwo}.`);

//let age = 15

//while(age < 18) {
    //console.log("you're a child!")
    //age++
//}

//console.log("you're an adult!");
    //}
//}

let cards = ["diamond", "spade", "Heart", "club"];
let currentCard = "club";
while(currentCard != "spade") {
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);
