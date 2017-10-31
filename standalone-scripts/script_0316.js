// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I3')) then not(input_bool('B1')) else not(not((str(len(input_string('S2'))) === str(not((if (bool(input_int('I1')) && (input_string('S1') in ['PDG', 'i2', 'QezD1', 'os', 'WRiV'])) then bool(int(bool(str(input_int('I2'))))) else input_bool('B2'))))))))

var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn33 = function (s11, x8, x17, x1, b3, b22, s5) {
    var b2 = Boolean(x1);
    var x32;
    if (b2) {
        x32 = !(b3);
    } else {
        var e29 = "var l6 = (s5).length;var e9 = \"x8\";var opts13 = ['PDG', 'i2', 'QezD1', 'os', 'WRiV'];var s18 = '' + (x17);var b24; if (((!!(eval(e9)) && opts13.indexOf(s11) > -1) ? ((!!(s18)) ? 1 : 0) ? true : false : b22)) { b24 = false; } else { b24 = true; }var s25 = String(b24);var b27 = false; if (String(l6) === eval(\"s25\")) { b27 = true; }b27";
        var b31;
        if (!(eval(e29))) {
            b31 = false;
        } else {
            b31 = true;
        }
        x32 = b31;
    }
    return x32;
}
fn33(input_S1, input_I1, input_I2, input_I3, input_B1, input_B2, input_S2);
