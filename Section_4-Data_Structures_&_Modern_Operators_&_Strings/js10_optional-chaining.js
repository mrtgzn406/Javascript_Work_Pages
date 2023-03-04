

        // Optional Chaining

        // The Optional Chaining works by existing an expression or not. If there is a null or undefined in he condition that contains optional chaining operator (?.) then it  returns undefined. if there isn't a null or undefined then it returns written object's, array's or variable's value. 



        restaurant = {
            name: "murat",
            surname: "gözen",
            openingHours: {
                mon :{
                    open: "08:00",
                    close: "18:00"
                },
                tue :{
                    open: "07:00",
                    close: "19:00"
                },
                wed : {
                    open: "08:40",
                    close: "10:20"
                },
                thurs:{
                    close: ""
                }
            }
        }
        
        // the old way of checking

       /*  if(restaurant.openingHours && restaurant.openingHours.mon ) {
             this expression means that "if there is no null or undefined result coming from both conditions, then both conditions are true and that's why function heading returns true. Existing mean is that. But if there is any null or undefined "
            console.log(restaurant.openingHours.mon.open);
        } */


        // the new way of checking
        

        console.log(restaurant.openingHours.mon?.close);
        
        // this property is called "optional chaining". In the optional chaining operator, javascript control the optional chaining left side firstly, if it exists (it means if expression is not a null or undefined) then javascript runs right side of the optional chaining operator.  
        

        // another example

        // long way
        if (restaurant.openingHours && restaurant.openingHours.tue && restaurant.openingHours.tue.close) {
            
            console.log(restaurant.openingHours.tue.close);
        }

        // short way

        console.log(restaurant.openingHours?.tue?.close);

        // -------------------------------------------------

        console.log(restaurant.openingHours?.thurs?.close);
        // if the optional chaining contains an absent property like "murato" property it returns undefined.  If it existing then returns murato property's value.

        // **************************************************************************************
        
        // we can use both Optional Chaining Operator and Nullish Coalescing Operator with each other. Because optional chaining operator is used to understant an expression returns null, undefined or not. If it returns null or undefined then the codes of right side of optional chaining operator (?.) cannot be read ,reading stops. And remember that nullish coalescing operator is used to skip a condition that returns null or undefined. So if you want to do other thing after optinal chaining operator returns null or undefined, you must use Nullish Coalescing Operator after the optioanal chaining operator. Examine the example of downmost to see how does it work  .
        
        const gunler = ["monday","tuesday", "wednesday","thursday" , "friday"];

        market = {
            name: "bim süpermarketleri",
            staff_number : 13000,
            acilisSaatleri : {
                [gunler[0]] : {
                    open:  "08:50",
                    close: "16:30"
                },
                [gunler[1]]:{
                    open: "08:54",
                    close: "23:00"
                },
                [gunler[2]]: 0
            }
        }
        
        // Example
        console.log(market.acilisSaatleri?.wednesday ?? "çarşamba günündeki saatler belli değil");
        
        // **************************************************************************************
        
        // Optional Chaining For Methods
        
        urunler = {
            urun_isimleri: ["masa", "raket", "top", "sopa", "klavye"],
            siparis :  function siparis(urun, siparis_adedi){
                return `${urun} isimli üründen ${15} adet sipariş edilmiştir`;
            }
        }

        // example
        console.log(urunler.siparis?.("kalemlik", 15) ?? "method doesn't exist");

        // **************************************************************************************
        
        // Optional Chaining Operator for Arrays

        const users = [
            {sınıf: "2. sınıf"},
            {name: null, sınıf: "3. sınıf"},
            {name:"ali", sınıf: "4. sınıf"}

            ];

            console.log(users[0].name);
            // as we see, when we try to write an non-exist object's value to the console then it returns undefined

            console.log(users[0]?.name ?? "User array empty");
        