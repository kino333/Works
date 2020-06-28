window.onload = function () {
    var aLi = document.getElementsByTagName('li');
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].timer = null;
        //多物体运动需要专属的定时器
        //多物体运动所有东西都不能共用
        aLi[i].onmouseover = function () {
            startMove(this, 400);
        }
        aLi[i].onmouseout = function () {
            startMove(this, 200);
        }
    }
    function getStyle(obj, atrr) {
        if (obj.currentStyle) {
            return obj.currentStyle[atrr];//IE浏览器
        } else {
            return getComputedStyle(obj, false)[atrr];//火狐浏览器
        }
    }
    //var timer = null;
    function startMove(obj, iTarget) {
        clearInterval(obj.timer);
        var aLi = document.getElementsByTagName('li');
        obj.timer = setInterval(function () {
            var speed;

            var icur = parseInt(getStyle(obj, 'width'));

            speed = (iTarget - icur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (icur == iTarget) {
                clearInterval(obj.timer);
            } else {
                obj.style['width'] = icur + speed + 'px';
            }
        }, 30);
    }
}