function getSlice(array, value) {
    const index = array.indexOf(value);

        return index === -1  ?
        array.slice(0, 0) : array.slice(0, index); 
   
}



console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
//повертає ["Mango", "Poly"]
console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
//повертає ["Mango", "Poly", "Ajax"]
console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));
//повертає ["Mango"]
console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));
//повертає []
console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"));
//повертає []