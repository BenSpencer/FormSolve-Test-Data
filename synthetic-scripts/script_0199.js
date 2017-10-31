// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if bool(input_int('I2')) then (int(not(bool(input_string('S1')))) in [15, 1, 5, 1, 4, 17]) else input_bool('B3')) then int(not((input_bool('B1') === (str(not((input_string('S2') in ['mij5', 'r36', 'ua', 'rnUT']))) in ['DEp', '3j', ''])))) else int(str(int(bool(input_int('I1'))))))

var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn13 = function (b11, s3, x1) {
    var x12;
    if ( !! (x1)) {
        x12 = eval("var b4 = (s3) ? true : false;var b5; if (b4) { b5 = false; } else { b5 = true; }var x6 = (b5) ? 1 : 0;var opts8 = [15, 1, 5, 1, 4, 17];var b7 = false; for (var idx9 = 0; idx9 < opts8.length; idx9++) { if (opts8[idx9] == x6) { b7 = true; } }b7");
    } else {
        x12 = b11;
    }
    return x12;
}
var fn40 = Function('b14', 'x16', 's18', 'b17', 's15', 'x32', "var opts21 = ['mij5', 'r36', 'ua', 'rnUT'];var b20 = false; for (var idx22 = 0; idx22 < opts21.length; idx22++) { if (opts21[idx22] == eval(\"s18\")) { b20 = true; } }var b23; if (b20) { b23 = false; } else { b23 = true; }var opts26 = ['DEp', '3j', ''];var b28 = false; if (b17 === opts26.indexOf('' + (b23)) > -1) { b28 = true; }var b30 = !(b28);var x31 = (b30) | 0;var x39; if (fn13(b14, s15, x16)) { x39 = x31; } else { var e34 = \"Boolean(x32)\";var x35 = (eval(e34)) | 0;var x37 = Number('' + (x35)); x39 = eval(\"x37\"); } return x39;");
fn40(input_B3, input_I2, input_S2, input_B1, input_S1, input_I1);
