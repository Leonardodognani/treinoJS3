//FALSY  - quando um valor é considerado false em contextos onde um booleano é obrigatório
//(condicionais e loops)

// false
// -0
// 0
// ""
// null
// undefined
// NaN

console.log(true ? "verdadeiro" : "falso") // imprime verdadeiro


//TRUTHY - quando o valor é considerado true em contextos onde um Booleano é obrigatório
//condicionais e loops)

// true
// {}
// []
// 1
// 3.23
// "0"
// "false"
// Infinity
// -Infinity


console.log( {} ? "verdade!" : "mentira!") // imprime verdade!