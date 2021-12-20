let offer ="none";
let time =1200;

const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Cappuccino",
        "Latte",
        "Filter",
        "Tea",
        "Hot chocolate"
    ],
breakfastOffer:"free croissant with coffee",
lunchOffer: "free drink with sandwich",
noOffer: "sorry, no offer"

};
console.log(cafe.openCafe())

console.log(cafe.closeCafe)

if (time<100){
    offer = cafe.breakfastOffer;
    console.log(cafe.breakfastOffer);
    }
else if(time<1500){
    offer = cafe.lunchOffer;
    console.log(cafe.lunchOffer);
}

const me ={
    name: "Alex",
    age: 25,
    favSongs: ["The Chain", "Dreams", "Love & Pride"]
};
me.name
console.log(me.name);
console.log(me.favSongs)
if(me.name=="Alex");
{console.log(me.favSongs)}