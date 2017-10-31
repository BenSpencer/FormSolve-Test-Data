// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(str((input_bool('B1') && (if input_bool('B2') then not(not((not(input_bool('B1')) && regex-test(str(input_int('I1')), /^[0-9]*(aQ|ya)Xo$/)))) else bool((input_string('S1') + input_string('S3')))))))) then len(str((input_int('I3') < input_int('I3')))) else int(input_string('S1')))

var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");

function fn35(x5, b1, s13, s15, x25, b2) {
    var s32 = s13;
    var b3 = b1;
    var e8 = "var s6 = '' + (x5);(s6).match(/^[0-9]*(aQ|ya)Xo$/) !== null";
    var b9;
    if (eval(e8)) {
        var b4 = !(b3);
        b9 = b4;
    } else {
        b9 = false;
    }
    var b11;
    if (b9) {
        b11 = false;
    } else {
        b11 = true;
    }
    var b12;
    if (b11) {
        b12 = false;
    } else {
        b12 = true;
    }
    var e14 = "s13";
    var x16 = eval(e14);
    var x17 = s15;
    var x23 = parseInt('' + ((b1 && (b2 ? b12 : !! (x16 + x17)))), 10);
    var x34;
    if ( !! (x23)) {
        x34 = (eval("var x26 = x25; var b27 = x25 < x26;var s29 = '' + (b27);s29")).length;
    } else {
        x34 = parseInt(s32, 10);
    }
    return x34;
}
fn35(input_I1, input_B1, input_S1, input_S3, input_I3, input_B2);
