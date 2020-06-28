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
    var Li3 = document.getElementById('li3');
    Li1.onmouseover = function () {
        startMove(Li1, 'width', 400, function () {
            startMove(Li1, 'height', 400);
        });
    }
    Li1.onmouseout = function () {
        startMove(Li1, 'height', 80, function () {
            startMove(Li1, 'width', 200);
        });
    }
    Li2.onmouseover = function () {
        startMove(Li2, 'height', 200, function () {
            startMove(Li2, 'opacity', 100);
        });
    }
    Li2.onmouseout = function () {
        //链式运动，加入参数fn函数（名字不定），套娃写法，一环一环的变
        startMove(Li2, 'height', 80, function () {
            startMove(Li2, 'opacity', 30);
        });
    }
    Li3.onmouseover = function () {
        startMove(Li3, 'opacity', 80, function () {
            startMove(Li3, 'width', 100);
        });
    }
    Li3.onmouseout = function () {
        startMove(Li3, 'width', 200, function () {
            startMove(Li3, 'opacity', 30);
        });
    }
}
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];//IE浏览器
    } else {
        return getComputedStyle(obj, false)[attr];//火狐浏览器
    }
}
//var timer = null;
function startMove(obj, attr, iTarget, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var speed;
        var icur = 0;
        if (attr == 'opacity') {
            icur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
        } else {
            var icur = parseInt(getStyle(obj, attr));
        }
        //2.算速度
        speed = (iTarget - icur) / 8;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        //3.检测停止
        if (icur == iTarget) {
            clearInterval(obj.timer);
            if (fn) {
                fn();

            }
        } else {
            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opactiy=' + (icur + speed) + ')';
                obj.style.opacity = (icur + speed) / 100;
            } else {
                obj.style[attr] = icur + speed + 'px';
            }
        }
    }, 30);
}
