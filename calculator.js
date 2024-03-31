let clear = document.querySelector(".clear");
let back = document.querySelector(".back");
let percentage = document.querySelector(".percentage");
let divide = document.querySelector(".divide");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let multiply = document.querySelector(".multiply");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let minus = document.querySelector(".minus");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let plus = document.querySelector(".plus");
let change = document.querySelector(".change");
let zero = document.querySelector(".zero");
let point = document.querySelector(".point");
let equal = document.querySelector(".equal");
let input = document.querySelector(".input");
let str="";
let displayAns = document.querySelector(".display-ans");
nine.addEventListener("click", function(){
    str+=9;
    input.innerText = str;
});
eight.addEventListener("click", function(){
    str+=8;
    input.innerText = str;
});
seven.addEventListener("click", function(){
    str+=7;
    input.innerText = str;
});
six.addEventListener("click", function(){
    str+=6;
    input.innerText = str;
});
five.addEventListener("click", function(){
    str+=5;
    input.innerText = str;
});
four.addEventListener("click", function(){
    str+=4;
    input.innerText = str;
});
three.addEventListener("click", function(){
    str+=3;
    input.innerText = str;
});
two.addEventListener("click", function(){
    str+=2;
    input.innerText = str;
});
one.addEventListener("click", function(){
    str+=1;
    input.innerText = str;
});
zero.addEventListener("click", function(){
    str+=0;
    input.innerText = str;
});
point.addEventListener("click", function(){
    str+=".";
    input.innerText = str;
});
clear.addEventListener("click", function(){
    str="";
    input.innerText = "";
    displayAns.innerText = "";
});
plus.addEventListener("click", function(){
    str+="+";
    input.innerText = str;
});
minus.addEventListener("click", function(){
    str+="-";
    input.innerText = str;
});
multiply.addEventListener("click", function(){
    str+="*";
    input.innerText = str;
});
divide.addEventListener("click", function(){
    str+="/";
    input.innerText = str;
});
percentage.addEventListener("click", function(){
    str+="%";
    input.innerText = str;
});
equal.addEventListener("click", function(){
    let result = new Function('return ' + str)();
    displayAns.innerText = "= " + result;
    
});
