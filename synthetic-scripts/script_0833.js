// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool((str((input_string('S1') > input_string('S2'))) + input_string('S3'))) then str(int(bool(input_string('S1')))) else str((str((int(input_string('S1')) in [1, -15, 0, -86])) > replace(str((if not(input_bool('B2')) then input_bool('B2') else input_bool('B2'))), "k1KxY", "aGEid"))))

var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");

function fn34(s7, s1, s2, b27) {
    var s11 = s1;
    var s15 = s1;
    var e3 = "s2";
    var b4 = s1 > eval(e3);
    var b12 = Boolean(s11);
    var s14 = '' + ((b12) | 0);
    var x33;
    if (Boolean((String(b4) + s7))) {
        x33 = s14;
    } else {
        var x16 = parseInt(s15, 10);
        var opts18 = [1, -15, 0, -86];
        x33 = String((String(opts18.indexOf(x16) > -1) > ('' + ((function (b21) {
            var b23 = b21;
            var b24 = b21;
            var b22;
            if (b21) {
                b22 = false;
            } else {
                b22 = true;
            }
            var x25;
            if (b22) {
                x25 = b23;
            } else {
                x25 = b24;
            }
            return x25;
        })(b27))).replace("k1KxY", "aGEid")));
    }
    return x33;
}
fn34(input_S3, input_S1, input_S2, input_B2);
