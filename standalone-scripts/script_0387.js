// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I3')) then (input_string('S2') in ['', '4Hejm', 'ZKGcq', '6U', '', 'e', 'qSoO', '', 'Y6IA']) else ((if not((input_int('I2') <= len(str((input_bool('B2') || input_bool('B2')))))) then bool(len(str(len(str(input_int('I1')))))) else (int(input_bool('B3')) in [1, 169, 1, 28])) === input_bool('B3')))

var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);

var fn35 = function (x1, x18, b8, b25, s3, x7) {
    var b2 = !! (x1);
    var x34;
    if (b2) {
        var opts5 = ['', '4Hejm', 'ZKGcq', '6U', '', 'e', 'qSoO', '', 'Y6IA'];
        var b4 = opts5.indexOf(s3) > -1;
        x34 = b4;
    } else {
        var b31 = b25;
        var l14 = (eval("var b9 = b8; var b10; if (b9) { b10 = true; } else {  b10 = b8; }(b10).toString()")).length;
        var b15 = x7;
        var b16 = l14;
        var b17 = !(b15 <= b16);
        var x30;
        if (b17) {
            x30 = eval("var b23 = !!(((((x18).toString()).length).toString()).length);b23");
        } else {
            var opts28 = [1, 169, 1, 28];
            var b27 = opts28.indexOf((b25) | 0) > -1;
            x30 = b27;
        }
        x34 = (x30 === b31);
    }
    return x34;
}
fn35(input_I3, input_I1, input_B2, input_B3, input_S2, input_I2);
