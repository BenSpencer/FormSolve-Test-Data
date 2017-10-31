// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (((if true then int((len(str((input_int('I3') > input_int('I3')))) <= int(str(bool(str(int(str(len(input_string('S1')))))))))) else int(input_string('S2'))) == int(str(not((if input_bool('B3') then (input_int('I2') in [124, 0, 0, -17]) else not(input_bool('B1'))))))) && input_bool('B1')) then bool(int(not(bool(len(str(input_int('I3'))))))) else (int(input_string('S1')) != int(input_string('S1'))))

var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn61 = Function('x38', 'x1', 's23', 'b36', 'b37', 's10', "var x47 = x1; var s54 = s10; var b44 = b36; var e9 = \"var e8 = \\\"var x2 = x1; var b3; if (x1 > x2) { b3 = true; } else { b3 = false; }var s5 = (b3).toString();eval(\\\\\\\"(s5).length\\\\\\\")\\\";eval(e8)\";var s12 = '' + ((s10).length);var s14 = '' + (Number(s12));var b15 = (s14) ? true : false;var e17 = \"'' + (b15)\";var x18 = Number(eval(e17));var e19 = \"x18\";var b20 = eval(e9) <= eval(e19);var fn35 = Function('b32', 'b27', 'x28', \"var x34; if (b27) { var opts30 = [124, 0, 0, -17];var b29 = opts30.indexOf(x28) > -1; x34 = b29; } else { var b33; if (b32) { b33 = false; } else { b33 = true; } x34 = b33; } return x34;\"); var b42; if ((true ? +(b20) : parseInt(eval(\"s23\"), 10)) == parseInt('' + (!(fn35(b36, b37, x38))), 10)) { b42 = true; } else { b42 = false; }var b45 = b42; var b46 = b44;var x52 = +(!((('' + (x47)).length) ? true : false));var b53 = !!(x52);var s56 = s54; var x55 = Number(s54);var x57 = Number(s56);var b58; if (x55 != x57) { b58 = true; } else { b58 = false; } return (b45 && b46 ? b53 : b58);");
fn61(input_I2, input_I3, input_S2, input_B1, input_B3, input_S1);
