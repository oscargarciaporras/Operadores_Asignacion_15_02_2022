
let validar = data =>{
    return data ? "TRUE" : "FALSE";
}

// //Boleanos en objetos, array, arrayAsc
let dato = ["Miguel"];
console.log("Boleanos en objetos, array, arrayAsc ", validar(Object.entries(dato).length));

// //Boleanos en numbre
// 0 = false
// 1 = true
console.log("Boleanos en numbre ", validar(0));

// //Boleanos en string
// "" = false
// " " = true
console.log("Boleanos en string ", validar(" "));



