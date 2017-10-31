// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I3')) then ((input_string('S1') + "FL") <= str(len(str(input_int('I3'))))) else (int(bool(input_int('I2'))) > input_int('I2')))

var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn20 = Function('x13', 's3', 'x1', "var x6 = x1; var x19; if (Boolean(x1)) { var x4 = s3 + \"FL\";var s7 = (x6).toString();var l8 = (s7).length;var b11 = x4 <= eval(\"'' + (l8)\"); x19 = b11; } else { var x16 = x13; var b17 = ~~(!!(x13)) > x16; x19 = b17; } return x19;");
fn20(input_I2, input_S1, input_I3);
