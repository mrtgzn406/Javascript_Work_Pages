
        student1 ={
            matematik: 0,
            fizik: 78,
            kimya: 87,
            biyoloji: 97

        }
   

        // student1.matematik = student1.matematik || "ifadedede bir tane doğru olduğunda ifade true döndürecektir";
        // this long statement is shortly written like below

        student1.matematik ||= "Bu OR ifadesinde bir tane doğru olduğundan ifade true döndürecektir çünkü OR ifadesinin true döndürmesi için tek bir doğru olması yeterlidir.";


        // as we learned in the previous sections, this expression means "if the student1.matematik is containing a truthy value then returns it, otherwise continue to seek values till you find a truthy value. İf there is not truthy value then return the last falsy value. Because if there isn't any truthy value that means all condition are false. Therefore, the expression is false". And this expression .
        console.log(student1.matematik); 

        // ----------------------------------------------------------------------------------------
        student2 ={
            matematik: 0,
            fizik: 78,
            kimya: 0,
            biyoloji: 97

        }
        
        student2.matematik = student2.matematik && "bu AND ifadesinde bir tane yanlış olduğundan ifade false döndürecektir çünkü and ifadelerinin true döndürmesi için tüm koşulun doğru olması gerekir.";

        // This statement shorty written like below

        student2.matematik &&= "bu AND ifadesinde bir tane yanlış olduğundan ifade false döndürecektir çünkü and ifadelerinin true döndürmesi için tüm koşulun doğru olması gerekir.";

        // as we learned in the previous sections, this expression means "if the student1.matematik is containing a falsy value then returns it, otherwise continue to seek values till you find a falsy value. İf there is not falsy value then return the last truthy value because it means all conditions in the expression are true. Therefore, the expression is true". 
        console.log(student2.matematik);

        // ***********************************************************************

        // THE NULLİSH ASSİGNMENT OPERATOR (null of undefined ?)

        // Note: Remember that nullish operator is used to control the condition is whether containing null ,undefined or not. If the controlled condition has a null or undefined then it returns false, if it has not then it returns true.

        student3 ={
            fizik: 78,
            kimya: 0,
            biyoloji: 97

        }
        console.log(typeof(student3.matematik));
        
        student3.matematik = student3.matematik ??= "bu yazıyı okuyorsanız nullish assignment operator simgesinin (??=) solundaki ifade null ya da undefined demektir ve o ifade atlandığı için operatörün sağındaki bu yazıyı görüyorsunuz.";

        // if this expression above returns true then the codes that exist left side of nullish operator (??=) runs, otherwise the code existing on right side runs.

        console.log(student3.matematik);
