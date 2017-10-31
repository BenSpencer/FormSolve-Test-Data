// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S3') > input_string('S2')) then ((input_int('I1') + ((if input_bool('B1') then int((str(input_int('I2')) >= str(input_int('I2')))) else input_int('I2')) * int(str(input_bool('B2'))))) == input_int('I1')) else ((input_int('I2') in [29, 86, 1, 84, 0, 0]) && input_bool('B3')))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);

function fn39(s1, b6, s2, x25, x15, b35, b17) {
    var x29 = x15;
    var b3 = s1 > s2;
    var x38;
    if (b3) {
        var x5 = x25;
        var e22 = "var x7 = x15; var x9 = x7; var s8 = '' + (x7);var b11 = s8; var b12 = (x9).toString();var e13 = \"b11 >= b12\";var x16; if (b6) { x16 = +(eval(e13)); } else { x16 = x15; }var s18 = String(b17);var x19 = parseInt(s18, 10);x20 = x16 * x19;x20";
        x23 = x5;
        x24 = eval(e22);
        x38 = (x23 + x24 == eval("x25"));
    } else {
        var e34 = "var e30 = \"x29\";var opts32 = [29, 86, 1, 84, 0, 0];opts32.indexOf(eval(e30)) > -1";
        var b36;
        if (eval(e34) && b35) {
            b36 = true;
        } else {
            b36 = false;
        }
        x38 = b36;
    }
    return x38;
}
fn39(input_S3, input_B1, input_S2, input_I1, input_I2, input_B3, input_B2);
