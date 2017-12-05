/*
 * JavaScript 表单验证 2016年12月28日21:08:07
 */
/*
 解释说明：
 首先，要用纯 JavaScript 实现
 鼠标在 input 焦点上的动作（onfocus：当input是在输入框）
 鼠标离开 input 上面的动作（onblur ：当input不在输入框）
 选中一个 input 的 id 值，获取 input 的 value 值，检测 value 值里面的内容，是否为空，是否匹配正则
 */
/*
 * js开始
 */
function $(elementId) { //通过ID获取HTML对象的通用方法，使用$代替函数名称
    'use strict';
    return document.getElementById(elementId);
};
/*
 * 封装开始 - 默认为空的时候
 */
function w1OnFocus(w1Id, w1Class, w1InnerText) { //一共需要传递三个值：input的ID，重命名的class，文本内容
    'use strict';
    if (w1Id.value === "") { //value值为空
        w1Class.className = "text-muted";
        w1Class.innerHTML = w1InnerText;
    }
    ;
};

function w1OnBlur(w1id, w1class, w1innerHTML, w1elseIf, w1elseIfinnerHTML, w1elseinnerHTML) { //一共需要传递7个值：
    'use strict';
    if (w1id.value === "") { //value值为空
        w1class.className = "text-danger";
        w1class.innerHTML = w1innerHTML;
        return false;
    }
    else if (w1elseIf) {
        w1class.className = "text-danger";
        w1class.innerHTML = w1elseIfinnerHTML;
        return false;
    }
    else {
        w1class.className = "text-success";
        w1class.innerHTML = w1elseinnerHTML;
        return true;
    }
    ;
};
/*
 * 封装结束
 */
//用户名
var account = $("account"); //声明input的id
var accountInfo = $("accountInfo"); //声明提示id
var accountReg = /^[\u4e00-\u9fa5_0-9a-zA-Z]{2,18}$/; //正则是否为中文字母英文数字并且6-18位
account.onfocus = function () { //当input是在输入框，如果是在HTML中：onfocus="codeFocus()"
    var tips = "支持中文、字母、数字的2-18个字符";
    w1OnFocus(account, accountInfo, tips);
};

function accountonblur() {
    var t1 = "请输入用户名";
    var reg = accountReg.test(account.value) != true;
    var t2 = "格式错误，仅支持中文、字母、数字2-18个字符";
    var t3 = "对了";
    var w1x = w1OnBlur(account, accountInfo, t1, reg, t2, t3);
    return w1x;
}
account.onblur = function () { //当input不在输入框，如果是在HTML中：onblur="codeBlur()"
    accountonblur();
};
//密码
var password = $("password"); //声明input的id
var passwordInfo = $("passwordInfo"); //声明提示id
var passwordReg = /^[0-9a-zA-Z]{6,18}$/; //正则是否为字母数字并且6-18
password.onfocus = function () { //当input是在输入框
    var t1 = "建议使用字母、数字两种组合的长度为6-18个字符";
    w1OnFocus(password, passwordInfo, t1);
};

function passwordonblur() {
    var t1 = "请输入密码";
    var reg = passwordReg.test(password.value) != true;
    var t2 = "仅支持字母、数字长度为6-18个字符";
    var t3 = "可以";
    var w1x = w1OnBlur(password, passwordInfo, t1, reg, t2, t3);
    return w1x;
}

function passwordonkeypress() {
    'use strict';
    var i = password.value.length;
    if (i < 6) { //value值为空
        password.style.borderColor = "#a94442";
        return false;
    }
    else if (i < 10) {
        password.style.borderColor = "#fc0";
        return false;
    }
    else if (i > 18) {
        password.style.borderColor = "#a94442";
        return false;
    }
    else {
        password.style.borderColor = "#3c763d";
        return true;
    }
    ;
}
password.onkeyup = function () { //某个键盘按键被松开。
    passwordonkeypress();
};
password.onblur = function () { //当input不在输入框
    passwordonblur();
};
//密码2
var password2 = $("password2"); //声明input的id
var password2Info = $("password2Info"); //声明提示id
password2.onfocus = function () { //当input是在输入框
    var t1 = "请再次输入密码";
    w1OnFocus(password2, password2Info, t1);
};

function password2onblur() {
    var t1 = "请确认输入密码";
    var reg = password.value != password2.value;
    var t2 = "密码不一致";
    var t3 = "密码一致";
    var w1x = w1OnBlur(password2, password2Info, t1, reg, t2, t3);
    return w1x;
};
password2.onblur = function () { //当input不在输入框
    password2onblur();
};

var tel = $("tel"); //声明id
var telInfo = $("telInfo"); //声明提示id
var telReg = /1\d{10}$/; //匹配电话的正则
tel.onfocus = function () { //联系电话 - 鼠标焦点状态
    var t1 = "请输入手机号码";
    w1OnFocus(tel, telInfo, t1);
};

function telonblur() {
    var t1 = "请输入手机号码";
    var reg = telReg.test(tel.value) == false;
    var t2 = "请填写正确的手机号码";
    var t3 = "可以";
    var w1x = w1OnBlur(tel, telInfo, t1, reg, t2, t3);
    return w1x;
}
tel.onblur = function () { //联系电话 - 离开或正确状态
    telonblur();
};

//验证问题：暂时不用
//var www = $("www"); //声明id
//var wwwInfo = $("wwwInfo"); //声明提示id
//var wwwUrl = "www.shengbangshenghua.com"; //
//www.onfocus = function () { //鼠标焦点状态
//    var t1 = "本站的域名是？";
//    w1OnFocus(www, wwwInfo, t1);
//};
//
//function wwwonblur() {
//    var t1 = "请输入本站域名";
//    var reg = www.value != wwwUrl;
//    var t2 = "请输入：" + wwwUrl;
//    var t3 = "可以";
//    var w1x = w1OnBlur(www, wwwInfo, t1, reg, t2, t3);
//    return w1x;
//}
//www.onblur = function () { //离开或正确状态
//    wwwonblur();
//};
var code = $("code"); //声明id
var codeInfo = $("codeInfo"); //声明提示id
var codeRandom;
code.onfocus = function () { //验证码 - 鼠标焦点状态
    var t1 = "请输入验证码";
    w1OnFocus(code, codeInfo, t1);
};

//获取验证码按钮
var getCode = document.querySelector("#getCode");
getCode.onclick = function () {
    codeRandom = Math.floor(Math.random() * 9000) + 1000; //随机输出一个四位数的验证码
    console.log(codeRandom);
    alert("验证码为：" + codeRandom);
    var time = 5;
    var t;
    getCode.className += " codeHide";
    getCode.innerHTML = time--;
    getCode.disabled = "disabled";
    t = setInterval(function () {
        if (time > 0) {
            getCode.className += " codeHide";
            getCode.innerHTML = time--;
            getCode.disabled = "disabled";
        } else {
            clearInterval(t);
            getCode.className = "getCode";
            getCode.innerHTML = "获取验证码";
            getCode.disabled = "";
        }
    }, 1000);

}


function codeonblur() {
    var t1 = "请输入验证码";
    var reg = code.value != codeRandom;
    // var t2 = "请确认验证码是否为：" + codeRandom;
    var t2 = "您输入的验证码不正确，请重新输入";
    var t3 = "通过";
    var w1x = w1OnBlur(code, codeInfo, t1, reg, t2, t3);
    return w1x;
};
code.onblur = function () { //验证码 - 离开或正确状态
    codeonblur();
};


//阅读接受协议
var check = document.querySelector("#check");
//如果勾选了，返回true，否则返回false
function xcheck() {
    if (check.checked) {
        return true;
    } else {
        return false;
    }
}


function top0() { //提交错误或重置后，返回顶部
    document.body.scrollTop = 0;
};

function xsubmit() { //提交
    if (!accountonblur() || !passwordonblur() || !password2onblur() || !telonblur()) {
        alert("请确认信息是否完整");
        top0();
        return false;
    }else if(!codeonblur()){
        return false;
    } else if (!xcheck()) {
        alert("请勾选用户协议");
        return false;
    } else {
        alert("验证通过");
        return true;
    }
};
