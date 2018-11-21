/* 由 GET 參數取得章節編號 */
let getCh = getParameter('ch');
let ch = (getCh != null) ? parseInt(getCh) : 0;

/* 取得 GET 參數 */
function getParameter(param) {
    let url = location.href;
    let paraString = url.substring(url.indexOf('?') + 1, url.length).split('&');
    for (let i = 0; i < paraString.length; i++) {
        let paraParse = paraString[i].split('=');
        let key = paraParse[0];
        let val = paraParse[1];
        if (key == param) {
            return val
        }
    }
}

/* 依據章節編號取得檔案內容並渲染至主頁面 */
let txtURL = orders[ch][0];
let scriptAppend = '<script src="' + txtURL + '"></script>';
$('body').append(scriptAppend);
$('title').text(chapterTitle);
$('main').html(chapterBody)

/* 主頁面兩側的跳至上一章／下一章按鈕 */
let op = getJsonLength(orders);
if (ch != 0) {
    $('main').append('<a class="page-switcher page-previous" href="main.html?ch=' + (ch - 1) + '">‹</a>')
}
if (ch < op - 1) {
    $('main').append('<a class="page-switcher page-next" href="main.html?ch=' + (ch + 1) + '">›</a>');
}