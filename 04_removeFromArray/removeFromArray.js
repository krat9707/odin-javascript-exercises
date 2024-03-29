const removeFromArray = function(arr, ...toDelete) {
    return arr.filter((val) => {
        return !toDelete.includes(val)
    });
};

// Do not edit below this line
module.exports = removeFromArray;
