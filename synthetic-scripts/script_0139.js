// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(str(bool(str((len(str(input_bool('B2'))) > int(regex-test(input_string('S1'), /^u_Kd[a-z]+(T|\rzXC--)z$/))))))) in [1, 21, 162, 42, 14]) then input_int('I3') else len(str((len(str(input_bool('B1'))) != (int(not(((int((input_int('I1') == -6)) >= int((if bool(input_int('I2')) then bool(input_int('I3')) else (len(input_string('S2')) != int(input_string('S3')))))) == not(input_bool('B2'))))) - len(input_string('S1')))))))

var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn60 = function (s31, b19, x22, s33, b1, x27, s4, x17) {
    var x29 = x17;
    var b43 = b1;
    var s50 = s4;
    var e11 = "var l3 = ((b1).toString()).length;var re5 = new RegExp(\"^u_Kd[a-z]+(T|\\\\rzXC--)z$\");var b10 = !!('' + ((l3 > +(re5.test(s4)))));b10";
    var s12 = '' + (eval(e11));
    var opts15 = [1, 21, 162, 42, 14];
    var b14 = false;
    for (var idx16 = 0; idx16 < opts15.length; idx16++) {
        if (opts15[idx16] == parseInt(s12, 10)) {
            b14 = true;
        }
    }
    var e18 = "x17";
    var e49 = "var e23 = \"x22\";var b24 = eval(e23); var b25 = -6;var x26 = Number(b24 == b25);var b28 = Boolean(x27);var l32 = (s31).length;var x34 = Number(s33);var b35 = false; if (l32 != x34) { b35 = true; }var x39 = (eval(\"(b28 ? Boolean(x29) : b35)\")) | 0;var e40 = \"x39\";var b41 = x26; var b42 = eval(e40);var b47 = !((b41 >= b42 == !(b43)));var x48 = (b47) ? 1 : 0;x48";
    var l51 = (s50).length;
    x52 = eval(e49);
    x53 = l51;
    var b54 = ((b19).toString()).length != x52 - x53;
    var s56 = String(b54);
    var e58 = "(s56).length";
    var x59;
    if (b14) {
        x59 = eval(e18);
    } else {
        x59 = eval(e58);
    }
    return x59;
}
fn60(input_S2, input_B1, input_I1, input_S3, input_B2, input_I2, input_S1, input_I3);
