// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((if (false || input_bool('B1')) then ((input_int('I2') / int((int(input_bool('B3')) === int(str((input_int('I3') < int(input_bool('B1')))))))) <= len(str(input_bool('B3')))) else bool(input_int('I3')))) then bool(len(input_string('S2'))) else (if bool(str(input_bool('B1'))) then bool(str(input_int('I1'))) else bool((int(str(input_int('I1'))) + input_int('I1')))))

var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);

function fn51(s31, b1, x4, x39, b21, x26) {
    var b35 = b1;
    var x8 = x26;
    var b10 = b1;
    var b2;
    if (b1) {
        b2 = true;
    } else {
        b2 = false;
    }
    var x29;
    if (b2) {
        var b5 = b21;
        var e6 = "b5";
        var b12;
        if (eval("x8") < Number(b10)) {
            b12 = true;
        } else {
            b12 = false;
        }
        var s14 = (b12).toString();
        var b16 = false;
        if (Number(eval(e6)) === parseInt(s14, 10)) {
            b16 = true;
        }
        var s22 = String(b21);
        var l23 = (s22).length;
        var b24 = false;
        if ((x4 / (b16) | 0) <= l23) {
            b24 = true;
        }
        x29 = b24;
    } else {
        x29 = eval("var b27 = Boolean(x26);b27");
    }
    var b30 = !(x29);
    var x50;
    if (b30) {
        var e34 = "var l32 = (s31).length;(l32) ? true : false";
        x50 = eval(e34);
    } else {
        var x42 = x39;
        var b37 = !! (String(b35));
        var e38 = "b37";
        var x49;
        if (eval(e38)) {
            var s40 = '' + (x39);
            x49 = (s40) ? true : false;
        } else {
            var x45 = x42;
            var s43 = (x42).toString();
            x46 = Number(s43);
            x47 = x45;
            x49 = !! (x46 + x47);
        }
        x50 = x49;
    }
    return x50;
}
fn51(input_S2, input_B1, input_I2, input_I1, input_B3, input_I3);
