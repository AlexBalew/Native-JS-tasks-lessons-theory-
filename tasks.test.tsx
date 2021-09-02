import {sum, mult, reducerSalary} from "./tasks";

test('should return correct sum', () => {
    const salary = 500
    const b = 100

    const result = sum(salary, b)

    expect(result).toBe(600)
})



test('should return correct multi', () => {
    const salary = 500
    const b = 4

    const result = mult(salary, b)

    expect(result).toBe(2000)
})



test('reducer should sum correctly', () => {
    const salary = 500

    const result = reducerSalary(salary, {type: 'sum', number: 100})

    expect(result).toBe(600)
})



test('reducer should mult correctly', () => {
    const salary = 500

    const result = reducerSalary(salary, {type: 'mult', number: 3})

    expect(result).toBe(1500)
})



test('reducer should div correctly', () => {
    const salary = 500

    const result = reducerSalary(salary, {type: 'div', number: 2})

    expect(result).toBe(250)
})



test('reducer should sub correctly', () => {
    const salary = 500

    const result = reducerSalary(salary, {type: 'sub', number: 200})

    expect(result).toBe(300)
})



test('reducer should fire correctly', () => {
    const salary = 500

    const result = reducerSalary(salary, {type: 'fire'})

    expect(result).toBe(0)
})



test('reducer should return default correctly', () => {
    const salary = 500

    const result = reducerSalary(salary, {type: undefined})

    expect(result).toBe(500)
})