/**
 * 106ms
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    var cLen = s.length,
        result = 0,
        minC,minCI;
    g.forEach(function(eS){

        for(var i = 0; i < cLen; i++) {
            var val = s[i];
            if (val && val >= eS && (!minC || val < minC)) {
                minC = val;
                minCI = i;
            }
        }
        if (minC) {
            minC = null;
            delete s[minCI];
            result++;
        }
    });
    return result;
};
