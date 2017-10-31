// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((int(bool(len((str(int(input_bool('B3'))) + str(input_bool('B2')))))) !== int(bool(int((not(bool(str(input_bool('B3')))) || bool(int(str(len(input_string('S3'))))))))))) then str(int((if not((bool(input_string('S3')) || not(input_bool('B3')))) then bool(input_string('S1')) else bool(input_string('S1'))))) else "Rqua")

var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn57 = function (s51, b7, b1, s21) {
    var b50 = b1;
    var s52 = s21;
    var b15 = b1;
    var e20 = "!(!!(eval(\"'' + (b15)\")))";
    var s23 = String((s21).length);
    var b26;
    if (eval(e20) || Boolean(Number(s23))) {
        b26 = true;
    } else {
        b26 = false;
    }
    var x28 = Number(b26);
    var b29 = !! (x28);
    var x30 = +(b29);
    var b33 = !((~~(eval("var e4 = \"eval(\\\"var x2 = +(b1);x2\\\")\";var x9 = eval(\"String(eval(e4))\") + (b7).toString();var l11 = (x9).length;var b12 = !!(l11);b12")) !== x30));
    var e54 = "function fn49(b37, s44, s34) { var s46 = s44; var e35 = \"s34\";var e39 = \"eval(\\\"b37\\\")\";var b43 = !((!!(eval(e35)) || !(eval(e39))));var b45 = !!(s44);var b47 = !!(s46);var x48; if (b43) { x48 = b45; } else { x48 = b47; } return x48; } ~~(fn49(b50, s51, s52))";
    var s55 = (eval(e54)).toString();
    return (b33 ? s55 : "Rqua");
}
fn57(input_S1, input_B2, input_B3, input_S3);
