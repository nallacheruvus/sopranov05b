var obja = { id: 102, name: "satish", email: "sat@yahoo.com" };
var objac = { id: 102, name: "satish", email: "sat@yahoo.com" };
var objab = { id: 102, name: "satish", email: "sat@yahoo.com" };
var objaa = { id: 102, name: "satish", email: "sat@yahoo.com" };
var objaaa = { id: 102, name: "satish", email: "sat@yahoo.com" };
const objb = { id: 1021, name: "sarada", email: "sar@yahoo.com" };
let objc = { id: 1032, name: "sunil", email: "sunil@yahoo.com" };

console.log(obja.id + " " + obja.name + " " + obja.email);
console.log("****" + obja["id"] + " " + obja["name"] + " " + obja["email"]);
console.log(JSON.stringify(obja));
for (const k in obja) {
    console.log(k + "-" + obja[k]);
}
console.log("*".repeat(50));
console.log(objb.id + " " + objb.name + " " + objb.email);
console.log(objb["id"] + " " + objb["name"] + " " + objb["email"]);
console.log(JSON.stringify(objb));
for (const k in objb) {
    console.log(k + " " + objb[k]);
}
console.log("*".repeat(50));
console.log(objc.id + " " + objc.name + " " + objc.email);
console.log(objc["id"] + " " + objc["name"] + " " + objc["email"]);
console.log(JSON.stringify(objc));
for (const key in objc) {
    console.log(key + " " + objc[key]);
}

