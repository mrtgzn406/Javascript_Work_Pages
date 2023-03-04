
        const person = "sinem banu/dönmez yıldız";

        const [ad, soyad] = person.split("/");
        // split() method is used to separate string statements by a referenced value. For example if want to separate a string into pieces acoording to a symbol. We must write that symbol into split() method paranthese. So split() method will take reference that symbol to separate the string.

        console.log(`Kişinin adı: "${ad}", soyadi ise: "${soyad}" olarak görünmektedir`);

        // --------------------------------------------------------------------------------------------
        
        const colors = ["red", "purple", "yellow", "green"];
        
        const edited_colors = colors.join(" ");
        // join method is used to make javascript return the  array elements with merged by some characters. Whatever you write in the join() method's paranthese, it will put that writing between all array elements and merge them. And finally returns the merged arrays' element as a string value with a specifick writing which is written in join() paranthese.
        
        console.log(edited_colors);
        
        // --------------------------------------------------------------------------------------------
        
        // another example for using join method
        for (let index = 0; index < 10; index++) {
            murat = ["ox", "raven", "wolf", "horse", "rat", "eagle"].join(` -${index}- `);
            console.log(murat);
        }
        
        
        // --------------------------------------------------------------------------------------------
        
        // Capitalizing Words,
        
        // we don't have any method to capitalize our string statement in javascript like .capitalize() which is available in . So, we use some expressions to capitalize string.
        
        const ben = "murat gözen";
        const benDizi = ben.split(" ");

        let yeniDizi = [];
        for (let index = 0; index < benDizi.length; index++) {
            yeniDizi[index] = benDizi[index][0].toUpperCase() + benDizi[index].slice(1) ;
            
        }
        console.log(yeniDizi);
        // --------------------------------------------------------------------------------------------
        const yılan = "snake klan";

        console.log(yılan.padStart(11, '+'));
        // padStart() method is used to add some characters to the start of a string. we must write 2 values in the padStart() method. One of them indicates how many times you want to add this character, other one indicates what we want to add. But remember that, the first section that we write "how many times" is included main string's character number too. So, for example if you want to add only one "*" character before a string that has 5 characters; we have to write in that way : "murat".padStart(6, "*"). So in conclusion we write only one "*", the result is "*murat" when we write it to the console .

        // -----------------------------------------------------------------------------------------------
        
        const ox = "ox klan";
        
        console.log(ox.padEnd(10, "+"));
        // the words that I saif for padStart() valid for this method either with a small difference. Only defference is,  this klan add characters to the end, not start.
        
        
        // -----------------------------------------------------------------------------------------------

        // together using of padStart() and padEnd()

        const isim = "yusuf";

        console.log(isim.padStart(10, "+").padEnd(15, "-"));

        // this expression result is "+++++yusuf-----" because remember that we have to write the      (total characters + how many times we want to write / for example "ox".padStart(3, "+")) 

        // -----------------------------------------------------------------------------------------

        const warning = "All departures delayed...";
        
        console.log(warning.repeat(10+10));
        // repeat() method is used to write same thing x times. whatever number we write in the repeat() paranthese, it will print the value as much as the number that written in paranthese.

        console.log(warning.repeat(`10`));
