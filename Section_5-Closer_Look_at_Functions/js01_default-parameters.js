
        // In this page we will desrice how default parameters will defined in old way and new way.
     /*    const bookings = [];


     
     const reservation = function (flightNumber, passengerNo, price){
         
         passengerNo = passengerNo || 20;
         price = price || 2000;
         // The old way of setting default parameters

            const booking = {
                flightNumber,
                passengerNo,
                price
            };
            bookings.push(booking);
            console.log(booking);
        }

        reservation("MRT40946"); */

        // *********************************************************************************
        
        
        const bookings = [];
        
        const reservation = function (flightNumber, passengerNo = 15, price = 200 * passengerNo){
            //  the new way of setting default parameters. So we write the default value with a = operator to the right side of parameters. It is meaning whenever there is an  parameter which has not any value then default value is being its parameters value. By the way, we can write an expression for a defult value like example above.
            
            //  Note: if you don't set any value for the parameters when function is called, then this parameter will "undefined" if there is no default value for that parameter.
            const booking = {
                flightNumber,
                passengerNo,
                price
            }
            console.log(booking);
            bookings.push(booking);
        }
        
        reservation("MRT406"  );
        
        // *********************************************************************************
        
        // But if you have three parameters like example below for example and you want to pass only middle parameter but not first and third parameters. What will we do then ? We must write "undefined " to the second parameters.

        const ornek = function (numarası, sınıfı, notu ){
            console.log(`${numarası} numaralı öğrencinin bölümü ${sınıfı}, numarası ise ${notu}'dir`);
        }

        ornek(175, "Bilgisayar Programcılığı", 3.88);
        ornek(446, undefined, 3.45);
