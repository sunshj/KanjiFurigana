let copy = document.getElementById('copy');
let clear = document.getElementById('clear');
let textarea = document.querySelector(".Ruby textarea");
copy.addEventListener("click", function () {
    textarea.select();
    if (document.execCommand("copy")) {
        alertmess('复制成功');

    }
});

clear.addEventListener('click', function () {
    input.value = '';
    RubyOut.value = '';
    HTMLOut.innerHTML = '';
    alertmess('已清空');
});

function alertmess(mess) {
    let alertmess = document.getElementById('alertmess');
    alertmess.innerHTML = mess;
    alertmess.style.display = 'block';
    setTimeout(() => {
        alertmess.innerHTML = '';
        alertmess.style.display = 'none';
    }, 2000);
}
