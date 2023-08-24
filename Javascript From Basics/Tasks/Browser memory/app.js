// 1. Przygotuj przycisk do zmiany kolorystyki strony (ciemna/jasna). Dane powinny się zapisywać do Cookie aby po odświeżeniu styl był ten sam.
// - przycisk powinien mieć odpowiednio treść "Jasny" lub "Ciemny"
// - wykorzystaj dodanie klasy CSS do <body>
    const layoutButton = document.querySelector('#styleBtn');  
    const notepad = document.querySelector('#notepad');  
    const body = document.querySelector('#bodyId');

    function styleChange() {

       const styleLight = () => {
            layoutButton.classList.toggle('light');  
            body.classList.toggle('light');
            notepad.classList.toggle('light');
       };

       const styleDark = () => {
            layoutButton.classList.toggle('dark');
            body.classList.toggle('dark');
            notepad.classList.toggle('dark');
       }

       const styleSwap = () => { styleLight(); styleDark(); }

       return {styleLight, styleDark, styleSwap,};
    }

    const setNewCookie = (cookieName, cookieValue, cookieDate = null) =>
    {
        let date;
        if(!cookieDate)
        {
            date = new Date();
            date.setFullYear(date.getFullYear() + 50);
        } 
        setCookie(cookieName, cookieValue, cookieDate ?? date.toUTCString());
    }

    const styleOnPageStart = (layout) =>
    {
        const styleChanger = styleChange();

        layoutButton.innerText = layout === 'light' || layout === '' ? 'Jasny' : 'Ciemny';
        switch(layout)
        {
            case '': setNewCookie('layout', 'light'); break;
            case 'dark': styleChanger.styleDark(); break;
            case 'light': styleChanger.styleLight(); break;
        }
    }

    const notepadOnPageStart = () =>
    {
        notepad.innerText = sessionStorage.getItem('notepadText');
    }

    const styleChangeOnClick = (e) => 
    {
        const styleChanger = styleChange();
        const layout = getCookie('layout');
        e.target.innerText = layout === 'light' ? 'Ciemny' : 'Jasny';

        if(layout === 'light') { deleteCookie('layout'); setNewCookie('layout', 'dark');}
        else if(layout === 'dark') {deleteCookie('layout'); setNewCookie('layout', 'light');}
        styleChanger.styleSwap();
    }
    
//2. Przygotuj Notatnik. Tekst powinien się zapisywać w czasie rzeczywistym (po kliknięciu dowolnego klawisza) do localStorage/sessionStorage,
// aby po odświeżeniu widniała ta sama treść.

const saveNotepadInfo = (e) => {
    sessionStorage.setItem('notepadText', e.target.value);
}

notepadOnPageStart();
styleOnPageStart(getCookie('layout'));
notepad.addEventListener('keyup', saveNotepadInfo);
layoutButton.addEventListener('click', styleChangeOnClick);