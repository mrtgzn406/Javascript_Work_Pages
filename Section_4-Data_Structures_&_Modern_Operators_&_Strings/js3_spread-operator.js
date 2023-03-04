const prompt = require("prompt-sync")();
 // ! We must use this code and some packages to get some input value from user, if you wonder why then read the "README.md" file that existing in most outer folder which is named "Javascript_Lessons".

        anaDizi = [4,5,6,7];
        anaDizi2 = [8,9,10,11];

        yeniDizi = [1,2,3,anaDizi[0], anaDizi[1], anaDizi[2], anaDizi[3], anaDizi2[0], anaDizi2[1], anaDizi2[2], anaDizi2[3]];
        // In the past, if we wanted to add each element of an array one by one into another array , we had to reach all of it with ındex operator like example above.  But from now on, we don't have to add some array's element individually like example above.

        console.log(yeniDizi[0], yeniDizi[1],yeniDizi[2],yeniDizi[3],yeniDizi[4],yeniDizi[5],yeniDizi[6],yeniDizi[7],yeniDizi[8],yeniDizi[9],yeniDizi[10]);
        //And formerly if we want to write  the each argument of an array to the console, we had to write it one by one orderly with index operator.

        console.log(yeniDizi);
        // if we write the name of array in the console.log(); function then that will display like objects
        // ----------------------------------------------------------------------------------------------

        mainDizi = [4,5,6,7];
        mainDizi2 = [8,9,10,11];

        newDizi = [1,2,3, ...mainDizi, ...mainDizi2];
        // yep that's it, most shortest way to add all elements of an array into another array.

        console.log(newDizi);
        console.log(...newDizi);
        // and that is the shortest way to write all array's arguments one by one.

        // -------------------------------------------------------------------------------------

        person = {
            name: ["ahmet", "yusuf", "hikmet","jötnar"],
            job: ["doctor", "technician", "nurse", "dentist"],
            age: [15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
        }

        const newNames = [...person.name, "hüseyin", "hasan"];
        // if we want to create a new array by taking all arguments from another array, then it is the simpliest way. 

        console.log(...newNames);

        // **************************************************************************************

        const içerikler = [
            prompt("let's make a pasta. Ingredient 1: "),
            prompt("Ingredient 2: "),
            prompt("Ingredient 3: ")
        ]
        console.log(içerikler[0], içerikler[1], içerikler[2]);
        // Instead of that we can use spread operator to write all data that we get from user by using prompt

        console.log(...içerikler);
