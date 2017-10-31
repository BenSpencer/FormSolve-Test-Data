// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B2') then bool((input_int('I2') + int(((str(input_bool('B1')) === input_string('S1')) != bool(int((input_string('S1') == input_string('S2')))))))) else bool(input_int('I3'))) then (bool(input_string('S1')) === input_bool('B3')) else not(not((len(input_string('S3')) == len(str(bool(int(str(bool(int(input_bool('B3'))))))))))))

var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn51 = function (b29, s27, x24, s32, s10, b3, b1, x2) {
    var b34 = b29;
    var s6 = s27;
    var s9 = s6;
    var b7;
    if (eval("'' + (b3)") === s6) {
        b7 = true;
    } else {
        b7 = false;
    }
    var b16 = Boolean(eval("var e11 = \"s10\";var b12 = s9 == eval(e11);+(b12)"));
    var b17 = b7;
    var b18 = b16;
    var x19 = +(b17 != b18);
    x21 = x2;
    x22 = eval("x19");
    var b25 = !! (x24);
    var b28 = Boolean(s27);
    var b30 = b28;
    var b31 = b29;
    var e49 = "var s37 = (Boolean((b34) | 0)).toString();var s40 = String(!!(Number(s37)));var l41 = (s40).length;var e43 = \"eval(\\\"l41\\\")\";var b45 = (s32).length; var b46 = eval(\"eval(e43)\");var b47 = !(b45 == b46);!(b47)";
    return ((b1 ? Boolean(x21 + x22) : b25) ? b30 === b31 : eval(e49));
}
fn51(input_B3, input_S1, input_I3, input_S3, input_S2, input_B1, input_B2, input_I2);
