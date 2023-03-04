
        "use strict";
        const oyunlar = "toMB RAideR";
        console.log(oyunlar);

        console.log(oyunlar.toLowerCase());
        //  toLowerCase() method converts a string to lowercase letters.

        console.log(oyunlar.toUpperCase());
        //  toUpperCase() method converts a string to uppercase letters.

        const capitalize = "mURat".charAt(0).toUpperCase + "mURat".slice(1).toLowerCase; 

        // !!!! THE EXPRESSİON ABOVE DOES NOT RUN ALTHOUGH ANOTHER PEOPLE MAKE RUN THİS CODE AS SAME AS EXAMPLE ABOVE. 

        const email =     "mRTgzN@hotmail.com   ";

        const trimStartEmail = email.trimStart();
        // trimStart() method is used to cut white spaces on left side.

        const trimEndEmail = email.trimEnd();
        // trimStart() method is used to cut white spaces on right side.

        const trimEmail = email.trim();
        // trim() method is used to cut white spaces on both start and end side.


        // An example of using multiple methods which is following each other to 

        function normalize (argument){
           return argument.charAt(0).toUpperCase() + argument.toLowerCase().trim().slice(1);

        }

        console.log(normalize(email));

        // replace methods

        const para = "188.45 sterlin";
        const para2 = para.replace("sterlin", "dolar").replace(".",",");
        // replace() method is used to replace an area and write instead write another thing.
        console.log(para);
        console.log(para2);

        const berber = "bir berber bir berbere bre berber gel bir berber dükkanı açalım demiş.";

        const berber2 = berber.replace("berber", "klinik");
        // this replace() method onyly replace the first matched value in the string. For example if you want to change "berber" text but there are 4 "berber" texts, this method only change the first "berber" text.
        console.log(berber2);
        const berber3 = berber.replaceAll("berber", "kasap");
        // this replaceAll() method is used to replace all matched values in the string. This method changes all occurrences in the string, it means that changes all "berber" text to "kasap". Also this replace methods does not change the original value.
        console.log(berber3);

        const berber4 = berber.replace(/berber/g, "makinist");
        // In the past, we have to  write expression above to change all occurrences that matched with written value. But we don't need to use it anymore. Instead we use replaceAll().
        console.log(berber4);

        // The String Methods That Return Booleans 

        const isyeri = "the clan of the ox";

        const ornek1 = isyeri.includes("clan");
        // includes() method is used to check whether there is a searched text or not. if exist method returns true, if does not exist it returns false. 
        console.log(ornek1);

        const ornek2 = isyeri.startsWith("the");
        // startsWith() method is used to check does expression starts with a text or not.if exist method returns true, if does not exist it returns false.
        console.log(ornek2);

        const ornek3 = isyeri.endsWith("ox");
        // endsWith() method is used to check does expression ends with a text or not. if exist method returns true, if does not exist it returns false.
        console.log(ornek3);
