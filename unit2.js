let rohan = 5+11;
console.log(rohan);
console.log(rohan * rohan);
let mood = "helllo";
console.log(mood);
mood= "might be used again";
console.log(mood);//but here we are not able to 
//remember the  previous values 
let money =150;
money = money - 13;
console.log(money);

let ony =1;
ony = ony + undefined;
console.log(ony);
console.log(Math.max(2,5));
console.log(Math.min(2,4)+23);
// let theNumber =Number(prompt("Pick A number"));
// console.log("your number square " + theNumber *theNumber);

//conditional Exeqution
// let theNumber  =Number(prompt("pick a number"));
// if(!Number.isNaN(theNumber)){
// console.log("your number is the root of "+ theNumber*theNumber);
// }

if(1+ 1 ==2)
console.log("It's true");
// let num =Number(prompt("Pick a number"));

// if(num<10){
//    console.log("small");
// }
//  else if(num<100){ 
//  console.log("Medium ");
//  }
// else{
//   console.log("Large");
//}

let number =0;
while(number<12){
    // console.log(number);
    number = number +2;

} console.log(number);


let result=1;
let count=0;
while(count<10){
     result= result*2;
     count =count+1;

}
console.log(result);

// let yourName;
// do{
//  yourName= prompt("enter the name");
// }while(!yourName);
// console.log(yourName); let yourName;
//riya
if(false!= true){
    console.log("That makes sense ");
    if(1 <2){
        console.log("No suprise there.");
    }
}
//for loop
for(let number=1; number<19; number++){
    console.log(number);
}

for(let current= 20 ; ; current =current +1){
 if(current%7==0){
    console.log(current);
    break;
 }
}
switch ("what is the weather"){
    case "rainy":
        console.log("Remember to bring an umbrella");
        break;
        case "sunny":
            console.log("Go outside");
            break;
        case "cloudy":
            console.log(" dress well");
            //break;
         default:
            console.log("unkown weather  type!");
            break;
}
let  a= "somwdha jha";
console.log(a.length);
//Exercise questions
 let co=1 ;
 while(co<3){
    let j=1;
    while(j<=co){
console.log(co)
j++;
    }
co++;

 }

//  const square = function(x){
//     return x*x;
//  };

//  console.log(square(12));

//  const makeNoise =function(){
//     console.log("Pling!");
//  };

//  makeNoise();

const pow= function(base, exponent){
    let result =1;
    for(let count =0;count<exponent; count++){
        result*= base;
    }
    return result;
};
 console.log(pow(2, 8));

 let x=10;
 if(true){
    let y= 20;
    var z=30;
    console.log(x+y +z);
 }

 console.log(x+z);

 const halve = function(n){
    return n/2;
 };

 let n=10;
 console.log(halve(100));
 console.log(n);

 //nested scope
 // one way of writing a function
 const hummus = function(factor){
    const ingredient = function(amount , unit, name){
        let ingredientAmount = amount * factor;
        if(ingredientAmount >1){
            unit +="s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2,"tablespoon", "olive oil");
    ingredient(0.5 ,"teaspoon","cumin");
 };

//  let launchMissiles = function(){
//     missileSystem.launch("now");
//  };
//  if(safeMode){
//     launchMissiles = function()
//     {/* do nothing */};
//  }

 //Declaration notataion
 function square(x){
    return x*x;
 }
 console.log("square of ", square(2));

 console.log("The future says",future());

 function future(){
    return "you will never have flying cars";
 }

 //ARROW function
 //2nd way of representing function
 const power =(base , exponent) =>{
    let result =1;
    for(let count =0; count<exponent; count++){
        result *=base;
    }
    return  result;
 };

 const sq1 =(x) => {return x*x;};
 const sq2 =x => x+x;
 console.log("square is",sq1(2));
 console.log("added value is ",sq2(4));

 const horn =() =>{
    console.log("toot");
 };
 console.log("hit it",horn);
 console.log("hit it",horn());

 //the calls stack
 function greet(who){
    console.log("Hello"+" "+who);
 }
 greet("Harry");
 console.log("Bye");


 //OUT OF STACK Condition : when two functions 
 //are calling continously
//  function chicken(){
//     return egg();
//  }
//  function egg(){
//     return chicken();
//  }
//  console.log(chicken() +"came first.");

//Optonal argument 
function square(x){
    return x*x;
}
console.log(square(4,true,"hedgehog"));
console.log(square(true,5,"fudgh")+"as the first elemrnt of the argument is true ,output is 1");
console.log(square(false,5,"j")+"as the first arrgument is falseso output will be 0");
console.log(square("f",4,true)+" as we have passed a character oput is NaN");

function minus(a,b){
    if(b=== undefined) return -a;
    else return a-b;
}
console.log(minus(10));
console.log(minus(3,4));
console.log(minus(NaN,3));
console.log(minus(NaN));

function power1(base, exponent =2){
    let result= 1;
    for(let count =0; count<exponent; count++){
        result *= base;
    }
    return result;
}
console.log(power1(4));
console.log(power1(2,6));

console.log("c","O",2);
