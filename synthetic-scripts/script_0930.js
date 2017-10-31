// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (bool(input_string('S1')) && (str(input_bool('B1')) in ['', 'Le9', '1Qp'])) then input_bool('B3') else (if (input_int('I3') >= int((input_bool('B3') && (input_int('I3') != input_int('I3'))))) then (input_bool('B2') || input_bool('B1')) else input_bool('B3')))

var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");

function fn33(b13, x14, s1, b27, b26) {
    var b15 = b13;
    var b5 = b27;
    var e3 = "eval(\"s1\")";
    var s7 = '' + (eval("b5"));
    var opts9 = ['', 'Le9', '1Qp'];
    var b8 = false;
    for (var idx10 = 0; idx10 < opts9.length; idx10++) {
        if (opts9[idx10] == s7) {
            b8 = true;
        }
    }
    var b11 = (eval(e3)) ? true : false && b8;
    var x32;
    if (b11) {
        x32 = b13;
    } else {
        var b30 = b15;
        var x16 = x14;
        var x17 = x16;
        var b18 = x16;
        var b19 = x17;
        var e22 = "(b15 && b18 != b19)";
        var x23 = ~~ (eval(e22));
        var x31;
        if ((x14 >= x23)) {
            var b28 = b26;
            var b29 = b27;
            x31 = b28 || b29;
        } else {
            x31 = b30;
        }
        x32 = x31;
    }
    return x32;
}
fn33(input_B3, input_I3, input_S1, input_B1, input_B2);
