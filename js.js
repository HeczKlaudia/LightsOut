$(function () {
  // A szüólőelem és a sablonelem meghatározása
  const szuloElem = $("article");
  const sablonElem = $(".lampa");
  const lampaTomb = [];
  const meret = 9;
  for (let index = 0; index < meret; index++) {
    // A sablonelem klónozása, a szülőelem csatolása
    const ujElem = sablonElem.clone().appendTo(szuloElem);
    // A példányosítás
    const lampa = new Lampa(ujElem, index);
    // Az objektumokat beletesszük egy tömbbe
    lampaTomb.push(lampa);
  }
  sablonElem.remove();
  //console.log(lampaTomb);

  // Feliratkozás az eseményre
  $(window).on("lampakapcsolas", (esemeny) => {
    //console.log(esemeny.detail); // az aktuális lámpa adata
    let elemID = esemeny.detail;

    // Szomszédos elem:
    if (elemID == 0) {
      lampaTomb[elemID + 1].setAllapot();
      lampaTomb[elemID + 3].setAllapot();
    } else if (elemID == 2) {
      lampaTomb[elemID + 3].setAllapot();
      lampaTomb[elemID - 1].setAllapot();
    } else if (elemID == 3 || elemID == 5) {
      lampaTomb[elemID - 3].setAllapot();
      lampaTomb[elemID + 3].setAllapot();
    } else if (elemID == 6) {
      lampaTomb[elemID - 3].setAllapot();
      lampaTomb[elemID + 1].setAllapot();
    } else if (elemID == 8) {
      lampaTomb[elemID - 3].setAllapot();
      lampaTomb[elemID - 1].setAllapot();
    } else {
      lampaTomb[elemID + 1].setAllapot();
      lampaTomb[elemID - 1].setAllapot();
    }
  });
});
