// Exercise 1
// Define the list of transactions
const transactions = [100, 200, 300, 400];

// Define the transaction fee and interest rate
const transactionFee = 3;
const interestRate = 0.01;

// Calculate the total cost
const totalCost = transactions.reduce((acc, cur) => acc + cur, 0) * (1 + interestRate) + transactions.length * transactionFee;

// Print the total cost
console.log(`Maria's total cost for the month is $${totalCost.toFixed(2)}`);


//Exercise  2
//Ed would like a way to input 3 names of his friends.
    const name1 = ("Lolly");
    const name2 = ("Josh");
    const name3 = ("Mary");
    const greeting = "Welcome " + name1 + ", " + name2 + ", " + name3 + "!";
    console.log(greeting);


//Ed would like to create a function that takes in a birth year and returns the age.

function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
}
const birthYear = 1990;
const age = calculateAge(birthYear);
console.log(age);

//Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.



//Exercise 3
