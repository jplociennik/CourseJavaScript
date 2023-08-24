let age;

const ageInput = document.querySelector('#ageValidator')
const warning = document.querySelector('#warning')
const verifyButton = document.querySelector('#verifyButton')

ageInput.addEventListener('keyup', (event) =>
{
    age = Number(event.target.value);
    warning.innerHTML = isNaN(age) ? 'Podana wartość musi być cyfrą/liczbą!' : '';
})

verifyButton.addEventListener('click', () =>
{
    if (isNaN(age) || age == null) warning.innerHTML = 'Podaj wartość!'
    else if (age < 18) document.write('Nie możesz korzystać z tej strony. Jesteś za młody młodzieniaszku!')
    else if(age >= 18) window.location.href = "file:///D:/Courses/JavaScript/index.html";
})