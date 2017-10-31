// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if bool(len(input_string('S2'))) then (input_int('I3') == input_int('I2')) else input_bool('B1')) then str(int((str(input_bool('B1')) === str(not(not((if (int(str((input_string('S2') !== str(not(input_bool('B3')))))) !== input_int('I1')) then input_bool('B3') else input_bool('B2')))))))) else str(input_bool('B1')))

var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");

function fn45(b10, x24, b17, b30, x5, x4, s1) {
    var b14 = b10;
    var b41 = b10;
    var s16 = s1;
    var l2 = (s1).length;
    var b3 = Boolean(l2);
    var s15 = String(b14);
    var s36 = (eval("var b33; if (eval(\"var b28 = b17; var e27 = \\\"var b18 = !(b17);var s19 = (b18).toString();var b20 = false; if (s16 !== s19) { b20 = true; }var x23 = Number((b20).toString());var b25 = x23; var b26 = x24;b25 !== b26\\\";var x31; if (eval(e27)) { x31 = eval(\\\"b28\\\"); } else {  x31 = b30; }x31\")) { b33 = false; } else { b33 = true; }var b34 = !(b33);b34")).toString();
    var b37 = s15 === s36;
    var s40 = '' + ((b37) ? 1 : 0);
    var x44;
    if ((b3 ? eval("var b7 = false; if (x4 == eval(\"x5\")) { b7 = true; }b7") : eval("eval(\"b10\")"))) {
        x44 = s40;
    } else {
        var e42 = "b41";
        x44 = '' + (eval(e42));
    }
    return x44;
}
fn45(input_B1, input_I1, input_B3, input_B2, input_I2, input_I3, input_S2);
