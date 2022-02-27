let input = document.getElementById('input');
let RubyOut = document.getElementById('RubyOut');
let HTMLOut = document.getElementById('HTMLOut');
let convert = document.getElementById('convert');
let clear = document.getElementById('clear');
let year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();

// 初始化kuroshiro
let kuroshiro = new Kuroshiro();
// 初始化kuroshiro-analyzer-kuromoji
kuroshiro.init(new KuromojiAnalyzer({
    dictPath: "static/dict/"
}))
convert.addEventListener('click', function () {
    kuroshiro.convert(input.value, {
        mode: "furigana",
        to: "hiragana"
    }).then(function (converted) {
        RubyOut.value = converted;
        // 将converted插入到HTMLOut的div中
        HTMLOut.innerHTML = converted;
    });
});
clear.addEventListener('click', function () {
    input.value = '';
    RubyOut.value = '';
    HTMLOut.innerHTML = '';
});

