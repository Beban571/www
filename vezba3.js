array1 = [1,0,2,3,4];

array2 = [3,5,6,7,8,13];

array3 = [];

for (let i = 0; i < array2.length; i++) {
    if (array1[i] === undefined) {
        array3.push(array2[i]);
        continue;
    }
    array3.push(array1[i] + array2[i]);
}

console.log(array3);