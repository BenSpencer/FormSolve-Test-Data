// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((not(not(not(not(input_bool('B2'))))) && input_bool('B1')) && (if not(input_bool('B3')) then input_bool('B3') else (if input_bool('B2') then bool(input_string('S3')) else (input_string('S2') < "W")))) then str(len(str(input_bool('B3')))) else str(input_bool('B3')))

var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

function fn30(b12, b1, b6, s14, s16) {
    var b23 = b12;
    var b27 = b12;
    var b13 = b1;
    var b9 = b12;
    var x20;
    if (eval("!(b9)")) {
        x20 = b12;
    } else {
        var b15 = Boolean(s14);
        var x19;
        if (b13) {
            x19 = b15;
        } else {
            var b17 = s16;
            var b18 = "W";
            x19 = b17 < b18;
        }
        x20 = x19;
    }
    var b21;
    if (x20) {
        var b4;
        if (!(!(b1))) {
            b4 = false;
        } else {
            b4 = true;
        }
        var b5 = !(b4);
        var b7 = b5 && b6;
        b21 = b7;
    } else {
        b21 = false;
    }
    var s24 = String(b23);
    var s26 = String((s24).length);
    return (b21 ? s26 : (b27).toString());
}
fn30(input_B3, input_B2, input_B1, input_S3, input_S2);
