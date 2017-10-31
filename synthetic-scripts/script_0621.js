// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S2') !== str((if (input_bool('B1') !== not((str(int(input_string('S3'))) > str(input_int('I1'))))) then int(input_bool('B3')) else int((if bool(input_string('S3')) then input_string('S3') else input_string('S3')))))) then input_int('I3') else (if not((int(input_bool('B3')) in [3, 0, 0, 0, 93, 37, 9, 136, 1])) then 6 else int(str(bool(str(regex-test(str((input_string('S1') in ['Jm', '', ''])), /^(af[A-Z]oVn|\ry\r*p)$/)))))))

var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);

(function (s37, s1, x7, b15, s17, b2, x30) {
    var b31 = b15;
    var s3 = s17;
    var e23 = "var s19 = s17; var s20 = s17; parseInt((!!(s17) ? s19 : s20), 10)";
    var x25;
    if (eval("var e5 = \"Number(s3)\";var s8 = String(x7);var b9; if ('' + (eval(e5)) > s8) { b9 = true; } else { b9 = false; }var b12 = b2 !== !(b9);b12")) {
        x25 = (b15) ? 1 : 0;
    } else {
        x25 = eval("eval(e23)");
    }
    var b27;
    if (s1 !== String(x25)) {
        b27 = true;
    } else {
        b27 = false;
    }
    var opts34 = [3, 0, 0, 0, 93, 37, 9, 136, 1];
    var b33 = opts34.indexOf(~~(b31)) > -1;
    var b36;
    if (b33) {
        b36 = false;
    } else {
        b36 = true;
    }
    var x48;
    if (b36) {
        x48 = 6;
    } else {
        var opts39 = ['Jm', '', ''];
        var b38 = false;
        for (var idx40 = 0; idx40 < opts39.length; idx40++) {
            if (opts39[idx40] == s37) {
                b38 = true;
            }
        }
        x48 = parseInt(String(Boolean(String(((eval("b38")).toString()).match(/^(af[A-Z]oVn|\ry\r*p)$/) !== null))), 10);
    }
    var x49;
    if (eval("b27")) {
        x49 = x30;
    } else {
        x49 = x48;
    }
    return x49;
})(input_S1, input_S2, input_I1, input_B3, input_S3, input_B1, input_I3);
