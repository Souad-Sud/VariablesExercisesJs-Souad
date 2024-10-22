// Exercise 1 - initialise these variables

const FUTURE_YEAR = 2045; // don't change this
let firstName;
let birthYear;

// write your code here :
firstName = "Souad";
birthYear = 1990;


// Work out your age in 2045.
let futureAge;
// write your code here :
futureAge = birthYear - FUTURE_YEAR;

// Exercise 2 - Initialise the 'type' variables to show their type

let firstNameType;
let birthYearType;
let futureAgeType;
let firstNameBirthYear = firstName + birthYear;
let firstNameBirthYearType;

// write your code here :
 
firstNameType = "string";
birthYearType = "number";
futureAgeType = "number"
firstNameBirthYearType = " string + number"
 
 


// Exercise 3

let numbersFirst;
let stringFirst;

// write your code here :
numbersFirst = birthYear + FUTURE_YEAR + firstName;
stringFirst = firstName + birthYear + FUTURE_YEAR;



// Exercise 4 - you'll need to add a const and initialise these variables
// From now on add the initialisation on the same line as the declaration of variables

const CupCoffeePerDay = 3;

let fiveDays;
let thirtyDays;
let oneYear;
let fiveYears;

fiveDays = CupCoffeePerDay  * 5;
thirtyDays = CupCoffeePerDay * 30 ;
oneYear = CupCoffeePerDay * 365;
fiveYears= CupCoffeePerDay * 5 * 365;

// Exercise 5 - you'll need another const

const CoffeeCosts = 42;

let fiveDaysCost; 
let thirtyDaysCost;
let oneYearCost;
let fiveYearCost;

fiveDaysCost = fiveDays * CoffeeCosts;
thirtyDaysCost = thirtyDays * CoffeeCosts ;
oneYearCost = oneYear * CoffeeCosts;
fiveYearCost = fiveYears * CoffeeCosts;


// Exercise 6 - you'll need another CONST

const CoffeeInTwoYears = 52;

let fiveYearCostInflation;
//Current cost of coffee is 42 per/cup
//Nomber of cups per day is 3;
//Daily cost is 3 * 42 = 126 per/day
//Annual cost is 126 * 365 = 45990 per/year

//In 2 Years will be 2 * 45990 = 91980
//After 2 years cost will be 52
//nomber of   3 * 52 = 156 cup/day 
//In one year 156 * 365 = 56940
//in 3 years will be 3 * 56940 = 170820

//the we add 2Years +  3Years to have 5Years 
//91980 + 170820 

//(2*(126*365)) + (3*(156*365)) = 262800


fiveYearCostInflation = (2*(126*365) + (3*(156*365)));

// Excercise 7
/* 
Remember "textContent" from the lecture?
Edit the html file to add what you need, then write JS below to target that element 
*/

// write your code here :


document.getElementsByTagName("div"[6]).textContent = "this is a text";
 

// Exercise 8
/* 
No help on this one. Write the html element you need in the html file and the JS to target it 
*/

// write your code here :

let priceAfterTwoYears;
priceAfterTwoYears = CoffeeInTwoYears * CupCoffeePerDay * (2*365);
 
document.getElementById('total-cost').textContent = priceAfterTwoYears;

/* *********************************************************************************** */
/* DO NOT TOUCH ANYTHING BELOW HERE */
/* *********************************************************************************** */

// Excercise 1
document.querySelector('h1').textContent = "Variables by " + firstName;
document.getElementById('first-name').textContent = firstName;
document.getElementById('birth-year').textContent = birthYear;
document.getElementById('future-age').textContent = futureAge;

// Exercise 2
document.getElementById('first-name-type').textContent = firstNameType;
document.getElementById('birth-year-type').textContent = birthYearType;
document.getElementById('future-age-type').textContent = futureAgeType;
document.getElementById('name-birth-year-type').textContent = firstNameBirthYearType;

// Exercise 3
document.getElementById('numbers-first').textContent = numbersFirst;
document.getElementById('string-first').textContent = stringFirst;

// Exercise 4
document.getElementById('five-days').textContent = fiveDays;
document.getElementById('thirty-days').textContent = thirtyDays;
document.getElementById('one-year').textContent = oneYear;
document.getElementById('five-years').textContent = fiveYears;

// Exercise 5
document.getElementById('five-days-cost').textContent = fiveDaysCost;
document.getElementById('thirty-days-cost').textContent = thirtyDaysCost;
document.getElementById('one-year-cost').textContent = oneYearCost;
document.getElementById('five-year-cost').textContent = fiveYearCost;

// Exercise 6
document.getElementById('five-year-cost-inflation').textContent = fiveYearCostInflation;


 
