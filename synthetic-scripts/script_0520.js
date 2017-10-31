// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(len(str(len(str(input_bool('B1')))))) then (if not(bool((int((input_string('S2') == str((input_bool('B2') === not((int((str(input_int('I3')) in ['WmSK1', 'YDcSi', 'm0', '4o1i', 'EVhN', '1Baco', '4V', '', '', 'kLxp'])) < (input_int('I2') - input_int('I2')))))))) % input_int('I2')))) then not(input_bool('B3')) else input_bool('B1')) else bool(input_string('S3')))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn43 = function (s7, x15, b1, b36, s40, b8, x9) {
    var b38 = b1;
    var s2 = (b1).toString();
    var e34 = "var x29 = x15; var s10 = '' + (x9);var opts12 = ['WmSK1', 'YDcSi', 'm0', '4o1i', 'EVhN', '1Baco', '4V', '', '', 'kLxp'];var x16 = x15; var b19 = (opts12.indexOf(s10) > -1) ? 1 : 0; var b20 = (x15 - x16);var b21; if (b19 < b20) { b21 = false; } else { b21 = true; }var e22 = \"b21\";var s25 = String((b8 === eval(e22)));var b26 = false; if (s7 == s25) { b26 = true; }x31 = (b26) | 0; x32 = eval(\"x29\");(x31 % x32) ? true : false";
    var b37;
    if (b36) {
        b37 = false;
    } else {
        b37 = true;
    }
    var b41 = !! (s40);
    var x42;
    if (((String((s2).length)).length) ? true : false) {
        x42 = (!(eval(e34)) ? b37 : b38);
    } else {
        x42 = b41;
    }
    return x42;
}
fn43(input_S2, input_I2, input_B1, input_B3, input_S3, input_B2, input_I3);
