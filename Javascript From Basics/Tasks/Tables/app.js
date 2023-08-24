//1. Znajdź liczbę wystąpień określonej wartości w tablicy:

  const names = ['Jan', 'Łukasz', 'Paweł', 'Łukasz', 'Jan', 'Adam'];

  const counterValueInArray = (array, value) => array.filter(element => element === value).length;
  console.log(`Zad 1: ${counterValueInArray(names, 'Łukasz')}`);

//2. Posortuj elementy w tablicy alfabetycznie (od Z do A):

  const sortUnalphabetically = function(sort = 'asc')
  {
    let sorted = this.sort();
    if(sort === 'asc') return sorted
    else if(sort === 'desc') return this.reverse();
  }

  const fruits = ['apple', 'banana', 'orange', 'kiwi'];
  console.log(`Zad 2: ${sortUnalphabetically.call(fruits, 'desc')}`);

//3. Znajdź w tablicy i edytuj pole "price" elementu, którego title='JS'

  const courses = [
    { title: 'PHP', price: 45 },
    { title: 'MySQL', price: 36 },
    { title: 'MySQL', price: 36 },
    { title: 'JS', price: 59 },
  ];
  
  /**
   * Metoda usuwa lub modyfikuje elementy w tablicy obiektów
   * @param {*} indexes tablica indeksów, na których zajdzie zmiana
   * @param {*} field nazwa zmienianego pola w obiekcie
   * @param {*} newValues tablica nowych wartości dla pól lub całych obiektów, ważne, aby była tej samej wielkości co tablica indeksów!
   */
  const modifyElementsInArrayOfObjects = function(indexes, newValues = null, field = null) {
      if(newValues)
      {
        if(newValues.length !== indexes.length) 
            throw new Error(`Wielkość tablic indeksów i wartości nie jest taka sama! Indeksy: ${indexes.length} Wartości: ${newValues.length}`);

        for (const index in indexes) 
        {
            let obj;
            if(typeof newValues[index] === 'object')
            {
                obj = newValues[index];
            }
            else
            {
                obj = this[indexes[index]];
                obj[field] = newValues[index];
            }
            this.splice(indexes[index], 1, obj); 
        }
      }
      else 
      {
        for (const index of indexes) this.splice(index, 1);
      }
  };
  
  const getAllIndexes = function(field, val) {
        let indexes = [];

        Object
            .entries(this)
            .forEach(x => { if(x[1][field] === val) indexes.push(x[0])});

        return indexes
    }

  modifyElementsInArrayOfObjects.call(courses, getAllIndexes.call(courses, 'title', 'JS'), [30], 'price' ); 

  const newBooks = [
    { title: 'Wiedźmin', price: 90.65, author: 'A. Sapkowski' },
    { title: 'Pieśń Lodu i Ognia', price: 76.87, author: 'G.R.R. Martin', publisher: 'Jaguar' }
]
  modifyElementsInArrayOfObjects.call(courses, getAllIndexes.call(courses, 'title', 'MySQL'), newBooks );
  console.log('Zad 3:'); console.log(courses);

//4. Znajdź i usuń z tablicy użytkownika, który jest zbanowany:

  const users = [
    { name: 'Ania', isBanned: false },
    { name: 'Janek', isBanned: false },
    { name: 'Kamil', isBanned: true },
  ];

  modifyElementsInArrayOfObjects.call(users, getAllIndexes.call(users, 'isBanned', true));
  console.log('Zad 4:'); console.log(users);

// 5. Wyświetl końcowy wynik: "64-45" z poniżeszej tablicy:
//  - odfiltruj wartości mniejsze niż 45
//  - zadbaj aby wartości się nie powtarzały
//  - połącz w jeden tekst

  const onlyUnique = (value, index, array) => array.indexOf(value) === index;
  const numbers = [2, 0, 64, 3, 45, 12, 45, 2];

  const sorted = numbers.filter(x => x >= 45).filter(onlyUnique).sort((a,b) => a - b).join('-');
  console.log(`Zad 5: ${sorted}`);