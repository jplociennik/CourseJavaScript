(() => {

    //zad 1
    const sayNothing = function showText()
    {
        console.log(`You know nothing ${this.name} ${this.lastname}`);
    }
    const user = {
        name: 'Jon',
        lastname: 'Snow',
    };

    sayNothing.call(user);

    //zad 2
    const addresses = {
        showLongAddress(address) { return `Mieszkasz w mieście ${address.city} na ulicy ${address.street}`},
        showShortAddress(address) { return `Miasto: ${address.city}, ulica: ${address.street}`}, 
        showAdress(address, cb) {console.log(cb(address))},
    }

    addresses.showAdress({ city: 'Lublin', street: 'Lekka' }, addresses.showLongAddress);
    addresses.showAdress({ city: 'Kraków', street: 'Dupna' }, addresses.showShortAddress);


    //zad 3

    const sayGreetings = (prefix) => (name) => console.log(`${prefix} ${name}!`);
        
    const sayHi = sayGreetings('Hi');
    const sayHello = sayGreetings('Hello');

    sayHi('Janek');
    sayHello('Wacek');


    //zad 4

    const exp = (number, power) => {
        if(power === 0) return 1;
        return number * exp(number, power -1);
    }

    console.log((exp(2, 2)));
    console.log((exp(2, 3)));

})();

