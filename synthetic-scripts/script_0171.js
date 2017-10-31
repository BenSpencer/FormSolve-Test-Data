// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((int(input_string('S1')) in [99, 82, 0, 7]) && input_bool('B3')) then true else ((int(str(bool((int(bool(input_string('S1'))) / (if bool(str((if bool(str(int(str(input_int('I1'))))) then int(str(int((bool(input_int('I3')) != input_bool('B3'))))) else input_int('I2')))) then 1 else len(input_string('S1'))))))) in [8, 1, 4]) == input_bool('B1')))

var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn54 = function (b32, b50, x30, x31, s1, x29) {
    var b6 = b32;
    var s36 = s1;
    var opts4 = [99, 82, 0, 7];
    var b3 = false;
    for (var idx5 = 0; idx5 < opts4.length; idx5++) {
        if (opts4[idx5] == Number(s1)) {
            b3 = true;
        }
    }
    var b7 = false;
    if (b3 && b6) {
        b7 = true;
    }
    var s9 = s36;
    var x11 = Number( !! (s9));
    var l39 = (eval("var e37 = \"s36\";eval(e37)")).length;
    x41 = x11 / (eval("(((function(x17, x12, x26, b20) { var s15 = '' + (Number('' + (x12)));var e19 = \"var b18 = Boolean(x17);b18\";var b21 = eval(e19); var b22 = b20;var x23 = Number(b21 != b22);var s24 = '' + (x23);var x25 = parseInt(s24, 10);var x27; if (!!(s15)) { x27 = x25; } else { x27 = x26; } return x27; })(x29, x30, x31, b32) ).toString()) ? true : false") ? 1 : l39);
    var b43 = !! (x41);
    var x46 = Number(String(eval("b43")));
    var opts48 = [8, 1, 4];
    var b47 = opts48.indexOf(x46) > -1;
    var b51 = b47;
    var b52 = b50;
    return (b7 ? true : b51 == b52);
}
fn54(input_B3, input_B1, input_I1, input_I2, input_S1, input_I3);
