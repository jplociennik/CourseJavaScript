//zad 1

/* HTML - index.html
    <title>JS</title>
    <meta charset="UTF-8">
    <link href="styles.css" rel="stylesheet">

    <P>Kalkulator</P>

    <input type="text" id="input1">
    <input type="text" id="input2">

    <div id="wrapper">
        <button id="add">+</button>
        <button id="substract">-</button>
        <button id="divide">/</button>
        <button id="multiply">*</button>
    </div>

    <p>Wynik: <span id="result"></span></p>

    <p id="warning"></p>

    <script src="app.js"></script>
*/

const addNumbers = (num1, num2) => num1 + num2
const substractNumbers = (num1, num2) => num1 - num2
const multiplyNumbers = (num1, num2) => num1 * num2
const divideNumbers = (num1, num2) => num1 / num2
let num1, num2;

const inputCal1 = document.querySelector('#input1')
const inputCal2 = document.querySelector('#input2')
const wrapper = document.querySelector('#wrapper')
const warning = document.querySelector('#warning')
const result = document.querySelector('#result')

wrapper.addEventListener('click', (event) =>
{
    console.log(event)
    if (event.target.nodeName !== 'BUTTON') {
        return;
    }

    num1 = Number(inputCal1.value);
    num2 = Number(inputCal2.value);

    showErrorResult(inputCal1.value, inputCal2.value)
    result.innerHTML = '';

    if(warning.innerHTML.length == 0)
    {
        switch(event.target.id)
        {
            case 'add': result.innerHTML = addNumbers(num1, num2); break;
            case 'substract': result.innerHTML = substractNumbers(num1, num2); break;
            case 'divide': result.innerHTML = num2 != 0 ? divideNumbers(num1, num2) : 'Nie dzielimy przez zero!'; break;
            case 'multiply': result.innerHTML = multiplyNumbers(num1, num2); break;
        }
    }
})

function showErrorResult(num1, num2)
{
    if (isNaN(num1) || isNaN(num2)) warning.innerHTML = 'Podane wartości muszą być cyframi/liczbami!'
    else if (num1.length == 0 || num2.length == 0) warning.innerHTML = 'Nie podałeś wartości w obu polach!'
    else warning.innerHTML = ''
}

//-----------------------------------------------------------------------------------------------
//zad 2 - oddzielny plik

/* HTML - entry.html
    <title>JS_ENTER</title>
    <meta charset="UTF-8">
    <link href="styles.css" rel="stylesheet">

    <p id="ageAsk">Czy ukończyłeś 18 lat?<br></p>

    <input type="text" id="ageValidator">
    <button id="verifyButton">Zweryfikuj</button>

    <p id="warning"></p>

    <script src="enter.js"></script>
*/

let age;

const ageInput = document.querySelector('#ageValidator')
const warning2 = document.querySelector('#warning')
const verifyButton = document.querySelector('#verifyButton')

verifyButton.addEventListener('click', () =>
{
    age = Number(ageInput.value);
    warning2.innerHTML = isNaN(age) || age.length == 0 ? 'Podana wartość musi być cyfrą/liczbą!' : '';

    if(warning2.innerHTML.length == 0)
    {
        if (age < 18) document.write('Nie możesz korzystać z tej strony. Jesteś za młody młodzieniaszku!')
        else if(age >= 18) window.location.href = "file:///D:/Courses/JavaScript/index.html";
    }
})