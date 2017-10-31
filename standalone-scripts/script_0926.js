// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if regex-test(str(not(bool(len(str((str((str((if not(not(bool(str(input_int('I1'))))) then input_int('I2') else (int(str(input_int('I3'))) % int(bool(str(input_int('I2'))))))) in ['NnzO', 'rKP', 'T5SP', 'oHs', 'Ii', 'U', '6jL', 'eB', ''])) === input_string('S1'))))))), /^Dk(VT\D\WJ\Si[0-9]+LhkO\r|y)xq$/) then not((int(bool(int((input_string('S3') >= (if input_bool('B1') then input_string('S2') else str(input_bool('B1'))))))) in [9, 21, 23, 1, 3, 4, 144])) else input_bool('B1'))

var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);

(function (x8, s38, x12, b37, s26, x1, s35) {
    var b54 = b37;
    var e25 = "(eval(\"var x7 = x12; var e6 = \\\"var b4 = !(!!((x1).toString()));!(b4)\\\";var x11 = Number('' + (eval(\\\"x8\\\")));var x15 = (('' + (x12)) ? true : false) | 0;var x18; if (eval(e6)) {  x18 = x7; } else { x18 = (x11 % x15); }var s19 = '' + (x18);var opts21 = ['NnzO', 'rKP', 'T5SP', 'oHs', 'Ii', 'U', '6jL', 'eB', ''];var b20 = false; for (var idx22 = 0; idx22 < opts21.length; idx22++) { if (opts21[idx22] == s19) { b20 = true; } }b20\")).toString()";
    var opts51 = [9, 21, 23, 1, 3, 4, 144];
    var b50 = false;
    for (var idx52 = 0; idx52 < opts51.length; idx52++) {
        if (opts51[idx52] == eval("var e36 = \"s35\";var b39 = b37; var x41; if (b37) { x41 = s38; } else { var s40 = '' + (b39); x41 = s40; }var b44 = eval(e36); var b45 = eval(\"eval(\\\"x41\\\")\");var b47 = (+(b44 >= b45)) ? true : false;var x48 = (b47) | 0;x48")) {
            b50 = true;
            break;
        }
    }
    return (((!(Boolean((((eval(e25) === s26)).toString()).length))).toString()).match(/^Dk(VT\D\WJ\Si[0-9]+LhkO\r|y)xq$/) !== null ? !(b50) : b54);
})(input_I3, input_S2, input_I2, input_B1, input_S1, input_I1, input_S3);
