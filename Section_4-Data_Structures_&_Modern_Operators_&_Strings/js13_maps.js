
        /* A Map holds key-value pairs where the keys can be any datatype.
        A Map remembers the original insertion order of the keys. */

        const murat = new Map();
        // we just created a map here.

        murat.set("yemekler", ["pizza", "makarna","türlü", "menemen"]);
        murat.set("adres", "mustafa kemal mahallesi, 3006 Caddesi, NO: 38/B" );
        murat.set(1 , acilisSaatleri = {
            open: "17:00",
            close: "24:00"
        });
        murat.set("fantom", 1200600);
        // we use set() method to add some key-value pairs to the map.

        console.log(murat.get("yemekler")[0]); 
        // we use get() method to  get the key-value pairs from the map by writing key-value pair's key in .

        murat.delete("fantom");
        // we use the delete() operator to delete one of key-value pair by writing key-value pair's key  into the delete()paranthesis 

        console.log(murat);
        // here is the result after deleting the key-value that has "fantom" key.
        
        console.log(murat.size);
        // The size property returns the number of elements in a Map

        
        // *  murat.set(document.querySelector('h1'), "as you see"); 
        // we write an html element as a key, so when we hover the mouse on h1 writing on console, we see that h1 element is highlighted if there is a h1  element in the html
        
        
        console.log(murat.has("adres")); 
        // we can control is there a key or not. if there is a key named "adres" then it returns true, if not it returns false.

        // console.log(murat.clear());
        // clear() method is used to delete all elements in the map.

        console.log(murat.entries());
        // entries() method used to write  all of key-value pairs from the map to console.

        console.log(murat.keys());
        // keys() method used to write all of keys that exist in the map to the console
        
        console.log(murat.values());
        // values() method used to write all of values that exist in the map to the console

    

        // ***********************************************************************************

        // sHORT WAY OF WRİTİNG MAPS

        // previous way of creating a map, we should have created a map then written many set() methods to add some elements to the map.  But now there is a easier way to create a map and add some elements into it without having set methods.

        const soru = new Map([

            ["soru", "dünyadaki en iyi programlama dili hangisidir ?"],
            [1, "javascript"],
            [2, "Python"],
            [3, "java"],
            [4, "C++"],
            ["doğru", "1"],
            [true, "doğru bildiniz 🎉"],
            [false, "tekrar deneyin!"]
            
        ]);
        console.log(soru.get(true));

        // and that's it , we did it. we created a map in a short way.  🎉


        // and remember the entries() method also creates an array like that from the objects


        // convert object to map
        const openingHours = {
            75275: "18:21",
            124: "12:58",
            4656: "16:24"
        }


        const acilisSaatleriHaritası = new Map(Object.entries(openingHours));
        //  so in here we add some elements to the map. Firstly we get them as a key-value pair , for example the monday: "18:21" object that in the openingHours object returns ["monday", "18:21"], so the object's name of openingHours objects will be returns as a string and object's value returns  as original itself value in an array. Then adds this pair to the map. And this is the same thing with creating a map with short way, with arrays like soru map.

        console.log(acilisSaatleriHaritası);


        // *************************************************

        // Converting Maps And Arrays Between Each Other

        // this is a ogrenci map
        const ogrenciMap = new Map([
            ["adi", "murat"],
            ["soyadi", "gözen"],
            ["numarası", 175],
            [1, "erkek"],
            [2, "kadın"]
        ]);

        // converting ogrenci map to an array by using spread operator (...) and merge them in an array.
        console.log([...ogrenciMap]);
