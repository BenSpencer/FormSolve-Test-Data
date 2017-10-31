// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (bool(int((if (bool(input_string('S3')) && not(not(input_bool('B1')))) then true else bool(input_int('I1'))))) == (len(input_string('S2')) in [101, -64, -91, -53, 1, -76, 1, 0, 200, 5])) then (if bool(int(input_bool('B1'))) then len(str(input_bool('B1'))) else input_int('I1')) else int(bool(str(int(str(bool(input_int('I1'))))))))

var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn49 = function (s17, s1, b24, x11) {
    var x34 = x11;
    var x39 = x11;
    var b4 = b24;
    var e7 = "var b5; if (b4) { b5 = false; } else { b5 = true; }eval(\"b5\")";
    var b8;
    if (eval(e7)) {
        b8 = false;
    } else {
        b8 = true;
    }
    var b9 = false;
    if (eval("var b2 = Boolean(s1);b2") && b8) {
        b9 = true;
    }
    var x15 = Number(eval("(b9 ? true : (x11) ? true : false)"));
    var opts20 = [101, -64, -91, -53, 1, -76, 1, 0, 200, 5];
    var b19 = false;
    for (var idx21 = 0; idx21 < opts20.length; idx21++) {
        if (opts20[idx21] == (s17).length) {
            b19 = true;
            break;
        }
    }
    var b22;
    if ((x15) ? true : false) {
        if (b19) {
            b22 = true;
        } else {
            b22 = false;
        }
    } else {
        if (b19) {
            b22 = false;
        } else {
            b22 = true;
        }
    }
    var e46 = "var s42 = String(eval(\"var b40 = !!(x39);b40\"));var x43 = parseInt(s42, 10);Boolean(String(x43))";
    var x47 = (eval(e46)) ? 1 : 0;
    var x48;
    if (b22) {
        var e38 = "var b30 = b24; var e25 = \"b24\";var b27 = Boolean((eval(e25)) | 0);var e28 = \"b27\";var e29 = \"eval(e28)\";var l32 = ((b30).toString()).length;var e35 = \"x34\";(eval(e29) ? eval(\"l32\") : eval(\"eval(e35)\"))";
        x48 = eval(e38);
    } else {
        x48 = x47;
    }
    return x48;
}
fn49(input_S2, input_S3, input_B1, input_I1);
