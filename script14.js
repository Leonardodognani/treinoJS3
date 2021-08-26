//Operator precedence

/*

grouping                        ( )
negação e incremento            ! ++ --
multiplicação e divisão         * /
adição e subtração              + -
relacionais                     < <= > >= c
igualdade                       == != === !==
AND                             &&
OR                              ||
condicional                     ?:
assignment                      = += -= *=

*/


console.log(3 > 2 && 3 > (1 + 1))
// imprime "true", pois pela ordem de precedência, primeiro é o entre parênteses, depois os relacionais
// e depois e depois o AND &&.