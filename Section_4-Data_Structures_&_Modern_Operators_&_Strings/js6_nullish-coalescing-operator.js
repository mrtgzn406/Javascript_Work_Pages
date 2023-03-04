
        // Nullish Coalescing Operator
        // this operator is made  is used to skip all  "null" or "undefined" expressions and returns other value where is the right side of the "??" (nullish coalescing operator) symbol.  This operator will be last until they find a value ing "null" and "undefined".
        const ifade_Null_ya_da_UndefinedMi = null ?? (0  ?? "ifade null ya da undefined çıktı ");
        console.log(ifade_Null_ya_da_UndefinedMi);

        const   anaSayi = 50 ?? 100;

        console.log(anaSayi);

        // -----------------------------------------

        // another example
        
        let sonuc = undefined ?? (null ?? "murat");
        console.log(sonuc);
        // -----------------------------------------

        // another example

        let ornek = undefined ?? null;
        console.log(ornek);
        // if there are only null or undefined values then it will returns last value like example above.  
