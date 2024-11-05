//#region 
/**
 * Object with accessors
 */
const personDets = {
    fname: "Eric",
    lname: "Rodriguez",
    language: "ES",
    get lang() {
        return this.language;
    },
    set lang(l) {
        this.language = l;
    },
    get fn() {
        return this.fname;
    },
    set fn(f) {
        this.fname = f;
    },
    get ln() {
        return this.lname;
    },
    set ln(lnamea) {
        this.lname = lnamea;
    }
}
personDets.lang = "EN-US";
personDets.fn = "Harry";
personDets.ln = "Potter";

console.log(personDets.lang);
console.log(personDets.fn);
console.log(personDets.ln);
//#endregion