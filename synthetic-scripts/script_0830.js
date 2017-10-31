// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(int(input_bool('B3'))) !== (if not(input_bool('B1')) then "j" else str((bool(str((if false then (if not(input_bool('B3')) then input_bool('B3') else input_bool('B1')) else (if (int(input_string('S2')) <= 0) then (input_string('S3') in ['obKj', 'fDjF2', '', '', 'YeQ', 'vK', 'EBf2z']) else bool(input_string('S3')))))) == input_bool('B3'))))) then input_int('I2') else int(bool(len(str(input_bool('B3'))))))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn12 = Function('b7', 'b10', "var b9 = b7; var x11; if (!(b7)) { x11 = b9; } else { x11 = b10; } return x11;");
var fn44 = function (x36, s19, b1, s15, b14) {
    var b38 = b1;
    var b13 = b1;
    var b4 = b14;
    var e6 = "!(b4)";
    var x33;
    if (eval(e6)) {
        x33 = "j";
    } else {
        var b29 = b13;
        var s23 = s19;
        var b17 = Number(s15);
        var b18 = 0;
        var x25;
        if (b17 <= b18) {
            var opts21 = ['obKj', 'fDjF2', '', '', 'YeQ', 'vK', 'EBf2z'];
            var b20 = false;
            for (var idx22 = 0; idx22 < opts21.length; idx22++) {
                if (opts21[idx22] == s19) {
                    b20 = true;
                    break;
                }
            }
            x25 = b20;
        } else {
            var b24 = Boolean(s23);
            x25 = b24;
        }
        var s27 = '' + ((false ? fn12(b13, b14) : x25));
        var b28 = !! (s27);
        x33 = '' + ((b28 == b29));
    }
    var b34;
    if (((b1) ? 1 : 0).toString() !== x33) {
        b34 = true;
    } else {
        b34 = false;
    }
    var x43;
    if (b34) {
        x43 = eval("x36");
    } else {
        x43 = ~~ ( !! ((String(b38)).length));
    }
    return x43;
}
fn44(input_I2, input_S3, input_B3, input_S2, input_B1);
