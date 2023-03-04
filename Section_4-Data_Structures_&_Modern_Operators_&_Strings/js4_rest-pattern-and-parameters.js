
        "use strict";
        // for assigning some values there are two types of short assigning operator. Here they are...


        // 1.) Spread operator, Because it's  on right side     
        const dizi1 = [...[1,2,3], 4,5,6];

        console.log(...dizi1);


        // 2.) Rest Pattern operator, because it's on left side

        const  [a,b, ...others] = [10,15, 100,101,102,103];

        console.log(...others);

        // *********************************************************
        const person = {
            name: ["ahmet", "yusuf", "hikmet","jötnar"],
            job: ["doctor", "technician", "nurse", "dentist"],
            age: [15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
            workShifts:  {
                pazartesi: {
                    start: "08:00",
                    end: "17:00"},

               sali : {
                    start: "08:00",
                    end: "17:00"},

                carsamba: {
                    start: "08:00",
                    end: "17:00"
                },
                persembe: {
                    start: "08:00",
                    end: "17:00"
                }


            }
        }

        const {pazartesi, ...diger_gunler} = person.workShifts;

        // So in here, We used rest parameter to  distribute one of the object which is inside person.workShifts property to "pazartesi" . We only want to be take out the first  property that available inside "person.workShifts" property and add all of other person.workShifts' properties into "diger_gunler" variable. So  to do that, firstly we must use same name  as first property that's why we write "pazartesi as a variable and we wrote ramdomly other variable named "diger_gunler" which holds all "person.workShifts" properties except "pazartesi."

        console.log( diger_gunler);

        // ***********************************************************************

        const ekle = function (...sayilar) {
            let toplam = 0;
            for (let i = 0; i  < sayilar.length; i++){toplam += sayilar[i]};
            // If we use const data type for "toplam" variable. We can't change toplam's value by transactions or assignments. We must use let data type for changeable value.  
            console.log(toplam);
        }

        ekle(15,18,960);
        ekle(10,20,30,40);
        ekle(50,100,150,200);
