/**
 * 125ms
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var clip = function (start,end,str) {
        return str.slice(0,start) + str.slice(end);
    }
    var i = 0,index;
    while (ransomNote) {
        if ((index = magazine.indexOf(ransomNote[0])) > -1) {
            ransomNote = clip(0,1,ransomNote);
            magazine = clip(index,index+1,magazine);
        } else {
            return false;
        }
    }
    return true;
};
