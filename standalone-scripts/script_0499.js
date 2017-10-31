// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool((int(bool(input_string('S1'))) * int(input_bool('B1')))) then 0 else int(str((if ((len(input_string('S1')) !== int(input_bool('B1'))) || not(bool(str(input_bool('B1'))))) then input_int('I2') else input_int('I3')))))

var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);

function fn30(x24, b12, s1, x25) {
    var b4 = b12;
    var s10 = s1;
    var x3 = ((s1) ? true : false) | 0;
    var e6 = "var x5 = (b4) | 0;x5";
    x7 = x3;
    x8 = eval(e6);
    var b17 = b12;
    var b21 = !(eval("var s18 = (b17).toString();var b19 = !!(s18);b19"));
    var b22;
    if (b21) {
        b22 = true;
    } else {
        b22 = eval("var l11 = (s10).length;var b14; if (l11 !== Number(b12)) { b14 = true; } else { b14 = false; }b14");
    }
    var s27 = ((b22 ? x24 : x25)).toString();
    var x28 = Number(s27);
    var x29;
    if ( !! (x7 * x8)) {
        x29 = 0;
    } else {
        x29 = x28;
    }
    return x29;
}
fn30(input_I2, input_B1, input_S1, input_I3);
