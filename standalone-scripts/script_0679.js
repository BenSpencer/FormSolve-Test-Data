// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((if (str(input_int('I2')) > replace(str(input_int('I3')), "E", "9vU")) then len(input_string('S1')) else input_int('I2')) > int(input_bool('B2'))) then str((input_int('I3') < input_int('I1'))) else str(bool(str((bool(str((input_int('I3') - (input_int('I1') - len(((if not(regex-test(str(input_bool('B2')), /^T(x|U)*[A-Z]mK$/)) then str(bool(input_int('I2'))) else input_string('S3')) + str(input_bool('B1')))))))) === bool(int(bool(input_int('I3')))))))))

var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);

function fn60(b12, x1, b35, x17, x16, s33, s8) {
    var x23 = x17;
    var x28 = x1;
    var x22 = x16;
    var x3 = x16;
    var b24 = b12;
    var x10 = x1;
    var s5 = (String(x3)).replace("E", "9vU");
    var b6 = (x1).toString();
    var b7 = s5;
    var x11;
    if (b6 > b7) {
        x11 = (s8).length;
    } else {
        x11 = x10;
    }
    var b14 = x11 > Number(b12);
    var e56 = "var x48 = x22; var e39 = \"var b27 = !((String(b24)).match(/^T(x|U)*[A-Z]mK$/) !== null);var e31 = \\\"eval(\\\\\\\"(x28) ? true : false\\\\\\\")\\\";var x34; if (b27) { x34 = '' + (eval(e31)); } else {  x34 = s33; }var x37 = x34 + (b35).toString();x37\";x41 = x23 - (eval(e39)).length;x43 = x22 - x41;var b46 = Boolean('' + (x43));var e49 = \"x48\";var b50 = (eval(e49)) ? true : false;var b52 = ((b50) ? 1 : 0) ? true : false;var b53; if (eval(\"b46\") === b52) { b53 = true; } else { b53 = false; }var s55 = '' + (b53);s55";
    var s58 = '' + ( !! (eval(e56)));
    return (b14 ? String(eval("(x16 < x17)")) : s58);
}
fn60(input_B2, input_I2, input_B1, input_I1, input_I3, input_S3, input_S1);
