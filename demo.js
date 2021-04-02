 
console.log("outside of the loop " + i);

// QUESTION 2
for(var i=10; i>0; i--) {
  if(i != 2) {
    console.log(i);
  } else {
    console.log("ignition!");
  }
}
console.log("liftoff!");

console.log("********")
var arr = [5, 3, 1, 7, 9]
console.log("Before push", arr)
arr.push(13)
arr.push(25)

console.log("After push", arr)
arr.pop()
console.log("After pop", arr)
console.log("The lenghts of the array", arr.length)

console.log("********")

for (var i=0; i<arr.length; i++) {
    console.log(arr[i])
}