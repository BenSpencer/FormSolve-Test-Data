// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(not((if input_bool('B1') then true else (int(input_string('S3')) <= int(input_string('S1'))))))) then bool(int(str((if (input_int('I2') >= int(input_bool('B1'))) then 10 else -99)))) else not((int(bool(len(str((input_bool('B2') == (input_bool('B3') && input_bool('B2'))))))) < input_int('I2'))))

var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn46 = function (b30, s2, b29, b1, s6, x24) {
    var b23 = b1;
    var x40 = x24;
    var x3 = parseInt(s2, 10);
    var x7 = Number(s6);
    var b8;
    if (eval("eval(\"x3\")") <= x7) {
        b8 = true;
    } else {
        b8 = false;
    }
    var x10;
    if (b1) {
        x10 = true;
    } else {
        x10 = b8;
    }
    var e12 = "!(x10)";
    var b13;
    if (eval(e12)) {
        b13 = false;
    } else {
        b13 = true;
    }
    var b14;
    if (b13) {
        b14 = false;
    } else {
        b14 = true;
    }
    var e44 = "var b31 = b29; var b32; if (b31) {  b32 = b30; } else { b32 = false; }var b34; if (b29) { if (b32) { b34 = true; } else { b34 = false; } } else { if (b32) { b34 = false; } else { b34 = true; } }var l37 = (String(b34)).length;var x39 = (Boolean(l37)) | 0;var b41 = false; if (x39 < x40) { b41 = true; }var b43; if (b41) { b43 = false; } else { b43 = true; }b43";
    var x45;
    if (b14) {
        function fn22(b16, x15) {
            var e17 = "b16";
            var b19;
            if (x15 >= Number(eval(e17))) {
                b19 = true;
            } else {
                b19 = false;
            }
            var x21;
            if (b19) {
                x21 = 10;
            } else {
                x21 = -99;
            }
            return x21;
        }
        var s25 = (fn22(b23, x24)).toString();
        var x26 = parseInt(s25, 10);
        x45 = eval("(x26) ? true : false");
    } else {
        x45 = eval(e44);
    }
    return x45;
}
fn46(input_B3, input_S3, input_B2, input_B1, input_S1, input_I2);
