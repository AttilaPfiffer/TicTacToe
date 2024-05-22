export default class Elem {
    #ertek = ""
    #szuloElem;
    #divElem;
    #index = 0;
    constructor(index, ertek, szuloElem) {
        this.#index = index;
        this.#ertek = ertek;
        this.#szuloElem = szuloElem;
        this.#megjelenit();
        this.#divElem = this.#szuloElem.children("div:last-child");
        /* névtelen függvényként functiont használva a "this" arra a html elemre mutat, amelyik kiváltotta az eseményt. Nyíl függvény esetén a "this" a konkrét objektum példányra mutat. */
        this.#divElem.on("click", () => {
            //console.log(this.#index)
            /* csak akkor tudjunk kattintani ha nincs benne érték */
            if(this.#ertek == " ") {
                this.#trigger("kattintasom")
            }
            
        })
    }

    #megjelenit() {
        /* elkészítjük a html kódot */
        let txt = `
                <div class = "elem">
                    <p>${this.#ertek}</p>
                </div>`
        
                this.#szuloElem.append(txt)
    }

    /* saját esemény létrehozása */
    #trigger(esemenynev) {
        /* létrehozok egy új saját eseményt */
        const e = new CustomEvent(esemenynev, {detail:this.#index})
        /* az eseményt elérhetővé teszem az egész programban */
        window.dispatchEvent(e)
    }

}

