// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(int((str((if bool(input_int('I3')) then int(input_bool('B1')) else int((if not(bool(input_string('S3'))) then bool(replace(str((int((input_int('I3') !== input_int('I3'))) * input_int('I1'))), "m", "Ph")) else not(input_bool('B1')))))) === str(input_int('I2')))))) then (if (input_int('I3') in [94, 66, 31, 1]) then "1Iv0M" else str(int(((str(bool(int(input_string('S3')))) == input_string('S1')) || input_bool('B1'))))) else input_string('S3'))

var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);

function fn58(x14, x1, x30, b21, s41, s47) {
    var s56 = s41;
    var s6 = s41;
    var b50 = b21;
    var x37 = x1;
    var b4 = b21;
    var x10 = x1;
    var x5 = +(b4);
    var x27;
    if (eval("Boolean(x1)")) {
        x27 = x5;
    } else {
        var e26 = "var e25 = \"var b7 = Boolean(s6);var b8; if (b7) { b8 = false; } else { b8 = true; }var x9 = x10; var b11 = false; if (x9 !== x10) { b11 = true; }x15 = (b11) ? 1 : 0; x16 = x14;var e17 = \\\"x15 * x16\\\";var s18 = '' + (eval(e17));var b22; if (b21) { b22 = false; } else { b22 = true; }var x23; if (b8) { x23 = ((s18).replace(\\\"m\\\", \\\"Ph\\\")) ? true : false; } else { x23 = b22; }(x23) | 0\";eval(e25)";
        x27 = eval(e26);
    }
    var e28 = "x27";
    var s29 = String(eval(e28));
    var b32 = false;
    if (s29 === (x30).toString()) {
        b32 = true;
    }
    var s35 = (+(b32)).toString();
    var opts39 = [94, 66, 31, 1];
    var b38 = opts39.indexOf(x37) > -1;
    var b48 = '' + (eval("Boolean(parseInt(eval(\"s41\"), 10))"));
    var b49 = s47;
    var b51 = b48 == b49 || b50;
    var x55;
    if (b38) {
        x55 = "1Iv0M";
    } else {
        x55 = (~~(b51)).toString();
    }
    var x57;
    if ( !! (s35)) {
        x57 = x55;
    } else {
        x57 = s56;
    }
    return x57;
}
fn58(input_I1, input_I3, input_I2, input_B1, input_S3, input_S1);
