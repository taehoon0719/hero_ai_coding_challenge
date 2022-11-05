const divide_candy = (n) => {
    let result = [0];
    for (let i = 1; i < n; i++) {
        if (n % (i + 1) === 0) {
            result.push(i);
        }
    }
    return result;
}

console.log(divide_candy(30))
console.log(divide_candy(25))