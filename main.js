// // let age = 20
// // let name = 'Denis'
// // let isStudent = true
// // console.log('Name: ', name, '\nAge: ', age, '\nIs student: ', isStudent)
// // console.log('-----------------------------')
// // let value = 19
// // console.log('Value: ', value)
// // value = 'Now I am a string'
// // console.log('Value: ', value)
// // value = true
// // console.log('Value: ', value)
// // console.log('-----------------------------')
// // function sum(a, b) {
// // 	return a + b
// // }

// // let multiply = function (x, y) {
// // 	return x * y
// // }

// // console.log(sum(5, 3))

// // let now = new Date()
// // let birthday = new Date('1995-12-17')

// // let a = 10
// // let b = 3

// // console.log(a + b)
// // console.log(a - b)
// // console.log(a * b)
// // console.log(a / b)
// // console.log('-----------------------------')
// // console.log(10 + '5') // "105"
// // console.log('10' - 5) // 5

// // const numbersArray = [1, 2, 3]
// // // Можно изменять элементы:
// // numbersArray[0] = 10
// // console.log(numbersArray) // [10, 2, 3]
// // // // Нельзя переназначить:
// // // numbersArray = [5, 6, 7] // Ошибка!

// // const persons = { name: 'Denis', age: 18 }
// // // Можно изменять свойства:
// // persons.age = 50
// // persons.city = 'Volgograd'
// // console.log(persons) // { name: "Denis", age: 50, city: "Volgograd" }
// // // // Нельзя переназначить:
// // // person = { name: 'Stas' } // Ошибка!
// let newPrice = 42
// console.log('New price: ', newPrice, '\nType of newPrice: ', typeof newPrice)
// newPrice = 'Forty-two'
// console.log('New price: ', newPrice, '\nType of newPrice: ', typeof newPrice)

// // в строку
// let num = 42
// let str = String(num)
// let str2 = num.toString()
// let str3 = '' + num //

// // в число
// let strNum = '123'
// let int = Number(strNum)
// let int2 = parseInt('42')
// let float = parseFloat('12.34')
// let int3 = +'99' // 99

// // в булево значение
// let bool1 = Boolean(1)

// // Сравнение значений
// console.log(5 == '5') // true (нестрогое, с преобразованием типов)
// console.log(5 === '5') // false (строгое, без преобразования типов)
// console.log(0 == false) // true
// console.log(0 === false) // false
// console.log(null == undefined) // true
// console.log(null === undefined) // false

// // ⚠️ Объекты сравниваются по ссылке, а не по содержимому:
// let obj1 = { name: 'John' }
// let obj2 = { name: 'John' }

// console.log(obj1 == obj2) // false
// console.log(obj1 === obj2) // false

// // Почему? Это разные объекты в памяти!

// let obj3 = obj1 // obj3 ссылается на тот же объект
// console.log(obj1 === obj3) // true

// // То же с массивами:
// let arr1 = [1, 2, 3]
// let arr2 = [1, 2, 3]
// // console.log(arr1 === arr2); // false (так как это разные массивы в памяти)

let uAge = 18

if (uAge >= 18) {
	console.log('Доступ разрешен.')
} else {
	console.log('Доступ запрещен.')
}
let temp = 18

if (temp <= 0) {
	console.log('Холодно')
} else if (temp > 0 && temp <= 20) {
	console.log('Тепло')
} else {
	console.log('Жарко')
}

let isLoggedIn = true
let isAdmin = false

if (isLoggedIn && isAdmin) {
	console.log('Добро пожаловать, администратор!')
} else if (isLoggedIn && !isAdmin) {
	console.log('Добро пожаловать, пользователь!')
} else {
	console.log('Доступ запрещещён.')
}

let a3 = 10
let b3 = '10'
if (a3 == b3) {
	console.log('a3 и b3 равны по значению')
} else if (a3 === b3) {
	console.log('a3 и b3 равны по значению и типу')
} else {
	console.log('a3 и b3 не равны')
}

let monthNumber = 5

switch (monthNumber) {
	case 1:
		console.log('Январь')
		break
	case 2:
		console.log('Февраль')
		break
	case 3:
		console.log('Март')
		break
	case 4:
		console.log('Апрель')
		break
	case 5:
		console.log('Май')
		break
	case 6:
		console.log('Июнь')
		break
	case 7:
		console.log('Июль')
		break
	case 8:
		console.log('Август')
		break
	case 9:
		console.log('Сентябрь')
		break
	case 10:
		console.log('Октябрь')
		break
	case 11:
		console.log('Ноябрь')
		break
	case 12:
		console.log('Декабрь')
		break
	default:
		console.log('Неверный номер месяца')
}
