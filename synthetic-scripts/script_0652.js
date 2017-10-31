// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (bool(int(str((input_int('I1') + input_int('I1'))))) != (len(str(bool(str(bool(input_string('S1')))))) == int((str(input_int('I3')) + str(input_bool('B2')))))) then not(bool(input_string('S1'))) else bool(str(bool(input_string('S3')))))

var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn35 = function (x15, s27, s30, x1, b17) {
    var s9 = s27;
    var x2 = x1;
    var x7 = Number('' + (eval("(x1 + x2)")));
    var b8 = Boolean(x7);
    var b12 = Boolean(( !! (s9)).toString());
    var s13 = (b12).toString();
    var x21 = Number(('' + (x15) + (b17).toString()));
    var b23 = (s13).length == eval("x21");
    var b25;
    if (b8 != b23) {
        b25 = true;
    } else {
        b25 = false;
    }
    var b29 = !( !! (s27));
    var s32 = String(Boolean(s30));
    var b33 = !! (s32);
    return (b25 ? b29 : b33);
}
fn35(input_I3, input_S1, input_S3, input_I1, input_B2);
