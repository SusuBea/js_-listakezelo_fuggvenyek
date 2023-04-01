export function rendezBarmiSzerint(lista, kulcs, irany=1){
/** név szerint ABC sorrendbe rendezzük az adatokat
 * ezzel az erdeti lista is megváltozik
 */
console.log(lista)
lista.sort(function(a,b){
    console.log(a.nev)
    console.log(b.nev)
    console.log("következő a, b")
    let ertek = 1
    if(a[kulcs] < b[kulcs]){
        ertek = -1;
    }
    ertek *= irany
    return ertek; /** visszatérünk pozitív vagy negatív számmal */
});
}
/** filter - szűrés
 * megadhatsz egy szűrési feltétlet és a szerint fog szűrni
 */

//Bea