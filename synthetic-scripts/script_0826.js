// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S3') in ['7IM', 'PQGYN', 'ql', 'SmZdQ', 'sZFSy', '', 'd', 'zOw', 'xb']) then len(input_string('S3')) else (if not(input_bool('B2')) then len(str(input_bool('B3'))) else int(str((if input_bool('B3') then (if input_bool('B3') then (int(not((input_bool('B2') !== not((len(input_string('S3')) >= int((str(int(input_bool('B2'))) !== (str(bool(input_int('I1'))) + str(len(input_string('S3'))))))))))) === len(input_string('S3'))) else bool(input_string('S2'))) else input_bool('B1'))))))

var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

function fn59(b52, b13, s49, b17, x24, s1) {
    var s18 = s1;
    var s5 = s1;
    var opts3 = ['7IM', 'PQGYN', 'ql', 'SmZdQ', 'sZFSy', '', 'd', 'zOw', 'xb'];
    var b2 = false;
    for (var idx4 = 0; idx4 < opts3.length; idx4++) {
        if (opts3[idx4] == s1) {
            b2 = true;
        }
    }
    var b9 = b13;
    var b7 = b17;
    var b8;
    if (b7) {
        b8 = false;
    } else {
        b8 = true;
    }
    var e10 = "b9";
    var l12 = ('' + (eval(e10))).length;
    var e56 = "var b14 = b13; var e16 = \"var e15 = \\\"b14\\\";eval(e15)\";var e48 = \"var s44 = s18; var b21 = b17; var b40 = b17 !== !(eval(\\\"var s27 = s18; var l20 = (eval(\\\\\\\"s18\\\\\\\")).length;var x35 = +(eval(\\\\\\\"var s23 = '' + (+(b21));var l28 = (s27).length;var x30 = '' + (Boolean(x24)); var x31 = String(l28);var b32 = false; if (s23 !== x30 + x31) { b32 = true; }b32\\\\\\\"));(l20 >= x35)\\\"));var b42; if (b40) { b42 = false; } else { b42 = true; }var b46 = (b42) ? 1 : 0; var b47 = (s44).length;b46 === b47\";Number(((b13 ? (eval(e16) ? eval(e48) : !!(s49)) : b52)).toString())";
    var x58;
    if (b2) {
        var l6 = (s5).length;
        x58 = l6;
    } else {
        x58 = (b8 ? l12 : eval(e56));
    }
    return x58;
}
fn59(input_B1, input_B3, input_S2, input_B2, input_I1, input_S3);
