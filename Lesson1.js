const student = {
    name: "Bob",
    age: 30,
    friends: ['Alex', 'Donald' ],
}

const copyStudent = {...student} //создание поверхностной копии объекта, оператор spread. Создаем новый объект, но ссылка у него на массив та же

console.log(copyStudent)

const deepCopyStudent = { //создание глубокой копии объекта, в том числе и нового вложенного массива
    ...student,
    friends: [...student.friends]
}

console.log(student)

