window.onload = function () {
    /*var aLi = document.getElementsByTagName('li');
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
    }*/
    var Li1 = document.getElementById('li1');
    var Li2 = document.getElementById('li2');

    Li1.onmouseover = function () {
        startMove(this, 'width', 400);
    }
    Li1.onmouseout = function () {
        startMove(this, 'width', 200);
    }
    Li2.onmouseover = function () {
        startMove(this, 'height', 200);
    }
    Li2.onmouseout = function () {
        startMove(this, 'height', 80);
    }
}
//getstyle函数固定写法
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];//IE浏览器
    } else {
        return getComputedStyle(obj, false)[attr];//火狐浏览器
    }
}
//var timer = null;
function startMove(obj, attr, iTarget) {
    clearInterval(obj.timer);

    obj.timer = setInterval(function () {
        var speed;
        var icur = parseInt(getStyle(obj, attr));//parseint，取整
        speed = (iTarget - icur) / 8;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (icur == iTarget) {
            clearInterval(obj.timer);
        } else {
            obj.style[attr] = icur + speed + 'px';
        }
    }, 30);
}
