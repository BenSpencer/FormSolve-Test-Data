// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then str(int(not(bool((if bool(len(input_string('S2'))) then int(input_string('S3')) else int((if input_bool('B1') then input_bool('B3') else (int((int(input_bool('B1')) >= input_int('I2'))) < input_int('I2'))))))))) else str(not((((if bool((1 % input_int('I1'))) then input_int('I3') else 21) != int(input_bool('B1'))) || bool(input_string('S1'))))))

var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn48 = function (x12, b10, s41, x31, x35, s6, b9, b1, s2) {
    var b37 = b10;
    var e30 = "var b27; if (Boolean(eval(\"var x24; if (Boolean(eval(\\\"var l3 = (s2).length;l3\\\"))) {  x24 = Number(s6); } else { var e21 = \\\"eval(\\\\\\\"var b8 = b10; var x16 = x12; var b13 = ~~(b10); var b14 = x12;var b17 = false; if (Number(b13 >= b14) < x16) { b17 = true; }var x19; if (b8) {  x19 = b9; } else { x19 = b17; }x19\\\\\\\")\\\";var x23 = Number(eval(\\\"eval(e21)\\\")); x24 = x23; }x24\"))) { b27 = false; } else { b27 = true; }var x28 = (b27) ? 1 : 0;var s29 = String(x28);s29";
    var x47;
    if (b1) {
        x47 = eval(e30);
    } else {
        x32 = 1 % x31;
        var b34 = !! (x32);
        var x36;
        if (b34) {
            x36 = x35;
        } else {
            x36 = 21;
        }
        var x38 = (b37) ? 1 : 0;
        var b42 = Boolean(s41);
        var b43;
        if ((x36 != x38) || b42) {
            b43 = true;
        } else {
            b43 = false;
        }
        var s46 = (!(b43)).toString();
        x47 = s46;
    }
    return x47;
}
fn48(input_I2, input_B1, input_S1, input_I1, input_I3, input_S3, input_B3, input_B2, input_S2);
