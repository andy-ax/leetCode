/**
 * 106ms
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var init = function () {
        var arr = [];
        for (var i = 0; i < numRows; i++) {
            if (i === 0) {
                arr.push([1]);
            } else {
                arr.push(generateOne(arr[arr.length - 1]));
            }
        }
        return arr;
    };
    var generateOne = function (arr) {
        var newArr = [];
        superposition(arr,0,function(x,y){
            newArr.push(x+y);
        });
        newArr.push(1);
        return newArr;
    }
    var superposition = function (arr, arrLeft, cb) {
        var value = arrLeft;
        arr.forEach(function (v, i) {
            cb(value, v);
            value = v;
        });
    }
    return init();
}
