// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then input_bool('B2') else (not(bool(int(str((str(int(input_string('S3'))) === str(input_bool('B1'))))))) == input_bool('B1')))

var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

function fn19(b15, s3, b1) {
    var b2 = b1;
    var x18;
    if (b1) {
        x18 = b2;
    } else {
        var b7 = b15;
        var e5 = "Number(s3)";
        var s6 = String(eval(e5));
        var b9 = s6;
        var b10 = '' + (b7);
        var x12 = Number('' + (b9 === b10));
        var b13 = !! (x12);
        var b16 = !(b13) == b15;
        x18 = b16;
    }
    return x18;
}
fn19(input_B1, input_S3, input_B2);
