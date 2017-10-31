// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then (if (int(input_bool('B2')) === input_int('I1')) then (not(input_bool('B2')) || (not(bool(str((false != bool(int(input_string('S3'))))))) === ((input_int('I2') * input_int('I3')) in [55, 1, 2, -93, 1, 7, 99, 0, 1, 0]))) else not(not(not(input_bool('B1'))))) else not(not(input_bool('B1'))))

var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);

function fn46(b34, x22, b2, x23, x5, b1, s10) {
    var b40 = b34;
    var x45;
    if (b1) {
        var b8 = b2;
        var x4 = +(eval("b2"));
        var b6;
        if (x4 === x5) {
            b6 = true;
        } else {
            b6 = false;
        }
        var b9;
        if (b8) {
            b9 = false;
        } else {
            b9 = true;
        }
        var e14 = "eval(\"eval(\\\"parseInt(s10, 10)\\\")\")";
        var b15 = (eval(e14)) ? true : false;
        var b16 = false != b15;
        var s18 = '' + (b16);
        var b19 = (s18) ? true : false;
        var b20;
        if (b19) {
            b20 = false;
        } else {
            b20 = true;
        }
        var e21 = "b20";
        x25 = x22 * eval("x23");
        var opts28 = [55, 1, 2, -93, 1, 7, 99, 0, 1, 0];
        var b27 = false;
        for (var idx29 = 0; idx29 < opts28.length; idx29++) {
            if (opts28[idx29] == x25) {
                b27 = true;
                break;
            }
        }
        var x38;
        if (b6) {
            x38 = (b9 || (eval(e21) === b27));
        } else {
            var b35;
            if (b34) {
                b35 = false;
            } else {
                b35 = true;
            }
            var b36;
            if (b35) {
                b36 = false;
            } else {
                b36 = true;
            }
            var b37;
            if (b36) {
                b37 = false;
            } else {
                b37 = true;
            }
            x38 = b37;
        }
        var e39 = "x38";
        x45 = eval(e39);
    } else {
        x45 = eval("var e43 = \"var b42 = !(!(b40));b42\";eval(e43)");
    }
    return x45;
}
fn46(input_B1, input_I2, input_B2, input_I3, input_I1, input_B3, input_S3);
