function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

console.log(sum(1, 2, 3, 4));

const result1 = sum(1,2,3,4);
console.log(result1);

const result2 = Math.max(2,5,9,3);
console.log(result2);

// SPREAD array => valores separados por virgula


const myNumbers = [2, 3, 10, 5];

const result3 = Math.max(...myNumbers);

console.log(result3);

//SPREAD obj => valores separados por virgula

const item = {
    description: "Computador",
    price: 3000.0,
    quantity: 1
}

const cloneItem = {...item }

const cloneItemPlus = {...item, weight: 10};
console.log(item);
console.log(cloneItem);
console.log(cloneItemPlus);