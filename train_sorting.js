
const train_sort = (n, trains) => {
    if (n < 0 || n > 2000 || n !== trains.length) {
        return 'Error'
    } 
    let result = [];
    let error = false;
    trains.forEach((weight, index) => {
        if (!error) {
            if (weight < 0 || weight > 10000) {
            error = true;
            }
            if (index === 0) {
                result.push(weight);
            } else {
                if (weight > result[0]) {
                    result = [weight, ...result];
                } else {
                    if (result[result.length - 1] < weight) {
                        if (weight < result[result.length - 2]) {
                            result = [...result.slice(0, result.length - 1), weight]
                        } 
                    } else {
                        result.push(weight);
                    }
                }
            }
        }
    })
    return error ? 'Error' : result.length;
}
console.log(train_sort(3, [1, 2, 3]));
console.log(train_sort(5, [10, 2, 12, 20, 3]));