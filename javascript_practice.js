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
    const birthYear1 = 1989
    const birthYear2 = 1990
    const birthYear3 = 1992
const age = calculateAge(birthYear);
console.log(age);

//Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.
// function greetFriendsWithAge (name1, birthYear1, name2, birthYear2, name3, birthYear3) {
    const age1 = calculateAge(birthYear1);
    const age2 = calculateAge(birthYear2);
    const age3 = calculateAge(birthYear3);
    console.log(`Welcome ${name1}, you are ${age1}.`);
    console.log(`Welcome ${name2}, you are ${age2}.`);
    console.log(`Welcome ${name3}, you are ${age3}.`);
//   }


//Exercise 3
// Challenge Yourself
// A teacher wants to create a rubric for grading. The rubric is from 0 - 11.

// Part 1
// A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.

// Part 2
// A student has an excellent grade if they score higher than 8. Add on to your function to print out "Excellent" for scores greater than 8.

// Part 3
// A student has a perfect grade if their score is 11. Add on to your function to print out "Perfect" for a score of 11.

