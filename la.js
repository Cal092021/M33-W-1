 
//let favFilms = ["The Heat", 
//"Room with a view", 
//"Spinal Tap", 
//"Jaws","American werewolf in London"];

//favFilms.push("Jurassic Park", "Bridget Jones");

//for(let i=0; i<5; i++){
    //console.log(favFilms, i)
//}


//for(let i=0; i<6; i++) {
    //console.log(Math.floor(Math.random()*50))
//}


//for(i=9; i>=0;i--) {
    //console.log(i);
//}

let films = ["The Heat", "Spinal Tap", "Bridget Jones", "Jurassic Park"];
let wantedFilm = films[2];

if (wantedFilm=="Ghostbusters") {console.log("Yay! It's Ghostbusters!")
    
} else {console.log("Boo!! We want Ghostbusters!")
    
};



for (let i = 0; i < 6; i++) {
    let randomNum = (Math.floor(Math.random()*30) + 1);
    if (randomNum % 7 == 0){
        console.log(`${randomNum} is divisible by 7`)
    }else{
        console.log(`${randomNum} is not divisible by 7`)
    }
}    

let Bob = ["Jane", "Jose", "Linda", "Harold"];
let Hannah = ["Arthur", "Costas", "Linda", "Harold"];

for (let i = 0; i < Bob.length; i++) {
    for (let j = 0; j < Hannah.length; j++) {
        if(Bob[i]==Hannah[j] ){
            console.log(Bob[i], Hannah[j])
        }
    }
}






