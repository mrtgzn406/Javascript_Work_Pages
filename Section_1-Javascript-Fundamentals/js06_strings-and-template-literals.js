
      const isim = "Murat";
      const job = "yazılımcı";
      const dogumYili = "1995";
      const year = 2022;

      const normalBirlestir =
        "Merhaba benim adım " +
        isim +
        " mesleğim ise " +
        job +
        " yaşım ise " +
        (year - dogumYili);

      console.log(normalBirlestir);
      // * this is the normal way of concatenate a variables, string, numbers etc.

      // ! Template Literal
      // todo To concantenate somethings to each other, we can use template literal expression. To make work this property use backtick (``) symbols and write everything between two backticks.

      const literalBirlestir = `Merhaba benim adım ${isim}, mesleğim ${job}, yaşım ise ${
        year - dogumYili
      }`;

      console.log(literalBirlestir);

      // ! Using Template Literal instead quotation marks
      // todo we can use this backstick for all string expressions, that's why developers usually only use backsticks not quatition marks. Because this is a very comfortable way to do it.

      console.log(`gördüğün gibi çift tırnak yerine kesme işareti kullandım`);

      // ! Using Template Literal for creating multiline string insted of /n

      // todo formerly we had to use /n/ to create multiline strings like that by using '' symbols.

      console.log("we  \n created \n multiline \n strings");

      // todo but now we only have to  break line by using backticks `` and multiline string is created.
      console.log(`we
created 
multiline
strings`);
