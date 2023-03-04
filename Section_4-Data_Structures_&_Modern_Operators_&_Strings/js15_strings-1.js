
        const havayolu = "pegasus havayolları";

        console.log(havayolu[0]);
        console.log(havayolu[3]);
        console.log(havayolu[17]);
        console.log(havayolu[3]);

        console.log("murat"[4]);

        // Methods to get index number

        hangiIndex = havayolu.indexOf("a");
        console.log(`Bu karakterin dizide ilk bulunduğu index numarası: ${hangiIndex} `);
        //   this expression scan all elements in the array one by one and try to find a specific value ("a"). If finds that value then  returns te first matched value's index number, if couldn't find such a value then returns -1

        hangiIndex2 = havayolu.lastIndexOf("a");
        console.log(`Bu karakterin dizide son bulunduğu index numarası: ${hangiIndex2}`);
        // this expression scan all elements in the array one by one and try to find a value's last copy. If finds that value then returns the last matched value's index number, if couldn't finds such a value then returns -1


        hangiIndex3 = havayolu.indexOf("havayolları");
        console.log(hangiIndex3);
        // this expression scan the written string statement ("havayolları") in the array. If finds, then returns the first character of string statement's index number.

        // Slice Method

        console.log(havayolu.slice(8));
        // this slice method used to get the rest of the character after the 8th index of havayolu variable including 8th character too. If we write one number in the slice() method it will work in this way.
        
        console.log(havayolu.slice(4,7));
        // this slice method used to get the characters between 4th(including) index and 7th(excluding) index. So we write start index and final index of the statement which we want to retrieve specific data from.

        console.log(havayolu.slice(-7));
        // this slice method used to get the characters from the back to front and to do it we should use negative numbers. -1 means the last character, -3 means last three character, -7 means last seven character. So, when the negative numbers increased, it means the characters which will be got is increased.  And remember that minus index numbers doesn't start from 0 it starts from 1.

        console.log(havayolu.slice(-7, -4));
        // this slice method used to get the last a specific area of string. For example, if we want to get "yol" statement from the "pegasus havayolları" you must write slice(-7,-4) , it means it starts from the last 7th ("y", included ) character to last 4th ("l", not included) character. 
