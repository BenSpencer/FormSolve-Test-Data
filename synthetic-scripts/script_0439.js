// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then bool(input_string('S3')) else not(input_bool('B2')))

var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);

function fn7(s2, b1, b4) {
    var b3 = !! (s2);
    return (b1 ? b3 : !(b4));
}
fn7(input_S3, input_B1, input_B2);
