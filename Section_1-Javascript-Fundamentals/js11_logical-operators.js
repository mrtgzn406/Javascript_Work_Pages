
      //  * we will learn logical operators in this lesson. So, we will learn &&(and), ||(or) , !(not) operator...

      lisansıVar = true;

      tecrübeliMi = true;

      evliMi = true;

      // * &&(and) operator

      if (lisansıVar && tecrübeliMi) {
        console.log("this person have enough qualifications for this job");
      } else {
        console.log(
          "insufficient qualifications, this person cannot do this job"
        );
      }

      // --------------------------------------------------------------------------------
      if (lisansıVar && !tecrübeliMi) {
        console.log("this person have enough qualifications for this job");
      } else {
        console.log(
          "insufficient qualifications, this person cannot do this job"
        );
      }

      // !-----------------------------------------------------------------------------------------------------

      // * ||(or) operator

      if (lisansıVar || tecrübeliMi) {
        console.log("this person can be employed");
      } else {
        console.log("this person cannot be employed");
      }

      // -----------------------------------------------------

      if (lisansıVar || tecrübeliMi) {
        console.log("this person can be employed");
      } else {
        console.log("this person cannot be employed");
      }

      // !-----------------------------------------------------------------------------------------------------

      // * ! (not) operator

      if (!evliMi === true) {
        // todo this thing is meaning if evliMi is not equal to true. so if value of evliMi is equal to "true" then this expression above returns false, if evliMi has "false" value then expression  returns "true" value
        console.log("this person must be married");
      } else {
        // todo if if block can't be exececuted then this else block will be executed
      }

