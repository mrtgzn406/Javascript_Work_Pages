

      // * in this lesson we will learn objects. Objects are a structure that used to keep kind of different types of values with or without a name.  Also we have some sort of writing types for creating an object.

      // Object writing by Literal Syntax
      const car1 = {
        name: "Bugatti Veyron",
        color: ["black", "red", "green", "orange"],
        guaranteeTime: 3,
        tractionWheels: "fourwheel",
        isItNew: true,
      };

      // So , we use this object to keep a car1's properties into an one object variable . and the example above we used a Literal Syntax which is the easiest way to create an object. Then we can call a property of object by its  name of property.

      // CALLİNG THE OBJECT'S PROPERTY

      console.log(car1.name);
      // first type of calling a property is "Dot Notation"

      console.log(car1["name"]);
      // second type of calling a property is "Bracket Notation"

      console.log(car1.color[2]);

      console.log(car1["color"][2]);
      // other examples

      
      console.log(car1.name.length);

      //  and this is a property to access the character's number of name property

