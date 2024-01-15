let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let element = 0;
for (let i = 0; i < array.length; i++) {
    element += array[i];
    console.log(element);
}

for (let i = 0; i < 10; i++) {
    console.log(`outer loop :${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`inner loop :${j}, outer loop :${i}`);
        if (j===5) {
            break
        }
        
    }
    
}
let i =1;
while(i<10){
    console.log(i);
    i=i+1;

}

let score = 0;

do {
    console.log(`your score is ${score}`);
    score++
} while (score < 10);