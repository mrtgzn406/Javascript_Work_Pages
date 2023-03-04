
    'use strict';
    const friend1 = 'michael';
    const friend2 = 'saylor';
    const friend3 = 'jason';

    // instead of that we can define this values into an Array like below :

    const friends = ['michael', 'saylor', 'jason'];
    // this is kinda array writing 1

    const friends2 = new Array('HASAN', 'YUSUF', 'ÖMER');
    // this is kinda array writing 2

    const isim = 'muzaffer';

    const things = [1784, 'hasan', true, isim, friends]

    for (let sayi = 0; sayi < things.length; sayi++) {

        console.log(things[sayi]);
    }



    // friends[0] = "murat";

    // friends2[0] = "MURAT";

    // console.log(friends2[0], friends2[1], friends2[2]);

    // console.log(friends[friends.length - 1]);
    // this expression taht above returns the last of the element of this 'friends' array

    // ! ------------------------------------------------------------------------------------------

    // we will learn the matters of how to add, remove an elements to the array.


    // usage of push function (adds the element(s) end of the array)

    let dizi = [10, 20, 30];

    dizi.push('murat');
    // here, we added a new value to the end of array by using this push function. This function is used to add a new value and returns the number of elements of the this array that used together with push function


    let dizidekiElemanSayisi = dizi.push(2022, 'fatih', true, false);

    console.log(dizidekiElemanSayisi);
    // push fucntion also returns the number of elements in the array 

    console.log(dizi[dizi.length - 1]);


    // usage of unshift function (adds the element(s) to the start of the array )

    let dizi2 = ['ahmet', 'mehmet', 'ali'];

    let dizidekiElemanSayisi2 = dizi2.unshift(4, 100);
    // this unshift fucntion is used to add new element(s) to the start of the array.

    console.log(dizidekiElemanSayisi2);
    console.log(dizi2[dizi2.length - 1]);




    // usage of pop function (removes the last element of array)

    let kaldırılıanDeger = dizi2.pop();
    // this function is used to remove the last element of array and returns removed element

    console.log(kaldırılıanDeger);




    // usage of shift function (removes the first element of array)

    let dizi3 = [20, 40, 60, 80, 100];

    console.log(dizi3.shift());

    // this function is used to remove the first element of array and returns removed element.



    // usage of IndexOf and includes methods

    // 1.) IndexOf method
    // todo  this method is search the index number of a specific element in the array and returns the index of that found element. If element is absent in the array then method returns -1 which means there isn't this value.

    let dizi4 = ['2', '4', '6', '8'];

    const indexiniDondur = dizi.indexOf(2);
    console.log(indexiniDondur);

    // in the example above we tried to make return an integer value for 2 which is a type of number but there is no 2 there. that's why this method returned -1 which is meaning there is no such an element.

    const indexiniDondur2 = dizi4.indexOf('8');

    console.log(indexiniDondur2);

    //  in the example above we tried to make return the index of '8' element hence, this method returns 3 because '8' is the third element of this array for the index numbering.





    // 2.) includes method

    // this method is try to search a specific element in the array and returns true or false which is boolean.Then if it finds wanted element then method returns 'true', if can't then returns 'false'. 

    // ! Note that this method is using strict equality control.
    const ben = 'ben murat gözen';
    let dizi5 = [true, 'eylem', false, 1998, ben];

    console.log(dizi5.includes('ben murat gözen'));
    // it returns true because variable name of murat has 'ben murat gözen' value. Also if we write ben variable name,  it returns true either. Long story short, even if we write both way of those examples we will get true.

    console.log(dizi5.includes('uzun hasan'));
    // it returns false because there is not such an element.
