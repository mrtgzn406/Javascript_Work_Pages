
    'use strict';
    const teams = {
        abbreviation : ["FCB", "BJK"],
        squadNumber: [18,19,20,21,22],
        nationality : ["Spain","Turkey"],
        supporterNumber: [11546241, 2664213],
        championshipCup: [15,0],    
        orderDelivery: function(howMany, time, address){

            console.log(`Order received ${howMany} pizza(s) will arrive to ${address} at ${time}`);
        }
        
    }
    teams.orderDelivery(2, "15:45", "Mustafa kemal neighbourhood, 3006 street, no: 38/B");
    
    // ----------------------------------------------------------------------------------------
    
    const {abbreviation: shortening, squadNumber: teamNumber, nationality: nation} = teams;
    // İf we want to change the property of any objects then you can do it like that.
    
    console.log(shortening, teamNumber, nation);
    // ****************************************************************************************

    const {supporterNumber = [], championshipCup: cup = []} = teams;

    console.log(supporterNumber, cup);

    // *****************************************************************************************
    let a = 135;
    let b = 865;
    const obj = {a: 3, b: 5, c: 7};

    ({a,b} = obj); 
    // if we want to destructure an object like that, we must use parantheses that wrapping the statement. We are saying "assign the first two property of objects values to "a" and "b" orderly.    
    console.log(a,b);
