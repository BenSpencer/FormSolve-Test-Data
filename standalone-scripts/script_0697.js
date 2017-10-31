// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then not(bool(len((str(input_int('I3')) + (str(bool((if not((input_bool('B1') === input_bool('B1'))) then str(input_int('I1')) else str(bool(input_string('S2')))))) + input_string('S2')))))) else bool(input_string('S3')))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);

function fn31(b1, b5, s13, x2, x10, s27) {
    var e29 = "(s27) ? true : false";
    var x30;
    if (b1) {
        var s4 = '' + (eval("x2"));
        var s19 = s13;
        var b6 = b5;
        var b7 = false;
        if (b5 === b6) {
            b7 = true;
        }
        var b9;
        if (b7) {
            b9 = false;
        } else {
            b9 = true;
        }
        var s11 = String(x10);
        var x16;
        if (b9) {
            x16 = eval("s11");
        } else {
            var s15 = String((s13) ? true : false);
            x16 = s15;
        }
        var s18 = (Boolean(x16)).toString();
        var x20 = s18 + s19;
        var x22 = s4;
        var x23 = x20;
        var b25 = ((x22 + x23).length) ? true : false;
        var b26 = !(b25);
        x30 = b26;
    } else {
        x30 = eval(e29);
    }
    return x30;
}
fn31(input_B3, input_B1, input_S2, input_I3, input_I1, input_S3);
