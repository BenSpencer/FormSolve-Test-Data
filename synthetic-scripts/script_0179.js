// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(input_bool('B3')) === str(int((str(int(input_string('S3'))) + (if input_bool('B3') then str((if input_bool('B2') then int(input_bool('B1')) else input_int('I3'))) else input_string('S1')))))) then (input_string('S1') in ['vNqXf', 'ni9NC', 'k']) else true)

var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn42 = function (s7, b26, s28, b1, x25, b27) {
    var s37 = s28;
    var b24 = b1;
    var e6 = "var e3 = \"var s2 = '' + (b1);s2\";eval(\"eval(\\\"eval(e3)\\\")\")";
    var s9 = '' + (Number(s7));

    function fn23(b10, x18, b15, b12, s21) {
        var e13 = "b12";
        var e14 = "eval(e13)";
        var x22;
        if (eval("b10")) {
            x22 = ((eval(e14) ? eval("~~(b15)") : x18)).toString();
        } else {
            x22 = s21;
        }
        return x22;
    }
    var x29 = s9;
    var x30 = fn23(b24, x25, b26, b27, s28);
    var x32 = parseInt(eval("x29 + x30"), 10);
    var s33 = (x32).toString();
    var b34 = eval(e6);
    var b35 = s33;
    var e36 = "b34 === b35";
    var x41;
    if (eval(e36)) {
        var opts39 = ['vNqXf', 'ni9NC', 'k'];
        var b38 = false;
        for (var idx40 = 0; idx40 < opts39.length; idx40++) {
            if (opts39[idx40] == s37) {
                b38 = true;
                break;
            }
        }
        x41 = b38;
    } else {
        x41 = true;
    }
    return x41;
}
fn42(input_S3, input_B1, input_S1, input_B3, input_I3, input_B2);
