// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not(input_bool('B3')) || (input_int('I1') >= int((input_string('S1') != "UAf2")))) then str((str((if input_bool('B1') then (bool(str(not(input_bool('B2')))) === ((str(not(bool(str(input_int('I2'))))) > str(bool(input_string('S1')))) !== bool(input_int('I1')))) else input_bool('B1'))) == str(input_bool('B3')))) else str(not(input_bool('B1'))))

var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");

function fn58(b1, x3, b44, s4, x45, b46) {
    var b54 = b46;
    var x47 = x3;
    var b49 = b1;
    var s43 = s4;
    var b2;
    if (b1) {
        b2 = false;
    } else {
        b2 = true;
    }
    var b5 = false;
    if (s4 != "UAf2") {
        b5 = true;
    }
    var b8 = x3 >= (b5) ? 1 : 0;
    var b10;
    if (b2 || b8) {
        b10 = true;
    } else {
        b10 = false;
    }
    var s48 = String((function (s22, b13, x17, b12, x28) {
        var b37 = b12;
        var e34 = "var e27 = \"var s18 = (x17).toString();var b19 = Boolean(s18);var b20; if (b19) { b20 = false; } else { b20 = true; }var s24 = ((s22) ? true : false).toString();var b25 = false; if (String(b20) > s24) { b25 = true; }b25\";var b32 = false; if (eval(e27) !== !!(eval(\"var e29 = \\\"x28\\\";eval(e29)\"))) { b32 = true; }b32";
        var b35 = !! ((!(b13)).toString()) === eval(e34);
        return (b12 ? b35 : eval("eval(\"eval(\\\"b37\\\")\")"));
    })(s43, b44, x45, b46, x47));
    var s50 = String(b49);
    var b51 = s48;
    var b52 = s50;
    var b55 = !(b54);
    var s56 = '' + (b55);
    return (b10 ? '' + (b51 == b52) : s56);
}
fn58(input_B3, input_I1, input_B2, input_S1, input_I2, input_B1);
