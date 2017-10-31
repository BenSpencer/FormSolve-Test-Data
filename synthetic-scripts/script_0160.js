// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool((input_string('S1') + str(bool((int(input_string('S1')) + (if bool(input_string('S2')) then (if not((bool(input_int('I2')) != bool(len(str(int(input_bool('B2'))))))) then len(input_string('S3')) else len(str((input_int('I3') in [1, 0, 6, 1])))) else input_int('I1'))))))) then "evkJP" else input_string('S3'))

var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);

var fn29 = function (b8, s19, x6, x22) {
    var b7 = !! (x6);
    var b18;
    if ((b7 != eval("eval(\"var e11 = \\\"var x9 = +(b8);String(x9)\\\";var l12 = (eval(e11)).length;var b13 = (l12) ? true : false;b13\")"))) {
        b18 = false;
    } else {
        b18 = true;
    }
    var x28;
    if (b18) {
        var l21 = (eval("s19")).length;
        x28 = l21;
    } else {
        var opts24 = [1, 0, 6, 1];
        var b23 = false;
        for (var idx25 = 0; idx25 < opts24.length; idx25++) {
            if (opts24[idx25] == x22) {
                b23 = true;
                break;
            }
        }
        var l27 = (String(b23)).length;
        x28 = l27;
    }
    return x28;
}
var fn48 = function (s4, x34, x33, s1, x32, s31, b30) {
    var s45 = s31;
    var s2 = s1;
    var x36;
    if ((s4) ? true : false) {
        x36 = fn29(b30, s31, x32, x33);
    } else {
        var e35 = "x34";
        x36 = eval(e35);
    }
    x37 = parseInt(s2, 10);
    x38 = x36;
    var b39 = Boolean(x37 + x38);
    var s40 = '' + (b39);
    var x41 = s1 + s40;
    var e44 = "(x41) ? true : false";
    var x47;
    if (eval(e44)) {
        x47 = "evkJP";
    } else {
        x47 = eval("s45");
    }
    return x47;
}
fn48(input_S2, input_I1, input_I3, input_S1, input_I2, input_S3, input_B2);
