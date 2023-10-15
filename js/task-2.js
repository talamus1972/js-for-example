// function getFileName(file) {
//     let lastDotPosition = file.lastIndexOf(".");
 
//     return lastDotPosition === -1 ? file.slice(0) :
//         file.slice(0, lastDotPosition);
        
       
//     }
    

console.log(getFileName("styles.css")); // "styles"
console.log(getFileName("app.js")); // "app"
console.log(getFileName("app")); // "app"
console.log(getFileName("index.js")); // "index"
console.log(getFileName("index.html")); // "index"
console.log(getFileName("index.css")); // "index"
console.log(getFileName("index")); //iпdex


