import JatekTer from "./Jatekter.js";

/* példányosítjuk a játékteret */
class AllapotKezelo {
    #jatekLISTA = [" ", "O", " ", " ", "X", " ", " ", " ", " "];
    #lepes = 0;
    constructor() {
        new JatekTer(this.#jatekLISTA);
        /* feliratkozom a saját kattintasom eseményemre */
        $(window).on("kattintasom", (event) => {
        console.log(event.detail)
        /* megáltoztattam a program állapotát */
        let index = event.detail;
        if(this.#lepes % 2 == 0) {
            this.#jatekLISTA[index] = "X";
        } else {
            this.#jatekLISTA[index] = "O";
        }
        this.#lepes++;
        /* itt újra megjelenítem a program állapotát */
        new JatekTer(this.#jatekLISTA);
})
        
    }
}

 /*ha a lépés számláló páros, akkor X következik, ha páratlan akkor az O 
A lépést növeljük ha rákattintunk egy elemre.
*/

new AllapotKezelo();



