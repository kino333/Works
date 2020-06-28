window.onload = function () {
    var oDiv = this.document.getElementById('div1');
    oDiv.onmouseover = function () {
        startMove(0);
    }
    oDiv.onmouseout = function () {
        startMove(-200);
    }
    var timer = null;
    function startMove(iTarget) {
        clearInterval(timer);
        var oDiv = this.document.getElementById('div1');
        timer = setInterval(function () {
            var speed;
            speed = (iTarget - oDiv.offsetLeft) / 20;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            //如果speed>0;speed=math.ceil(speed)否则speed=math.floor(speed)
            //缓冲运动必带
            if (oDiv.offsetLeft == iTarget) {
                clearInterval(timer);
            }
            else {
                oDiv.style.left = oDiv.offsetLeft + speed + 'px';
            }
        }, 30);
    }
}