// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I1') in [8, 143, 0, 71, 5]) then (if bool(input_string('S2')) then str(int((not(not((str(input_bool('B1')) !== "RxJj"))) || (int(input_bool('B3')) == input_int('I3'))))) else input_string('S3')) else str(int(bool(len(str((if bool(str(input_bool('B1'))) then (input_int('I1') !== len(str(int(not(input_bool('B1')))))) else input_bool('B1'))))))))

var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);

function fn56(b26, x29, x1, b30, s28, s27) {
    var b31 = b30;
    var x34 = x1;
    var opts3 = [8, 143, 0, 71, 5];
    var fn25 = function (b13, s5, s23, x15, b7) {
        var b6 = Boolean(s5);
        var x24;
        if (b6) {
            x24 = eval("var b9; if (String(b7) !== \"RxJj\") { b9 = true; } else { b9 = false; }var b16 = false; if ((b13) ? 1 : 0 == x15) { b16 = true; }var b18; if (!(!(b9)) || b16) { b18 = true; } else { b18 = false; }((b18) ? 1 : 0).toString()");
        } else {
            x24 = s23;
        }
        return x24;
    }
    var e51 = "var e50 = \"var b35 = b31; var b43 = b31; var b36; if (b35) { b36 = false; } else { b36 = true; }var x37 = Number(b36);var e39 = \\\"String(x37)\\\";var l40 = (eval(e39)).length;var e45 = \\\"(('' + (b31)) ? true : false ? (x34 !== l40) : b43)\\\";var s46 = (eval(e45)).toString();var e48 = \\\"(s46).length\\\";eval(\\\"eval(e48)\\\")\";eval(e50)";
    var b52 = (eval(e51)) ? true : false;
    var s54 = '' + (Number(b52));
    var x55;
    if (opts3.indexOf(x1) > -1) {
        x55 = fn25(b26, s27, s28, x29, b30);
    } else {
        x55 = s54;
    }
    return x55;
}
fn56(input_B3, input_I3, input_I1, input_B1, input_S3, input_S2);
