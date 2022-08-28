// 1. Write a ts program to find maximum between two numbers.
var num1:number = 12;
var num2:number = 35;
var Input:string|null = prompt("Enter the First Number");
var num1:number = Number(Input);
console.log("The First number is",num1)

var Input:string|null = prompt("Enter the Second Number");
var num2:number = Number(Input);
console.log("The First number is",num2)
if(num1>num2)
{
    console.log("The First number is greater")
}
else{
    console.log("The Second number is greater")
}



//2. Write a ts program to find maximum between three numbers.
var num1:number = 25;
var num2:number = 12 ;
var num3:number = 55;
if(num1>num2 && num1>num3)
{
    console.log("The First number is greater")
}
else if (num2>num1 && num2>num3 ){
    console.log("The Second number is greater")
}
else{
    console.log("The Third number is greater")
}

//3. Write a ts program to check whether a number is negative, positive or zero.
var num:number = 13;
console.log(num)
if(num>0)
{
    console.log("The  number is Positive")
}
else if (num<0){
    console.log("The Number is Nagative")
}
else{
    console.log("The Number is Zero")
}



//4. Write a ts program to check whether a number is divisible by 5 and 11 or not.
// var divnum:number = 33;
var Input:string|null = prompt("Enter a number")
var divnum:number = Number(Input)
if(divnum%5==0)
{
    console.log("The  number is divisiable by 5")
}
else if (divnum%11==0){
    console.log("The Number is divisiable by 11")
}
else{
    console.log("The Number is not divisiable on 5 and 11")
}





//5. Write a ts program to check whether a number is even or odd.
var checknum:number = 12;
if(checknum%2==0)
{
    console.log("The  number is Even")
}
else {
    console.log("The Number is Odd")
}




//6. Write a ts program to check whether a year is leap year or not.

var UserInput:string|null = prompt("Enter the year");
var year:number = Number(UserInput);

if (year % 4 == 0) {

    console.log(`The ${year} is leap Year`)
    
} else {
    
    console.log(`The ${year} is not leap Year`)
}
// 7. Write a ts program to check whether a character is alphabet or not.
var Input:string|null = prompt("Enter a character")
var char:string = String(Input)
if(char>='a' && char<='Z' || char>='A' && char<='Z' )
{
    console.log("The character is alphabet")
}
else{

    console.log("The character is not alphabet")
}
// 8. Write a ts program to input any alphabet and check whether it is vowel or consonant.
var Input:string|null = prompt("Enter a character")
var char:string = String(Input)
if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {

    console.log("The alphabet is Vowel")

} else {
    console.log("The alphabet is Constant")

}
// 9. Write a ts program to input any character and check whether it is alphabet, digit or special character.
var UserInput:string| null =  prompt("Enter a character");
var ch:string = parent(UserInputr);

if (ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z') {
    
    console.log("Character is Alphabet")

} else if (ch >= '0' || ch <='9') {
    console.log("character is Digit")
}
else {
    console.log("character is a Special character")
}

// 10. Write a ts program to check whether a character is uppercase or lowercase alphabet.
var UserInput:string|null = prompt("Enter a character");
var char:string = String(UserInput);

if (char>='a' || char<= 'z') {
    
    console.log("The character is Lowercase");

} else {
    
    console.log("The character is Uppercase");

}

// 11. Write a ts program to input week number and print week day.
var UserInput:string|null = prompt("Enter the Week number");
var week:number = Number(UserInput);

switch (week){

    case 1:
    console.log("Monday")
    break;

    case 2:
    console.log("Tuesday")
    break;

    case 3:
    console.log("Wednesday")
    break;

    case 4:
    console.log("Thuesday")
    break;

    case 5:
    console.log("Friday")
    break;

    case 6:
    console.log("Saturday")
    break;

    case 7:
    console.log("Sunday")
    break;

    default:
    console.log("your Input is not correct")
    break;
}




// 12. Write a ts program to input month number and print number of days in that month.

var UserInput:string|null = prompt("Enter the Month number");
var month:number = Number(UserInput);

if(month==1){
    console.log("The month name is January and days is ")
}

// 13. Write a ts program to count total number of notes in given amount.

var UserInput:string|null = prompt("Enter the Amount");
var amount:number = Number(UserInput);

var note5000:number =  0;

var note1000:number= 0;

var note500:number = 0;

var note100:number = 0;

var note50:number = 0;

var note20:number = 0;

var note10:number = 0;

var note5:number = 0;

var note2:number = 0;

var note1:number = 0;
console.log("Total number of notes in amount");
if (amount>=5000){
    note5000 = amount/5000;
    amount -= note5000 * 5000;
   
}
if (amount>=1000){
    note1000 = amount/1000;
    amount -= note1000 * 1000;
   
}
if (amount>=500){
    note500 = amount/500;
    amount -= note500 * 500;
   
}
if (amount>=100){
    note100 = amount/100;
    amount -= note100 * 100;
   
} if (amount>=50){
    note50 = amount/50;
    amount -= note50 * 50;
    
}
if (amount>=10){
    note10 = amount/10;
    amount -= note10 * 10;
    console.log(`10 = ${note10}`);
}
if (amount>=20){
    note20 = amount/20;
    amount -= note20 * 20;
    console.log(`20 = ${note20}`);
}
else if (amount>=10){
    note10 = amount/10;
    amount -= note10 * 10;
    
}
 if (amount>=5){
    note5 = amount/5;
    amount -= note5 * 5;
   
}
if (amount>=2){
    note2 = amount/2;
    amount -= note10 * 2;
    
}
if (amount>=1){
    
    note1 = amount;
}
console.log(`5000 = ${note5000}`);
console.log(`1000 = ${note1000}`);
console.log(`500 = ${note500}`);
console.log(`100 = ${note100}`);
console.log(`50 = ${note50}`);
console.log(`10 = ${note10}`);
console.log(`5 = ${note5}`);
console.log(`10 = ${note10}`);


// 14. Write a ts program to input angles of a triangle and check whether triangle is valid or not.
var Userinput:any = prompt("Enter the First Angle")
var angle1:number = parseInt(Userinput)

var UserInput:string|null = prompt("Enter the Second Angle")
var angle2:number = parseInt(Userinput)

var UserInput:string|null = prompt("Enter the Third Angle")
var angle3:number = parseInt(Userinput)

var sum:number = angle1 + angle2 + angle3 ;

if (sum == 180 && angle1>0 && angle2>0 && angle3>0) {
    
    console.log("Triangle is valid")
} else {
    
    console.log("Triangle is not valid")
}

// 15. Write a ts program to input all sides of a triangle and check whether triangle is valid or not.
// 16. Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle.
// 17. Write a ts program to find all roots of a quadratic equation.

var UserInput:string|null = prompt("Enter the value of A")
 


// 18. Write a ts program to calculate profit or loss.

var UserInput:string|null = prompt("Enter your Selling price")
var sell_price:number = Number(UserInput);

    console.log("The Selling Price is ",sell_price);

var UserInput:string|null = prompt("Enter your Cost price")
var cost_price:number = Number(UserInput);

console.log("The Cost Price is ",cost_price);

var profit:number;
var  loss:number;

if(sell_price > cost_price){
    profit = sell_price - cost_price;
    console.log("Your profit is",profit);
}
else{

    loss = cost_price - sell_price;
    console.log("Your Loss is",loss);
}



// 19. Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

var UserInput:string|null = prompt("Enter Your Physics Marks")
var phymarks:number = Number(UserInput)

var UserInput:string|null = prompt("Enter Your Chemistry Marks")
var chmarks:number = Number(UserInput)

var UserInput:string|null = prompt("Enter Your Biology Marks")
var biomarks:number = Number(UserInput)

var UserInput:string|null = prompt("Enter Your Mathematics Marks")
var mathmarks:number = Number(UserInput)

var UserInput:string|null = prompt("Enter Your Computer Marks")
var compmarks:number = Number(UserInput)

var total:number;
var percentage:number 

total = phymarks + chmarks + biomarks + mathmarks + compmarks;
console.log("Total marks is",total);
percentage = (total/500)*100;
console.log("The Percentage of marks is",percentage)

if (percentage >= 90){

    console.log("Congratulation Your Grade is A")
}
else if(percentage >= 80){

    console.log("Congratulation Your Grade is B")
}
else if(percentage >= 70){
    
    console.log("Congratulation Your Grade is C")
}
else if(percentage >= 60){
    
    console.log("Congratulation Your Grade is D")
}
else if(percentage < 40){
    
    console.log(" Your Grade is F")
}
else{

    console.log("Your Input is not correct");

}







// 20. Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
var UserInput:string|null = prompt("Enter your basic salary")
var salary:number = Number(UserInput)
var Gross_Salary:number;
if (salary <= 10000) {
    
    salary += salary*20/100;
    salary += salary*80/100;
    Gross_Salary = salary;

    console.log("Your Gross Salary is ",Gross_Salary);
    
} else if (salary > 10000 && salary <= 20000  ){
    salary += salary*25/100;
    salary += salary*90/100;
    Gross_Salary = salary;
    console.log("Your Gross Salary is ",Gross_Salary);
}
else if (salary > 20000){
    salary += salary*30/100;
    salary += salary*95/100;
    Gross_Salary = salary;
    console.log("Your Gross Salary is ",Gross_Salary);
}
else {
    console.log("Your Input is not correct ");
}



// 21. Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
var UserInput:string|null = prompt("Please Enter Your Electricity Unit")
var unit:number = Number(UserInput)
if(unit<=50){
    unit = unit*0.50;
    unit += unit*20/100;
    console.log("The total Electricity bill is",unit)

}
else if(unit>50&&unit<=150){
    unit = unit*0.75;
    unit += unit*20/100;
    console.log("The total Electricity bill is",unit)

}
else if(unit>150&&unit<=250){
    unit = unit* 1.20;
    unit += unit*20/100;
    console.log("The total Electricity bill is",unit)

}
else{
    unit = unit* 1.50;
    unit += unit*20/100;
    console.log("The total Electricity bill is",unit)
}
