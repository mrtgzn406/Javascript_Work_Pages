
      'use strict';
      const years = [1994, 1998, 2003, 2015, 2011];
      const ages = [];

      for (let i = 0; i < years.length; i++) {
        ages.push(2022 - years[i]);
        console.log(ages[i]);
      }

    // denemee kısımları
      for (const iterator in ages) {
        console.log(`bu dizinin bir elemanı da ${ages[iterator]}`);
     }

     for(let i = 0; i< years.length; i++){
      
        console.log(`years dizisinin ${i}. elemanı ${years[i]}`);
     }
    // deneme kısımları

      // ***************************************

      const öğrenci = ["tuğba", "melek", 496, true];

      const elemanlar = [];

      for (let i = 0; i < öğrenci.length; i++) {
        elemanlar.unshift(öğrenci[i]);
        console.log(typeof öğrenci[i]);
      }

      // ---------------------------------------------------------------

      // * continue and break statement iin the loop

      // Continue Statement
      const dizi = ["murat", "yusuf", "kerem", 15, 84, "fıtih", "soner"];

      for (let i = 0; i < dizi.length; i++) {
        if (typeof dizi[i] !== "string") continue;

        // when the program confront the non-string data type value, then program skip it, after skipping program also returns back to function title and increase the loop variable (i) increase the loop variable's value and continue to run. Long story short this statement is used to skip something that tied to written condition.
        console.log(dizi[i]);
      }

      // Break Statement

      const sayilar = [1, 2, 3, 4, 5, 6, "7", "8", 9, 10];

      for (let i = 0; i < sayilar.length; i++) {
        if (typeof sayilar[i] === "string") break;

        // break keyword is used to exit the loop when if condition is provided . After that, loop don't run again.
        console.log(sayilar[i]);
      }
