// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (regex-replace(input_string('S3'), /(Xjr|b[a-z]Zg)?/, "Rs") > input_string('S1')) then bool(str(len(input_string('S3')))) else not(((str(input_int('I3')) + (if bool((len(input_string('S3')) / input_int('I2'))) then input_string('S1') else input_string('S3'))) in ['a', '', 'beKFz', 'HWs92', 'WS4'])))

var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");

function fn37(x13, s28, x29, s1) {
    var s27 = s1;
    var s7 = s1;
    var s4 = s28;
    var b5 = (s1).replace(/(Xjr|b[a-z]Zg)?/, "Rs");
    var b6 = s4;
    var x36;
    if (b5 > b6) {
        var e12 = "var l8 = (s7).length;var e9 = \"l8\";var b11 = !!(String(eval(e9)));b11";
        x36 = eval(e12);
    } else {
        function fn26(s15, s23, x18) {
            var s24 = s15;
            var l17 = (eval("s15")).length;
            var e19 = "x18";
            var b22 = Boolean((l17 / eval(e19)));
            var x25;
            if (b22) {
                x25 = s23;
            } else {
                x25 = s24;
            }
            return x25;
        }
        var x30 = String(x13) + fn26(s27, s28, x29);
        var opts33 = ['a', '', 'beKFz', 'HWs92', 'WS4'];
        var b32 = opts33.indexOf(x30) > -1;
        var b35;
        if (b32) {
            b35 = false;
        } else {
            b35 = true;
        }
        x36 = b35;
    }
    return x36;
}
fn37(input_I3, input_S1, input_I2, input_S3);
