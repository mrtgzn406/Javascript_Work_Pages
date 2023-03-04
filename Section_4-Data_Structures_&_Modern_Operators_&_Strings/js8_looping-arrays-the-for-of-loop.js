
        const isimler = ["yusuf", "ali","mehmet", "yunus", "eray" ];

        for(const isim of isimler){
            console.log(isim);
        }

        console.log(...isimler.entries());
        /* The For Of Loop
        The JavaScript for of statement loops through the values of an iterable object.

        It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more: */

        /* this is the for of loop that using to get each element of an array, string, NOdelists etc. that's why we don't have to use for loop to  reach every single element.

        const isimler = ["yusuf", "ali","mehmet", "yunus", "eray" ];

        for (let i = 0; i < isimler2.length; i++) {
            const element = isimler2[i];
            
        } */

        // ************************************************************************************
        // An Array Method (entries())

        // The entries() method returns an Array Iterator object with key/value pairs:

        şekiller = ["kare", "üçgen", "dikdörtgen", "daire"];

        console.log(...şekiller.entries());



        // ---------------------------------------------------------------------------------------

        const menu = ["salata", "pilav", "çorba", "menemen"];

        for (const [i, k] of menu.entries()){
            console.log(`${i+1}: ${k}`);
        }

        // as we see, we can assign the array's index number and value that paired with index number to some variables like "i" and "k" by using entries() method. So, we can make some process by getting both index number and index values. 
