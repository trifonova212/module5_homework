let arr = ['1','1','1',1];

let identical = true;
for (let i = 0; i < arr.length - 1; i++){
for (let j = i + 1; j < arr.length; j++){
if ((arr[i]) !== (arr[j])){
identical = false;
}
}
}

if (identical) {
console.log("true");
} else {
console.log("false");
}
