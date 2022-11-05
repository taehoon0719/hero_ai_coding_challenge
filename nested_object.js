const transformValue = obj => {
    // Write your solution here. You can create any number of helper functions
    let result = Array.isArray(obj) ? [] : {};
    Object.keys(obj).forEach(key => {
        let value = obj[key];
        if (typeof value === 'number') {
            result[key] = value + 1;
        } else if (typeof value === 'string') {
            result[key] = value + ' AI';
        } else if (typeof value === 'object') {
            result[key] = transformValue(value);
        }
    })
    return result;
};

console.log(transformValue({
    a: 123,
    b: 'hero',
    c: [1, 2, 3],
    d: {
      e: 3,
      f: ['abc', 'def']
    }
  }));