
        // What is the Set ?

        "use strict";
        const siparisler = new Set(["pizza", "risotto", "pizza", "pasta", "pasta", "pizza"]);
        // Set objects are used to take only one instance of iterating values. Set object only shows of each unique value. For example if there are so many same value like example above (pizza, pasta) then it returns only one of them . And there is no key/value pairs because of that functionality . It means we cannot call Sets value with index number because they don't have index number and no need to use sets for that. Finally, remember that sets are iterables like arrays that's why we can use some methods like array on them.

        console.log(siparisler);
        // as you see, when we print siparisler, it has only three values that different from each other, 

        // *****************************************************************************

        // Sets Methods


        console.log(`bu sette toplamda ${siparisler.size} farklı türde sipariş vardır`);
        // by using size method, we can take the number or values out of siparisler variable

        console.log(siparisler.has('risotto'));
        // by using has method, we can learn a value exist or not. If it exist this method returns "true", if doesn't exist returns "false". This has method is similar to array's include method.

        siparisler.add("sosisli patso");
        siparisler.add("güveç");
        siparisler.add("güveç");
        siparisler.add("güveç");
        siparisler.add("güveç");

        // siparisler.add("güveç", "makarna", "türlü");
        // you can't use add methods to add more than one values  like above line in the comment section, 
        
        console.log(siparisler);
        // by add method, we can add another values to the set. And even if you add same value a few times like example above, it still counted one in the set cause of unique value principle. You can only add one value with a one add method, to add more values you must use more add methods but it is not reasonable because if we need to add so many elements , we would write those in the Set.

        siparisler.delete("güveç");
        console.log(siparisler);
        // by using delete method, we delete one of the values from the set. Also we can't write two arguments into that method.

        siparisler.clear();

        console.log(siparisler);
        // by clear() method  , we can erase all values from the set. 

        // ****************************************************************************

        // Adding arrays into set

        const oyuncular = ["ahmet çamlı", "güngör","ahmet çamlı" , "mario scmaller","güngör", "ahmet çamlı"];

        const benzersiz = new Set(oyuncular);

        console.log(benzersiz);

        // --------------------------------------------------------------------
        // adding array into set 

        const oyuncular2 = ["ahmet çamlı", "güngör","ahmet çamlı" , "mario scmaller","güngör", "ahmet çamlı"];

        const benzersiz2 = [...new Set(oyuncular2)];
        // in here, we firstly write the array (oyuncular2) into set paranthese thus we get only unique element of oyuncular2's array. But when we do this we get those unique characters as object. So, to solve this problem, we firstly embrace the  "new Set(oyuncular2)" expression with bracket notation [], then use spread operator (...) before the new keyword. 
        for(const item of benzersiz2){
            console.log(item);
        }
