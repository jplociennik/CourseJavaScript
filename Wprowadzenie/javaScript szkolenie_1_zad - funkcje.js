//zad 1
// ---------------------------------------------------------------------------------------------------------
function showDeliveryAddress(city, street, streetNumber){
    document.write(`Adres dostawy paczki: ${city}, ul. ${street} ${streetNumber}.`)
}

showDeliveryAddress('Wrocław', 'Małopanewska', '14a/12a')

//------------------------------------------------------------------------------------------------------------
//zad 2

function addNumbers(a, b) { return a + b }
function multiplyNumbers(a,b) { return a * b}
function divideNumbers(a,b) { return a / b}
function showResult(result) { document.write(`Wynik to: ${result}!`) }

let multiplyResult = multiplyNumbers(2,3)
let divideResult = divideNumbers(12, 4)
let finalResult = addNumbers(multiplyResult, divideResult);

//-------------------------------------------------------------------------------------------------------------
//zad 3

let multiplyResult2 = (a,b) => a * b
let divideResult2 = (a,b) => a / b
let addResult2 = (a,b) => a + b
let finalResult2 = result => { document.write(`Wynik to: ${result}!`) } 

finalResult2( addResult2( multiplyResult2(2,3), divideResult2(12, 4) ) )
