// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool((int(str((((if not(not((bool(int(str((int(str((input_string('S1') != input_string('S1')))) == int(bool(str(input_bool('B1')))))))) || bool(input_string('S2'))))) then input_int('I1') else int(input_bool('B3'))) + int(input_bool('B1'))) * input_int('I2')))) - input_int('I1'))) then int((not(input_bool('B3')) !== false)) else input_int('I3'))

var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

function fn54(x27, x36, b32, s20, s1, x52, b28) {
    var b45 = b28;
    var x41 = x27;
    var b9 = b32;
    var e7 = "var s3 = s1; var e2 = \"s1\";var b4; if (eval(e2) != s3) { b4 = true; } else { b4 = false; }'' + (b4)";
    var x8 = parseInt(eval(e7), 10);
    var e14 = "(eval(\"!!((b9).toString())\")) ? 1 : 0";
    var x18 = parseInt(String((x8 == eval(e14))), 10);
    var b23;
    if ((x18) ? true : false) {
        b23 = true;
    } else {
        var e21 = "s20";
        var b22 = !! (eval(e21));
        b23 = b22;
    }
    var b25;
    if (b23) {
        b25 = false;
    } else {
        b25 = true;
    }
    var b26 = !(b25);
    var x31;
    if (b26) {
        x31 = x27;
    } else {
        var e30 = "(b28) | 0";
        x31 = eval(e30);
    }
    x34 = x31;
    x35 = ~~ (b32);
    var s39 = String((x34 + x35 * x36));
    x42 = parseInt(s39, 10) - x41;
    var b44 = !! (x42);
    var x53;
    if (b44) {
        var b48 = !(eval("var e46 = \"b45\";eval(e46)"));
        var b49 = false;
        if (b48 !== false) {
            b49 = true;
        }
        var x51 = Number(b49);
        x53 = x51;
    } else {
        x53 = x52;
    }
    return x53;
}
fn54(input_I1, input_I2, input_B1, input_S2, input_S1, input_I3, input_B3);
