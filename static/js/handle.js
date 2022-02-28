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

input.addEventListener('input', function () {
    if (input.value.length > 0 && (input.value.replace(/(^\s*)|(\s*$)/g, "") != "")) {
        convert.disabled = false;
        convert.addEventListener('click', function () {
            kuroshiro.convert(input.value, {
                mode: "furigana",
                to: "hiragana"
            }).then(function (converted) {
                RubyOut.value = converted.replace(/(^\s*)|(\s*$)/g, "");
                HTMLOut.innerHTML = converted;
                alertmess('转换成功');
            });
        });
    } else {
        convert.disabled = true;
    }
});

clear.addEventListener('click', function () {
    input.value = '';
    RubyOut.value = '';
    HTMLOut.innerHTML = '';
    alertmess('已清空');
});
