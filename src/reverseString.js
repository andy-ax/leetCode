/**
 * 85ms
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var str = '';
    for(var i = 0,len = s.length; i < len; i++) {
        str = s[i] + str;
    }
    return str;
};

reverseString('hello');
