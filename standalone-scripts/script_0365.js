// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B1')) then ((str(not(bool(input_int('I2')))) in ['yl7q3', 'O', 'k', 'YD', 'r', 'sW9gE', 'lnPBO', 'Z']) !== (if input_bool('B3') then not(bool(len(input_string('S2')))) else (str(bool(input_string('S3'))) !== input_string('S3')))) else input_bool('B1'))

var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn23 = function (b11, s12, s16) {
    var x22;
    if (b11) {
        var b15 = !(((s12).length) ? true : false);
        x22 = b15;
    } else {
        var s19 = s16;
        var s18 = ((s16) ? true : false).toString();
        var b20 = s18;
        var b21 = s19;
        x22 = b20 !== b21;
    }
    return x22;
}
var fn32 = Function('b1', 's26', 'b24', 'x3', 's25', "var b30 = b1; var b2 = !(b1);var x31; if (b2) { var opts9 = ['yl7q3', 'O', 'k', 'YD', 'r', 'sW9gE', 'lnPBO', 'Z'];var b8 = false; for (var idx10 = 0; idx10 < opts9.length; idx10++) { if (opts9[idx10] == (!((eval(\"x3\")) ? true : false)).toString()) { b8 = true; break; } }var b28; if (b8 !== eval(\"fn23(b24, s25, s26)\")) { b28 = true; } else { b28 = false; } x31 = b28; } else {  x31 = b30; } return x31;");
fn32(input_B1, input_S3, input_B3, input_I2, input_S2);
