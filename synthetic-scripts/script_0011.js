// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(len(regex-replace(input_string('S2'), /(x|u[A-Z]?)/, ""))) then (((input_int('I2') * input_int('I1')) >= (if bool(input_int('I3')) then int(input_bool('B2')) else int(input_bool('B2')))) != not((int(bool(input_int('I1'))) != int((input_bool('B3') || bool(input_int('I3'))))))) else (if input_bool('B3') then (input_int('I3') <= int(input_bool('B3'))) else bool(input_string('S1'))))

var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);

function fn50(s1, x6, s45, b13, x20, b23, x11) {
    var b36 = b23;
    var x37 = x11;
    var re3 = new RegExp("(x|u[A-Z]?)");
    var s2 = (s1).replace(re3, "");
    var l4 = (s2).length;
    var x7 = x20;
    var x24 = x11;
    var e8 = "x7";
    var b15 = b13;
    var b12 = (x11) ? true : false;
    var x14 = (b13) ? 1 : 0;
    var x16 = +(b15);
    var x17;
    if (b12) {
        x17 = x14;
    } else {
        x17 = x16;
    }
    var b18 = (x6 * eval(e8)) >= x17;
    var b21 = Boolean(x20);
    var b25 = !! (x24);
    var b26;
    if (b25) {
        b26 = true;
    } else {
        b26 = b23;
    }
    var e30 = "eval(\"~~(b26)\")";
    var b31 = (b21) | 0;
    var b32 = eval(e30);
    var b34 = b18;
    var b35 = !(b31 != b32);
    var b39 = b36;
    var x48;
    if (b36) {
        var e44 = "var e38 = \"x37\";var b42 = eval(e38); var b43 = eval(\"Number(b39)\");b42 <= b43";
        x48 = eval(e44);
    } else {
        x48 = eval("Boolean(s45)");
    }
    return ( !! (l4) ? b34 != b35 : x48);
}
fn50(input_S2, input_I2, input_S1, input_B2, input_I1, input_B3, input_I3);
