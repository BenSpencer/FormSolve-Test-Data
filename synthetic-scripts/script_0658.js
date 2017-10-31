// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then (if not(((input_string('S1') in ['hj5', 'M', '8']) == bool(int((int(str((((int(input_bool('B1')) / int(str(input_int('I2')))) * input_int('I3')) / (int(input_bool('B1')) % len(input_string('S3')))))) in [8, 0, 0]))))) then input_bool('B2') else (if true then bool(input_string('S1')) else bool(input_int('I1')))) else not(input_bool('B1')))

var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

function fn50(x41, s20, b1, x14, s2, b37, x8) {
    var b18 = b1;
    var b47 = b1;
    var x49;
    if (b1) {
        var s39 = s2;
        var opts4 = ['hj5', 'M', '8'];
        var b6 = b18;
        var e17 = "var x7 = Number(b6);var x11 = Number('' + (eval(\"x8\")));((x7 / x11) * x14)";
        x22 = (b18) | 0 % (s20).length;
        x24 = eval(e17) / x22;
        var e26 = "x24";
        var x28 = Number(String(eval(e26)));
        var opts30 = [8, 0, 0];
        var b29 = false;
        for (var idx31 = 0; idx31 < opts30.length; idx31++) {
            if (opts30[idx31] == x28) {
                b29 = true;
                break;
            }
        }
        var x32 = +(b29);
        var b33 = !! (x32);
        var b34;
        if (opts4.indexOf(s2) > -1) {
            b34 = b33;
        } else {
            b34 = !b33;
        }
        var b36;
        if (b34) {
            b36 = false;
        } else {
            b36 = true;
        }
        var e38 = "b37";
        var b42 = Boolean(x41);
        var x45;
        if (true) {
            x45 = Boolean(s39);
        } else {
            x45 = eval("eval(\"b42\")");
        }
        x49 = (b36 ? eval(e38) : x45);
    } else {
        x49 = !(b47);
    }
    return x49;
}
fn50(input_I1, input_S3, input_B1, input_I3, input_S1, input_B2, input_I2);
