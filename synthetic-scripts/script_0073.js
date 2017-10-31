// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S3')) then (bool(input_int('I3')) && input_bool('B1')) else (if (int((regex-test(str(not(input_bool('B3'))), /^(o|i-N)[0-9]*dR$/) && not(not(input_bool('B1'))))) <= int(str(bool(input_int('I1'))))) then true else (int(input_string('S3')) === input_int('I1'))))

var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn33 = function (x19, b8, s1, x3, b12) {
    var s26 = s1;
    var b5 = b12;
    var b6;
    if (b5) {
        b6 = Boolean(x3);
    } else {
        b6 = false;
    }
    var x28 = x19;
    var x31;
    if (eval("var b9 = !(b8);var s10 = (b9).toString();var re11 = /^(o|i-N)[0-9]*dR$/;var b14; if (eval(\"b12\")) { b14 = false; } else { b14 = true; }var b15 = !(b14);var b16; if (re11.test(s10)) { b16 = b15; } else { b16 = false; }var x18 = Number(b16);var b20 = !!(x19);var s21 = '' + (b20);var x22 = Number(s21);var b23 = x18 <= x22;b23")) {
        x31 = true;
    } else {
        var b29;
        if (parseInt(s26, 10) === x28) {
            b29 = true;
        } else {
            b29 = false;
        }
        x31 = b29;
    }
    return (Boolean(s1) ? b6 : x31);
}
fn33(input_I1, input_B3, input_S3, input_I3, input_B1);
