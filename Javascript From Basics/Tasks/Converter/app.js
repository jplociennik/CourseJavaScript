//definicje elementów na stronie
const units = document.querySelector('#units');
const direction = document.querySelector('#direction');
const calculate = document.querySelector('#calculateBtn');
const directionArrow = document.querySelector('#directionArrow');
const leftInput = document.querySelector('#leftInput');
const rightInput = document.querySelector('#rightInput');
const warning = document.querySelector('#warning');

//listenery
units.addEventListener('click', changeUnit);
direction.addEventListener('click', changeDirection);
calculate.addEventListener('click', convertUnits);

//metody
function changeUnit(e) 
{
    if(e.target.closest('button') && +e.target.dataset.isTimeUnit === 0)
    {
        if(e.target.id === 'timeUnitBtn') 
        {
            e.target.classList.toggle('converterBtnMarked');
            e.target.dataset.isTimeUnit = Number(!Boolean(+e.target.dataset.isTimeUnit));

            e.target.nextElementSibling.dataset.isTimeUnit = Number(!Boolean(+e.target.dataset.isTimeUnit));
            e.target.nextElementSibling.classList.toggle('converterBtnMarked');  
        }

        else if(e.target.id === 'measurementUnitBtn') 
        {
            e.target.classList.toggle('converterBtnMarked');
            e.target.dataset.isTimeUnit = Number(!Boolean(+e.target.dataset.isTimeUnit));

            e.target.previousElementSibling.dataset.isTimeUnit = Number(!Boolean(+e.target.dataset.isTimeUnit));
            e.target.previousElementSibling.classList.toggle('converterBtnMarked');  
        }
    }
}

function changeDirection(e)
{
    console.log(e)
    if(e.target.closest('button') && e.target.dataset.direction === 'false')
    {
        rightInput.value = ''; leftInput.value = '';
        directionArrow.innerText = directionArrow.innerText === '===>' ? '<===' : '===>';

        e.target.dataset.direction = !+e.target.dataset.direction;
        e.target.classList.toggle('converterBtnMarked');

        if(e.target.id === 'rightDirectionBtn')
        {
            rightInput.setAttribute('disabled', 'true');
            leftInput.removeAttribute('disabled');

            e.target.nextElementSibling.dataset.direction = !e.target.nextElementSibling.dataset.direction;
            e.target.nextElementSibling.classList.toggle('converterBtnMarked');  
        }
        else
        {
            leftInput.setAttribute('disabled', 'true');
            rightInput.removeAttribute('disabled');
            leftInput.value = '';

            e.target.previousElementSibling.dataset.direction = !e.target.previousElementSibling.dataset.direction;
            e.target.previousElementSibling.classList.toggle('converterBtnMarked');
        }
    }
}

function convertUnits() 
{   
    let isRight = direction.children[0].dataset.direction === 'true';
    leftInput.value = leftInput.value.replace(',', '.'); 
    rightInput.value = rightInput.value.replace(',', '.');

    if( (!isNaN(+leftInput.value) && +leftInput.value !== 0 && isRight) || (!isNaN(+rightInput.value) && +rightInput.value !== 0 && !isRight) )
    {
        warning.innerText = '';
        let isTimeUnit = +units.children[0].dataset.isTimeUnit === 1 ? true : false; 
    
        if(isRight) rightInput.value = calculateConversion(+leftInput.value, isTimeUnit, isRight);
        else leftInput.value = calculateConversion(+rightInput.value, isTimeUnit);
    }
    else
    {
        warning.innerText = `W polach do wpisywania wartości dopuszczalne są jedynie liczby!`
    }
}

function calculateConversion(unitValue, isTimeUnit, isRight)
{
    let val;
    if(isRight) val = isTimeUnit ? (Math.round(unitValue * 60 * 100) / 100) : (Math.round(unitValue / 1.609344 * 100) / 100);
    else val = isTimeUnit ? (Math.round(unitValue / 60 * 100) / 100) : (Math.round(unitValue * 1.609344 * 100) / 100);

    return parseFloat(val.toFixed(2));
}