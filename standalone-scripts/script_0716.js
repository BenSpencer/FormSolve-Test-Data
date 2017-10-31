// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(len(str(int(str(input_int('I3')))))) === input_string('S3')) then input_bool('B2') else bool(str(bool(str(int(input_bool('B3')))))))

var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn19 = function (b11, x1, s7, b12) {
    var s2 = String(x1);
    var x3 = Number(s2);
    var l5 = (String(x3)).length;
    var s6 = String(l5);
    var e8 = "s7";
    var b9 = s6;
    var b10 = eval(e8);
    var s14 = String((b12) ? 1 : 0);
    var s16 = '' + ( !! (s14));
    var x18;
    if (b9 === b10) {
        x18 = b11;
    } else {
        x18 = Boolean(s16);
    }
    return x18;
}
fn19(input_B2, input_I3, input_S3, input_B3);
