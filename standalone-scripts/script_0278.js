// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(int(str(bool(str(((if not(not(bool(input_string('S2')))) then 95 else int(input_bool('B1'))) <= input_int('I3')))))))) then input_string('S1') else str(bool(int(str(input_bool('B3'))))))

var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");

(function (s23, x13, b8, s1, b24) {
    var e21 = "var e12 = \"eval(\\\"var b5 = !(eval(\\\\\\\"eval(\\\\\\\\\\\\\\\"Boolean(s1)\\\\\\\\\\\\\\\")\\\\\\\"));var e6 = \\\\\\\"b5\\\\\\\";var b7; if (eval(e6)) { b7 = false; } else { b7 = true; }var x10; if (b7) {  x10 = 95; } else { x10 = ~~(b8); }x10\\\")\";var b14 = eval(e12); var b15 = x13;var s20 = String(Number((!!((b14 <= b15).toString())).toString()));s20";
    var e26 = "var s25 = (b24).toString();s25";
    var b28 = Boolean(Number(eval(e26)));
    var s29 = String(b28);
    var x30;
    if ( !! (eval(e21))) {
        x30 = s23;
    } else {
        x30 = s29;
    }
    return x30;
})(input_S1, input_I3, input_B1, input_S2, input_B3);
