//zad 1
for(let i = 0; i <= 20; i += 2)
{
    console.log(i);
}

for(let i = 0; i <= 20; i++)
{
    if(i % 2 !== 0) continue;
    console.log(i);
}

//zad 2
let sum = 0;

for(let i = 1; i <= 100; i++ )
{
    sum += i;
}
console.log(sum);

//zad 3
let text = window.prompt('Podaj tekst');
let reverseText = '';

for (let i = text.length - 1; i >= 0; i--) reverseText += text[i];
console.log(reverseText);

//zad 4
let x = 40;

do
{
    x++;
    if(x % 13 === 0) break;
}
while(x > 40)
console.log(x);

//zad 5
const person = { name: "Jane", age: 24 };

for (const key in person) {
    console.log(`Pole ${key} ==> ${person[key]}`);
}

Object.entries(person).forEach(entry => console.log(`Pole ${entry[0]} ==> ${entry[1]})`));
Object.values(person).forEach(val => console.log(val));