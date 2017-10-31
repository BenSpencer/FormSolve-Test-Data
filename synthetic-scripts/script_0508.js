// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then input_int('I3') else int((int(bool(((if input_bool('B1') then input_int('I3') else len(input_string('S1'))) - (if ((if input_bool('B1') then str(input_int('I1')) else str(bool(len(input_string('S3'))))) <= str(input_int('I2'))) then len((if not(input_bool('B3')) then input_string('S1') else input_string('S1'))) else len(str((str(input_int('I1')) > str(input_int('I2'))))))))) != len(str(not(not(bool(str(input_int('I2'))))))))))

var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn8 = Function('x4', 's5', 'b3', "var x7; if (b3) { x7 = x4; } else { var l6 = (s5).length; x7 = l6; } return x7;");

function fn57(s15, x13, s10, x21, b1, x2, b11) {
    var b26 = b1;
    var x9 = x2;
    var x45 = x21;
    var b12 = b11;
    var s28 = s10;
    var x32 = x13;
    var x34 = x21;
    var s14 = String(x13);
    var l16 = (s15).length;
    var b17 = !! (l16);
    var s18 = String(b17);
    var x19;
    if (b12) {
        x19 = s14;
    } else {
        x19 = s18;
    }
    var e20 = "x19";
    var e22 = "x21";
    var s29 = s28;
    var b27;
    if (b26) {
        b27 = false;
    } else {
        b27 = true;
    }
    var x30;
    if (b27) {
        x30 = s28;
    } else {
        x30 = s29;
    }
    var l31 = (x30).length;
    var s33 = '' + (x32);
    var b36;
    if (s33 > (x34).toString()) {
        b36 = true;
    } else {
        b36 = false;
    }
    var s38 = '' + (b36);
    x41 = fn8(x9, s10, b11) - ((eval(e20) <= (eval(e22)).toString()) ? l31 : (s38).length);
    var b43 = Boolean(x41);
    var x44 = Number(b43);
    var s46 = String(x45);
    var b48;
    if ((s46) ? true : false) {
        b48 = false;
    } else {
        b48 = true;
    }
    var e51 = "(!(b48)).toString()";
    var l52 = (eval(e51)).length;
    var b53 = false;
    if (x44 != l52) {
        b53 = true;
    }
    var x55 = ~~ (b53);
    var x56;
    if (b1) {
        x56 = x2;
    } else {
        x56 = x55;
    }
    return x56;
}
fn57(input_S3, input_I1, input_S1, input_I2, input_B3, input_I3, input_B1);
