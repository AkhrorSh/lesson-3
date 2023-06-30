//1. Even And Odd

 let nums = [1,2,3,4,5,6,7,8,9,10]

 let even = []
 let odd = []
 
 let filtered = nums.filter((i) => i % 2 == 0 ? even.push(i) : odd.push(i))// filteredArray  || []

console.log(
    'even; ' + even, 'odd; ' + odd
);

// 2. find longest name

let students = ['ayub','islom','daler','iskandar','shaxzod']

let ln = students[0]

students.map(i => {
    if (i.length > ln.length) {
        ln = i
    }
})

console.log(
    'longest name is; ' + ln
);

// 3. в промпте я пишу любую цифру и кто стоит под этой цифрой то надо его удалить

let idx = +prompt(`${students} kogo udalit`)

students.splice(idx-1, 1) 

console.log(
    students
);

// 4.

let cars = [20000, 16000, 40000, 30000, 35000, 60000, 13000, 15000,45000, 110000]

let from = +prompt("from" )
let up = +prompt("up")

let price = cars.filter(item => item >= from && item <= up) 

console.log(
    price
);

//5.

let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

let numbers = arr.filter(item => typeof(item) === 'number')

if(numbers.length > 5) {
    console.log('good');
} else {
    console.log('bad');
}
