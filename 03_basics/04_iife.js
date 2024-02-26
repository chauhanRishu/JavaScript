// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log('DB Connected');
})();


(  (name) => {
    // unnamed IIFE
    console.log(`db connected two $(name)`);
})('rishu')
