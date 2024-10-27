function add(a: number, b: number): number {
    console.log("Entering function add");
    {
        console.log("Exiting function add");
        return a + b;
    }
}
function multiply(a: number, b: number): number {
    console.log("Entering function multiply");
    {
        console.log("Exiting function multiply");
        return a * b;
    }
}
// let res = add(1, multiply(2, 3)); // 7
// console.log(res);
console.log((() => {
    console.log("Entering function anonymous___func_3");
    console.log("begin call add");
    const result_1 = add(1, (() => {
        console.log("Entering function anonymous___func_4");
        console.log("begin call multiply");
        const result_2 = multiply(2, 3);
        console.log("end call multiply");
        {
            console.log("Exiting function anonymous___func_4");
            return result_2;
        }
    })());
    console.log("end call add");
    {
        console.log("Exiting function anonymous___func_3");
        return result_1;
    }
})()); // 7
