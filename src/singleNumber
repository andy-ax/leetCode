/**
 * 100ms
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var obj = {};
    nums.forEach(function(val){
        if (!obj[val]) {
            obj[val] = 1;
        } else {
            delete obj[val];
        }
    });
    return parseInt(Object.keys(obj)[0]);
};
singleNumber([1,2,3,3,2,1,4]);
