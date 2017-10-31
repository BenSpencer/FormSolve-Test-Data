// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B3') && bool(int(not((if input_bool('B3') then input_bool('B3') else (input_int('I1') in [0, 93, 0, 1])))))) then bool(int(bool(int(not((if (input_bool('B2') != not(input_bool('B1'))) then bool(str(not((int(bool(str(len(input_string('S3'))))) === (input_int('I3') + 0))))) else not(bool(int(input_string('S2')))))))))) else bool(len(str((input_int('I2') < int(input_bool('B3')))))))

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn63 = function (s39, x53, b16, b1, x4, s23, x30, b17) {
    var b55 = b1;
    var b2 = b1;
    var b3 = b2;
    var opts6 = [0, 93, 0, 1];
    var b5 = false;
    for (var idx7 = 0; idx7 < opts6.length; idx7++) {
        if (opts6[idx7] == x4) {
            b5 = true;
            break;
        }
    }
    var e9 = "(b2 ? b3 : b5)";
    var x12 = (!(eval("eval(e9)"))) ? 1 : 0;
    var b13 = !! (x12);
    var b14 = false;
    if (b1 && b13) {
        b14 = true;
    }
    var x62;
    if (b14) {
        var x50 = (eval("var e46 = \"eval(\\\"var e19 = \\\\\\\"!(b17)\\\\\\\";var e20 = \\\\\\\"eval(e19)\\\\\\\";var b21 = b16 != eval(e20);var b36 = !(eval(\\\\\\\"var s25 = ((s23).length).toString();var b27 = !!(eval(\\\\\\\\\\\\\\\"s25\\\\\\\\\\\\\\\"));var e28 = \\\\\\\\\\\\\\\"b27\\\\\\\\\\\\\\\";var x29 = (eval(e28)) ? 1 : 0;x31 = x30; x32 = 0;var b33 = x29 === x31 + x32;b33\\\\\\\"));var s37 = String(b36);var x43; if (b21) { x43 = (s37) ? true : false; } else { var x40 = Number(s39);var b41 = Boolean(x40); x43 = !(b41); }!(x43)\\\")\";var x47 = (eval(e46)) | 0;var b48 = Boolean(x47);b48")) ? 1 : 0;
        var e51 = "x50";
        x62 = Boolean(eval(e51));
    } else {
        var s59 = String((eval("x53") < ~~(b55)));
        var b61 = !! ((s59).length);
        x62 = b61;
    }
    return x62;
}
fn63(input_S2, input_I2, input_B2, input_B3, input_I1, input_S3, input_I3, input_B1);
