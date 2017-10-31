// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then input_int('I1') else int((if bool(len(input_string('S3'))) then str((if (int(str(("" < str((if bool(input_int('I3')) then int(str(input_int('I2'))) else input_int('I3')))))) <= int(input_bool('B1'))) then input_bool('B1') else input_bool('B3'))) else input_string('S1'))))

var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);

function fn37(x17, b24, x16, s4, b1, x2, s33) {
    var b30 = b1;
    var e3 = "x2";
    var l5 = (s4).length;
    var x34;
    if ( !! (l5)) {
        var b29 = b24;
        var e22 = "function fn15(x10, x13) { var x7 = x13; var e9 = \"Boolean(x7)\";var x14; if (eval(e9)) {  x14 = Number('' + (x10)); } else {  x14 = x13; } return x14; } var b19 = \"\"; var b20 = '' + (fn15(x16, x17));var s21 = (b19 < b20).toString();s21";
        var b27 = parseInt(eval(e22), 10) <= eval("Number(b24)");
        var x31;
        if (b27) {
            x31 = b29;
        } else {
            x31 = b30;
        }
        x34 = '' + (x31);
    } else {
        x34 = s33;
    }
    var x35 = parseInt(x34, 10);
    return (b1 ? eval(e3) : x35);
}
fn37(input_I3, input_B1, input_I2, input_S3, input_B3, input_I1, input_S1);
