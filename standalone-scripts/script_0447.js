// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I1')) then input_int('I2') else len(str((if (if (bool(str(len(input_string('S3')))) || regex-test(input_string('S2'), /^(\W|[a-z]*)$/)) then input_bool('B2') else bool(input_string('S3'))) then input_bool('B2') else input_bool('B1')))))

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);

function fn31(x1, s25, s23, x3, b24, b26) {
    var b2 = Boolean(x1);

    function fn22(s10, b20, s15, b14) {
        var b19 = b14;
        var s4 = s15;
        var e6 = "(s4).length";
        var e7 = "eval(e6)";
        var s8 = '' + (eval(e7));
        var re11 = new RegExp("^(\\W|[a-z]*)$");
        var b12 = false;
        if (Boolean(s8) || re11.test(s10)) {
            b12 = true;
        }
        var e17 = "!!(s15)";
        var x18;
        if (b12) {
            x18 = b14;
        } else {
            x18 = eval(e17);
        }
        var x21;
        if (x18) {
            x21 = b19;
        } else {
            x21 = b20;
        }
        return x21;
    }
    var x30;
    if (b2) {
        x30 = x3;
    } else {
        x30 = ('' + (eval("fn22(s23, b24, s25, b26)"))).length;
    }
    return x30;
}
fn31(input_I1, input_S3, input_S2, input_I2, input_B1, input_B2);
