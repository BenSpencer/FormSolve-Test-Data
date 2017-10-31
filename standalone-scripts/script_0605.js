// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then len(str(int(not((input_string('S3') in ['2HU9D', 'q0', 'eoj', 'KF6']))))) else int(str(int((input_int('I3') === ((int(str(int(str((if bool(str(bool(input_int('I2')))) then len(str(input_bool('B2'))) else input_int('I3')))))) - input_int('I1')) + int(str(bool(int(bool(int(input_bool('B3')))))))))))))

var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);

var fn51 = Function('b1', 's2', 'b17', 'x28', 'x12', 'x11', "var b31 = b1; var l10 = (eval(\"var opts4 = ['2HU9D', 'q0', 'eoj', 'KF6'];var s8 = '' + (~~(!(opts4.indexOf(s2) > -1)));s8\")).length;var e45 = \"var x20 = x11; var e42 = \\\"eval(\\\\\\\"var s15 = String(Boolean(eval(\\\\\\\\\\\\\\\"x12\\\\\\\\\\\\\\\")));var b16 = (s15) ? true : false;var x21; if (b16) { x21 = ((b17).toString()).length; } else { x21 = x20; }var e22 = \\\\\\\\\\\\\\\"x21\\\\\\\\\\\\\\\";var e23 = \\\\\\\\\\\\\\\"eval(e22)\\\\\\\\\\\\\\\";var s24 = (eval(e23)).toString();var x27 = Number('' + (Number(s24)));((x27 - x28) + parseInt(((eval(\\\\\\\\\\\\\\\"var x32 = (b31) ? 1 : 0;var x34 = ~~((x32) ? true : false);x34\\\\\\\\\\\\\\\")) ? true : false).toString(), 10))\\\\\\\")\\\";(x11 === eval(e42))\";var x49 = parseInt('' + (eval(\"(eval(e45)) | 0\")), 10);var x50; if (b1) { x50 = l10; } else { x50 = x49; } return x50;");
fn51(input_B3, input_S3, input_B2, input_I1, input_I2, input_I3);
