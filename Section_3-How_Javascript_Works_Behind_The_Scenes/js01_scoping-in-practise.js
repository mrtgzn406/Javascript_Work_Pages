
      // ! İf we use strict mode then we can't access the inner scoped code context from the global scope. because as we know if a variable is defined inside a scope, you cannot access it out of that scope. But if we don't use 'use strict'; mode then we can inner scoped code from the global scope either.

      // "use strict";

      if (2 > 1) {
        function topla(sayi1, sayi2) {
          return sayi1 + sayi2;
        }
      }
      console.log(topla(50, 7));

