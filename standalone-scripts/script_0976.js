// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((not(input_bool('B1')) != (str(int(str(input_bool('B1')))) == input_string('S1')))) then "MQ" else str(bool(int(not(bool(str((bool(input_int('I3')) || (if input_bool('B3') then input_bool('B3') else (str(int(regex-test(input_string('S3'), /^(z\DFx\Sa\t[-_ ]yiI|Ku)\w+$/))) >= input_string('S2')))))))))))

var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);

var fn40 = function (x15, b17, s25, s8, b1, s20) {
    var b14 = !(eval("var b3 = b1; var b2 = !(b1);var b9; if (eval(\"(Number(String(b3))).toString()\") == s8) { b9 = true; } else { b9 = false; }var b11; if (b2) { b11 = !b9; } else { b11 = b9; }b11"));
    var x39;
    if (b14) {
        x39 = "MQ";
    } else {
        var b16 = !! (x15);
        var b19 = b17;
        var x29;
        if (eval("b17")) {
            x29 = b19;
        } else {
            var e22 = "(s20).match(/^(z\\DFx\\Sa\\t[-_ ]yiI|Ku)\\w+$/) !== null";
            var x23 = Number(eval(e22));
            var b27 = false;
            if (String(x23) >= eval("s25")) {
                b27 = true;
            }
            x29 = b27;
        }
        var b30;
        if (x29) {
            b30 = true;
        } else {
            b30 = b16;
        }
        var s32 = (b30).toString();
        var b33 = (s32) ? true : false;
        var x35 = (!(b33)) ? 1 : 0;
        x39 = eval("'' + (!!(x35))");
    }
    return x39;
}
fn40(input_I3, input_B3, input_S2, input_S1, input_B1, input_S3);
