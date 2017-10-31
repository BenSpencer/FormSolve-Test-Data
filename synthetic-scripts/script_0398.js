// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((len(input_string('S1')) <= input_int('I2'))) then (if bool(int(str(input_bool('B3')))) then (if not(bool(input_int('I3'))) then not(bool(input_string('S3'))) else bool(len(input_string('S1')))) else true) else not((if (if input_bool('B1') then bool(str(int(input_bool('B2')))) else regex-test(input_string('S2'), /^(f\tfj\W*|E)g[-_ ]w$/)) then bool(len(str((input_int('I3') == int(input_string('S2')))))) else not(input_bool('B1')))))

var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);

(function (b24, x3, x11, s1, s30, s14, b25, b7) {
    var x33 = x11;
    var s18 = s1;
    var b4 = false;
    if ((s1).length <= x3) {
        b4 = true;
    }
    var b6 = !(b4);
    var s8 = String(b7);
    var x9 = Number(s8);
    var b10 = Boolean(x9);
    var x23;
    if (b10) {
        x23 = eval("var b12 = Boolean(x11);var b13 = !(b12);var b20 = Boolean((s18).length);var x21; if (b13) { var b15 = Boolean(s14);var e16 = \"b15\";var b17 = !(eval(e16)); x21 = b17; } else { x21 = b20; }x21");
    } else {
        x23 = true;
    }
    var e44 = "var s34 = s30; var b41 = b24; var x27 = +(eval(\"b25\"));var s28 = (x27).toString();var b29 = (s28) ? true : false;var re31 = /^(f\\tfj\\W*|E)g[-_ ]w$/;var b36 = x33; var b37 = parseInt(s34, 10);var s38 = String(b36 == b37);var x43; if ((b24 ? b29 : re31.test(s30))) { x43 = Boolean((s38).length); } else { x43 = !(b41); }x43";
    var b45;
    if (eval(e44)) {
        b45 = false;
    } else {
        b45 = true;
    }
    return (b6 ? x23 : b45);
})(input_B1, input_I2, input_I3, input_S1, input_S2, input_S3, input_B2, input_B3);
