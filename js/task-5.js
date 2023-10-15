function getSlice(array, value) {
    for (let i = 0; i < array.length; i++){
        if (array[i] === value) {
            return array.slice(0, i + 1);
        }     
               
           
    }        
   return array.slice(0, 0);
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