
        //  we will learn which data structure should we use in the javascript in this lesson. So there are 4 type of data structure in javascript. Those are arrays, sets, objects and maps. let's describe them orderly. And here we will compare arrays with sets and objects with maps.

        // ****************************************************************************************************
        
        // Comparing Arrays vs Sets


        // Arrays 

        // 1.) Use arrays when you need ordered list of values ()
        // 2.) use arrays when you need to change a specific data.
        // 3.) arrays can contain same values, can contain duplicates.

        const yemekler = ["pilav" ,"güveç", "güveç", "karnıyarık", "makarna", "pilav" , "makarna" ];

        console.log(...yemekler);

        
        // Sets

        // 1.) Use when you need to work with unique values
        // 2.) Use when high-performance is really important
        // 3.) Use to remove duplicates from the arrays

        const benzersizYemekler = new Set(yemekler);
        // expression returns the unique elements and add them in the object. 
        
        const benzersizYemekler2 = [new Set(yemekler)];
        // expression returns the unique elements and add them in the object and add them in an array.  
        
        const benzersizYemekler3 = [...new Set(yemekler)];
        // expression returns the unique elements one by one under favour of spread operator (...) and add them in an array.
        
        
        
        console.log(benzersizYemekler);
        console.log(benzersizYemekler2);
        console.log(benzersizYemekler3);

        
        
        // --------------------------------------------------------------------------------
        //  Comparing Objects vs Maps

        // Objects 

        // 1.) This traditional key-value store 
        // 2.) Easier to write and access values with . (dot notation) and [] (bracket notation).
        // 3.) Use when you need to include functions (methods)
        // 4.) Use when working with JSON (can be converted to map)

        const okul = {
            ogrenciSayisi: 1100,
            adi : "ataşehir adıgüzel MYO",
            programlar : ["bilgisayar", "optisyenlik", "mekatronik", "sivil havacılık"],
            true: 1,
            3.14: "pi sayısı" 
        }

        console.log(okul.adi);     // calling an object with . notation
        console.log(okul["adi"]);  // calling an object with [] notation 

        // console.log(okul.3.14);
        // we will get an error if we try to write a property name including dot (.) character. 
        
        console.log(okul[3.14]);
        // Note: Remember that all key-value pair's key will be string value. No matter how we write the key which data type because all of keys will be returned as a string finally. Therefore, even if we write 3.14 or true as a property name, it will be returned string when we try to call them. Shortly for objects only string key is accesible.



        //  Maps

        // 1.) It can provide better performance
        // 2.) keys can have any data type in maps
        // 3.) Easy to iterate 
        // 4.) Easy to compute size
        // 5.) Use when you need different data types for keys

        const ogrenci = new Map([
            ["adi", "murat"],
            ["numarası", 839],
            [1 , "elektrik var"],
            [0 , "elektrik yok"],
            [true, "doğru bildiniz"]

        ]);

        for (const iterator of ogrenci) {
            
            console.log(...iterator);
        }


        console.log(ogrenci.get(true)); 


        ogrenci.set("şube", "3. sınıf");
        ogrenci.set("şube", "5. sınıf");
        ogrenci.set("şube", "6. sınıf");
        ogrenci.set("şube", "8. sınıf");
        // only ogrenci.set("şube", "3. sınıf"); expression will be executed because we use set method to add some key -valu pairs to the map. But because of using set() method, only one key-value pair if there are so many values that has same keys like "şube". Especially this method is used to edit a value for a key.

        const dizi =  [...ogrenci];

        console.log(...dizi);
