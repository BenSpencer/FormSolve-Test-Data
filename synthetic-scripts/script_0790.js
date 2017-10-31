// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(str(not(((input_string('S3') >= str(input_int('I1'))) !== (bool(input_string('S2')) !== (str(not(bool(str(len(input_string('S3')))))) >= str(input_int('I3')))))))) in [7, 88, 48, 66, 0, 93, 6, 3, 0, 3]) then bool(len(input_string('S3'))) else (if bool(int((if input_bool('B1') then str(input_int('I1')) else input_string('S2')))) then bool(int((41 != int(str(input_int('I1')))))) else input_bool('B1')))

var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn54 = function (s1, x18, b37, x2, s40) {
    var s6 = s40;
    var x38 = x2;
    var s33 = s1;
    var e28 = "var s8 = s1; var b4; if (s1 >= String(x2)) { b4 = true; } else { b4 = false; }var e14 = \"var e12 = \\\"var e10 = \\\\\\\"(s8).length\\\\\\\";var e11 = \\\\\\\"eval(e10)\\\\\\\";eval(e11)\\\";String(eval(e12))\";var s17 = '' + (!(!!(eval(e14))));var s19 = (x18).toString();var b20 = s17; var b21 = s19;var b22 = !!(s6) !== b20 >= b21;var b24; if (b4 !== b22) { b24 = true; } else { b24 = false; }var s27 = (!(b24)).toString();s27";
    var x29 = parseInt(eval(e28), 10);
    var opts31 = [7, 88, 48, 66, 0, 93, 6, 3, 0, 3];
    var b30 = false;
    for (var idx32 = 0; idx32 < opts31.length; idx32++) {
        if (opts31[idx32] == x29) {
            b30 = true;
            break;
        }
    }
    var x44 = x38;
    var b51 = b37;
    var s39 = '' + (x38);
    var x41;
    if (b37) {
        x41 = s39;
    } else {
        x41 = s40;
    }
    var x52;
    if ((parseInt(x41, 10)) ? true : false) {
        var s45 = String(x44);
        var b47 = 41 != parseInt(s45, 10);
        var b50 = !! (~~(b47));
        x52 = b50;
    } else {
        x52 = b51;
    }
    var x53;
    if (b30) {
        x53 = eval("((s33).length) ? true : false");
    } else {
        x53 = x52;
    }
    return x53;
}
fn54(input_S3, input_I3, input_B1, input_I1, input_S2);
