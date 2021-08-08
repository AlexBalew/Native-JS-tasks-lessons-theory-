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
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

const getName = (el) => el.name

console.log(students.map(getName))

const map = (array, callback) => { //расшифровка метода map

    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i])
    }
    return newArray
}

console.log(map(students, getName))
//map(students, getName)

console.log(map(students, st => ({...st, technologies: []})))

const filter = (array, callback) => { //расшифровка метода filter
    const newArrayFilter = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArrayFilter.push(array[i])
        }
    }
    return newArrayFilter
}

console.log(filter(students, st => st.isMarried))


const find = (array, callback) => { //расшифровка метода filter
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return (array[i])
        }
    }}

console.log(find(students, st => st.name === "Bob"))