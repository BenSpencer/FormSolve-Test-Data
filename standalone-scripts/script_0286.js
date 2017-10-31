// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(len((if (len(str(int(input_string('S3')))) == input_int('I3')) then input_string('S3') else str(not(bool(int((if bool(len(str(not(input_bool('B2'))))) then input_string('S1') else input_string('S2')))))))))) then str((len(str(bool(int(input_bool('B2'))))) in [98, -71, 113, 0])) else str(bool(input_int('I3'))))

var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);

function fn50(s16, x46, s18, s1, b11) {
    var b33 = b11;
    var x6 = x46;
    var s9 = s1;
    var b7 = (eval("var x2 = Number(s1);var s3 = (x2).toString();s3")).length == x6;
    var s13 = '' + (!(b11));
    var l14 = (s13).length;
    var b15 = Boolean(l14);
    var x19;
    if (b15) {
        var e17 = "s16";
        x19 = eval(e17);
    } else {
        x19 = s18;
    }
    var x21 = Number(eval("x19"));
    var b22 = (x21) ? true : false;
    var e23 = "b22";
    var x28;
    if (b7) {
        x28 = eval("s9");
    } else {
        x28 = String(eval("eval(\"!(eval(e23))\")"));
    }
    var b30 = ((x28).length) ? true : false;
    var b32 = !(eval("b30"));
    var s40 = (eval("eval(\"var e35 = \\\"eval(\\\\\\\"b33\\\\\\\")\\\";Boolean(Number(eval(e35)))\")")).toString();
    var opts43 = [98, -71, 113, 0];
    var b42 = false;
    for (var idx44 = 0; idx44 < opts43.length; idx44++) {
        if (opts43[idx44] == (s40).length) {
            b42 = true;
            break;
        }
    }
    var s45 = '' + (b42);
    var x49;
    if (b32) {
        x49 = s45;
    } else {
        var b47 = Boolean(x46);
        x49 = (b47).toString();
    }
    return x49;
}
fn50(input_S1, input_I3, input_S2, input_S3, input_B2);
