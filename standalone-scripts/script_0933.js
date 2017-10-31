// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then (if bool(input_string('S2')) then not((input_bool('B1') == not(not((if input_bool('B3') then not(bool(input_int('I2'))) else true))))) else input_bool('B1')) else ((if input_bool('B2') then input_bool('B2') else bool(int(not((if (bool(input_string('S2')) != (input_int('I2') < int(input_bool('B3')))) then (int(input_bool('B3')) in [40, 2, 94, -68, -30, 134, 7, 0]) else input_bool('B2')))))) !== (len(str((if input_bool('B1') then input_bool('B1') else input_bool('B3')))) != input_int('I3'))))

var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn56 = function (x50, b20, b25, b1, s22, x24) {
    var b17 = b1;
    var b43 = b1;
    var s3 = s22;
    var x7 = x24;
    var b6 = b25;
    var b5 = b17;
    var b4 = Boolean(s3);
    var b14;
    if (b5) {
        if (eval("var x10; if (b6) {  x10 = !((x7) ? true : false); } else { x10 = true; }var b12; if (!(x10)) { b12 = false; } else { b12 = true; }b12")) {
            b14 = true;
        } else {
            b14 = false;
        }
    } else {
        if (eval("var x10; if (b6) {  x10 = !((x7) ? true : false); } else { x10 = true; }var b12; if (!(x10)) { b12 = false; } else { b12 = true; }b12")) {
            b14 = false;
        } else {
            b14 = true;
        }
    }
    var b16;
    if (b14) {
        b16 = false;
    } else {
        b16 = true;
    }
    var e18 = "b17";
    var b46 = b25;
    var b21 = b20;
    var b37 = b20;
    var b32 = b25;
    var e31 = "var b23 = Boolean(s22);var x26 = Number(b25);var b29 = b23; var b30 = (x24 < x26);b29 != b30";
    var x33 = Number(b32);
    var opts35 = [40, 2, 94, -68, -30, 134, 7, 0];
    var b41 = Boolean((!((eval(e31) ? opts35.indexOf(x33) > -1 : b37))) | 0);
    var b45 = b43;
    var x47;
    if (eval("b43")) {
        x47 = b45;
    } else {
        x47 = b46;
    }
    var s48 = '' + (x47);
    var l49 = (s48).length;
    var b51 = false;
    if (l49 != x50) {
        b51 = true;
    }
    var b53 = (b20 ? b21 : b41) !== b51;
    var x55;
    if (eval("b1")) {
        x55 = (b4 ? b16 : eval(e18));
    } else {
        x55 = b53;
    }
    return x55;
}
fn56(input_I3, input_B2, input_B3, input_B1, input_S2, input_I2);
