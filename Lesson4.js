console.log('yoyoyo')

const todoList_1 = '345345'
const todoList_2 = '34vrfevrt'
const todoList_3 = '34vrfvfdbevrt'


const todoLists = [
    {
        id: todoList_1,
        title: 'What to buy',
        filter: 'ALL',
    },
    {
        id: todoList_2,
        title: 'What to listen',
        filter: 'Active',
    },
    {
        id: todoList_3,
        title: 'What to eat',
        filter: 'Active',
    }
]
/*
const tasks = {
    [todoLists[1].id]: [ //расшифровка ссылки на айди
        {name: 'Ghost', isDone: true},
        {name: 'Nirvana', isDone: false},
        {name: 'Metallica', isDone: true},
    ],
    [todoLists[0].id]: [
        {name: 'Milk', isDone: false},
        {name: 'Chocolate', isDone: false},
        {name: 'Pasta', isDone: false},
    ]
}*/


const tasks = {
    [todoList_2]: [
        {name: 'Ghost', isDone: true},
        {name: 'Nirvana', isDone: false},
        {name: 'Metallica', isDone: true},
    ],
    [todoList_1]: [
        {name: 'Milk', isDone: false},
        {name: 'Chocolate', isDone: false},
        {name: 'Pasta', isDone: false},
    ],
    [todoList_3]: []
}

//reduce

const numbers = [23, 45, 24, 87, 54, 12, 83];

const value = numbers.reduce((sum, el) => {
    sum = sum + el
    return sum
})

console.log(value)

const max = numbers.reduce((acc, el) => acc > el ? acc : el)

console.log(max)



let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },{
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

console.log(
    students.reduce((acc, el) => {
        return acc + el.scores},  0)
)