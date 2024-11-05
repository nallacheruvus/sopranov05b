//#region 
/**
 * Constructor function for person
 * @param {Name of the person} name 
 * @param {Email of the person} email 
 * @param {Mobile of person} mobile 
 * @author SatishN
 * @constructor
 */

function Persons(name, email, mobile) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
}
/**
 * Test code for constructor function
 */
const obj = new Persons('Sunidhi', 'sun@yahoo.com', '94848484848');
console.log(obj.name + " " + obj.email + " " + obj.mobile);
console.log('***' + obj["name"] + " " + obj["email"] + " " + obj["mobile"]);
console.log(JSON.stringify(obj));
for (const key in obj) {
    console.log(key + " " + obj[key]);
}
//#endregion
//#region 
/**
 * Constructor for the cars objects
 * @param {Name of car} name 
 * @param {Brand of car} brand 
 */
function Cars(name, brand) {
    this.name = name;
    this.brand = brand;
}
/**
 * Test code for constructor function
 */
const cObj = new Cars("Octavio", "Skoda");
console.log(JSON.stringify(cObj));
console.log(cObj.name + " " + cObj.brand);
console.log('****' + cObj["name"] + " " + cObj["brand"]);
for (const k in cObj) {
    console.log(k + " " + cObj[k]);
}
//#endregion
//#region 
/**
 * Constructor function for Books
 * @param {Name of the book} name 
 * @param {Author of the book} author 
 */
function Books(name, author) {
    this.name = name;
    this.author = author;
    this.toString = function () {
        return 'Name of the book: ' + this.name + "\nAuthor of the book: " + this.author + "\n";
    }
}
/**
 * Test code for constructor function
 */
const bObj = new Books("Quiet flows of don", "M Sholkov");
console.log(JSON.stringify(bObj));
console.log(bObj.toString());
const arr1 = ["Ramayan", "Who will tell the president", "Leelavathi ganitham", "Arthasastra", "Feynman lectures"];
const arr2 = ["Valmiki", "J Archer", "Bhaskaracharya", "Koutilya", "Richard Feynman"];
let bookArr = [];
for (let i = 0; i < arr1.length; i++) {
    const book = new Books(arr1[i], arr2[i]);
    bookArr.push(book);
}
for (let i = 0; i < bookArr.length; i++) {
    console.log(bookArr[i].toString());
}
//#endregion