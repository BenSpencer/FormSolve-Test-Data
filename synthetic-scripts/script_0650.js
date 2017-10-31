// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B1')) then int(input_string('S2')) else (if (if (if true then (if bool((int((input_int('I2') != int(input_bool('B2')))) * int(input_bool('B1')))) then input_bool('B3') else input_bool('B2')) else not(not(input_bool('B3')))) then bool(int(input_string('S1'))) else not(input_bool('B1'))) then 1 else (if input_bool('B2') then input_int('I3') else int(bool(len(str(not(input_bool('B3')))))))))

var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn27 = Function('x5', 'b19', 'b18', 'b13', "var b21 = b18; var x26; if (true) { var b6 = b19; var x8 = (eval(\"b6\")) | 0;var e11 = \"(x5 != x8)\";var x12 = ~~(eval(e11));var x14 = ~~(b13);x15 = x12; x16 = x14;var b17 = !!(x15 * x16); x26 = (b17 ? b18 : b19); } else { var b22; if (b21) { b22 = false; } else { b22 = true; }var b25 = !(eval(\"eval(\\\"b22\\\")\")); x26 = b25; } return x26;");

function fn50(b1, b30, s32, x39, x28, s3, b29) {
    var b31 = b1;
    var b2;
    if (b1) {
        b2 = false;
    } else {
        b2 = true;
    }
    var x4 = parseInt(s3, 10);
    var x49;
    if (b2) {
        x49 = x4;
    } else {
        var b40 = b30;
        var b38 = b29;
        var b35 = b31;
        var x33 = Number(s32);
        var x37;
        if (fn27(x28, b29, b30, b31)) {
            x37 = (x33) ? true : false;
        } else {
            x37 = !(b35);
        }
        var x48;
        if (x37) {
            x48 = 1;
        } else {
            var x47;
            if (b38) {
                x47 = x39;
            } else {
                var e41 = "b40";
                var b42 = !(eval(e41));
                var s43 = (b42).toString();
                var b45 = Boolean((s43).length);
                x47 = (b45) ? 1 : 0;
            }
            x48 = x47;
        }
        x49 = x48;
    }
    return x49;
}
fn50(input_B1, input_B3, input_S1, input_I3, input_I2, input_S2, input_B2);
