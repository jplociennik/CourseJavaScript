let points = 0;

//definicje dokumentów
const elements = document.querySelector('#elements');
const result = document.querySelector('#points');

//listenery
elements.addEventListener('click', recognizeElement);

function recognizeElement(e)
{
    const divClassList = e.target.classList;
    const dataset = e.target.closest('td').dataset;

    if(!divClassList.contains('show'))
    {
        divClassList.add('show');
        
        if('isBomb' in dataset) 
        {
            alert('Koniec Gry!');
            location.reload();
        }
        else
            calculatePoints(+dataset.points);
    }
}

function calculatePoints(elementPoints)
{
    points += elementPoints;
    if(points >= 150)
    {
        alert(`Wygrałeś mordeczko! Twoje punkty: ${points}`);
        location.reload();
    }

    result.innerHTML = points;
}