// Задание №1
// Дан массив:
// let task1 = [2, 3, 5, 9, 8, -11, 6, 7, 47, 53, -1, -3, 17];
// Создайте новый массив, в котором будут
// только положительные числа из массива arr.
// Используйте метод .filter()
// let task1 = [2, 3, 5, 9, 8, -11, 6, 7, 47, 53, -1, -3, 17];
// // вариант 1
// // let arr = task1.filter((item) => item > 0);
// // console.log(arr);

// // вариант 2
// let arr =[];
// for(let i in task1){
//     if(task1[i]>0){
//         arr.push(task1[i])
//     }
// }

// Задание №2
// Дан массив
// let task2 = [10, 25, 25, 15, 5, 10];
// // Выведите в alert сумму элементов
// // этого массива.
// // Используйте метод .forEach()
// // let task2 = [10, 25, 25, 15, 5, 10];
// // let sum = 0;
// // task2.forEach((item) => (sum += item));
// // console.log(sum);

// let sum = task2.reduce((prev, curr) => {
//     return prev+curr
// })
// console.log(sum);

// Задание №4
// 	Напишите функцию, которая определяет
// максимальный элемент массива.
// Нельзя использовать .sort()!
// Массив для примера:
// let task4 = [-4, -15, -4, -27, -12, -8];
// // v1
// let newTask4 = Math.max(...task4);
// console.log(newTask4);

// v2
// let result = task4[0];
// for (let i = 1; i < task4.length; i++){
//     result = Math.max(result, task4[i])
// }
// console.log(result);

// v3
// task4.sort((a, b) => {
//     return b-a
// });
// console.log(task4);

// v4
// let n1 = task4[0];
// for (let i in task4){
//     if (task4[i]>n1){
//         n1 =task4[i]
//     }
// }
// console.log(n1);

// Задание №5
// 	Напишите функцию, которая определить:
// 1. Самое большое число;
// 2. Сколька раз число повторяется
// Массив для примера:
// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];
// let maxNum = Math.max(...task5);
// let count = 0
// task5.forEach((item) => {
//     if (item === maxNum){
//         count++
//     }
// })
// console.log(maxNum, count);


// Задание №6
// Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел
// Используйте forEach() и push()
// let task6 = [5, 6, 7, 8, 9];
// let newArr1 = task6.map((item)=>{
// return item**2
// })
// console.log(newArr1);

// Задание №7
// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
// Используйте every()
// let task7 = [-2, -1, 0, 2, 5, 8, -3];
// let result7 = task7.every((item) => item > 0);
// if (result7){
//     console.log("Все числа больше нуля");
// }else{
//     console.log("Не все числа больше нуля");
// }

// ! setTimeout, setInterval

// setTimeout(() => {
//     console.log("Я сработал через 5 секунд");
// }, 5000)

// let id = setInterval(()=>{
//     location.reload
//     console.log("Я обновляю страницу каждые 2 секунды");
// }, 2000)
// setTimeout(()=>{
//     clearInterval(id)
// },6000)

// Задание №2
// У вас есть массив [1, [2, [[[3, 4], 5], 6]]]. Присвойте каждому элементу массива
// буквенный ключ, в результате должно получиться -  a: 1 b: 2 c: [ [ 3, 4 ], 5 ] d: 6
let arr = [1, [2, [[[3, 4], 5], 6]]]
let [a, [b, [c, d]]] = arr;
console.log(a, b, c, d)


