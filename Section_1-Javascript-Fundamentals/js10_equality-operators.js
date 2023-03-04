
      // we will learn about equality operators in this lesson. There are 2 types of operators, '==' and '===' .
      // '===' means a value equal to another value's both value and data type

      // *    == examples (loose equality operator)

      let resitlik = 18;
      resitlik = "18";
      // todo both of variables above bring same result for ==

      if (resitlik == 18) {
        // todo '==' means a value equal to another value in both string and number types
        console.log(
          "bu resitlik değişkenin değeri string olarak veya number olarak aynıdır "
        );
      } else {
        console.log(
          "bu resitlik değişkenin değeri string olarak veya number olarak aynı değildir"
        );
      }

      // * === examples (strict equality operator)

      let ergenlik = 15;
      ergenlik = "15";

      if (ergenlik === 15) {
        console.log(
          "bu ergenlik değişkeninin hem değeri hem de veri tipi aynıdır"
        );
      } else {
        console.log(
          "bu ergenlik değişkeninin değeri, veri tipi ya da bu ikisi birden aynı değildir"
        );
      }

      // !-------------------------------------------------------------------------------------------------

      // * let's mention about "inequality operators". There are two types of them, != and !== .

      gevşekEşitsizlik = 20;

      if (gevşekEşitsizlik != "13") {
        // todo  != operator (loose inequality operator) is used  a value of something is unequal to something or not. if it is unequal as a value then this operator returns true to back.
        console.log(
          "result is true and gevşekEşitsizlik doesn't have same value in a string or number way"
        );
      } else {
        console.log(
          "result is false and gevşekEşitsizlik doesn't have same value"
        );
      }

      sıkıEşitsizlik = 40;

      if (sıkıEşitsizlik !== "40") {
        // todo !== operator (strict inequality operator) is used a value of something is unequal to something or not.
        //  todo if it is unequal as a value and data type then this operator returns true to back.
        console.log(
          `result is true and sıkıEşitsizlik don't have the same data type and value together with '40' value`
        );
      } else {
        console.log(
          "result is false and sıkıEşitsizlik has a same data type and value"
        );
      }

