// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I1') !== input_int('I1')) then (str(((str(bool((if input_bool('B2') then "L" else input_string('S3')))) != input_string('S1')) || (input_int('I2') !== (if bool(int(not(input_bool('B3')))) then int(str(not(bool(len(input_string('S1')))))) else len(str((int(input_string('S2')) != input_int('I3')))))))) === input_string('S2')) else bool(input_int('I3')))

var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);

(function (b17, s12, s29, x1, x16, s8, b6, x33) {
    var x50 = x33;
    var e5 = "var x2 = x1; var b3 = false; if (x1 !== x2) { b3 = true; }b3";
    var s47 = s29;
    var s46 = String(eval("var s21 = s12; var e7 = \"b6\";var x9; if (eval(e7)) { x9 = \"L\"; } else { x9 = s8; }var b10 = (x9) ? true : false;var s11 = '' + (b10);var b14 = false; if (s11 != eval(\"s12\")) { b14 = true; }var b18; if (b17) { b18 = false; } else { b18 = true; }var b20 = ((b18) | 0) ? true : false;var l22 = (s21).length;var b23 = (l22) ? true : false;var b24 = !(b23);var e27 = \"Number((b24).toString())\";var b40; if (x16 !== (b20 ? eval(\"eval(e27)\") : (String(eval(\"var e30 = \\\"s29\\\";var e32 = \\\"Number(eval(e30))\\\";var b34 = eval(e32) != x33;b34\"))).length)) { b40 = true; } else { b40 = false; }var b43; if (b14) { b43 = true; } else { b43 = eval(\"b40\"); }b43"));
    var b48 = s46 === s47;
    var x52;
    if (eval(e5)) {
        x52 = b48;
    } else {
        var b51 = Boolean(x50);
        x52 = b51;
    }
    return x52;
})(input_B3, input_S1, input_S2, input_I1, input_I2, input_S3, input_B2, input_I3);
