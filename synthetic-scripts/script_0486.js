// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if not(not(input_bool('B3'))) then input_bool('B3') else (input_string('S2') < str(not(bool(input_string('S2')))))) then bool(str(len(regex-replace(input_string('S1'), /b(T|[a-z])\t+P\wAWuVmq/, "")))) else input_bool('B1'))

var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn26 = function (s18, s8, b24, b1) {
    var b7 = b1;
    var e6 = "var e2 = \"b1\";var b3; if (eval(e2)) { b3 = false; } else { b3 = true; }var e4 = \"b3\";var b5 = !(eval(e4));b5";
    var s9 = s8;
    var e13 = "var e11 = \"Boolean(s9)\";var b12; if (eval(e11)) { b12 = false; } else { b12 = true; }b12";
    var b15 = s8;
    var b16 = (eval(e13)).toString();
    var x17;
    if (eval(e6)) {
        x17 = b7;
    } else {
        x17 = b15 < b16;
    }
    var re20 = new RegExp("b(T|[a-z])\\t+P\\wAWuVmq");
    var s19 = (s18).replace(re20, "");
    var s22 = '' + ((s19).length);
    var b23 = Boolean(s22);
    var x25;
    if (x17) {
        x25 = b23;
    } else {
        x25 = b24;
    }
    return x25;
}
fn26(input_S1, input_S2, input_B1, input_B3);
