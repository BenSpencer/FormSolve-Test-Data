// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then bool(input_int('I3')) else bool(str((if not(bool(str(not((input_bool('B1') || (if input_bool('B1') then input_bool('B1') else (int(input_string('S2')) == int(bool(input_string('S2')))))))))) then input_bool('B3') else bool(str(not((str((not((not(input_bool('B2')) && input_bool('B3'))) == input_bool('B1'))) === input_string('S2')))))))))

var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);

function fn50(x1, b27, s11, b36, b26) {
    var s40 = s11;
    var b29 = b26;
    var b4 = b36;
    var e25 = "var b21 = !(eval(\"var b6 = b4; var b7 = b6; var e8 = \\\"b7\\\";var s9 = s11; var e12 = \\\"s11\\\";var b13 = !!(eval(e12));var x14 = (b13) | 0;var b15 = Number(s9); var b16 = x14;var b18 = eval(\\\"b4\\\") || (b6 ? eval(e8) : b15 == b16);b18\"));var s22 = (b21).toString();var b24 = !((s22) ? true : false);b24";
    var b34;
    if (eval("var b30 = false; if (!(b27) && b29) { b30 = true; }var e32 = \"b30\";eval(e32)")) {
        b34 = false;
    } else {
        b34 = true;
    }
    var e35 = "b34";
    var b37;
    if (eval(e35) == b36) {
        b37 = true;
    } else {
        b37 = false;
    }
    var b43 = !(((b37).toString() === s40));
    var x46;
    if (eval(e25)) {
        x46 = b26;
    } else {
        x46 = (String(b43)) ? true : false;
    }
    var b48 = Boolean(String(x46));
    var x49;
    if (true) {
        x49 = eval("(x1) ? true : false");
    } else {
        x49 = b48;
    }
    return x49;
}
fn50(input_I3, input_B2, input_S2, input_B1, input_B3);
