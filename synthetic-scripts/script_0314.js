// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then not(input_bool('B1')) else (str(not(((int((len(str(len(input_string('S3')))) >= int(input_bool('B1')))) in [-75, 76, 6, 6, 25, 1, 0]) && input_bool('B1')))) in ['ZOjn', '', 'YMn', 'e']))

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

function fn28(b1, s4, b16) {
    var b2 = b16;
    var b3;
    if (b2) {
        b3 = false;
    } else {
        b3 = true;
    }
    var x27;
    if (b1) {
        x27 = b3;
    } else {
        var e21 = "eval(\"eval(\\\"var b8 = b16; var b17; if (b16) { var l5 = (s4).length;var opts14 = [-75, 76, 6, 6, 25, 1, 0];var b13 = false; for (var idx15 = 0; idx15 < opts14.length; idx15++) { if (opts14[idx15] == (((String(l5)).length >= (b8) | 0)) ? 1 : 0) { b13 = true; } } b17 = b13; } else { b17 = false; }b17\\\")\")";
        var opts25 = ['ZOjn', '', 'YMn', 'e'];
        var b24 = false;
        for (var idx26 = 0; idx26 < opts25.length; idx26++) {
            if (opts25[idx26] == String(!(eval(e21)))) {
                b24 = true;
            }
        }
        x27 = b24;
    }
    return x27;
}
fn28(input_B2, input_S3, input_B1);
