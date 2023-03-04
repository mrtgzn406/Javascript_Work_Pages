
        "use strict";

        const openingHours = {
            monday: "18:21",
            tuesday: "12:58",
            wednesday: "16:24"
        }

        
       /*  for(day of openingHours){
            console.log(day);
        } */
        // If you try to print all property of openingHours one by one like above. You will get an error that says "openingHours is not iterable" . So you cannot write each property name in this way. 
        // -----------------------------------------------------------------------------
        const properties = Object.keys(openingHours);

        for(const day of properties){
            console.log(day);
        }
        // So, to print each property value to the console like an array, we use Object.keys() function with a "for of" loop and we write the object name inside of Object.keys() function paranthesis.


        console.log(`we are open on ${properties.length} day(s)`);
        // we can get the length in that way.
        
        // ******************************************************************************
        const manav = {
            perşembe: {
                open: "07:15",
                close: "18:20"
            },
            cuma : {
                open: "06:30",
                close: "17:00"
            },
            cumartesi:{
                open: "08:00",
                close: "16:00"
            }
        }
        // Using Entries
        // Remember that entries() function returns an item's index number and its value and it actually designed for arrays. So, whenever you want to get an item's key/value pair , you can use it. But this time we use this function for manav object to get its key/value pair.
        
        const eachItemOfManav = Object.entries(manav);

        console.log(eachItemOfManav);

        for(const [gun ,{open, close} ] of eachItemOfManav){
            // in the expression above, we assigned each manav's properties (perşembe, cuma, cumartesi) and their  insider property (open, close). To get each of manav's property we use "gun" variable in a bracket notation [gun]. To get manav's property's property we placed a comma and create curly braces because they are properties [gun, {}], then we wrote  the real name of manav's property's property into that curly braces. [gun, {open, close}]. We can write anothet thing instead of "gun" variable but we can't write another thing instead of "open" and "close" that exist in the cury braces, because it must be the name of actual property (open, close) otherwise, we will get an error.

            // Remember that "open" and "close" variable that we wrote in the function title are the real name of each manav's property's property . And Each manav's property was stored in the "gun" variable that's why when  "for of" function runs, it indicates another manav's property with "gun" variable. Therefore, "open" and "close" variables that in the curly braces reference the real property of manav's property that carried by "gun" variable .          
            
            console.log(`${gun} günü manav saat ${open} civarı açılır, saat ${close} civarı kapanır`);
        }
        // -----------------------------------------------------------------------------------------
        // another example
        const grocery = {
            monday : {
                acilis: "08:12",
                kapanis: "20:30"
            },
            tuesday:{
                acilis: "06:40",
                kapanis: "19:25"
            },
            wednesday: {
                acilis: "07:30",
                kapanis: "21:00"
            }

        }

        const eachItemOfGrocery = Object.entries(grocery);

        for(const [day, {acilis, kapanis}] of eachItemOfGrocery){
            console.log(`${day} günü bakkal saat ${acilis}'de açılır ve saat ${kapanis}'de kapanır`);
        }
