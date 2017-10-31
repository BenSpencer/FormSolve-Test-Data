// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S3') in ['yGN', 'kyBs0', 'CWA', '0L']) then (input_string('S1') < str(int(bool(int((len(str((if input_bool('B3') then int(input_bool('B2')) else input_int('I3')))) != input_int('I2'))))))) else not(input_bool('B3')))

var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn32 = function (x16, s6, b14, x19, b15, s1) {
    var b29 = b14;
    var e5 = "var opts3 = ['yGN', 'kyBs0', 'CWA', '0L'];var b2 = false; for (var idx4 = 0; idx4 < opts3.length; idx4++) { if (opts3[idx4] == s1) { b2 = true; break; } }b2";
    var x31;
    if (eval(e5)) {
        var x25 = ~~ (eval("var fn13 = function(b7, b8, x11) { var e10 = \"(b8) | 0\";var x12; if (b7) { x12 = eval(e10); } else { x12 = x11; } return x12; } var b20 = false; if (((fn13(b14, b15, x16)).toString()).length != x19) { b20 = true; }((b20) | 0) ? true : false"));
        var s26 = String(x25);
        x31 = (s6 < s26);
    } else {
        var b30;
        if (b29) {
            b30 = false;
        } else {
            b30 = true;
        }
        x31 = b30;
    }
    return x31;
}
fn32(input_I3, input_S1, input_B3, input_I2, input_B2, input_S3);
