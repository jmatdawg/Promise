slowMath.add (6,2)
.then((sum) => {
    console.log(sum);
    return slowMath.multiply (sum, 2);//8
}).then((product) => {
    console.log (product);
    return slowMath.divide (product,4);//4
}).then((quotient) => {
    console.log (quotient);
    return slowMath.subtract (quotient,3);//1
}).then((difference) => {
    console.log (difference);
    return slowMath.add (difference,98);//99
}).then((sum) => {
    console.log (sum);
    return slowMath.remainder (sum,2);//1
}).then((remainder) => {
    console.log (remainder);
    return slowMath.multiply (remainder,50);//50
}).then((product) => {
    console.log (product);
    return slowMath.remainder (product,40);//10
}).then((remainder) => {
    console.log (remainder);
    return slowMath.add (remainder,32);//42
}).then((final) => {
    console.log (`The final answer is ${final} `);
}).catch ((err) => {
    console.log(err);
})


