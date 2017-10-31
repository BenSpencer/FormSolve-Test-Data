// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str((if (input_string('S2') in ['', 'y', 'Fs8', 'QCy', 'W', 'zU', 'A', '', 'p4f27']) then (int(bool(str(input_int('I3')))) >= int((input_bool('B1') == bool(int(input_bool('B1')))))) else (if not(input_bool('B1')) then (input_string('S1') != "EMi") else (input_int('I2') in [-46, 0, -46, 1, 1, 0, 76, 127, 0]))))) then str(int(bool(int(bool(int(input_string('S1'))))))) else str(input_bool('B3')))

var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);

function fn43(b40, x6, x25, b11, s1, s22) {
    var s33 = s22;
    var b20 = b11;
    var e2 = "s1";
    var opts4 = ['', 'y', 'Fs8', 'QCy', 'W', 'zU', 'A', '', 'p4f27'];
    var b3 = opts4.indexOf(eval(e2)) > -1;
    var b21;
    if (b20) {
        b21 = false;
    } else {
        b21 = true;
    }
    var x29;
    if (b21) {
        var b23;
        if (s22 != "EMi") {
            b23 = true;
        } else {
            b23 = false;
        }
        x29 = b23;
    } else {
        var opts27 = [-46, 0, -46, 1, 1, 0, 76, 127, 0];
        var b26 = opts27.indexOf(x25) > -1;
        x29 = b26;
    }
    var x30;
    if (b3) {
        var s7 = String(x6);
        var b8 = Boolean(s7);
        var x10 = Number(eval("b8"));
        var b12 = b11;
        var b15;
        if (b11 == Boolean((b12) | 0)) {
            b15 = true;
        } else {
            b15 = false;
        }
        var x17 = ~~ (b15);
        var b18 = x10 >= x17;
        x30 = b18;
    } else {
        x30 = x29;
    }
    var b32 = (String(x30)) ? true : false;
    var b35 = !! (Number(s33));
    var b37 = Boolean((b35) ? 1 : 0);
    var x38 = (b37) | 0;
    var x42;
    if (b32) {
        x42 = '' + (x38);
    } else {
        x42 = String(b40);
    }
    return x42;
}
fn43(input_B3, input_I3, input_I2, input_B1, input_S2, input_S1);
