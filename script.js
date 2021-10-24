//Print odds 1-20
//Using a loop write code that will console.log all of the odd values from 1 up to 20.

for (i = 1; i < 21; i++) {
    if (i % 2 == 1)
        console.log(i);
}


// // write a loop
// // console.log the values divisible by 3 from 100 to 0

for (i = 100; i > -1; i--) {
    if (i % 3 == 0)
        console.log(i);
}

// write a loop
// console.log the values in the sequence 4, 2.5, 1, -0.5, -2, -3.5

for (i = 4; i > -3.6; i-=1.5) {
    console.log(i);
}

// print values 1-100
// add the values
// console.log the result to be 5050

let sum = 0
for (i = 1; i<101; i++) {
    console.log(i);
    sum = sum + i
}
console.log(sum);

// print values from 1-12 and multiply them
// have a variable product 
// console.log the result to be 479001600

let product = 1
for (i = 1; i < 13; i++) {
    console.log(i);
    product = product * i
}
console.log(product);