//var prompt = prompt("Enter your age");
const clickMe = document.getElementById("click");
const reset = document.getElementById('set');

function leapYear(age){
    result = (age / 4) * 366
    return result;
}
clickMe.addEventListener('click',function event(){
    
    var age  = prompt("Enter your age: ");
    
    

var leapAge = leapYear(age);
var ageWithoutLeapYear = (age - (leapAge / 366)) * 365;
var finalAgeinDays = ageWithoutLeapYear + leapAge;
console.log(finalAgeinDays);
if (finalAgeinDays !== 0) {
    document.getElementById('paragraph').innerHTML='I\'m sure your age is a number kindly enter the number';
}
if(finalAgeinDays >0 ){
    document.getElementById('paragraph').innerHTML='This is your age in days' + ' '+ finalAgeinDays + ' days';
}
})
reset.addEventListener('click', function Reset(){
    document.getElementById('paragraph').innerHTML="";
})




  