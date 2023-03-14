// Exercise 1
const paymentCount = total => ((total * 0.01) + 3) + total
console.log (`Total price, fee included = ${paymentCount(1000)} dollars`)

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
function greetFriendsWithAge (name1, birthYear1, name2, birthYear2, name3, birthYear3) {
    const age1 = calculateAge(birthYear1);
    const age2 = calculateAge(birthYear2);
    const age3 = calculateAge(birthYear3);
    
    console.log(`Welcome ${name1}, you are ${age1}.`);
    console.log(`Welcome ${name2}, you are ${age2}.`);
    console.log(`Welcome ${name3}, you are ${age3}.`);
  }
greetFriendsWithAge( 'a', 1982, 'b', 1999, 'c', 1988)

//Exercise 3
// Challenge Yourself
// A teacher wants to create a rubric for grading. The rubric is from 0 - 11.
  
// Part 1
// A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.
// const prompt = require ("prompt-sync")
function calculateGrade() {
    let score = Number ("Enter your score:")
    let grade = "";
    if (score >= 5) {
        grade = "true"
    } else if (score >=4) {
        grade = "false"
    }
    return grade;
}
    console.log(calculateGrade())
// Part 2
// A student has an excellent grade if they score higher than 8. Add on to your function to print out "Excellent" for scores greater than 8.
if (score >= 8) {
    grade = "Excellent"
}


// Part 3
// A student has a perfect grade if their score is 11. Add on to your function to print out "Perfect" for a score of 11.
if (score >= 11) {
    grade = "Perfect"
}
