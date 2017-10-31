// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not((input_bool('B2') === (int(str((if not(bool((input_int('I3') - int(bool(int(bool(input_int('I3')))))))) then bool(int(bool(input_int('I2')))) else (input_int('I2') in [2, 0, 0, 0, 0])))) >= input_int('I1'))))) then not((len(str((if regex-test(input_string('S2'), /^H([a-z]|o)\t?$/) then (int(input_bool('B1')) <= input_int('I3')) else input_bool('B1')))) >= input_int('I3'))) else not((input_string('S1') != input_string('S1'))))

var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);

function fn57(b38, s36, x15, x29, b1, s51, x3) {
    var x40 = x3;
    var b30 = Number(eval("var x20 = x15; var x5 = x3; var e7 = \"!!(x5)\";var x8 = (eval(e7)) | 0;var x10 = (Boolean(x8)) ? 1 : 0;x11 = eval(\"x3\") - x10;var b14 = !(Boolean(x11));var x17 = (Boolean(x15)) | 0;var e18 = \"x17\";var b19 = !!(eval(e18));var opts23 = [2, 0, 0, 0, 0];var b22 = opts23.indexOf(eval(\"x20\")) > -1;var x25; if (b14) { x25 = b19; } else { x25 = b22; }var s26 = '' + (x25);s26"));
    var b31 = x29;
    var b32 = eval("b1") === b30 >= b31;
    var b34 = !(b32);
    var x56;
    if (!(b34)) {
        var x47 = x40;
        var b43 = b38;
        var re37 = /^H([a-z]|o)\t?$/;
        var x39 = (b38) ? 1 : 0;
        var b41 = x39 <= x40;
        var x44;
        if (re37.test(s36)) {
            x44 = b41;
        } else {
            x44 = b43;
        }
        var l46 = ('' + (x44)).length;
        x56 = !((l46 >= x47));
    } else {
        var s52 = s51;
        var b53;
        if (s51 != s52) {
            b53 = true;
        } else {
            b53 = false;
        }
        var b55 = !(b53);
        x56 = b55;
    }
    return x56;
}
fn57(input_B1, input_S2, input_I2, input_I1, input_B2, input_S1, input_I3);
