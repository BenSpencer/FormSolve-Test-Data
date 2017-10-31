// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I2') in [0, 1, -81, 83]) then (input_int('I1') <= (if false then input_int('I2') else int(bool(input_int('I2'))))) else ((if regex-test(str(bool(int(input_string('S3')))), /^H([A-Z]+|O)$/) then input_int('I2') else int(input_bool('B1'))) !== input_int('I1')))

var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn24 = function (b21, s15, x20) {
    var x16 = parseInt(s15, 10);
    var b17 = (x16) ? true : false;
    var s18 = String(b17);
    var x22 = Number(b21);
    return ((s18).match(/^H([A-Z]+|O)$/) !== null ? x20 : x22);
}
var fn33 = Function('x1', 'x28', 's26', 'b25', "var x6 = x28; var x27 = x1; var x7 = x1; var e2 = \"x1\";var opts4 = [0, 1, -81, 83];var e12 = \"var x8 = x7; var x11; if (false) { x11 = x7; } else { var x10 = (Boolean(x8)) | 0; x11 = x10; }x11\";var b13 = x6 <= eval(e12);var x32; if (opts4.indexOf(eval(e2)) > -1) { x32 = b13; } else { var b30 = false; if (fn24(b25, s26, x27) !== eval(\"x28\")) { b30 = true; } x32 = b30; } return x32;");
fn33(input_I2, input_I1, input_S3, input_B1);
