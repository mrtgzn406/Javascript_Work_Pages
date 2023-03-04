
        // ADD AND OBJECT'S İNTO ANOTHER OBJECT


        // ! the old way

       /*  const openingHours = {
            Monday: ["10:20", "13:00"],
            Tuesday: ["07:00","09:00", "10:00"],
            Wednesday: ["11:00", "12:00"],

        }

        const restaurant = {
            name: "cenab et lokantası",
            address: "murafa kemal mahallesi, 3001 Cadde, No : 38/B, daire 1",
            openingHours : openingHours
        } */

        // ! the new way
        const openingHours = {
            Monday: ["10:20", "13:00"],
            Tuesday: ["07:00","09:00", "10:00"],
            Wednesday: ["11:00", "12:00"],

        }

        const restaurant = {
            name: "cenab et lokantası",
            address: "murafa kemal mahallesi, 3001 Cadde, No : 38/B, daire 1",
            // Enhanced Object Literal
            openingHours
        }

        // we can reach an object's properties from inside of another array just by writing its same name. Bu doing this javascript actually doing this "  openingHours : openingHours,  ". So javascript create a property named openingHours, and assign openingHours object this property.

        console.log(restaurant.openingHours);

        // **************************************************************************************
        
        // WRITING A FUNCTİON
        
        // ! long and old way
        
        /* const ogrenci ={
            adi: "murat",
            soyadi: "gözen",
            yasi: 24,
            kisisel_bilgi: function (adi, soyadi, yasi){
                adi = ogrenci.adi;
                soyadi = ogrenci.soyadi;
                yasi = ogrenci.yasi;
                
                console.log(`Bu öğrencinin adı ${adi}, soyadi ise ${soyadi}. ${yasi} yaşındadır `);
            }
        } 
        console.log(ogrenci.kisisel_bilgi()); */
        
        
        

        // ! the new and quick way.
        //  So in the new way "function" data type and property's semi colon ":" has been removed. Also remember, the parenthesis and function scope indicate it is a function.
        
        const ogrenci ={
            adi: "murat",
            soyadi: "gözen",
            yasi: 24,
            kisisel_bilgi (adi, soyadi, yasi){
                adi = ogrenci.adi;
                soyadi = ogrenci.soyadi;
                yasi = ogrenci.yasi;

                console.log(`Bu öğrencinin adı ${adi}, soyadi ise ${soyadi}. ${yasi} yaşındadır `);
            }
        } 
        console.log(ogrenci.kisisel_bilgi());
        
        // **************************************************************************************

        // The COMPUTİNG THE PROPERTY NAMES


        // So formerly we can't write an expression on creating a property name. So this was the old way.

        /* const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
        const weekend = ["saturday","sunday" ];

        const openedDays = {
            tuesday :{
                open: "09:00",
                close: "22:00"
            },
            wednesday: {
                open:"08:30",
                close: "17:30"
            }
        } */


        // And this is the new way of giving a computed property name with expressions. 

        const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
        const weekend = ["saturday","sunday" ];

        const openedDays = {
            [weekdays[0+1]] :{
                open: "09:00",
                close: "22:00"
            },
            [weekdays[1+1]]: {
                open:"08:30",
                close: "17:30"
            }
        }

     console.log([weekdays[0+1]]);
     console.log(openedDays);
