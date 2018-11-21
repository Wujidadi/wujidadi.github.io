let orders = {
    0: ['text/1-00.jsch', '', '前言'],
    1: ['text/1-01.jsch', '一', '瘋狂年代'],
    2: ['text/1-02.jsch', '二', '寂靜的春天'],
    3: ['text/1-03.jsch', '三', '紅岸之一'],
    4: ['text/1-04.jsch', '四', '三十八年後'],
    5: ['text/1-05.jsch', '五', '台球'],
    6: ['text/1-06.jsch', '六', '射手和農場主'],
    7: ['text/1-07.jsch', '七', '三體・周文王・長夜'],
    8: ['text/1-08.jsch', '八', '葉文潔'],
    9: ['text/1-09.jsch', '九', '宇宙閃爍'],
   10: ['text/1-10.jsch', '十', '大史'],
   11: ['text/1-11.jsch', '十一', '三體・墨子・烈焰'],
   12: ['text/1-12.jsch', '十二', '紅岸之二'],
   13: ['text/1-13.jsch', '十三', '紅岸之三'],
   14: ['text/1-14.jsch', '十四', '紅岸之四']
}

function getJsonLength(j) {
    let len = 0;
    for (let i in j) {
        len++
    }
    return len
}