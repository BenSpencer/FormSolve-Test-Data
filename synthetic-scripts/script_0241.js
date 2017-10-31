// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(bool(input_int('I3')))) then bool(str(input_bool('B1'))) else ((if (int(input_bool('B3')) in [1, 1, 0, 0, 1, 13, 1, 8, 0, 1]) then input_bool('B1') else bool(str((input_bool('B3') !== bool(str((not(input_bool('B1')) || bool(str(bool(str(bool(int((str(input_int('I1')) === str(not(input_bool('B3'))))))))))))))))) === not(not(bool(input_string('S2'))))))

var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);

function fn44(b10, b15, x20) {
    var b17 = b10;
    var b18 = b15;
    var opts13 = [1, 1, 0, 0, 1, 13, 1, 8, 0, 1];
    var b12 = false;
    for (var idx14 = 0; idx14 < opts13.length; idx14++) {
        if (opts13[idx14] == ~~(b10)) {
            b12 = true;
            break;
        }
    }
    var x43;
    if (b12) {
        x43 = eval("b15");
    } else {
        var b22 = b17;
        var b19;
        if (b18) {
            b19 = false;
        } else {
            b19 = true;
        }
        var b34;
        if (b19) {
            b34 = true;
        } else {
            b34 = eval("var b25 = '' + (x20) === '' + (!(b22));var s29 = '' + (Boolean((b25) ? 1 : 0));var b32 = (String(Boolean(s29))) ? true : false;b32");
        }
        var s36 = '' + (b34);
        var e40 = "(b17 !== Boolean(s36))";
        var s41 = '' + (eval(e40));
        var b42 = Boolean(s41);
        x43 = b42;
    }
    return x43;
}
function fn55(x1, b45, x47, s48, b46) {
    var b6 = b46;
    var b9 = Boolean((eval("b6")).toString());
    var x54;
    if (!(eval("var b2 = !!(x1);var b3; if (b2) { b3 = false; } else { b3 = true; }b3"))) {
        x54 = b9;
    } else {
        var b49 = (s48) ? true : false;
        var b51;
        if (!(b49)) {
            b51 = false;
        } else {
            b51 = true;
        }
        var b52 = fn44(b45, b46, x47) === b51;
        x54 = b52;
    }
    return x54;
}
fn55(input_I3, input_B3, input_I1, input_S2, input_B1);
