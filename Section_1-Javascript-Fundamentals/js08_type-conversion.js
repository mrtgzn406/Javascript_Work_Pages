
      const presentYear = "2022";

      const birthYearOfMurat = 1998;

      console.log(
        `Murat Gözen is now ${
          Number(presentYear) - birthYearOfMurat
        } year(s) old `
      );

      // todo we are using various functions to convert variable's data type of values . For example, if we want to do a math operation with 2 numbers, we can't do it if one of them is string. We must convert this string into a number by using Number(); function that's why in this scenario we convert a string into a number and did a operation with another number.

      // !---------------------------------------------------------------------------------------------------------
      const presentYear2 = 2022;

      const birthYearOfMurat2 = "1998";

      console.log(
        `Murat gözen was born in ${String(birthYearOfMurat2)} and his age is ${
          presentYear2 - birthYearOfMurat2
        }`
      );

      // todo and here, we convert a number into a string statement although if we did't convert this number to string, it will be converted to string anyway.

      // !---------------------------------------------------------------------------------------------------------

      // type coersion
      // * javascript has some automatic type coersions.

      // ! whenever there is an plus operation that between number and a string, both of these converted to string by javascript automatically, this automatic function called type coersion.

      // !---------------------------------------------------------------------------------------------------------
      console.log("40" + "10");
      // todo we added 10 to a string type of '20' hence in return we got '2010' as a string type

      console.log("murat" + "10");
      // todo we added 10 to a string type of 'murat' hence in return we got 'murat10' as a string type

      // ! Only plus (+) operator is working in same way . you will get a string type in return if you either put a number or string statement by using plus (+) operator .

      console.log("20" - 7);
      // todo  we substracted 10 from string type of '20' hence in exchange we got 13 as a number type.

      console.log("15" * 3);
      // todo we multiply string  '15' 3 times hence in exchange we got 45 as a number.

      console.log("21" / 7);
      // todo we made string '21' divided by 7 hence in return we got 3 as a number.

      // * when we do a math operation by using both string and number statements like examples where is above, then we see both division (bölme), subtraction (çıkarma) and multiplication (çarpma) operations are turned into a real number if that string statement which we do a math operation with only contains numbers, not characters.
      // *then we got he converted version of string statement which is behave as real number anymore, so they can be got themselves into a math operation with each other like normal numbers.
      // ! only addition (toplama) operation is acting same way whatever it includes, no matter what.

      // !---------------------------------------------------------------------------------------------------------

      console.log("zeynep" + 7); // result is : zeynep7 (string)

      console.log("murat" - 7); // result is : NaN (Not-a-Number)

      console.log("kerem" * 3); // result is : NaN (Not-a-Number)

      console.log(`yusuf` / 7); // result is : NaN (Not-a-Number)

      // todo supposing that we are doing a math operation between string statements and numbers but this time string statement contains some characters that out of numbers, for example some names like above . Then in return all results are came as "NaN" type. NaN meaning is   "Not-a-Number".

      // ! when you use typeof operator for 'NaN'  data type in return you got 'number' because it is an invalid number which cannot be used as a real number in javascript.

      // !---------------------------------------------------------------------------------------------------------

      // ? How to use multiple math operators in an expression and how they act with each other?

      console.log("10" * "5" - " 10" + "780");

      /* 
Firsty, string "10" is multiple with string "5" as a number and bring 50 as a result.
Secondly, "10" is substract from 50 and in return bring 40. 
Thirdly, that 40 is added to "780" as a string and in return bring "40780" as a final result of this expression.

*/

