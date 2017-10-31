// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not((str(not(not(input_bool('B3')))) in ['wC', 'DAH', '', 'O', 't', '', 'Ky']))) then (input_bool('B1') || ((bool(str(int(str(not(not(bool(input_int('I1')))))))) === bool(str((len(input_string('S2')) + len((if input_bool('B3') then input_string('S2') else str(int((int(not(not(((input_string('S2') >= input_string('S3')) && bool(str(len(input_string('S3')))))))) in [0, -62, -2, 10, 0, 88]))))))))) || ((str(bool(input_int('I3'))) <= str((input_bool('B2') != input_bool('B1')))) !== true))) else input_bool('B1'))

var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn75 = function (x57, s23, b11, s29, x12, b60, b1) {
    var b73 = b11;
    var b26 = b1;
    var b3 = !(eval("b1"));
    var b4;
    if (b3) {
        b4 = false;
    } else {
        b4 = true;
    }
    var s5 = '' + (b4);
    var opts7 = ['wC', 'DAH', '', 'O', 't', '', 'Ky'];
    var b9;
    if (opts7.indexOf(s5) > -1) {
        b9 = false;
    } else {
        b9 = true;
    }
    var b10 = !(b9);
    var b61 = b11;
    var b14 = !(Boolean(x12));
    var s16 = (!(b14)).toString();
    var e20 = "!!(String(parseInt(s16, 10)))";
    var s27 = s23;
    var l24 = (s23).length;
    var e25 = "l24";
    var s28 = s27;
    var x48;
    if (b26) {
        x48 = s27;
    } else {
        var e38 = "var s32 = s29; var b35 = ('' + ((s32).length)) ? true : false;var b36; if ((s28 >= s29) && b35) { b36 = true; } else { b36 = false; }b36";
        var b40 = !(eval("eval(e38)"));
        var b41;
        if (b40) {
            b41 = false;
        } else {
            b41 = true;
        }
        var opts44 = [0, -62, -2, 10, 0, 88];
        var b43 = opts44.indexOf(Number(b41)) > -1;
        var x46 = Number(b43);
        x48 = '' + (x46);
    }
    var l49 = (x48).length;
    var e50 = "l49";
    x51 = eval(e25) + eval(e50);
    var s53 = (x51).toString();
    var b55;
    if (eval("eval(\"eval(e20)\")") === (s53) ? true : false) {
        b55 = true;
    } else {
        b55 = false;
    }
    var s59 = ((x57) ? true : false).toString();
    var b62 = false;
    if (b60 != b61) {
        b62 = true;
    }
    var b65;
    if (s59 <= (b62).toString()) {
        b65 = true;
    } else {
        b65 = false;
    }
    var b67 = b65 !== true;
    var b69;
    if (b55) {
        b69 = true;
    } else {
        b69 = b67;
    }
    var b71;
    if (b69) {
        b71 = true;
    } else {
        b71 = b11;
    }
    var x74;
    if (b10) {
        x74 = b71;
    } else {
        x74 = b73;
    }
    return x74;
}
fn75(input_I3, input_S2, input_B1, input_S3, input_I1, input_B2, input_B3);
