// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not((input_string('S2') in ['zrwc', 'L', '', 'G96n', 'EHLb', '6v', 'SB'])) && (int(bool(len(str(not(input_bool('B1')))))) != int((str(int(not(input_bool('B3')))) >= str(input_int('I3')))))) then bool(input_string('S3')) else input_bool('B2'))

var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);

var fn32 = function (b30, s1, x18, b14, s28, b7) {
    var e2 = "s1";
    var opts4 = ['zrwc', 'L', '', 'G96n', 'EHLb', '6v', 'SB'];
    var b3 = false;
    for (var idx5 = 0; idx5 < opts4.length; idx5++) {
        if (opts4[idx5] == eval(e2)) {
            b3 = true;
            break;
        }
    }
    var e13 = "var s9 = String(!(b7));(!!((s9).length)) | 0";
    var b15 = !(b14);
    var x16 = +(b15);
    var s19 = '' + (x18);
    var e20 = "s19";
    var b21 = '' + (x16) >= eval(e20);
    var x23 = +(b21);
    var b24 = eval(e13);
    var b25 = x23;
    var b26;
    if (!(b3) && b24 != b25) {
        b26 = true;
    } else {
        b26 = false;
    }
    var x31;
    if (b26) {
        x31 = Boolean(s28);
    } else {
        x31 = b30;
    }
    return x31;
}
fn32(input_B2, input_S2, input_I3, input_B3, input_S3, input_B1);
