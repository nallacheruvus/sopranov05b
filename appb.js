//if i have object literals or constants 
//#region 
/**
 * Constant person being converted to object 
 * using Object.create
 * @author satishn
 */
const persona = {
    fname: "Johnson",
    lname: "Kirkson",
    prnIntro: function () {
        console.log(this.fname + " " + this.lname);
    }
}
const objPer = Object.create(persona);
objPer.fname = "Jackob";
objPer.lname = "Mikkel";
(objPer.prnIntro());
//#endregion

//#region 
/**
 * Constant books being converted to object 
 * using Object.create
 * @author satishn
 */
const bookDets = {
    bname: "Elephant Song",
    bauth: "Wilbur Smith",
    bpress: "Nariman Press",
    prnDets: function () {
        return "Name Of the book: " + this.bname + " Author: " + this.bauth + " Publisher: " + this.bpress
    }
}
const objBook = Object.create(bookDets);
objBook.bname = "Quiet sigh of moor";
objBook.bauth = "Salman Rushdie";
objBook.bpress = "Pocket Books";
console.log(objBook.prnDets());
//#endregion