// bubble sorting

const array = [34, 76, 98, 3, 56, 99, 100, 7, 43, 13, 1248, 33, 2]

for (let j = 0; j < array.length - 1; j++) {

    for (let i = 0; i < array.length - 1 - j; i++) { // -j для ускорения работы алгоритма, уменьшаем кол-во
                                                     // необходимых нам итераций полсе каждого прогона
        if (array[i] > array[i + 1]) {
            /*let temp = array[i + 1]
            array[i + 1] = array[i]
            array[i] = temp*/
            [array[i+1], array[i]] = [array[i], array[i +1]]
        }
    }
}
console.log(array)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Array.sort()

const names = ['Bob', 'Alex', 'Angelica', 'Victor', 'Игорь', 48, 'bob']

console.log(names.sort())   //возвращает ссылку на тот же массив(мутабельный метод)
                            //сортирует объект массива в порядке их расположения в юникоде.
                            // Единственный встроенный в JS метод сортировки

const numbers = [25, 53, 2, 2000, 99, -100] //сортировка так же будет по юникоду, а не по
                                            // возрастанию(самое большое число будет 99)
console.log(numbers.sort())

const numbers2 = [25, 53, 2, 2000, 99, -110]
    const compareFn = (a, b) => a < b ? -100 : 100  //функция сортировки; - и + нужны для сравнения(число не имеет значения),
                                                // так зашито разработчиками. Если минус или 0,
                                                // то не меняем местами, + меняем. Логика опирается на выражение a - b.
                                                //Для сортировки по уменьшению, используется логика b - a(меняем знак местами в функции).
console.log(numbers2.sort(compareFn))


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 48
    },
];

console.log(students
    .sort((a, b)=>a.scores - b.scores) //сортируем по scores
    .reverse() // для сортировки в обратную сторону можно применить метод reverse после после сортировки
)


const Sort = (arr) => { //вариант счетчика не sort для собеседований
    let Length = arr.length - 1
    while (Length > 0) {
        let Max = Math.max(...arr.slice(0, Length + 1))
        let index = arr.indexOf(Max);
        [arr[Length], arr[index]] = [arr[index], arr[Length]]
        Length = Length - 1
    }
    return arr
}
console.log(Sort(arr))