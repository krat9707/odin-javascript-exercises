const fibonacci = function(n) {
    n = parseInt(n);
    if(n < 0)
        return "OOPS";

    let prev = 0;
    let prev2 = 1;
    let temp;

    if(n == 0)
        return 0;
    if(n <= 2)
        return 1;

    for(let i = 2; i <= n; ++i)
    {
        temp = prev + prev2;
        prev = prev2;
        prev2 = temp;
    }

    return prev2;
};

// Do not edit below this line
module.exports = fibonacci;
