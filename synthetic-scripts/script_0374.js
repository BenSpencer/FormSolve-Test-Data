// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(input_bool('B3'))) then (input_string('S2') !== str(int(input_string('S2')))) else bool(str((int(input_bool('B1')) >= int((not(bool((int(str(input_int('I2'))) / input_int('I3')))) == bool(input_string('S3'))))))))

var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn32 = Function('b1', 's4', 'b12', 'x14', 'x17', 's22', "var b3 = ('' + (b1)) ? true : false;var x31; if (b3) { var s5 = s4; var x7 = parseInt(eval(\"s5\"), 10);var s8 = (x7).toString();var e11 = \"(s4 !== s8)\"; x31 = eval(e11); } else { var s15 = '' + (x14);x18 = parseInt(s15, 10); x19 = x17;var b20 = Boolean(x18 / x19);var b21; if (b20) { b21 = false; } else { b21 = true; }var b23 = Boolean(s22);var b24 = false; if (b21 == b23) { b24 = true; }var b27; if (+(b12) >= ~~(b24)) { b27 = true; } else { b27 = false; } x31 = !!(String(b27)); } return x31;");
fn32(input_B3, input_S2, input_B1, input_I2, input_I3, input_S3);
