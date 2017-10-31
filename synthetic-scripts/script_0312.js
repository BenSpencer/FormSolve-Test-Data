// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((bool(input_int('I2')) === (bool(input_string('S3')) != bool(len(str((len(str((int(((input_string('S3') + input_string('S1')) in ['In', 'aV', 'AVs', 'iwWyK', '6rZ'])) in [1, 1, 1, 0, 154, 1, 2]))) != int(not(input_bool('B3')))))))))) then input_bool('B3') else input_bool('B1'))

var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn38 = function (s7, b36, x1, b21, s3) {
    var b35 = b21;
    var s5 = s3;
    var b4 = (s3) ? true : false;
    var e15 = "var e6 = \"s5\";var x9 = eval(e6); var x10 = eval(\"s7\");var opts12 = ['In', 'aV', 'AVs', 'iwWyK', '6rZ'];var b11 = false; for (var idx13 = 0; idx13 < opts12.length; idx13++) { if (opts12[idx13] == x9 + x10) { b11 = true; break; } }var x14 = (b11) ? 1 : 0;x14";
    var opts17 = [1, 1, 1, 0, 154, 1, 2];
    var b16 = false;
    for (var idx18 = 0; idx18 < opts17.length; idx18++) {
        if (opts17[idx18] == eval(e15)) {
            b16 = true;
            break;
        }
    }
    var s19 = (b16).toString();
    var e22 = "b21";
    var b23;
    if (eval(e22)) {
        b23 = false;
    } else {
        b23 = true;
    }
    var b29 = (((((s19).length != (b23) ? 1 : 0)).toString()).length) ? true : false;
    var b30;
    if (b4) {
        if (b29) {
            b30 = false;
        } else {
            b30 = true;
        }
    } else {
        if (b29) {
            b30 = true;
        } else {
            b30 = false;
        }
    }
    var b32 = Boolean(x1);
    var b33 = b30;
    var b34 = !(b32 === b33);
    var x37;
    if (b34) {
        x37 = b35;
    } else {
        x37 = b36;
    }
    return x37;
}
fn38(input_S1, input_B1, input_I2, input_B3, input_S3);
