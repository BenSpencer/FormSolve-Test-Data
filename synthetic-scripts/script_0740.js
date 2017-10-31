// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then int(not(bool(str(not(bool(input_string('S2'))))))) else int(str((if (int(str(not(bool(len(str(len(str(input_bool('B2'))))))))) !== int(input_string('S3'))) then bool((input_int('I1') / int(input_bool('B1')))) else (bool(str(input_int('I2'))) && (int(str(int(str(not(not(not(input_bool('B2')))))))) != int(input_bool('B2'))))))))

var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");

function fn61(x33, s2, b28, b1, b11, x27, s23) {
    var x60;
    if (b1) {
        var e4 = "!!(s2)";
        var s6 = String(!(eval(e4)));
        var b7 = !! (s6);
        var b8;
        if (b7) {
            b8 = false;
        } else {
            b8 = true;
        }
        x60 = eval("Number(b8)");
    } else {
        var b37 = b11;
        var e12 = "b11";
        var s14 = '' + (eval("eval(e12)"));
        var b18 = Boolean(('' + ((s14).length)).length);
        var b19 = !(b18);
        var x24 = Number(s23);
        var b25 = Number('' + (eval("b19")));
        var b26 = x24;
        var x29 = (b28) ? 1 : 0;
        x30 = x27 / x29;
        var b48 = b37;
        var b40 = !(!(eval("b37")));
        var b41 = !(b40);
        var s42 = '' + (b41);
        var b52 = false;
        if (Number((eval("eval(\"parseInt(s42, 10)\")")).toString()) != ~~(eval("eval(\"b48\")"))) {
            b52 = true;
        }
        var e56 = "(eval(\"var s34 = '' + (x33);Boolean(s34)\") && b52)";
        var s58 = String((b25 !== b26 ? (x30) ? true : false : eval(e56)));
        x60 = parseInt(s58, 10);
    }
    return x60;
}
fn61(input_I2, input_S2, input_B1, input_B3, input_B2, input_I1, input_S3);
