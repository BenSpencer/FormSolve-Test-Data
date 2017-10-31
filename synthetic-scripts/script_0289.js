// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (bool(input_int('I1')) != (input_bool('B2') != (len(str((str(input_int('I3')) === str(((input_int('I3') - len(input_string('S2'))) / int(bool(len(str(int(str(not(not(bool(str(int(input_bool('B2'))))))))))))))))) < len(input_string('S1'))))) then input_bool('B1') else input_bool('B3'))

var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);

function fn47(b44, s7, x4, b45, b12, x1, s36) {
    var b2 = Boolean(x1);
    var b3 = b12;
    var x6 = x4;
    var s5 = '' + (x4);
    x9 = x6 - (s7).length;
    var e18 = "var e16 = \"var s14 = '' + (~~(b12));var b15 = !!(s14);b15\";var b17; if (eval(e16)) { b17 = false; } else { b17 = true; }b17";
    var b22 = !(eval("eval(\"eval(\\\"eval(e18)\\\")\")"));
    var x24 = Number((b22).toString());
    var x28 = (((String(x24)).length) ? true : false) | 0;
    x29 = eval("x9");
    x30 = x28;
    var b32 = s5 === '' + (x29 / x30);
    var s34 = String(b32);
    var l37 = (s36).length;
    var b38 = (s34).length < l37;
    var b40;
    if (b3 != b38) {
        b40 = true;
    } else {
        b40 = false;
    }
    var x46;
    if ((b2 != b40)) {
        x46 = b44;
    } else {
        x46 = b45;
    }
    return x46;
}
fn47(input_B1, input_S2, input_I3, input_B3, input_B2, input_I1, input_S1);
