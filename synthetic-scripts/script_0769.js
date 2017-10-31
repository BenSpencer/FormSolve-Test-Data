// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((input_bool('B2') === (input_string('S2') === str(int(input_string('S3'))))) && input_bool('B2')) then bool(str((if (not(not(bool(int((input_int('I2') >= int(str(input_int('I1')))))))) == (if true then input_bool('B3') else not(regex-test(input_string('S3'), /^(u|bN)[A-Z]*jN$/)))) then input_bool('B2') else input_bool('B1')))) else (bool(input_string('S1')) !== input_bool('B2')))

var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);

var fn44 = function (x14, x15, s37, s25, b32, b24, b1, s2) {
    var s3 = s25;
    var b31 = b1;
    var b40 = b1;
    var b11 = b1;
    var b9 = false;
    if (b1 === eval("(s2 === String(parseInt(s3, 10)))")) {
        b9 = true;
    }
    var b12;
    if (b9 && b11) {
        b12 = true;
    } else {
        b12 = false;
    }
    var s16 = (x15).toString();
    var x17 = Number(s16);
    var x20 = Number((x14 >= x17));
    var b21 = Boolean(x20);
    var b22 = !(b21);
    var b23 = !(b22);
    var x28;
    if (true) {
        x28 = b24;
    } else {
        var re26 = new RegExp("^(u|bN)[A-Z]*jN$");
        var b27;
        if (re26.test(s25)) {
            b27 = false;
        } else {
            b27 = true;
        }
        x28 = b27;
    }
    var e34 = "((b23 == x28) ? b31 : b32)";
    var s35 = (eval(e34)).toString();
    var e39 = "(s37) ? true : false";
    var b41;
    if (eval(e39) !== b40) {
        b41 = true;
    } else {
        b41 = false;
    }
    var x43;
    if (b12) {
        x43 = Boolean(s35);
    } else {
        x43 = b41;
    }
    return x43;
}
fn44(input_I2, input_I1, input_S1, input_S3, input_B1, input_B3, input_B2, input_S2);
