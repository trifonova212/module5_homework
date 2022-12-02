let elements = new Map();
elements.set(1,'Earth');
elements.set(2 , 'Water');
elements.set(3,'Fire');
 
function printElements() {
  elements.forEach((values, keys)=>{
    console.log(`Ключ — ${keys}, значение — ${values}`);                 
})
}
printElements();