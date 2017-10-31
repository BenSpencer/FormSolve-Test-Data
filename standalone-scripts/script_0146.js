// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (bool((if not(not(bool(input_string('S3')))) then str(not(bool(str(input_int('I2'))))) else str(input_int('I1')))) && input_bool('B1')) then not((not((input_string('S2') > str(input_int('I2')))) != not(bool(int((if bool(str(input_bool('B1'))) then input_bool('B3') else (input_bool('B2') !== input_bool('B3')))))))) else not(not(input_bool('B1'))))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);

var fn47 = function (b28, x12, x20, s19, b16, b29, s1) {
    var b25 = b16;
    var b43 = b16;
    var x5 = x20;
    var b2 = Boolean(s1);
    var b3;
    if (b2) {
        b3 = false;
    } else {
        b3 = true;
    }
    var b4;
    if (b3) {
        b4 = false;
    } else {
        b4 = true;
    }
    var b8 = !! (eval("var s6 = String(x5);s6"));
    var e9 = "b8";
    var s13 = String(x12);
    var x14;
    if (b4) {
        x14 = String(!(eval(e9)));
    } else {
        x14 = s13;
    }
    var b15 = !! (x14);
    var b17 = false;
    if (b15 && b16) {
        b17 = true;
    }
    var b22 = s19 > (x20).toString();
    var b24;
    if (b22) {
        b24 = false;
    } else {
        b24 = true;
    }
    var b30 = b28;
    var e31 = "b30";
    var b32 = b29;
    var b33 = eval(e31);
    var e34 = "b32 !== b33";
    var x35;
    if (Boolean(String(b25))) {
        x35 = b28;
    } else {
        x35 = eval(e34);
    }
    var e37 = "+(x35)";
    var b38 = !! (eval(e37));
    var b39;
    if (b38) {
        b39 = false;
    } else {
        b39 = true;
    }
    var b42;
    if ((b24 != b39)) {
        b42 = false;
    } else {
        b42 = true;
    }
    var b44 = !(b43);
    return (b17 ? b42 : !(b44));
}
fn47(input_B3, input_I1, input_I2, input_S2, input_B1, input_B2, input_S3);
