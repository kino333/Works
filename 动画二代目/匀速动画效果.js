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
            if (oDiv.offsetLeft > iTarget) {
                speed = -10;
            } else {
                speed = 10;
            }
            if (oDiv.offsetLeft == iTarget) {
                clearInterval(timer);
            }
            else {
                oDiv.style.left = oDiv.offsetLeft + speed + 'px';
            }
        }, 30);
    }
}