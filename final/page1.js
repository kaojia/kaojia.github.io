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




$(() => {
    // 當文件ready後執行




    $('#confirm').hide()

    $('#main').on('click', () => {

        // 取得要插入按鈕的 HTML element
        let $col = $('#data>.col')

        let a = ["抹茶", "拿鐵", "抹茶牛奶", "卡布奇諾", "美式咖啡", "摩卡咖啡", "瑪琪雅朵", "馥芮白", "抹茶咖啡", "可可鮮奶"]
        r = getDiffArr(a, 1)
        // 在記憶體產生一個 button 的 DOM element
        $btn = $('<button>').attr('class', 'new-btn').attr('id', 'menu').text(r)

        // 將 $btn 插入至 $col 裡面，則 $btn 就能在網頁中顯示出來
        $col.append($btn)
        //點選完後隱藏按鈕
        // $('#main').hide()
        //按鈕失效
        $('#main').attr('disabled', true)
        $('#word').hide()


    })

    $('#return').on('click', () => {
        $('#main').attr('disabled', false)
        // 清除所有的button和提示
        $('#data>.col').empty()
        $('#notepl').empty()
        $('#note').attr('disabled', false)
        $('#macbtn').attr('disabled', false)
        $('#watbtn').attr('disabled', false)
        $('#milbtn').attr('disabled', false)
        $('#foabtn').attr('disabled', false)
        $('#expbtn').attr('disabled', false)
        $('#cocbtn').attr('disabled', false)
        $('#doit>.col').empty()
        $('#drink>.col').empty()
        $('#dribtn').attr('disabled', false)
        $('#clear').attr('disabled', false)
        $('#doit').show()
        $('#ans>.col').empty()
        $('#word').show()


        //按鈕出現
        //$('#main').show()
        //重新載入網頁
        //window.location.reload();

    })

    $('#note').on('click', () => {
        r = $('#menu').text()
        a = ["抹茶", "拿鐵", "抹茶牛奶", "卡布奇諾", "美式咖啡", "摩卡咖啡", "瑪琪雅朵", "馥芮白", "抹茶咖啡", "可可鮮奶"]
        let num = ['2', '6', '3', '6', '3', '8', '4', '4', '4', '3']


        let el = document.getElementById('notepl')
        if ($.inArray(r, a) == 0) {
            el.textContent = '需要' + num[0] + '份材料'
        } else if ($.inArray(r, a) == 1) {
            el.textContent = '需要' + num[1] + '份材料'
        } else if ($.inArray(r, a) == 2) {
            el.textContent = '需要' + num[2] + '份材料'
        } else if ($.inArray(r, a) == 3) {
            el.textContent = '需要' + num[3] + '份材料'
        } else if ($.inArray(r, a) == 4) {
            el.textContent = '需要' + num[4] + '份材料'
        } else if ($.inArray(r, a) == 5) {
            el.textContent = '需要' + num[5] + '份材料'
        } else if ($.inArray(r, a) == 6) {
            el.textContent = '需要' + num[6] + '份材料'
        } else if ($.inArray(r, a) == 7) {
            el.textContent = '需要' + num[7] + '份材料'
        } else if ($.inArray(r, a) == 8) {
            el.textContent = '需要' + num[8] + '份材料'
        } else if ($.inArray(r, a) == 9) {
            el.textContent = '需要' + num[9] + '份材料'
        }
        $('#note').attr('disabled', true)

    })



    //抹茶粉
    $('#macbtn').on('click', () => {

        // 取得要插入按鈕的 HTML element
        let $col = $('#doit>.col')
        let $col1 = $('#warn2>.first')
        let $col2 = $('#warn2>.second')
        // 在記憶體產生一個 button 的 DOM element
        $('#warn2>.first').empty();
        $('#warn2>.second').empty();
        $w = $('<p>').text('要先取得訂單才行！')
        $w2 = $('<p>').text('太多啦！要滿出來了')
        $img = $('<img>').attr('src', './img/你-01.png').attr('class', 'pic')

        $obj = $('<img>').attr('src', './img/tea-bag.png').attr('class', 'icon tea')


        // 將 $btn 插入至 $col 裡面，則 $btn 就能在網頁中顯示出來
        if ($('#data>.col').children().length < 1) {
            $('#warn1').modal('show');
            $col1.append($img)
            $col2.append($w)
        } else {
            // 將 $btn 插入至 $col 裡面，則 $btn 就能在網頁中顯示出來
            if ($('#doit>.col').children().length >= 8) {
                $('#macbtn').attr('disabled', true)
                $('#watbtn').attr('disabled', true)
                $('#milbtn').attr('disabled', true)
                $('#foabtn').attr('disabled', true)
                $('#expbtn').attr('disabled', true)
                $('#cocbtn').attr('disabled', true)
                $('#warn1').modal('show');
                $col1.append($img)
                $col2.append($w2)
            } else {
                $col.append($obj)
            }

        }

    })

    //水
    $('#watbtn').on('click', () => {

        // 取得要插入按鈕的 HTML element
        let $col = $('#doit>.col')
        let $col1 = $('#warn2>.first')
        let $col2 = $('#warn2>.second')
        // 在記憶體產生一個 button 的 DOM element
        $('#warn2>.first').empty();
        $('#warn2>.second').empty();
        $w = $('<p>').text('要先取得訂單才行！')
        $w2 = $('<p>').text('太多啦！要滿出來了')

        $img = $('<img>').attr('src', './img/你-01.png').attr('class', 'pic')

        // 在記憶體產生一個 button 的 DOM element
        $obj = $('<img>').attr('src', './img/water-jug.png').attr('class', 'water icon')


        // 將 $btn 插入至 $col 裡面，則 $btn 就能在網頁中顯示出來
        if ($('#data>.col').children().length < 1) {
            $('#warn1').modal('show');
            $col1.append($img)
            $col2.append($w)
        } else {
            // 將 $btn 插入至 $col 裡面，則 $btn 就能在網頁中顯示出來
            if ($('#doit>.col').children().length >= 8) {
                $('#macbtn').attr('disabled', true)
                $('#watbtn').attr('disabled', true)
                $('#milbtn').attr('disabled', true)
                $('#foabtn').attr('disabled', true)
                $('#expbtn').attr('disabled', true)
                $('#cocbtn').attr('disabled', true)
                $('#warn1').modal('show');
                $col1.append($img)
                $col2.append($w2)
            } else {
                $col.append($obj)
            }

        }
    })

    //牛奶
    $('#milbtn').on('click', () => {

        // 取得要插入按鈕的 HTML element
        let $col = $('#doit>.col')

        let $col1 = $('#warn2>.first')
        let $col2 = $('#warn2>.second')
        $('#warn2>.first').empty();
        $('#warn2>.second').empty();
        $w = $('<p>').text('要先取得訂單才行！')
        $w2 = $('<p>').text('太多啦！要滿出來了')

        $img = $('<img>').attr('src', './img/你-01.png').attr('class', 'pic')

        $obj = $('<img>').attr('src', './img/milk.png').attr('class', 'milk icon')


        // 將 $btn 插入至 $col 裡面，則 $btn 就能在網頁中顯示出來
        if ($('#data>.col').children().length < 1) {
            $('#warn1').modal('show');
            $col1.append($img)
            $col2.append($w)
        } else {
            // 將 $btn 插入至 $col 裡面，則 $btn 就能在網頁中顯示出來
            if ($('#doit>.col').children().length >= 8) {
                $('#macbtn').attr('disabled', true)
                $('#watbtn').attr('disabled', true)
                $('#milbtn').attr('disabled', true)
                $('#foabtn').attr('disabled', true)
                $('#expbtn').attr('disabled', true)
                $('#cocbtn').attr('disabled', true)

                $('#warn1').modal('show');
                $col1.append($img)
                $col2.append($w2)
            } else {
                $col.append($obj)
            }

        }
    })

    //奶泡
    $('#foabtn').on('click', () => {

        // 取得要插入按鈕的 HTML element
        let $col = $('#doit>.col')

        let $col1 = $('#warn2>.first')
        let $col2 = $('#warn2>.second')
        $('#warn2>.first').empty();
        $('#warn2>.second').empty();
        $w = $('<p>').text('要先取得訂單才行！')
        $w2 = $('<p>').text('太多啦！要滿出來了')

        $img = $('<img>').attr('src', './img/你-01.png').attr('class', 'pic')

        $obj = $('<img>').attr('src', './img/milk-2.png').attr('class', 'foam icon')


        // 將 $btn 插入至 $col 裡面，則 $btn 就能在網頁中顯示出來
        if ($('#data>.col').children().length < 1) {
            $('#warn1').modal('show');
            $col1.append($img)
            $col2.append($w)
        } else {
            // 將 $btn 插入至 $col 裡面，則 $btn 就能在網頁中顯示出來
            if ($('#doit>.col').children().length >= 8) {
                $('#macbtn').attr('disabled', true)
                $('#watbtn').attr('disabled', true)
                $('#milbtn').attr('disabled', true)
                $('#foabtn').attr('disabled', true)
                $('#expbtn').attr('disabled', true)
                $('#cocbtn').attr('disabled', true)
                $('#warn1').modal('show');
                $col1.append($img)
                $col2.append($w2)
            } else {
                $col.append($obj)
            }

        }

    })

    //濃縮咖啡
    $('#expbtn').on('click', () => {

        // 取得要插入按鈕的 HTML element
        let $col = $('#doit>.col')

        let $col1 = $('#warn2>.first')
        let $col2 = $('#warn2>.second')
        $('#warn2>.first').empty();
        $('#warn2>.second').empty();
        $w = $('<p>').text('要先取得訂單才行！')
        $w2 = $('<p>').text('太多啦！要滿出來了')

        $img = $('<img>').attr('src', './img/你-01.png').attr('class', 'pic')

        $obj = $('<img>').attr('src', './img/tea-pot-2.png').attr('class', 'expresso icon')

        if ($('#data>.col').children().length < 1) {
            $('#warn1').modal('show');
            $col1.append($img)
            $col2.append($w)
        } else {
            // 將 $btn 插入至 $col 裡面，則 $btn 就能在網頁中顯示出來
            if ($('#doit>.col').children().length >= 8) {
                $('#macbtn').attr('disabled', true)
                $('#watbtn').attr('disabled', true)
                $('#milbtn').attr('disabled', true)
                $('#foabtn').attr('disabled', true)
                $('#expbtn').attr('disabled', true)
                $('#cocbtn').attr('disabled', true)
                $('#warn1').modal('show');
                $col1.append($img)
                $col2.append($w2)
            } else {
                $col.append($obj)
            }

        }
    })

    //可可糖漿
    $('#cocbtn').on('click', () => {

        // 取得要插入按鈕的 HTML element
        let $col = $('#doit>.col')

        let $col1 = $('#warn2>.first')
        let $col2 = $('#warn2>.second')
        $('#warn2>.first').empty();
        $('#warn2>.second').empty();
        $w = $('<p>').text('要先取得訂單才行！')
        $w2 = $('<p>').text('太多啦！要滿出來了')

        $img = $('<img>').attr('src', './img/你-01.png').attr('class', 'pic')

        $obj = $('<img>').attr('src', './img/chocolate.png').attr('class', 'coco icon')



        if ($('#data>.col').children().length < 1) {

            $('#warn1').modal('show');
            $col1.append($img)
            $col2.append($w)
        } else {
            // 將 $btn 插入至 $col 裡面，則 $btn 就能在網頁中顯示出來
            if ($('#doit>.col').children().length >= 8) {
                $('#macbtn').attr('disabled', true)
                $('#watbtn').attr('disabled', true)
                $('#milbtn').attr('disabled', true)
                $('#foabtn').attr('disabled', true)
                $('#expbtn').attr('disabled', true)
                $('#cocbtn').attr('disabled', true)
                $('#warn1').modal('show');
                $col1.append($img)
                $col2.append($w2)
            } else {
                $col.append($obj)
            }

        }

    })



    //清除鈕
    $('#clear').on('click', () => {
        let $col = $('#doit>.col').empty()
        $('#macbtn').attr('disabled', false)
        $('#watbtn').attr('disabled', false)
        $('#milbtn').attr('disabled', false)
        $('#foabtn').attr('disabled', false)
        $('#expbtn').attr('disabled', false)
        $('#cocbtn').attr('disabled', false)
    })




    //製作鈕
    $('#dribtn').on('click', () => {

        $('#drink>.col').empty()
        // 取得要插入按鈕的 HTML element
        let $col = $('#drink>.col')
        // 在記憶體產生一個 button 的 DOM element
        $btn = $('<img>').attr('src', './img/咖啡杯.png').attr('id', 'cup')


        let $col1 = $('#warn2>.first')
        let $col2 = $('#warn2>.second')
        $('#warn2>.first').empty();
        $('#warn2>.second').empty();
        $w = $('<p>').text('工作區沒有材料喔！')

        $img = $('<img>').attr('src', './img/你-01.png').attr('class', 'pic')



        if ($('#doit>.col').children().length < 1) {
            $('#warn1').modal('show');
            $col1.append($img)
            $col2.append($w)
            $('#dribtn').attr('disabled', fasle)
        } else {
            // 將 $btn 插入至 $col 裡面，則 $btn 就能在網頁中顯示出來
            $col.append($btn)
            //$('#macbtn').attr('disabled', true)
            //$('#watbtn').attr('disabled', true)
            // $('#milbtn').attr('disabled', true)
            //$('#foabtn').attr('disabled', true)
            //$('#expbtn').attr('disabled', true)
            //$('#cocbtn').attr('disabled', true)
            $('#confirm').show()
            $('#finish').modal('show');
        }


    })



    //確認鈕
    $('#confirm').on('click', () => {

        $('#finish').modal('hide');
        $('#ans>.first').empty();
        $('#ans>.second').empty();

        $('#finish2').modal('show');
        let r = $('#menu').text()
        let a = ["抹茶", "拿鐵", "抹茶牛奶", "卡布奇諾", "美式咖啡", "摩卡咖啡", "瑪琪雅朵", "馥芮白", "抹茶咖啡", "可可鮮奶"]
        $col = $('#ans>.first')
        $col2 = $('#ans>.second')

        let ran = RandomInt(0, 2)
        $goodimg = $('<img>').attr('src', './img/good-' + (ran + 1) + '.png').attr('class', 'pic')
        $badimg = $('<img>').attr('src', './img/bad-' + (ran + 1) + '.png').attr('class', 'pic')
        good = ['好喝！', '你做得真好!', '你真是咖啡大師！']
        bad = ['嘔嘔嘔！', '能做出這種東西也是很厲害!', '這不是我點的！']
        $btn = $('<p>').text(good[ran]).attr('class', 'talk')
        $obj = $('<p>').text(bad[ran]).attr('class', 'talk')

        if ($.inArray(r, a) == 0) {
            if (($('.tea').length == 1) && ($('.water').length == 1) && ($('.icon').length == 8)) {
                $col.append($goodimg)
                $col2.append($btn)
            } else {
                $col.append($badimg)
                $col2.append($obj)
            }
        } else if ($.inArray(r, a) == 1) {
            if (($('.expresso').length == 1) && ($('.milk').length == 4) && ($('.foam').length == 1) && ($('.icon').length == 12)) {
                $col.append($goodimg)
                $col2.append($btn)
            } else {
                $col.append($badimg)
                $col2.append($obj)
            }
        } else if ($.inArray(r, a) == 2) {
            if (($('.tea').length == 1) && ($('.water').length == 1) && ($('.milk').length == 1) && ($('.icon').length == 9)) {
                $col.append($goodimg)
                $col2.append($btn)
            } else {
                $col.append($badimg)
                $col2.append($obj)
            }
        } else if ($.inArray(r, a) == 3) {
            if (($('.expresso').length == 2) && ($('.milk').length == 2) && ($('.foam').length == 2) && ($('.icon').length == 12)) {
                $col.append($goodimg)
                $col2.append($btn)
            } else {
                $col.append($badimg)
                $col2.append($obj)
            }
        } else if ($.inArray(r, a) == 4) {
            if (($('.expresso').length == 1) && ($('.water').length == 2) && ($('.icon').length == 9)) {
                $col.append($goodimg)
                $col2.append($btn)
            } else {
                $col.append($badimg)
                $col2.append($obj)
            }
        } else if ($.inArray(r, a) == 5) {
            if (($('.expresso').length == 2) && ($('.coco').length == 1) && ($('.milk').length == 3) && ($('.foam').length == 2) && ($('.icon').length == 14)) {
                $col.append($goodimg)
                $col2.append($btn)
            } else {
                $col.append($badimg)
                $col2.append($obj)
            }
        } else if ($.inArray(r, a) == 6) {
            if (($('.expresso').length == 2) && ($('.milk').length == 2) && ($('.icon').length == 10)) {
                $col.append($goodimg)
                $col2.append($btn)
            } else {
                $col.append($badimg)
                $col2.append($obj)
            }
        } else if ($.inArray(r, a) == 7) {
            if (($('.expresso').length == 2) && ($('.foam').length == 2) && ($('.icon').length == 10)) {
                $col.append($goodimg)
                $col2.append($btn)
            } else {
                $col.append($badimg)
                $col2.append($obj)
            }
        } else if ($.inArray(r, a) == 8) {
            if (($('.expresso').length == 1) && ($('.water').length == 1) && ($('.tea').length == 1) && ($('.milk').length == 1) && ($('.icon').length == 10)) {
                $col.append($goodimg)
                $col2.append($btn)
            } else {
                $col.append($badimg)
                $col2.append($obj)
            }
        } else if ($.inArray(r, a) == 9) {
            if (($('.coco').length == 1) && ($('.water').length == 1) && ($('.milk').length == 1) && ($('.icon').length == 9)) {
                $col.append($goodimg)
                $col2.append($btn)
            } else {
                $col.append($badimg)
                $col2.append($obj)
            }
        }

        //if ($('#app').text() == 'apple' && $('#gra').text() == 'grape') alert('好')
        //if ($('.col2').children('#app').length == 2 && $('.col2').children('#gra').length == 1) alert('yes')

    })





})
