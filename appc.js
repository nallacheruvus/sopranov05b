//#region 
/**
 * Construcor function parent
 */
function Books() {
    this.name = "Books Collection";
    this.language = "English";
    this.Genere = "Fiction Pulp";
}
/**
 * Constructor function child
 */
function Novels() {
    Books.call(this);
}
/**
 * Inheritance using Object.create
 */
Novels.prototype = Object.create(Books.prototype);
const nova = new Novels();
console.log(nova.name);
console.log(nova.language);
console.log(nova.Genere);
//#endregion

//#region 
/**
 * Constructor function parent
 */
function EarPhones() {
    this.name = "Skull Candy";
    this.coOrigin = "UK";
}
function Wireless() {
    EarPhones.call(this);
    this.brand = "Skull Candy Enterprise";
}
function Wired() {
    EarPhones.call(this);
    this.voltage = "0.5v";
}
/**
 * Object creation from prototype
 */
Wireless.prototype = Object.create(EarPhones.prototype);
const wirel = new Wireless();
console.log(wirel.name);
console.log(wirel.coOrigin);
console.log(wirel.brand);
Wired.prototype = Object.create(EarPhones.prototype);
const wired = new Wired();
wired.voltage = "2v";
wired.name = "Manchester";
wired.coOrigin = "Ireland";
console.log(wired.name);
console.log(wired.coOrigin);
console.log(wired.voltage);
//#endregion

//#region 
/**
 * Grand Parent function
 */
function GParent() {
    this.name = "Grand parent";
    this.familyname = "Oskar";
    this.coOrigin = "Deutchland";
}
/**
 * Parent function
 */
function Parent() {
    GParent.call(this);
    this.email = "sat@yahoo.com";
}
/**
 * Child function
 */
function Child() {
    Parent.call(this);
    this.mobile = "9877676543";
}
/**
 * Grand child function
 */
function Grandchild() {
    Child.call(this);
    this.deptid = "21CDV887";
}
// Child.prototype = Object.create(Parent.prototype);
// const obja = new Child();
// console.log(obja.name);
// console.log(obja.email);
// console.log(obja.mobile);
console.clear();
Grandchild.prototype = Object.create(Child.prototype);
const objb = new Grandchild();
objb.name = "Silbershatz Associates";
console.log(objb.name);
console.log(objb.email);
console.log(objb.mobile);
console.log(objb.deptid);
console.log(objb.familyname);
console.log(objb.coOrigin);
//#endregion