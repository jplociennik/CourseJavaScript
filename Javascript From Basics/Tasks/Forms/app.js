// Obsłuż walidacje inputa:
// - walidacja powinna reagować na każdą literę
// - walidacja powinna reagować na opuszczenie pola
// - jeśli jest błąd dodaj do inputa klasę "wrong"
// - jeśli jest ok dodaj do inputa klasę "ok"
// - komunikat błędu powinien pojawić się w div#error

// Reguły walidacji:
// - pole wymagane
// - pole zawiera kod pocztowy (np. 22-600)

const input = document.querySelector('input');
const error = document.querySelector('#error');


const setInputError = (target, message) => {
    target.innerText = message;
}

const removeClasses = (e, removeClasses) => {
    removeClasses.forEach(deleteClass => e.target.classList.remove(deleteClass));
}

const addClasses = (e, addClasses) => {
    addClasses.forEach(addClass => e.target.classList.add(addClass));
}

const manageClasses = (e, classesChange) => {
    //add
    if(classesChange[0]) addClasses(e, classesChange[0]);

    //delete
    if(classesChange[1]) removeClasses(e, classesChange[1]);
}

const validateInput = (e, errorMessage, invalidClasses, validClasses, errorContainter) =>
{
    const isValid = errorMessage ? false : true;
    isValid ? manageClasses(e, validClasses) : manageClasses(e, invalidClasses);
    !isValid ? setInputError(errorContainter, errorMessage) : setInputError(errorContainter, '');
}

function postCodeValidation() {
    let errorMessage = '';

    const validatePostCode = (postCode) => {
        const regexPattern = /^[0-9]{2}-[0-9]{3}/;

        if(!postCode) errorMessage = 'Podaj kod pocztowy';
        else if(!regexPattern.test(postCode)) errorMessage = 'Podaj poprawny polski kod pocztowy w podanym formacie xx-xxx, np. 54-212!';
    } 

    const validatePostCodeInput = (e) => {
        const validClasses = [['ok'], ['wrong']]; //[0] - add, [1] - remove
        const invalidClasses = [['wrong'], ['ok']];
        validatePostCode(e.target.value);
        validateInput(e, errorMessage, invalidClasses, validClasses, error);
    }

    return { validatePostCodeInput, errorMessage }
}

const validatePostCode = (e) => {
    const postCodeValidator = postCodeValidation();
    if(e.target.localName === 'input') postCodeValidator.validatePostCodeInput(e);
}

input.addEventListener('keyup', validatePostCode);
input.addEventListener('blur', validatePostCode);