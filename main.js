let a = false;
let b = false;
let validar = function(id, ope){
    document.querySelector(id).insertAdjacentHTML("beforeend",
    `
        <tr>
            <td>${a}</td>
            ${(ope != "!") ? `<td>${b}</td>` : ""}
            <td>${
                (ope == "&") ? a && b 
                : (ope == "|") ? a || b                 
                : (ope == "!") ? !a
                : ""
            }</td>
        </tr>
        <tr>
            ${(ope != "!") ? `<td>${a}</td><td>${!b}</td>` : `<td>${!a}</td>`}
            <td>${
                (ope == "&") ? a && !b 
                : (ope == "|") ? a || !b                 
                : (ope == "!") ? !!a
                : ""
            }</td>
        </tr>
        <tr>
            ${(ope != "!") ? `<td>${!a}</td><td>${b}</td>` : ""}
            ${
                (ope == "&") ? `<td>${!a && b}</td>` 
                : (ope == "|") ? `<td>${!a || b}</td>`                 
                : ""
            }
        </tr>
        <tr>
            ${(ope != "!") ? `<td>${!a}</td><td>${!b}</td>` : ""}
            ${
                (ope == "&") ? `<td>${!a && !b}</td>` 
                : (ope == "|") ? `<td>${!a || !b}</td>`                 
                : ""
            }
        </tr>
    `
    );
};
validar("#OperadorAND", "&");
validar("#OperadorOR", "|");
validar("#OperadorNOT", "!");



// Ejemplo
// (ope == "&") ? a && b 
// : (ope == "|") ? a || b                 
// : (ope == "!") ? !a
// : ""
// /////
// function resultado(){
//     if(ope == "&"){
//         return a && b;
//     }else{
//         if(ope == "|"){
//             return  a || b;
//         }else{
//             if(ope == "!"){
//                 return !a;
//             }else{
//                 return "";
//             }
//         }
//     }
// }





// let resultado = 0 && Object.entries(" ").length + (8%1);
// //               0 && true + 0   
// //                 0  &&  1
// //                     0
// //
// //
// //

// console.log(resultado);