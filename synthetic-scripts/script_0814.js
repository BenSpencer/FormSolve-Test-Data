// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then input_int('I2') else (if (bool(len(input_string('S2'))) && bool(input_string('S3'))) then int((str(not((not(input_bool('B2')) != bool(input_int('I3'))))) !== input_string('S3'))) else int(input_string('S1'))))

var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);

function fn31(x3, s23, s27, x15, b1, s6, b13) {
    var e2 = "b1";
    var x30;
    if (eval(e2)) {
        var e4 = "x3";
        x30 = eval("eval(e4)");
    } else {
        var s9 = s23;
        var b8 = ((s6).length) ? true : false;
        var b11;
        if (b8 && !! (s9)) {
            b11 = true;
        } else {
            b11 = false;
        }
        var x29;
        if (b11) {
            var e21 = "var b20; if (eval(\"var b14 = !(b13);var b16 = !!(x15);var b17 = b14 != b16;b17\")) { b20 = false; } else { b20 = true; }b20";
            var s22 = String(eval(e21));
            var x26 = Number((s22 !== s23));
            x29 = x26;
        } else {
            x29 = parseInt(s27, 10);
        }
        x30 = x29;
    }
    return x30;
}
fn31(input_I2, input_S3, input_S1, input_I3, input_B1, input_S2, input_B2);
