
      function calcAge(birthyear) {
        result = 2022 - birthyear;
        return result;
      }

      console.log(calcAge(1998));

      // this is the normal usage of function,,

      // !----------------------------------------------------------------------------------------

      const calcAge2 = (birthyear) => 2022 - birthyear;

      console.log(calcAge2(1998));

      // ----------------------------------------------
      let karsilama = (yas, isim) =>
        `siz ${yas} yaşındasınız ve isminiz ise ${isim} olarak görünüyor.`;

      console.log(karsilama(45, "murat"));
      // ----------------------------------------------

      const sayilariBol = (sayi1, sayi2) =>
        `${sayi1} ile ${sayi2} sayısının bölümü ${sayi1 / sayi2} eder`;

      console.log(sayilariBol(100, 5));

      // usage of arrow function without curly braces ({})

      // ************************************************

      const sayilariBol2 = (sayi1, sayi2) => {
        bölmeSonucu = sayi1 / sayi2;
        return `${sayi1} ile ${sayi2} sayısının bölümü ${bölmeSonucu} eder`;
      };

      console.log(sayilariBol2(100, 4));

      // usage of arrow function with curly braces ({})

      // ! You shouldn't use return keyword if you don't use curys braces ({}) after the arrow function symbol (=>) because return is included, internal already.

      // and this is the usage of arrow function.  Don't bother yourself with this function. Maybe you don't even use it in real life at all.

