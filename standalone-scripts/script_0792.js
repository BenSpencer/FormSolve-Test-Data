// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I1') in [1, 1, 26, 1, 1, 0, 8, 25]) then int(not(bool(int((if bool(str((if (if bool(input_string('S1')) then (if input_bool('B1') then (if bool(int(str((input_int('I2') in [6, 4, 0, 61, 1, 45, 0, 1])))) then input_bool('B3') else input_bool('B1')) else false) else input_bool('B3')) then 1 else len(str(regex-test(str(input_int('I2')), /^[0-9]+(l|k WA\W)IkVV$/)))))) then bool(input_int('I1')) else bool(input_int('I1'))))))) else input_int('I2'))

var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn62 = function (b51, s53, x50, x1, b52) {
    var x54 = x1;
    var x60 = x50;
    var opts3 = [1, 1, 26, 1, 1, 0, 8, 25];
    var x61;
    if (opts3.indexOf(x1) > -1) {
        x61 = +(eval("var x55 = ((function(x37, b36, b38, s35, x41) { var x43 = x41; var fn34 = function(s26, b27, x25, b24) { var x28 = x25; var fn23 = function(b16, x9, s5, b17) { var b21 = b16; var x22; if ((eval(\"s5\")) ? true : false) { x22 = eval(\"var b8 = b17; var x19; if (b8) { var opts11 = [6, 4, 0, 61, 1, 45, 0, 1];var b10 = false; for (var idx12 = 0; idx12 < opts11.length; idx12++) { if (opts11[idx12] == x9) { b10 = true; break; } }var x14 = parseInt(String(b10), 10);var x18; if ((x14) ? true : false) {  x18 = b16; } else {  x18 = b17; } x19 = x18; } else { x19 = false; }x19\"); } else { x22 = b21; } return x22; } var l32 = ((((x28).toString()).match(/^[0-9]+(l|k WA\\W)IkVV$/) !== null).toString()).length;var x33; if (fn23(b24, x25, s26, b27)) {  x33 = 1; } else { x33 = l32; } return x33; } var b42 = (x41) ? true : false;var x48; if (Boolean((fn34(s35, b36, x37, b38)).toString())) { x48 = b42; } else {  x48 = eval(\"eval(\\\"var e45 = \\\\\\\"var b44 = Boolean(x43);b44\\\\\\\";eval(e45)\\\")\"); } return x48; })(x50, b51, b52, s53, x54) ) ? 1 : 0;!(!!(x55))"));
    } else {
        x61 = x60;
    }
    return x61;
}
fn62(input_B1, input_S1, input_I2, input_I1, input_B3);
