
        "use strict";
        // Short Circuiting
        //Short circuit operators are used to indicate which value sabotage the condition. And there are two type of short circuit operator.

        // || (or) operator
        console.log( "murat" || "ahmet" || undefined || -0 );
        // if we use or operator in this way. This operator returns the first truthy value's itself. Because remember if we use OR operator then a truthy value is enough to make this condition above returns "true" , so if contion is true it means whole condition is "true". That's why Or (||) operator only returns truthy values because one true value makes all condition true. But if there isn't any truthy value then it returns the last falsy value.

        console.log( 0 || "second value" || 0 ||"third value"|| -0);
        // if we only write truthy values in short circuiting OR (||) operator, it will return the first truthy value.
        
        
        // && (and) operator
        console.log("murat" && "ahmet" && 0 && 25 && undefined );
        // if we use and operator in this way. This operator returns the first falsy value's itself. Because remember when we use and operator, we know that if all conditions are true then this expression above returns "true", otherwise it will return "false".  Because if one of them is false then expression returns false no matter how many truthy values are there.
        
        console.log("yasin" && true && "muhammed" && 6 && 25 );
        // if we write only falsy values in short circuiting AND (&&) operator, then it will return the last falsy value
        

        // BRİEFLY: 
        // In short circuiting process OR (||) operator returns the  first truthy value, if all values are falsy in expression, then it will return the last falsy value in the expression. So, you know that this expression result is whether true  or false finally.

        // In short circuiting process AND (&&) operator returns the first falsy value, if all values are truthy in expression, then it will returns the last truthy value in the expression. So you know that this expression result is whether  true or false finally
