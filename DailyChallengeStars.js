/*
Write a JavaScript program that recreates the pattern below.
Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
Do this Daily Challenge by youself, without looking at the answers on the internet.

*  
* *  
* * *  
* * * *  
* * * * *
* * * * * *

*/

//  first by using one loop

let indice1=0;
var etoile1="";
do{
    etoile1+=" * ";
    console.log(etoile1);
    indice1++;
}
while(indice1<6);

//  second by using two nested for loops loop
var etoile2=""
for (let i=0;i<=5;i++){
    for(let j=i+1;i<j;j--){
        etoile2+=" * ";
    }
    console.log(etoile2);
}