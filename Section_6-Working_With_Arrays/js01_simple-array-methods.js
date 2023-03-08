
        const dizi = ["one","two", "three", "four", "five"];

        console.log(dizi.slice(2));
        // slice method is used to get a specific area's values in the array. You can see more details in the "js39_strings-1.html" file. Slice method doesn't change the original array. Only returns the targeted values.

        console.log(dizi);

        // --------------------------------------------------------------------------------------
        
        const dizi1 = ["bir", "iki", "üç", "dört", "beş"];
        
        console.log(dizi1.splice(2));
        // splice() method is used to take out some elements out of the array and erase the elements that were took out from the original array . splice() method changes the original array.
        
        console.log(dizi1);
        
        // --------------------------------------------------------------------------------------
        
        const dizi3 = ["ahmet", "deniz", "ecrin", "mustafa", "yeliz"];
        
        console.log(dizi3.reverse());
        // reverse() method is used to reverse the array elements. Change the main direction "beginning to end " to "end to beginning" . reverse() method changes the original array. 
        
        console.log(dizi3);
        
        // --------------------------------------------------------------------------------------
        
        const dizi4 = [1,2,3,4,5,6];
        const dizi5 = [7,8,9,10];

        console.log(dizi4.concat("murat"));
        console.log(dizi4.concat(dizi5));
        // concat() method is used to concatenate something to another array. concatenate() method doesn'n affect the original array.
        console.log(dizi4);

        // --------------------------------------------------------------------------------------
        
        const dizi6 = ["python", "java", "php", "javascript"];
        // join() method is used to place something between array elements. join() method doesn't affect the original array.
        console.log(dizi6.join(" - "));
        console.log(dizi6);
        
        // --------------------------------------------------------------------------------------

        const  dizi7 = [100,200,300,400,500];

        console.log(dizi7.at(2));
        // at() method is used to get a specific element of an array with index numbers. It is working almost same as bracket notation but an easier way. 

        console.log(dizi7[-1]);
        // For example, if you want to get the last element of the array. you can't use -1 index number to get last element, it wil returns "undefined" with bracket notation. So, we had to written these expressions formerly to get last element: 

        console.log(dizi7[dizi7.length - 1]);
        console.log(dizi7.slice(-1)[0]);

        console.log(dizi7.at(-1));
        // But from now on we can use "at(-1)" expression to get last element of an array or a string.
        
        console.log(dizi7);
