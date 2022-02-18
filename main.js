
// Operadores Arigmetico Suma
let num1 = parseInt(prompt("Usuario ingrese el numero 1", 1));
let num2 = new Number(prompt("Usuario ingrese el numero 2", 2));
let myStyle = `
    color: #fff;
    background: #801515;
    padding: 5px;
    border-radius: 5px;
`;

console.group(`%cOperadores Arigmeticos Suma`, myStyle);

    console.log(`Variable num1: ${num1} num2: ${num2}`);
    num1 += num2;
    console.log(`La suma es: ${num1}`);

console.groupEnd();








// let nombre = prompt(`Ingrese el nombre del usuario`, `Usuario ingrese su nombre porfavor`);
// console.log(nombre);




// // Operadores Adición
// let x = null;
// let y = 50;
// let myStyle = `
//     color: #fff;
//     background: #226666;
//     padding: 5px;
//     border-radius: 5px;
// `;
// // Adición
// console.group(`%cOperadores Adición`, myStyle);


//     console.log(`Variable x: ${x} Variable y: ${y}`);

//     // Abreviacion
//     console.log(`Abreviacion: x += y;`);
//     x += y;

//     // // Significado
//     // console.log(`Significado: x = x + y;`);
//     // x = x + y;

//     console.log(`x: ${x} y: ${y}`);



// console.groupEnd();









// // Operadores Asignacion
// let x;
// let y = 50;
// let myStyle = `
//     color: #fff;
//     background: #226666;
//     padding: 5px;
//     border-radius: 5px;
// `;

// // Asignacion
// console.group(`%cOperadores Asignacion`, myStyle);


//     console.log(`Variable x: ${x} Variable y: ${y}`);

//     // Abreviacion
//     console.log(`Abreviacion: x = y;`);
//     x = y;
//     console.log(`x: ${x} y: ${y}`);



// console.groupEnd();