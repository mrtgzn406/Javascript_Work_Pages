
      const sarahAge = 0;
      const isOldEnough = sarahAge >= 18;

      if (isOldEnough === true) {
        console.log("Sarah can get driving licence");
      } else if (sarahAge <= 0) {
        console.log(`age of sarah can't be below 1, please try again`);
      } else {
        const leftYear = 18 - sarahAge;
        console.log(
          `Sarah is too young to get the driving licence, she must wait another ${leftYear} year(s)`
        );
      }

      console.log("here are the emojies: 😊");

