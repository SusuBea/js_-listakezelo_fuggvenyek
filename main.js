import { KUTYALISTA, KUTYAKULCS } from "./adat.js";
import  { osszeallit, osszeallit2 } from "./adatkezeles.js";
window.addEventListener("load", init);

let ARTICLE;
let kartyak;
let tablazat;

function init() {
  ARTICLE = document.querySelector("article");
  kartyak = document.querySelector("section.kartyak");
  tablazat = document.querySelector("section.tablazat");
  kartyak.innerHTML = osszeallit(KUTYALISTA)
  tablazat.innerHTML = osszeallit2(KUTYALISTA)


  torlesGomb();
  const SUBMIT = document.querySelector("#rogzites");
  SUBMIT.addEventListener("click", ujKutya);
}



function torlesGomb() {
  const TR = document.querySelectorAll("tr");

  for (let index = 0; index < KUTYALISTA.length; index++) {
    const TD = document.createElement("td");
    const TORLES = document.createElement("button");
    TORLES.innerText = "Törlés";
    TR[index].appendChild(TD);
    TD.appendChild(TORLES);
    TORLES.addEventListener("click", function () {
      torlesFunkcio(index);
    });
  }
}

function torlesFunkcio(index) {
  KUTYALISTA.splice(index, 1);
  kartyak.innerHTML = osszeallit(KUTYALISTA)
  tablazat.innerHTML = osszeallit2(KUTYALISTA)

  torlesGomb();
}

function ujKutya() {
  //itt hozom létre  a listát amibe belepakolok majd mindent - NevInputElem...stb.
  const kutya= {};
  let szuka = document.querySelector("#szuka");
  let kan = document.querySelector("#kan");
  const ADAT = document.querySelectorAll("input");
  /**szedjük össze az űrlap adatait,
   * és tegyük bele egy objektumba 
   * és fűzzük, hozzá a listánkhoz
    */

  //megfogom a beviteli mezőt
  const NevInputElem = document.querySelector("#kneve") 
  //beleteszem a már fentebb lértehozott listába a beírt adatokat
  kutya.nev=NevInputElem.value;

  const KorInputElem = document.querySelector("#kkor") 
  kutya.kor=KorInputElem.value;

  const FajtaInputElem = document.querySelector("#kfajta") 
  kutya.fajta=FajtaInputElem.value;

  const LabInputElem = document.querySelector("#klaba") 
  kutya.lab=FajtaInputElem.value;

  const NemInputElem = document.querySelector("#szuka") 
  if(NemInputElem.checked){
    kutya.nem = "szuka"
  }else{
    kutya.nem = "kan"
  }


  


  KUTYALISTA.push(kutya);
  console.log(KUTYALISTA);
  kartyak.innerHTML = osszeallit(KUTYALISTA)
  tablazat.innerHTML = osszeallit2(KUTYALISTA)

  torlesGomb();
}


// let index = 0;
// for (const kulcs in KUTYALISTA[index]) {
//   if (ADAT[index].id == "szuka" && (szuka.checked = true)) {
//     console.log("szuka");
//     Kutya[kulcs] = "szuka";
//     index++;
//   } else if (ADAT[index].id == "kan" && (kan.checked = true)) {
//     console.log("kan");
//     Kutya[kulcs] = "kan";
//   } else {
//     Kutya[kulcs] = `${ADAT[index].value}`;
//   }
//   index++;
// }