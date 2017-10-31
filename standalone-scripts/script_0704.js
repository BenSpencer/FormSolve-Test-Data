// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not(not(input_bool('B2'))) && input_bool('B1')) then not((input_int('I3') >= 90)) else (if bool(int((str(bool(input_int('I3'))) in ['mMP', '4C', 'K', 'ns6E']))) then input_bool('B3') else bool(input_int('I1'))))

var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);

function fn28(b1, x14, x24, b23, b4) {
    var x9 = x14;
    var b2;
    if (b1) {
        b2 = false;
    } else {
        b2 = true;
    }
    var b3 = !(b2);
    var b6;
    if (b3) {
        b6 = eval("b4");
    } else {
        b6 = false;
    }
    var b10 = x9 >= 90;
    var e12 = "b10";
    var b13;
    if (eval(e12)) {
        b13 = false;
    } else {
        b13 = true;
    }
    var s17 = (eval("Boolean(x14)")).toString();
    var opts19 = ['mMP', '4C', 'K', 'ns6E'];
    var b18 = false;
    for (var idx20 = 0; idx20 < opts19.length; idx20++) {
        if (opts19[idx20] == s17) {
            b18 = true;
        }
    }
    var x21 = (b18) ? 1 : 0;
    var b22 = Boolean(x21);
    var b25 = Boolean(x24);
    var x27;
    if (eval("b6")) {
        x27 = b13;
    } else {
        x27 = (b22 ? b23 : b25);
    }
    return x27;
}
fn28(input_B2, input_I3, input_I1, input_B3, input_B1);
