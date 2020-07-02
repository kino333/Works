//点一个显示一个，最后算出结果
//数字
function count(){
    var num=document.getElementById('fruit').value;
    document.getElementById('fruit').value=num+'0';    
}
function count1(){
    var num=document.getElementById('fruit').value;
    document.getElementById('fruit').value=num+'1';     
}
function count2(){
    var num=document.getElementById('fruit').value;
    document.getElementById('fruit').value=num+'2';    
}
function count3(){
    var num=document.getElementById('fruit').value;
    document.getElementById('fruit').value=num+'3';  
}
function count4(){
    var num=document.getElementById('fruit').value;
    document.getElementById('fruit').value=num+'4';  
}
function count5(){
    var num=document.getElementById('fruit').value;
    document.getElementById('fruit').value=num+'5';  
}
function count6(){
    var num=document.getElementById('fruit').value;
    document.getElementById('fruit').value=num+'6';  
}
function count7(){
    var num=document.getElementById('fruit').value;
    document.getElementById('fruit').value=num+'7';  
}
function count8(){
    var num=document.getElementById('fruit').value;
    document.getElementById('fruit').value=num+'8';  
}
function count9(){
    var num=document.getElementById('fruit').value;
    document.getElementById('fruit').value=num+'9';  
}

//符号
function symbol1(){
    var oper=document.getElementById('fruit').value;
        if(oper.length == 0){
            document.getElementById('fruit').value=null;
        }else{
            document.getElementById('fruit').value=oper+'+';   
        }
}
function symbol2(){
    var oper=document.getElementById('fruit').value;
    if(oper.length == 0){
        document.getElementById('fruit').value=null;
    }else{
        document.getElementById('fruit').value=oper+'-';   
    }
}
function symbol3(){
    var oper=document.getElementById('fruit').value;
    if(oper.length == 0){
        document.getElementById('fruit').value=null;
    }else{
        document.getElementById('fruit').value=oper+'×';   
    }
}
function symbol4(){
    var oper=document.getElementById('fruit').value;
    if(oper.length == 0){
        document.getElementById('fruit').value=null;
    }else{
        document.getElementById('fruit').value=oper+'÷';   
    }
}
function spot(){
    var oper=document.getElementById('fruit').value;
    if(oper.length == 0){
        document.getElementById('fruit').value=null;
    }else{
        document.getElementById('fruit').value=oper+'.';   
    }
}
function equal(){
    var oper=document.getElementById('fruit').value;
    //输入=                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    if(oper.length == 0){
        document.getElementById('fruit').value=null;
    //输入单个数字并能正常计算
    }
    if(oper.length == 1){
        document.getElementById('fruit').value=oper;
    //输入数字加符号/两位数字，返回数字并能正常计算
    }
    if(oper.length =2){
        var at=oper.charAt(1);
        switch(at){
            case '+':
            case '-':
            case '×':
            case '÷':
            document.getElementById('fruit').value=oper.charAt(0);
            break;
            default:
                document.getElementById('fruit').value=oper;
            }
        //输入两位数运算（三位数还没做）
        }
        if(oper.length >2){
        //判断运算符号
        //从算式中提取数字并计算
            var res=0;
            var sp=oper.split('+');
            if(sp.length==2){
                var x  = parseFloat(sp[0]);
                var y  = parseFloat(sp[1]);
                res = x + y;
            }
            if(sp.length==1){
                var sp=oper.split('-');
                if(sp.length==2){
                    var x  = parseFloat(sp[0]);
                    var y  = parseFloat(sp[1]);
                    if(x>=y){
                        res = x - y;
                    }else{
                        res=-(y-x);
                    }        
                } 
                if(sp.length==1){
                    var sp=oper.split('×'); 
                    if(sp.length==2){
                        var x  = parseFloat(sp[0]);
                        var y  = parseFloat(sp[1]);
                        res = x * y;
                    }
                    if(sp.length==1){
                        var sp=oper.split('÷');
                        if(sp.length==2){
                            var x  = parseFloat(sp[0]);
                            var y  = parseFloat(sp[1]);
                            if(y!=0){
                                res = x / y;
                            }else{
                                res = "NA";
                            }        
                        }
                    
                    }
                }
            }
            document.getElementById('fruit').value=res;
        }

    }//
 
//清除
function AC(){
    var oper=document.getElementById('fruit').value;
    document.getElementById('fruit').value='';
}
//撤销
function CE(){
    var oper=document.getElementById('fruit').value;
    var revoke=oper.substring(0,oper.length-1);
    document.getElementById('fruit').value=revoke;
}
