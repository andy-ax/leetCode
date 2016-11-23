var fizzBuzz = function(n) {
    var i = 1,arr = [],result;
    while(i <= n) {
        if (i%3 && i%5) {
            arr.push(i + '');
        } else {
            result = '';
            if (i%3 === 0) {
                result += 'Fizz';
            }
            if (i%5 === 0) {
                result += 'Buzz';
            }
            arr.push(result);
        }
        i++;
    }
    return arr;
};
