
        const Transactions= [+5000, -312, -549, -1395, +4050, +203, -100];


        // now supposing that,we  want to print to the console what did use do to the console. So if the transaction has bigger number than 0, then it is a deposit. But if the transacstion has a lower number than 0 then it is a withdraw. And let's say we want to write some message to user whenever user took place a transaction. Let's do this in two ways; with for of loop and forEach iteration. 
        
        // way 1 
        for(process of Transactions){
            if(process > 0){
                console.log(`${Math.abs(process)} dollars were deposited`);
            }else{
                console.log(`${Math.abs(process)} dollars were withdrawned`);
            }
        }
        
        // way 2
        Transactions.forEach(function(process) {

            if (process > 0) {
                console.log(`${Math.abs(process)} dollars were deposited`);
            } else {
                console.log(`${Math.abs(process)} dollars were withdrawned`); 
            }
        })
