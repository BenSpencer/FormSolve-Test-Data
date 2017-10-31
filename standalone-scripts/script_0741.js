// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then bool(str(not((not((int(bool(len(str((input_string('S2') < str(bool(input_string('S1')))))))) in [48, 1, 16])) === bool((int(bool(input_int('I1'))) + (len(input_string('S3')) - len(str(len(str(input_bool('B2')))))))))))) else not(input_bool('B2')))

var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");

var fn43 = function (b22, b1, x16, s2, s20, s3) {
    var b40 = b22;
    var b6 = false;
    if (s2 < String(Boolean(s3))) {
        b6 = true;
    }
    var s8 = (b6).toString();
    var b10 = ((s8).length) ? true : false;
    var opts13 = [48, 1, 16];
    var e26 = "var l24 = (String(b22)).length;var s25 = (l24).toString();s25";
    var l27 = (eval(e26)).length;
    x28 = (s20).length - l27;
    x30 = +(eval("!!(x16)"));
    x31 = x28;
    var b33 = false;
    if (!(opts13.indexOf(Number(b10)) > -1) === Boolean(x30 + x31)) {
        b33 = true;
    }
    var e37 = "eval(\"!(b33)\")";
    var s38 = String(eval(e37));
    var b39 = !! (s38);
    var x42;
    if (b1) {
        x42 = b39;
    } else {
        var b41;
        if (b40) {
            b41 = false;
        } else {
            b41 = true;
        }
        x42 = b41;
    }
    return x42;
}
fn43(input_B2, input_B3, input_I1, input_S2, input_S3, input_S1);
