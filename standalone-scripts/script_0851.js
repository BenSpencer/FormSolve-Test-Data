// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then int((if bool((int(input_string('S1')) % int(input_string('S2')))) then str(not(input_bool('B2'))) else str(int(regex-test(input_string('S3'), /^iKdgi[a-z]?(a|AVj K)r$/))))) else int(input_bool('B2')))

var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");

function fn27(s15, s2, b1, s6, b12) {
    var b24 = b12;
    var e4 = "eval(\"s2\")";
    var x5 = Number(eval(e4));
    x8 = x5 % Number(s6);
    var b11 = Boolean(eval("x8"));
    var re16 = /^iKdgi[a-z]?(a|AVj K)r$/;
    var e17 = "re16.test(s15)";
    var e19 = "Number(eval(e17))";
    var s20 = '' + (eval(e19));
    var x21;
    if (b11) {
        var b13 = !(b12);
        x21 = String(b13);
    } else {
        x21 = s20;
    }
    var e23 = "parseInt(x21, 10)";
    var x25 = (b24) ? 1 : 0;
    var x26;
    if (b1) {
        x26 = eval(e23);
    } else {
        x26 = x25;
    }
    return x26;
}
fn27(input_S3, input_S1, input_B1, input_S2, input_B2);
