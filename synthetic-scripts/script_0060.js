// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then int(str((int(((if input_bool('B3') then (if ((input_int('I2') > input_int('I3')) && bool(input_string('S1'))) then input_int('I3') else input_int('I2')) else int((input_bool('B1') || not(((input_bool('B3') != bool(input_int('I3'))) || bool(str(input_int('I1')))))))) in [0, -20, 0, 6, 69, 0])) < input_int('I2')))) else int(not(input_bool('B1'))))

var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);

var fn55 = function (b1, x37, s36, x34, x38, b33) {
    var b50 = b33;
    var b35 = b1;
    var x45 = x38;
    var fn32 = Function('b16', 'x22', 'b17', 's8', 'x12', 'x14', "var b2 = b17; var x18 = x12; var s23 = (x22).toString();var b24 = Boolean(s23);var b25; if (b24) { b25 = true; } else { var b19 = (x18) ? true : false;var b20 = false; if (b17 != b19) { b20 = true; } b25 = b20; }var b28 = b16; var b29 = !(b25);var x30 = (b28 || b29) ? 1 : 0;var x31; if (b2) { var x3 = x14; var x4 = x12; var b9 = Boolean(s8);var b10; if (b9) { var b6 = x3 > eval(\"x4\"); b10 = b6; } else { b10 = false; }var x15; if (b10) {  x15 = eval(\"x12\"); } else {  x15 = x14; } x31 = x15; } else { x31 = x30; } return x31;");
    var opts40 = [0, -20, 0, 6, 69, 0];
    var b39 = false;
    for (var idx41 = 0; idx41 < opts40.length; idx41++) {
        if (opts40[idx41] == fn32(b33, x34, b35, s36, x37, x38)) {
            b39 = true;
            break;
        }
    }
    var x49 = Number('' + ((eval("eval(\"(b39) | 0\")") < x45)));
    var x54;
    if (b1) {
        x54 = x49;
    } else {
        x54 = eval("var b51; if (b50) { b51 = false; } else { b51 = true; }+(b51)");
    }
    return x54;
}
fn55(input_B3, input_I3, input_S1, input_I1, input_I2, input_B1);
