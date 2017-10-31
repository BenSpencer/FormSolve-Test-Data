// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then input_bool('B1') else not(not(not(((int((if not(input_bool('B1')) then (str(int((bool(input_int('I2')) != not(not(bool(input_int('I3'))))))) in ['m', 'W', 'H', '0L87', '3vwJ', '', '', 'BJyV', '9w']) else (input_int('I2') < input_int('I2')))) % int(str(regex-test(input_string('S1'), /^([A-Z]+|M)oCIbx$/)))) < input_int('I1'))))))

var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);

var fn41 = function (x20, b1, x7, x33, s27) {
    var b2 = b1;
    var b3 = b1;
    var x40;
    if (b1) {
        x40 = b2;
    } else {
        var e36 = "var x5 = x20; var x24; if (!(b3)) { var b13; if ((x5) ? true : false) { b13 = !eval(\"var b10; if (!!(eval(\\\"x7\\\"))) { b10 = false; } else { b10 = true; }var b11 = !(b10);b11\"); } else { b13 = eval(\"var b10; if (!!(eval(\\\"x7\\\"))) { b10 = false; } else { b10 = true; }var b11 = !(b10);b11\"); }var x15 = ~~(b13);var opts18 = ['m', 'W', 'H', '0L87', '3vwJ', '', '', 'BJyV', '9w']; x24 = opts18.indexOf(String(x15)) > -1; } else { var x21 = x20;  x24 = (x20 < x21); }var e25 = \"x24\";var re28 = /^([A-Z]+|M)oCIbx$/;var s29 = String(re28.test(s27));var x30 = Number(s29);x31 = +(eval(e25)) % x30;var b34; if (x31 < x33) { b34 = true; } else { b34 = false; }b34";
        var b37 = !(eval(e36));
        x40 = !(!(b37));
    }
    return x40;
}
fn41(input_I2, input_B1, input_I3, input_I1, input_S1);
