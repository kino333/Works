window.onload = function () {
    var oDiv = document.getElementsByTagName('div');
    for (var i = 0; i < oDiv.length; i++) {
        oDiv[i].timer = null;
        oDiv[i].alpha = 30;
        //多物体运动时属性都不可共用
        oDiv[i].onmouseover = function () {
            startMove(this, 100);
        }
        oDiv[i].onmouseout = function () {
            startMove(this, 30);
        }
    }
    //var timer = null;
    //var alpha = 30;
    function startMove(obj, iTarget) {
        clearInterval(obj.timer);
        //var oDiv = document.getElementsByTagName('div');
        obj.timer = setInterval(function () {
            var speed = 0;
            if (obj.alpha > iTarget) {
                speed = -10;
            } else {
                speed = 10;
            }
            if (obj.alpha == iTarget) {
                clearInterval(obj.timer);
            } else {
                obj.alpha = obj.alpha + speed;//alpha+=speed
                obj.style.filter = 'alpha(opactiy=' + obj.alpha + ')';
                obj.style.opacity = obj.alpha / 100;
            }
        }, 30);
    }
}