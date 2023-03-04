
        const murat = {
            yas: 24,
            isim: 'murat',
            soyisim: 'gözen',
            okul: "Ataşehir Adıgüzel MYO",
            mezuniyetTarihi: 2018,

            kaçYıldırMezun: function hesapla(mevcutYil) {
                sonuc = mevcutYil - this.mezuniyetTarihi
                return sonuc;
            }

            // if use this keyword in the object we work on, then we will call it to use.  this keyword used instead of murat object. So, this keyword replaces itself as a name of object.
            
            // ! we only use it inside of relevant object's curyl braces.

            //  this =  calling object


        };
        console.log(murat.kaçYıldırMezun(2022));
