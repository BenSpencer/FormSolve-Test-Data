// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I3')) then (bool((int(str(not((input_int('I3') === (int(str(input_bool('B3'))) - int(not(not(regex-test(str(int(input_bool('B3'))), /^j[-_ ](jfSs|sFP\w)+$/))))))))) / (input_int('I1') + input_int('I3')))) && (input_string('S1') >= input_string('S3'))) else bool(input_string('S2')))

var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn39 = Function('b4', 's30', 's36', 'x22', 's31', 'x1', "var x23 = x1; var b37 = Boolean(s36);var x38; if (!!(x1)) { var b32 = s30; var b33 = s31;var b34; if (b32 >= b33) { var x3 = x23; var b8 = b4; var e5 = \"b4\";var re11 = new RegExp(\"^j[-_ ](jfSs|sFP\\\\w)+$\");var b12 = !(re11.test((~~(b8)).toString()));var b13 = !(b12);x15 = Number((eval(e5)).toString()); x16 = (b13) ? 1 : 0;var b17 = x3 === x15 - x16;var s20 = String(!(b17));var b28 = ((parseInt(s20, 10) / (x22 + x23))) ? true : false;var e29 = \"b28\"; b34 = eval(e29); } else { b34 = false; } x38 = b34; } else { x38 = b37; } return x38;");
fn39(input_B3, input_S1, input_S2, input_I1, input_S3, input_I3);
