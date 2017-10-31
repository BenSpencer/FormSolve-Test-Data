// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I2')) then int(str(input_bool('B2'))) else len(str(((input_bool('B2') == not(bool(str(int((str(input_int('I2')) < str(len(input_string('S1'))))))))) && not(bool(input_int('I3')))))))

var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn37 = function (x1, b4, x27, s10) {
    var x8 = x1;
    var b7 = b4;
    var b3 = (eval("x1")) ? true : false;
    var e35 = "eval(\"var e26 = \\\"var b24 = b7; var b25 = eval(\\\\\\\"var e22 = \\\\\\\\\\\\\\\"!(eval(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"eval(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"var e13 = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"'' + ((s10).length)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";var b14 = false; if (String(x8) < eval(e13)) { b14 = true; }var s17 = String(+(b14));(s17) ? true : false\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"))\\\\\\\\\\\\\\\";eval(e22)\\\\\\\");b24 == b25\\\";var b28 = Boolean(x27);var b29 = !(b28);var b30 = eval(e26); var b31 = b29;var s32 = (b30 && b31).toString();(s32).length\")";
    return (b3 ? parseInt(String(b4), 10) : eval(e35));
}
fn37(input_I2, input_B2, input_I3, input_S1);
