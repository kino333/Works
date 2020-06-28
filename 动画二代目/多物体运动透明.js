window.onload = function () {
    var aDiv = document.getElementsByTagName('div');
    for (var i = 0; i < aDiv.length; i++) {
        aDiv[i].timer = null;
        aDiv[i].alpha = 30;
        aDiv[i].onmouseover = function () {
            startMove(this, 100, 400);
        }
        aDiv[i].onmouseout = function () {
            startMove(this, 30, 200);
        }
    }
    //var timer = null;
    //var alpha = 30;
    function startMove(obj, aTarget, iTarget) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var speed1;
            var speed2 = 0;
            speed1 = (iTarget - obj.offsetWidth) / 8;
            speed1 = speed1 > 0 ? Math.ceil(speed1) : Math.floor(speed1);
            if (obj.alpha > aTarget) {
                speed2 = -2.5;
            } else {
                speed2 = 2.5;
            }

            if (obj.offsetWidth == iTarget && obj.alpha == aTarget) {
                clearInterval(obj.timer);
            }
            else {
                obj.style.width = obj.offsetWidth + speed1 + 'px';
                obj.alpha = obj.alpha + speed2;//alpha+=speed
                obj.style.filter = 'alpha(opactiy=' + obj.alpha + ')';
                obj.style.opacity = obj.alpha / 100;
            }


        }, 30);
    }
}