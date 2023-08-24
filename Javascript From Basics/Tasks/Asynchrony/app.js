// Zadanie 1: Przygotuj funkcje, która podświetli na moment kliknięty button

const btnSunshine = document.querySelector('.color-btn');
const btnStoper = document.querySelector('#stopper-btn');
const stoperTime = document.querySelector('.time');

const buttonSunshineBaby = (e) => {
    setTimeout(() => { 
       e.target.classList.add('color-btn-active');
    }, 1000)

    setTimeout(() => { 
         e.target.classList.remove('color-btn-active');
    }, 2000)

}

btnSunshine.addEventListener('click', buttonSunshineBaby)

// Zadadnie 2: Przygotuj stoper z dokładnością do 1/100 sekundy.
//   - startuje po klinięciu w "Start"
//   - po starcie button "Start" zamienia się w "Stop"
//   - stopuje po kliknięciu w "Stop"
//   - po zastopowaniu button "Stop" zamienia się w "Start" i wznawia obecny stoper od ostatniego stanu

const addMilliseconds = (date, milliseconds) => { date.setMilliseconds(date.getMilliseconds() + milliseconds); return date; };
let isActive;

function stoperHandle() {
    const STOPER_GAP = 10;
    let date;

    const stoperId = setInterval(() => {
        if(!+isActive) {
            console.log('stop');
            clearInterval(stoperId);
        }
        else {
            date = addMilliseconds(date, STOPER_GAP);
            let hours = date.getHours() - 1 === 0 ? '' : (date.getHours() - 1 <= 9 ? `0${date.getHours() - 1}:` : `${date.getHours() - 1}:`);
            let minutes = date.getMinutes() === 0 ? '' : (date.getMinutes() <= 9 ? `0${date.getMinutes()}:` : `${date.getMinutes()}:`);
            let seconds = date.getSeconds() <= 9 ? '0' + date.getSeconds() : date.getSeconds();
            let milliseconds = (date.getMilliseconds() <= 9 ? '0' + date.getMilliseconds() : date.getMilliseconds()) / 10;
            stoperTime.innerText = `${hours}${minutes}${seconds}:${milliseconds}`
        }
    
    }, STOPER_GAP)
    
    const stoperToogle = (e) => { 
        isActive = +(!Boolean(+e.target.dataset.active));
        e.target.innerText = +isActive ? 'Stop' : 'Start';
        e.target.dataset.active = isActive;

        if(+isActive)
        {
            console.log('start');
            date = new Date();
            date.setTime(0);
        }
    }

    return { stoperToogle }
}

const activateStoper = (e) => { 
    const stoperHandler = stoperHandle(); 
    stoperHandler.stoperToogle(e)
} 

btnStoper.addEventListener('click', activateStoper)