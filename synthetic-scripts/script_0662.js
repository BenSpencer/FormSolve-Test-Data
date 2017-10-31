// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (len(str(not(bool(str(bool(str(int((input_bool('B1') === not(bool(int(input_string('S3'))))))))))))) < int(input_string('S3'))) then (len(input_string('S2')) <= int(input_bool('B3'))) else not(input_bool('B1')))

var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);

function fn32(s22, b1, s18, b24) {
    var b29 = b1;
    var s2 = s18;
    var x19 = parseInt(s18, 10);
    var b20 = false;
    if ((String(!( !! (String(('' + (eval("var e3 = \"s2\";var b5 = !!(parseInt(eval(e3), 10));var b7 = b1; var b8 = !(b5);+(b7 === b8)"))) ? true : false))))).length < x19) {
        b20 = true;
    }
    var x31;
    if (b20) {
        x31 = ((s22).length <= eval("+(b24)"));
    } else {
        var b30 = !(b29);
        x31 = b30;
    }
    return x31;
}
fn32(input_S2, input_B1, input_S3, input_B3);
