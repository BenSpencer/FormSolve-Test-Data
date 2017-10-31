// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then (int(input_string('S1')) * int(bool(str((str((int((int(not((input_string('S3') in ['Qna', 'eYI', 'b', 'EF', 'wPdr4', 'a', 'T', 'ymk', 'JC1Nv', 'u6WQ']))) == int(bool(input_string('S3'))))) / input_int('I1'))) in ['WERcl', '8MN', '8t']))))) else int(input_bool('B1')))

var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");

var fn33 = function (b1, s10, s2, x18) {
    var b30 = b1;
    var e17 = "var s4 = s10; var opts6 = ['Qna', 'eYI', 'b', 'EF', 'wPdr4', 'a', 'T', 'ymk', 'JC1Nv', 'u6WQ'];var b5 = false; for (var idx7 = 0; idx7 < opts6.length; idx7++) { if (opts6[idx7] == s4) { b5 = true; } }var e12 = \"(s10) ? true : false\";var b14 = +(!(b5)); var b15 = +(eval(e12));(b14 == b15) | 0";
    x19 = eval(e17);
    x20 = x18;
    var opts23 = ['WERcl', '8MN', '8t'];
    var b22 = false;
    for (var idx24 = 0; idx24 < opts23.length; idx24++) {
        if (opts23[idx24] == String(x19 / x20)) {
            b22 = true;
            break;
        }
    }
    var s25 = String(b22);
    var b26 = Boolean(s25);
    var x27 = (b26) | 0;
    x28 = parseInt(s2, 10);
    x29 = x27;
    return (b1 ? x28 * x29 : +(b30));
}
fn33(input_B1, input_S3, input_S1, input_I1);
