// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(bool(input_string('S3')))) then not(bool(int(str(bool(int(input_string('S3'))))))) else bool(input_string('S1')))

var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");

function fn16(s13, s1) {
    var s5 = s1;
    var b2 = !! (s1);
    var x3 = Number(b2);
    var b4 = (x3) ? true : false;
    var x15;
    if (b4) {
        var x6 = parseInt(s5, 10);
        var e9 = "String(!!(x6))";
        var x10 = parseInt(eval(e9), 10);
        var b11 = Boolean(x10);
        x15 = !(b11);
    } else {
        var b14 = (s13) ? true : false;
        x15 = b14;
    }
    return x15;
}
fn16(input_S1, input_S3);
