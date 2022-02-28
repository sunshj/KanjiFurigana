let dom = document.getElementById('copy');
let textarea = document.querySelector(".Ruby textarea");
dom.addEventListener("click", function () {
    textarea.select();
    if (document.execCommand("copy")) {
        alertmess('复制成功');

    }
});

function alertmess(mess) {
    $('#alertmess').html(mess);  // 填入要显示的文字
    $('#alertmess').show();  // 显示弹框
    setTimeout(function () {  // 倒计时
        $('#alertmess').html(''); // 清空文本
        $('#alertmess').hide();  // 隐藏弹框
    }, 2000);
}
