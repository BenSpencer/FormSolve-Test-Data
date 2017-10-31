// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(str((if input_bool('B2') then ((input_int('I2') <= input_int('I1')) == ((int(input_bool('B1')) / input_int('I3')) > input_int('I1'))) else bool(len(input_string('S3'))))))) then input_int('I1') else (int(bool(int((if (str(bool(str(not(not((input_string('S3') > str(input_int('I1')))))))) in ['HBu', 'Z', 'r8TV', 'Xac3', '5Qc', 'PqyG', 'vm6tk', '2S', 'RKmg']) then not(bool(len(input_string('S1')))) else bool(int(str(not(input_bool('B3'))))))))) / input_int('I3')))

var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn22 = Function('x9', 's18', 'x12', 'b1', 'x2', 'b6', "var x21; if (b1) { var x3 = x12; var b4 = x2 <= x3;var x8 = +(eval(\"b6\"));x10 = x8 / x9;var b13; if (x10 > x12) { b13 = true; } else { b13 = false; }var b15; if (b4) { b15 = b13; } else { b15 = !b13; }var e17 = \"b15\"; x21 = eval(e17); } else {  x21 = Boolean((s18).length); } return x21;");

function fn64(b28, b26, x25, s46, x27, x23, s24, b51) {
    var s33 = s24;
    var x32 = x25;
    var x34 = x25;
    var x60 = x23;
    var s29 = '' + (fn22(x23, s24, x25, b26, x27, b28));
    var b30 = Boolean(s29);
    var s35 = String(x34);
    var b36;
    if (s33 > s35) {
        b36 = true;
    } else {
        b36 = false;
    }
    var b38;
    if (b36) {
        b38 = false;
    } else {
        b38 = true;
    }
    var b39 = !(b38);
    var b41 = !! ((b39).toString());
    var opts44 = ['HBu', 'Z', 'r8TV', 'Xac3', '5Qc', 'PqyG', 'vm6tk', '2S', 'RKmg'];
    var e48 = "(s46).length";
    var b49 = !! (eval(e48));
    var b50;
    if (b49) {
        b50 = false;
    } else {
        b50 = true;
    }
    var x56;
    if (opts44.indexOf('' + (b41)) > -1) {
        x56 = b50;
    } else {
        var b52;
        if (b51) {
            b52 = false;
        } else {
            b52 = true;
        }
        var x54 = parseInt(String(b52), 10);
        x56 = !! (x54);
    }
    var x57 = +(x56);
    var x59 = ( !! (x57)) ? 1 : 0;
    x61 = x59;
    x62 = x60;
    var x63;
    if (!(b30)) {
        x63 = x32;
    } else {
        x63 = x61 / x62;
    }
    return x63;
}
fn64(input_B1, input_B2, input_I1, input_S1, input_I2, input_I3, input_S3, input_B3);
