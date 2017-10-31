// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(int((if (if input_bool('B2') then bool(str(len(str(len((if input_bool('B2') then input_string('S1') else input_string('S1'))))))) else input_bool('B2')) then input_bool('B2') else not((input_int('I2') === input_int('I3'))))))) then ((if (if bool((if bool(input_int('I3')) then input_int('I3') else input_int('I3'))) then bool((int(not(not(not(bool(str(input_int('I2'))))))) / 5)) else input_bool('B1')) then int(input_string('S2')) else 56) - input_int('I3')) else input_int('I1'))

var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");

(function (x17, s45, x16, s5, x52, b42, b1) {
    var x31 = x16;
    var x25 = x17;
    var b15 = b1;
    var b13 = b1;
    var b3 = b1;
    var e2 = "b1";
    var x14;
    if (eval(e2)) {
        var s6 = s5;
        var l8 = ((eval("b3") ? s5 : s6)).length;
        var s11 = String(((l8).toString()).length);
        x14 = Boolean(s11);
    } else {
        x14 = b13;
    }
    var x21;
    if (x14) {
        x21 = b15;
    } else {
        var b18;
        if (x16 === x17) {
            b18 = true;
        } else {
            b18 = false;
        }
        var b20 = !(b18);
        x21 = b20;
    }
    var x22 = (x21) | 0;
    var b24 = Boolean((x22).toString());
    var x49 = x25;
    var x27 = x25;
    var x28 = x25;
    var b26 = Boolean(x25);
    var x29;
    if (b26) {
        x29 = x27;
    } else {
        x29 = x28;
    }
    var b30 = !! (x29);
    var e32 = "x31";
    var b34 = Boolean((eval(e32)).toString());
    var b37;
    if (!(!(b34))) {
        b37 = false;
    } else {
        b37 = true;
    }
    var x38 = Number(b37);
    x39 = x38;
    x40 = 5;
    var b41 = Boolean(x39 / x40);
    var x44;
    if (b30) {
        x44 = b41;
    } else {
        x44 = eval("b42");
    }
    var x48;
    if (x44) {
        var x47 = parseInt(eval("s45"), 10);
        x48 = x47;
    } else {
        x48 = 56;
    }
    return (b24 ? (x48 - x49) : x52);
})(input_I3, input_S2, input_I2, input_S1, input_I1, input_B1, input_B2);
