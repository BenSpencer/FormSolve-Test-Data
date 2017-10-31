// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then str(input_bool('B2')) else str((input_int('I3') !== int((if (if (input_string('S1') < str(input_int('I3'))) then bool(len(str(int(input_string('S2'))))) else false) then not(input_bool('B2')) else not(not(not(input_bool('B1')))))))))

var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);

function fn35(x7, s8, b24, b1, s13) {
    var b21 = b1;
    var b5 = b1;
    var e4 = "var e2 = \"b1\";eval(\"eval(e2)\")";
    var x34;
    if (eval(e4)) {
        x34 = '' + (b5);
    } else {
        var x9 = x7;
        var s10 = (x9).toString();
        var b11 = s8;
        var b12 = s10;
        var s16 = String(eval("var x14 = parseInt(s13, 10);x14"));
        var e18 = "(s16).length";
        var b19 = Boolean(eval(e18));
        var b23 = !(eval("b21"));
        var b25;
        if (b24) {
            b25 = false;
        } else {
            b25 = true;
        }
        var b27;
        if (eval("b25")) {
            b27 = false;
        } else {
            b27 = true;
        }
        var x30 = (((b11 < b12 ? b19 : false) ? b23 : !(b27))) ? 1 : 0;
        var s33 = String((x7 !== x30));
        x34 = s33;
    }
    return x34;
}
fn35(input_I3, input_S1, input_B1, input_B2, input_S2);
