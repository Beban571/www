numbers = [25, 25, 30, 10, 15, 35, 10, 25, 15, 20, 50, 60, 70, 7, 19, 43, 1413, 523, 500, 48, 931];

var evenNumbers = numbers.filter(function(item) {
    return (item % 2 === 0);
 });
 var oddNumbers = numbers.filter(function(item) {
     return ( item % 2 === 1)
 })
 
 console.log(oddNumbers);
 console.log(evenNumbers);