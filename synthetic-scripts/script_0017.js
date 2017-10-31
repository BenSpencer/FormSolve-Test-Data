// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then bool(int(str(((input_string('S1') == input_string('S3')) && input_bool('B1'))))) else (input_bool('B2') == (input_int('I3') == len((if (if input_bool('B1') then (if false then not((input_int('I2') === len(input_string('S3')))) else bool(input_string('S2'))) else input_bool('B3')) then str(not(regex-test(str(int(str(bool(input_string('S3'))))), /^(E|L[0-9])*$/))) else "")))))

var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");

function fn29(b17, s19, b27, s24, x18) {
    var x26;
    if (false) {
        var l20 = (s19).length;
        var b21;
        if (x18 === l20) {
            b21 = true;
        } else {
            b21 = false;
        }
        var b23 = !(b21);
        x26 = b23;
    } else {
        x26 = (s24) ? true : false;
    }
    var x28;
    if (b17) {
        x28 = x26;
    } else {
        x28 = b27;
    }
    return x28;
}
var fn54 = function (s33, x15, b32, x34, b30, s3, b1, s2) {
    var s31 = s3;
    var b8 = b30;
    var b14 = b1;
    var b9;
    if (eval("(s2 == eval(\"s3\"))")) {
        b9 = b8;
    } else {
        b9 = false;
    }
    var b13 = Boolean(Number('' + (b9)));
    var s36 = s31;
    var e35 = "fn29(b30, s31, b32, s33, x34)";
    var e43 = "var e40 = \"var b37 = (s36) ? true : false;var s38 = (b37).toString();var x39 = Number(s38);x39\";eval(\"String(eval(e40))\")";
    var re44 = /^(E|L[0-9])*$/;
    var b51 = b14 == (eval("x15") == ((eval(e35) ? String(!(re44.test(eval(e43)))) : "")).length);
    return (b1 ? b13 : b51);
}
fn54(input_S2, input_I3, input_B3, input_I2, input_B1, input_S3, input_B2, input_S1);
