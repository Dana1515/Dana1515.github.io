//1

let town="Tula";
let country="Russia";
let number=500000;
let stadium=true;
console.log(town,",", country, ",", number);


if(stadium==true){
    console.log("Стадион есть");
}

//2

let a=40;
let b=70;
let s= a*b;
console.log(s);

//3

let v1=95;
let v2=114;
let t=2;

let s1 = v1*t; // расстояние, пройденное первым автомобилем за 2 часа
let s2 = v2*t; // расстояние, пройденное вторым автомобилем за 2 часа
let s3= s1+s2; // расстояние между городами
console.log("Расстояние между городами-", s3,"км")

//4

const randomNumber = Math.floor(Math.random() * 100);

if (randomNumber<20){
    console.log("randomNumber меньше 20");
}

if (randomNumber>50){
    console.log("randomNumber больше 50");
} 
else{
    console.log("randomNumber больше 20, но меньше 50");
}

//5

switch(randomNumber){
    case (randomNumber<20):
        console.log("randomNumber меньше 20");
        break;
    case (randomNumber>50):
        console.log("randomNumber больше 50");
        break;
    default:
        console.log("randomNumber больше 20, но меньше 50");

}

