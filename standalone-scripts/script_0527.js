// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(not(input_bool('B3')))) then not(not((if (len(str(not(input_bool('B3')))) == input_int('I3')) then not(not(((int(input_bool('B2')) in [1, 50, 31]) === bool(str(len(input_string('S3'))))))) else not((1 !== len(str(input_int('I3')))))))) else ((input_int('I3') !== input_int('I1')) && (len(str(input_int('I3'))) in [21, 9, 0])))

var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");

function fn55(b15, x41, s20, b1, x11) {
    var b6 = b1;
    var x40 = x11;
    var e2 = "b1";
    var x31 = x11;
    var x37;
    if (eval("var b7; if (b6) { b7 = false; } else { b7 = true; }var s8 = String(b7);var e9 = \"s8\";var b12 = false; if ((eval(e9)).length == x11) { b12 = true; }b12")) {
        var e28 = "eval(\"eval(\\\"var x16 = (b15) ? 1 : 0;var opts18 = [1, 50, 31];var b24; if (opts18.indexOf(x16) > -1 === Boolean('' + ((s20).length))) { b24 = true; } else { b24 = false; }b24\\\")\")";
        var b29 = !(eval(e28));
        var b30;
        if (b29) {
            b30 = false;
        } else {
            b30 = true;
        }
        x37 = b30;
    } else {
        var b34 = false;
        if (1 !== ('' + (x31)).length) {
            b34 = true;
        }
        var b36 = !(b34);
        x37 = b36;
    }
    var b39 = !(!(x37));
    var x45 = x40;
    var b51;
    if (eval("(x40 !== x41)")) {
        var opts49 = [21, 9, 0];
        b51 = opts49.indexOf(('' + (x45)).length) > -1;
    } else {
        b51 = false;
    }
    return ( !! (~~(!(eval(e2)))) ? b39 : eval("b51"));
}
fn55(input_B2, input_I1, input_S3, input_B3, input_I3);
