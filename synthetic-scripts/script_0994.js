// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((int(input_bool('B2')) / (if bool(input_int('I1')) then int(str(input_bool('B1'))) else input_int('I3'))) in [0, 1, 53, 179, 10, 72, -2, 0, 0]) then bool(str((input_bool('B2') === (len(str(input_int('I1'))) in [179, 0, 3, 1])))) else not((input_int('I1') < int(input_string('S3')))))

var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

function fn37(x10, b6, s30, b1, x18) {
    var x29 = x18;
    var x3 = x18;
    var b17 = b1;
    var x2 = (b1) ? 1 : 0;
    var e4 = "x3";
    var x9 = parseInt(eval("(b6).toString()"), 10);
    var opts15 = [0, 1, 53, 179, 10, 72, -2, 0, 0];
    var b14 = false;
    for (var idx16 = 0; idx16 < opts15.length; idx16++) {
        if (opts15[idx16] == (x2 / ((eval(e4)) ? true : false ? x9 : x10))) {
            b14 = true;
            break;
        }
    }
    var l20 = ((x18).toString()).length;
    var e21 = "l20";
    var opts23 = [179, 0, 3, 1];
    var b22 = false;
    for (var idx24 = 0; idx24 < opts23.length; idx24++) {
        if (opts23[idx24] == eval(e21)) {
            b22 = true;
        }
    }
    var b25;
    if (b17 === b22) {
        b25 = true;
    } else {
        b25 = false;
    }
    var s27 = String(b25);
    var b28 = Boolean(s27);
    var e32 = "Number(s30)";
    var b33 = x29;
    var b34 = eval(e32);
    return (b14 ? b28 : !(b33 < b34));
}
fn37(input_I3, input_B1, input_S3, input_B2, input_I1);
