/**
 * 98ms
 * 思路 --> 遇到0则计算连续0的数量再将非0值位置和当前位置的值置换
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var arrLen = nums.length;
    var z = 0;
    var j;
    for (var i = 0; i < arrLen-z; i++) {
        if (nums[i] === 0) {
            j = i+z;
            while(nums[j] === 0) {
                j++;
                z++;
            }
            if (i < arrLen - z) {
                nums[i] = nums[i+z];
                nums[i+z] = 0;
            }
        }
    }
};
