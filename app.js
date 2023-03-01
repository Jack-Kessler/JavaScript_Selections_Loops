// Exercise 1
console.log("EXERCISE 1:\n==========\n");
for (i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(`${i}\n`)
    }
}

// Exercise 2
console.log("EXERCISE 2:\n==========\n");
for (i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log(`${i}: FIZZBUZZ\n`)
    }
    else if (i % 5 == 0) {
        console.log(`${i}: BUZZ\n`)
    }
    else if (i % 3 == 0) {
        console.log(`${i}: FIZZ\n`)
    }
}

//Exercise 3
console.log("EXERCISE 3:\n==========\n");

//Exercise 1 Redone
i = 1;
while (i <= 100) {
    if (i % 2 == 0) {
        console.log(`${i}\n`)
    }
    i++;
}

i = 1;
do {
    if (i % 2 == 0) {
        console.log(`${i}\n`)
    }
    i++;
}
while (i <= 100)


//Exercise 2 Redone
i = 1;
while (i <= 100) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log(`${i}: FIZZBUZZ\n`)
    }
    else if (i % 5 == 0) {
        console.log(`${i}: BUZZ\n`)
    }
    else if (i % 3 == 0) {
        console.log(`${i}: FIZZ\n`)
    }
    i++;
}

i = 1;
do {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log(`${i}: FIZZBUZZ\n`)
    }
    else if (i % 5 == 0) {
        console.log(`${i}: BUZZ\n`)
    }
    else if (i % 3 == 0) {
        console.log(`${i}: FIZZ\n`)
    }
    i++;
}
while (i <= 100)


//Exercise 4
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

valueFound = false;
for (i = 0; i <= n; i++) {
    if (i == value) {
        console.log(`Found Value!`)
        valueFound = true;
        break;
    }
}
if (valueFound == false) {
    console.log(`Did not find value`)
}


//Exercise 5
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for (i = start; i <= end; i++) {
    if (i % buzzDivisor == 0 && i % fizzDivisor == 0) {
        console.log(`${i}: FIZZBUZZ\n`)
    }
    else if (i % buzzDivisor == 0) {
        console.log(`${i}: BUZZ\n`)
    }
    else if (i % fizzDivisor == 0) {
        console.log(`${i}: FIZZ\n`)
    }
}