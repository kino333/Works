window.onload = function () {
    var oDiv = document.getElementById('div2');
    oDiv.onmouseover = function () {
        startMove(100);
    }
    oDiv.onmouseout = function () {
        startMove(30);
    }
    var timer = null;
    var alpha = 30;
    function startMove(iTarget) {
        clearInterval(timer);
        var oDiv = document.getElementById('div2');
        timer = setInterval(function () {
            var speed = 0;
            if (alpha > iTarget) {
                speed = -10;
            } else {
                speed = 10;
            }
            if (alpha == iTarget) {
                clearInterval(timer);
            } else {
                alpha = alpha + speed;//alpha+=speed
                oDiv.style.filter = 'alpha(opactiy=' + alpha + ')';
                oDiv.style.opacity = alpha / 100;
            }
        }, 30);
    }
}