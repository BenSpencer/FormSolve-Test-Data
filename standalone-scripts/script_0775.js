// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(bool(str(bool(int(not(input_bool('B1')))))))) then false else bool(str((int(str(("s2gj" != str((if ((if not((str(input_int('I2')) === str(bool(input_int('I1'))))) then true else bool(input_string('S2'))) == false) then input_bool('B1') else input_bool('B3')))))) * int(input_bool('B2'))))))

var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);

function fn45(b1, s24, x12, b38, x9, b30) {
    var b29 = b1;
    var b2;
    if (b1) {
        b2 = false;
    } else {
        b2 = true;
    }
    var x3 = (b2) ? 1 : 0;
    var b7 = !( !! (((x3) ? true : false).toString()));
    var x44;
    if (!(b7)) {
        x44 = false;
    } else {
        var e22 = "var e21 = \"var e18 = \\\"var e17 = \\\\\\\"var e15 = \\\\\\\\\\\\\\\"Boolean(eval(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"x12\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"))\\\\\\\\\\\\\\\";'' + (eval(e15))\\\\\\\";eval(e17)\\\";var b19 = '' + (eval(\\\"x9\\\")); var b20 = eval(e18);b19 === b20\";eval(e21)";
        var b23 = !(eval(e22));
        var x26;
        if (b23) {
            x26 = true;
        } else {
            var b25 = Boolean(s24);
            x26 = b25;
        }
        var b27;
        if (x26 == false) {
            b27 = true;
        } else {
            b27 = false;
        }
        var x31;
        if (b27) {
            x31 = b29;
        } else {
            x31 = b30;
        }
        var s32 = (x31).toString();
        var b33;
        if ("s2gj" != s32) {
            b33 = true;
        } else {
            b33 = false;
        }
        var x37 = parseInt(String(eval("b33")), 10);
        var x39 = (b38) | 0;
        x40 = x37 * x39;
        var s42 = '' + (x40);
        x44 = (s42) ? true : false;
    }
    return x44;
}
fn45(input_B1, input_S2, input_I1, input_B2, input_I2, input_B3);
