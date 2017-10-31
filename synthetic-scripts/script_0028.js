// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(str(len(str(not(input_bool('B2')))))) <= int(bool(input_string('S3')))) then not(input_bool('B2')) else not(bool(str((if input_bool('B3') then (not(not(bool((if bool(input_string('S3')) then int(bool(str((int(input_string('S3')) - len(str(len(input_string('S3')))))))) else int(str(input_int('I1'))))))) || bool(int(input_bool('B1')))) else ((int(input_string('S1')) in [14, 9, 1]) == bool(str(input_int('I1')))))))))

var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);

function fn63(b40, s16, x29, b1, s47, b15) {
    var s8 = s16;
    var b13 = b1;
    var e6 = "var b2; if (b1) { b2 = false; } else { b2 = true; }var s5 = ((String(b2)).length).toString();s5";
    var x7 = Number(eval(e6));
    var x10 = (Boolean(s8)) | 0;
    var b11 = false;
    if (x7 <= x10) {
        b11 = true;
    }
    var x52 = x29;
    var b38;
    if (Boolean(eval("var s18 = s16; var b17 = Boolean(s16);var x34; if (b17) { var s20 = s18; var l21 = (s20).length;var l23 = ('' + (l21)).length;var s26 = '' + ((parseInt(s18, 10) - l23));var b27 = (s26) ? true : false; x34 = +(b27); } else { var e32 = \"var e30 = \\\"x29\\\";(eval(e30)).toString()\";var x33 = Number(eval(e32)); x34 = x33; }eval(\"x34\")"))) {
        b38 = false;
    } else {
        b38 = true;
    }
    var x41 = (b40) ? 1 : 0;
    var b43 = Boolean(eval("x41"));
    var b44 = !(b38) || b43;
    var opts50 = [14, 9, 1];
    var b49 = opts50.indexOf(Number(s47)) > -1;
    var e54 = "var s53 = (x52).toString();s53";
    var b55 = Boolean(eval(e54));
    var b56 = b49;
    var b57 = b55;
    var x58;
    if (b15) {
        x58 = eval("b44");
    } else {
        x58 = b56 == b57;
    }
    var b61 = !(('' + (x58)) ? true : false);
    var x62;
    if (b11) {
        var b14;
        if (b13) {
            b14 = false;
        } else {
            b14 = true;
        }
        x62 = b14;
    } else {
        x62 = b61;
    }
    return x62;
}
fn63(input_B1, input_S3, input_I1, input_B2, input_S1, input_B3);
