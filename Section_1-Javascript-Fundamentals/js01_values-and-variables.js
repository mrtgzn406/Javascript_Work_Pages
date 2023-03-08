
      let bosdegisken;

      // todo to identify variables is being done like that. Firstly, a keyword must be written that indicates this variable is what sort of variable.( for example: let, var, const etc. we will mention about in the coming sections how these keywords  works) then name of variable is written (bosdegisken) so that a variable created

      // ! name of variable cannot start with numbers, cannot contain reserved keywords of javascript and it can only contain numbers (in the middle or end), letters, underscores and dollar sign. İf you type a variable's name by dismissing these rules you will get a syntax error.

      let sayilar = 58;

      // todo  to give a value to the variable, we have to write a "=" symbol right side of variable and then type the value right side of =  symbol either (value is "58" above example).

      console.log(sayilar);

      //  todo to write something on console we will use "console.log();""  function and type the variable between this function's parentheses that we want to show on the console. (console.log(sayilar);).

      //  * By doing this process we showed the value of "sayilar" variable on the console when the html file ran on the browser connected to this js file and  press "ctrl+shift+j" keys to enter devTools on the browser interface  then click the "console" tab and you will see  the variable's value.

      sayilar = 100;

      //  todo  if we want to change this variable's value we must write only variable's name this time because we already defined this variable's type (it is let). That's why if we a variable's data type defined once yo can't define it again. Only you can change the variable's value. For example we only changed the value of variable above

      console.log(sayilar);

      // todo now, we just printed the variable o the console that we just changed its value

      const PI = 3.1415;

      // todo if we use a value can never change like pi number then we must use const data type and write its name of variable with upper cases. Otherwise, recommended writing is small case.

      console.log(PI);

