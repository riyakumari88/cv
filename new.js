let total  =0, count=1;
while(count <=10){
    total += count;
    count +=1;
}
console.log(total);

function factorial(n){
    if(n== 0){
        return 1;
    }
    else{
        return factorial(n-1)*n;
    }
}
console.log(factorial(8));
console.log("THis is the first line\n And this is  the second");
console.log("A newline character is like\"\\n\".");
console.log("r"+"i"+"y"+"a");
console.log(`half of 100 is ${100/2}`);
console.log(typeof 3);
console.log(typeof "x");
console.log(-(10 -3));
console.log(3 < 8);
console.log("riya" > "priyanshu" );
console.log(NaN == NaN);
//and boolrean operator
console.log("And operator");
console.log(true && true);
console.log(true && false);
// or operator 
console.log("Or opertor");
console.log(false || false);
console.log(true || false);
console.log(1+1==2&& 10*10 >50);
console.log(true ? 1:2);
console.log(false ? 1:3);
console.log(0 == false);
console.log(" " == false);
console.log(" " !== false);
console.log(" " === false);
console.log(null || "res0");
console.log("asa" || "res0");
console.log(0 || -2);
console.log(NaN || -1);
console.log("" || "!");



