window.onload = function () {
    var aDiv = document.getElementById('div1');
    aDiv.onmouseover = function () {
        startMove(100, 400);
    }
    aDiv.onmouseout = function () {
        startMove(30, 200);
    }
    var timer = null;
    var alpha = 30;
    function startMove(aTarget, iTarget) {
        clearInterval(timer);
        var aDiv = document.getElementById('div1');
        timer = setInterval(function () {
            var speed1;
            speed1 = (iTarget - aDiv.offsetWidth) / 8;
            speed1 = speed1 > 0 ? Math.ceil(speed1) : Math.floor(speed1);
            if (aDiv.offsetWidth == iTarget) {
                clearInterval(timer);
            }
            else {
                aDiv.style.width = aDiv.offsetWidth + speed1 + 'px';
            }
            var speed2 = 0;
            if (alpha > aTarget) {
                speed2 = -2.5;
            } else {
                speed2 = 2.5;
            }
            if (alpha == aTarget) {
                clearInterval(timer);
            } else {
                alpha = alpha + speed2;//alpha+=speed
                aDiv.style.filter = 'alpha(opactiy=' + alpha + ')';
                aDiv.style.opacity = alpha / 100;
            }
        }, 30);
    }
}