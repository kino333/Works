window.onload = function () {
    var oDiv = document.getElementById('div1');
    oDiv.onmouseover = function () {
        startMove();
    }
    function startMove() {
        setInterval(function () {
            oDiv.style.width = parseInt(getStyle(oDiv, 'width')) - 1 + 'px';
            oDiv.style.fontSize = parseInt(getStyle(oDiv, 'fontSize')) + 1 + 'px';
        }, 30);
    }
}
function getStyle(obj, atrr) {
    if (obj.currentStyle) {
        return obj.currentStyle[atrr];//IE浏览器
    } else {
        return getComputedStyle(obj, false)[atrr];//火狐浏览器
    }
}