// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I1')) then input_bool('B3') else ((str(input_int('I1')) <= str(int(input_bool('B1')))) === bool(str(not(input_bool('B1'))))))

var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn21 = function (b3, x1, b14) {
    var x4 = x1;
    var b6 = b14;
    var x9 = +(eval("eval(\"b6\")"));
    var b11 = false;
    if ((x4).toString() <= (x9).toString()) {
        b11 = true;
    }
    var b15 = !(b14);
    var b17 = !! (String(b15));
    var b18 = false;
    if (eval("b11") === b17) {
        b18 = true;
    }
    return (Boolean(x1) ? b3 : b18);
}
fn21(input_B3, input_I1, input_B1);
