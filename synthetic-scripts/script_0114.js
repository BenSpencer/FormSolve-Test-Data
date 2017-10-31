// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(input_int('I1'))) then input_bool('B3') else bool(int(str((if input_bool('B3') then bool((if (int(input_bool('B3')) !== input_int('I1')) then len(str((bool(int(input_string('S2'))) != bool(len(str(bool(int(str((str(input_bool('B2')) != str(input_bool('B1')))))))))))) else int(bool(str(input_int('I3')))))) else (input_bool('B1') === input_bool('B1')))))))

var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);

function fn52(b5, b18, s12, x1, b15, x34) {
    var x9 = x1;
    var b6 = b5;
    var e2 = "x1";
    var b3 = !! (eval(e2));
    var b4;
    if (b3) {
        b4 = false;
    } else {
        b4 = true;
    }
    var x51;
    if (b4) {
        x51 = b5;
    } else {
        var b43 = b18;
        var b7 = b6;
        var x47;
        if (b6) {
            var x8 = Number(b7);
            var x41;
            if ((x8 !== x9)) {
                var e29 = "var e26 = \"var s16 = String(b15);var s22 = ((eval(\\\"s16\\\") != String(b18))).toString();var x23 = Number(s22);var b24 = (x23) ? true : false;'' + (b24)\";Boolean((eval(e26)).length)";
                var b30 = !! (parseInt(s12, 10));
                var b31 = eval(e29);
                var s32 = (b30 != b31).toString();
                x41 = (s32).length;
            } else {
                var x40 = ~~ ( !! (String(eval("var e35 = \"x34\";eval(\"eval(e35)\")"))));
                x41 = x40;
            }
            var b42 = Boolean(x41);
            x47 = b42;
        } else {
            var b44 = b43;
            var b45 = false;
            if (b43 === b44) {
                b45 = true;
            }
            x47 = b45;
        }
        var s48 = String(x47);
        var x49 = parseInt(s48, 10);
        x51 = Boolean(x49);
    }
    return x51;
}
fn52(input_B3, input_B1, input_S2, input_I1, input_B2, input_I3);
