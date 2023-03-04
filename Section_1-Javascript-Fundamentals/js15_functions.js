
      function sayilariTopla(sayi1, sayi2) {
        topla = `${sayi1} ile ${sayi2} sayısının toplamı ${
          sayi1 + sayi2
        } sonucunu getirir.`;
        return topla;
      }

      const sonucuGoster = sayilariTopla(40, 10);

      console.log(sonucuGoster);

      // ------------------------------------------------------------------------------------------

      function sayilarCarp(sayi1, sayi2) {
        carp = sayi1 * sayi2;
        console.log(carp);
      }

      sayilarCarp(5, 7);

