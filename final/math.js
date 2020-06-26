/**自己設計的數學函式等 */

/**產生一個從start到end的整數亂數
 * @param {number} start 亂數的起始數字
 * @param {number} end 亂數的中止數字
 * @return {number} 
 */

var RandomInt = (start, end) => {

    let n = end - start + 1
    // 放大
    r = Math.random() * n
    // 無條件捨去
    r = Math.floor(r)
    // 位移到start
    r = r + start
    return r
}

//隨機抽取陣列中的元素，遇到相同就重抽
var getDiffArr = (arr, num) => {
    let arrOut = [];
    let ran;
    for (let i = 0; i < num; i++) {
        ran = Math.floor(Math.random() * arr.length);
        // arrOut.push(arr[ran]);  // error
        arrOut[i] = arr[ran];
        if (i > 0) {
            for (var m = 0; m < i; m++) {
                if (arrOut[m] == arr[ran]) {
                    i--;
                    break;
                }
            }
        }

    }
    return arrOut;
}