function start() {

    /*
        read/watch the associated reference and complete the directions in the comments.

    */


    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */


    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Use console.log() to 
       display both the equation and the results. 
    */
   let firstNum = 7;
   let secondNum = 8;
   let surpriseString = "Adding 7 and 8 onto a string results in 7 + 8 = " + firstNum + secondNum;
   console.log(surpriseString);


    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */


    // Demonstrate the use of toString()


    let number = 10;
    console.log(`After using .toString(), the number ${number} of type ${typeof(number)} is now of type ${typeof(number.toString())}`);


    // Demonstrate the use of toExponential()


    let pi = 3.14159;
    console.log(`After using .toExponential(2), the number ${pi} is now ${pi.toExponential(2)}`);


    // Demonstrate the use of toFixed()


    console.log(`After using .toFixed(2), ${pi} is now a nice ${pi.toFixed(2)}`);


    // Demonstrate the use of toPrecision()


    console.log(`.toPrecision(2) changes ${pi} to ${pi.toPrecision(2)}`);


    // Demonstrate the use of parseFloat()


    let string = "10.444";
    console.log(`The number ${string} is of type ${typeof(string)}, but after parseFloat() it is a ${typeof(parseFloat(string))}`);


    // Demonstrate the use of parseInt()


    console.log(`parseInt() changes the number ${string} of type ${typeof(string)} to the number ${parseInt(string)} of type ${typeof(parseInt(string))} `);


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In a comment explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */


    /*
    Answer: The difference between == and === is that === is a strict comparison operator,
    meaning the type of something is checked as well. For example:


    let x = 10;
    let y = "10";
    console.log(x == y);

    ^ this will return true because they contain the same value, even though they're different types


    but if you do:
    console.log(x === y);

    ^ this will return false, because one is a string and one is not
    */


    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In a comment describe the order of precedence for and / or operators


    /*

        Answer: In JavaScript, the AND && operator is always evaluated before the OR || operator

    */


    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement


    let animal = "Bear";
    switch ( animal ) {
        case "Fish":
            console.log("Fish");
            break;
        case "Bear":
            console.log("Bear");
            break;
        default:
            console.log("Possibly an animal");
            break;
    }


    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator


    let isLovingJavaScript = true;
    let consoleStatement = "";
    isLovingJavaScript ? consoleStatement = "Loving JavaScript" : consoleStatement = "Struggling with JavaScript";
    console.log(consoleStatement);


}

