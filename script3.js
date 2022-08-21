const sum = (a,b)=>{
    return a+b;
}

const fn = (addition)=>{
    const something = addition(5,6);
    console.log(`The sum of a and b is ${something}`);
}
fn(sum);
