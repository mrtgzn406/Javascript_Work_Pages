
    // we try to understand the destrurcturing in this page. 

    // Destructuring is making some code retrieve from the orginal array or structure
    
    const dizi = [2,3,4];


    const [a, b] = dizi;
    // as you see , we can easily destruct some values from the array that names dizi and store them into a,b,c variables.

    console.log(a,b);
    // and we made write this variable to the console
    console.log(dizi);

    // **************************************************************************************


    const murat = {
            yas: 24,
            isim: ['murat','ahmet', 'yasin'],
            soyisim: 'gözen',
            okul: "Ataşehir Adıgüzel MYO",
            mezuniyetTarihi: 2018,
            }
        
    let [first, second] = murat.isim;
    console.log(first, second);

    // we retrieve only two values of murat's isim property

    // ******************************************************************************************
    
    const araba = {
        name: "renault",
        modelTürü: ["symbol", "talisman", "clio"],
        modelYili: [2000,2001,2002,2003],
        rengi: ["kırmızı", "sarı","yeşil", "siyah", "beyaz"],

        order: function sırala(modelSirasi, modelYiliSirasi){
            return [this.modelTürü[modelSirasi], this.modelYili[modelYiliSirasi]];
            // we make them user to write two number for this "order" function. and whatever user write as a number, those two number stored in two so-called variable that called "modelSirasi" and "modelYiliSirasi" . So those so-called varaibles be placed in the "this.modelTürü" and "this.modelYili" properties' indexes in the bracket. 
        }
        
    }
    
    console.log(araba.order(0,3));
    
    const [talisman, Model_2002] = araba.order(1, 2);

    // we retrieved two variables value from the object and assign them into the "talisman" and "Model_2002" variables in the example above
    
    console.log(talisman, Model_2002);

    // ******************************************************************************************
    const nested = [3,5,[11,25,68], 8,9,10];
    
    const [i, ,j, , ,k] = nested;
    // if we want to retrieve some values and assign them into other variables individually, then we must create a space between commas for each value we want to dodge to reach it. This feature is called "Nested Destructuring".
    console.log(i, j,k);
    
    // ******************************************************************************************
    
    const [z,x,c,v,h] = [8,4,6];

    console.log(z,x,c,v,h);
    /*  İf we assign three values to the 5 variables then values will be assigned orderly like that :  
    
    first value = first variable,
    second value = second variable,
    third value = third variable
    
    and if there are more  number of variable than number of value then existing values be assigned orderly to variables. rest of other variables be "undefined" because no value is assigned to them.    */
    
    // ******************************************************************************************
    // Default Values
    const [number1 = 1, number2 = 1, number3= 1, number4 = 1] = [20,40];
    
    console.log(number1, number2, number3, number4);

    // And this is the default value feature in the javascript. We assign a 1 number to each varible as a default value in the first array. That means if no value assigned to this variable then their default value will be 1.   For instance, if we assign two values to four variables like example above, the first two variable will be 20 and 40 but other ones will be 1 because of the default value.  

    // Another Example of default vakue
    const [ornek1 = "isim yok", ornek2 = "isim yok", ornek3 ="isim yok" , ornek4= "isim yok"] = [ "ali","hasan"];

    console.log(ornek1, ornek2, ornek3, ornek4);
    