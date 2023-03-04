
// todo  switch statement is using strict equality operator in the function title, for example if we write 
/*
let murat = 14;
switch(murat === 14){ }  

it is meaning that variable of murat must be strictly equal to 14 both value and data type way. Otherwise, fucntion don't run properly. */

      const day = "monday";

      switch (day) {
        case "monday":
          console.log("bugun pazartesidir.");
          break;
        // todo this "case 'monday':" expression is meaning day === 'monday' in the switch title.
        case "tuesday":
          console.log("bugün salıdır");
          break;

        case `wednesday`:
        case "thursay":
          console.log("bugün çarşamba veya perşembedir.");
          console.log("bugünlerde atom fiziği üzerine çalışacaksın");
          break;

        case "friday":
          console.log("bugün cumadır");
          break;

        default:
          "geçersiz gün girdiniz, lütfen haftaiçi bir gün ismi giriniz";
      }

