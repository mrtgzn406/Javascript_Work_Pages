
      // * we will learn truth and falsy values today.

      // ? What is falsy values

      // TODO falsy values are saw as false in javascript.
      // TODO That's why  0, '' , undefined, null, NaN  are falsy values.

      murat = 0;
      murat = NaN;
      murat = null;
      murat = undefined;
      murat = "";

      console.log(typeof murat);

      if (murat) {
        console.log("murat değişkeni için true döndürür");
      } else {
        console.log("murat değişkeni için false döndürür");
      }

      // ? What is truthy values

      //TODO truthy values are saw as true in javascript. this range of thing is reaching all statements both string and numbers except falsy values and false  boolean type.

      gözen = true;
      gözen = "haydar";
      gözen = 15496;

      console.log(typeof gözen);

      if (gözen) {
        console.log("gözen değişkeni için true döndürür");
      } else {
        console.log("gözen değişkeni için false döndürür");
      }

      // ****************************************************************************************************

      // in this section we will demostrate detailed falsy and truthy values in so many conditions with a function 

      function truthy_or_falsy (parameter){
             if (parameter) {
                 console.log(`${parameter} value returned ------>True`);
                } else {
                    console.log(`${parameter} value returned ------>False`);
                }
            }
            
            
        truthy_or_falsy(false);
        // the boolean value of false absolutely returns false 
        
        truthy_or_falsy(0);
        // 0 as a number, returns false
        
        truthy_or_falsy(-0);
        // -0 as a number, returns false
            
            truthy_or_falsy("");
        // empty string expression like  "", '' or  `` returns false

        truthy_or_falsy(null);
        // the absence of any value returns false
        
        truthy_or_falsy(undefined);
        // undefined values returns false
        
        truthy_or_falsy(NaN);
        // "Not a Number" values returns false 
        
        // truthy_or_falsy(document.all);
        // document.all  object returns false. 
        
        console.log("EXTRA EXAMPLES OF FALSY and TRUTHY VALUES");
        
        truthy_or_falsy(0.000000);
        // if the fractions of a zero number (0) also are zero like example above. It returns false.
        truthy_or_falsy(0.0094);
        // if the fractions of zero number (0) has some number greater than 0, then it returns true
        // ---------------------------------------------------------------------------------------------------

        truthy_or_falsy(-0.0000);
        // if the fractions of minus zero numbers (-0) are also completely 0, then it return  false.

        truthy_or_falsy(-0.5743);
        // if the fractions of minus zero number (-0) has some values which greater than zero, it returns true
        // ---------------------------------------------------------------------------------------------------
        
        truthy_or_falsy(0n);
        // the BigInt zero (0n) returns false. 
        truthy_or_falsy(64n);
        // the BigInt number returns true except 0 .
        // ---------------------------------------------------------------------------------------------------

        truthy_or_falsy(0x0000n);
        // if the fractions of BigInt zero (0x00n) also are completely zero, then it returns false.
        truthy_or_falsy(0x0646n);
        // if the fractions of BigInt zero (0x00n) greater then zero, then it returns true.
        // ---------------------------------------------------------------------------------------------------
        
        truthy_or_falsy(-0n);
        // the minus BigInt zero (0n) returns false.
        truthy_or_falsy(-89n);
        // teh minus BigInt number retuns true except 0. 
        // ---------------------------------------------------------------------------------------------------
        
        truthy_or_falsy(-0x00n);
        // if the fractions that came after minus BigInt zero(-0n) are completely zero it returns false.
        truthy_or_falsy(-0x0064n);
        // if the fractions that came after minus BigInt zero (-0n) are not completely zero it returns true.

        // ---------------------------------------------------------------------------------------------------
        truthy_or_falsy({});
        // {} mark returns true, and it is an object when we write its type to the console.
        console.log(typeof({}));

        truthy_or_falsy([]);
        // [] mark returns true, and it is an object when we write its type to the console.
        console.log(typeof([]));

