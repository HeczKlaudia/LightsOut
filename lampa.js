class Lampa {
  constructor(elem, index) {
    this.elem = elem;
    this.allapot = false;
    this.index = index;
    this.setSzin();

    // Eseménykezelők
    this.elem.on("click", () => {
      // nyíl függvény esetén a this a teljes lámpa, ellenkező esetben(function()) nem működik
      //console.log(this);
      this.setAllapot();
      this.KattintasTrigger();
    });
  }

  setSzin() {
    if (this.allapot) {
      this.elem.css("background-color", "black");
    } else {
      this.elem.css("background-color", "yellow");
    }
  }

  setAllapot() {
    // Állapot ellenkezőjére állítása
    this.allapot = !this.allapot;
    this.setSzin();
  }

  KattintasTrigger() {
    //let esemeny = new Event("kartyaKattintas");
    let esemeny = new CustomEvent("lampakapcsolas", { detail: this.index });
    // úgy hozzuk létre az eseményt, hogy azt is megmondjuk, melyik objektum váltotta ki
    //console.log("esemény kiváltása");
    window.dispatchEvent(esemeny); // a főablakból is elérjük az eseményt
  }
}
