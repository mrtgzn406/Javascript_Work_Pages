
      // * 1.) Number: Floating  point numbers > used for decimals and integers
      let age = 23;

      // * 2.) String: Sequence of characters > used for text
      let firstName = "murat";

      // * 3.) Boolean: Logical type can only be true or false > used for taking decisions
      let itsRight = true;

      // * 4.) Undefined: A variable that defined but doesn't have a value
      let children;

      // * 5.) Null: İt is 'empty value' either but not same as Undefined
      let murat = null;

      // * 6.) Symbol(ES2015): Value that is unique and cannot be changed (Not useful for now)

      // * 7.) BigInt(ES2020): Large integers that can hold larger numbers than number type

      // ! in javascript value has data type not variable. That's why when you turn a string into a integer, data type automatically be changed by javascript. So we can assign a new value with different data type to the same variable without a problem.

      let degisebilir = "ben";
      console.log(typeof degisebilir);

      degisebilir = 101;
      console.log(typeof degisebilir);

      // * What is the Dynamic typing
      // todo in this section we changed degisebilir's data type by changing its value from "ben" to 101 number. And we printed their data types by in the console. This property is called "Dynamic Typing" in javascript

      //  * Undefined and Null data types

      var tanimlanmayan;
      console.log(tanimlanmayan);
      console.log(typeof tanimlanmayan);

      var gecersiz = null;
      console.log(gecersiz);
      // * when we print the gecersiz variable,  it showed "null" in the console and it's true.
      // * but when we print the gecersiz variable with typeof function it showed  "object" in the console and it is regarding as a bug or error in javascript. Keep it in your mind !
      console.log(typeof gecersiz);

      // ****************************************

      // Note: javascript codes run from left to right. That's why: 
      
      // if you try to concenate the firstly string and secondly two numbers; javascript make write all those things as a string with their original form. Example below:
      murat = "benim adım murat " + 60 + 40;
      console.log(murat);  

      //  But if you try to concenate firstly two number and secondly  a string, those two number will be calculated and returns the calculated result then it will tie with string and as a result we get a string expression.

      murat2 = 60 + 40 + " benim adım murat";
      console.log(murat2);

