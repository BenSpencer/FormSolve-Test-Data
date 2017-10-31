// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int((if not(bool(input_string('S1'))) then input_bool('B3') else bool(str(int(str((input_string('S2') !== str(int(str(input_int('I2')))))))))))) then (if ((input_string('S3') < str(int((input_int('I2') !== input_int('I1'))))) == false) then -63 else 180) else int(input_bool('B2')))

var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);

function fn37(b34, s22, x24, s6, x23, b5, s1) {
    var x7 = x23;
    var x17;
    if (eval("var b2 = !!(s1);!(b2)")) {
        x17 = b5;
    } else {
        var x9 = Number((x7).toString());
        var s13 = ((s6 !== '' + (x9))).toString();
        var x14 = Number(s13);
        var s15 = (x14).toString();
        x17 = (s15) ? true : false;
    }
    var e18 = "x17";
    var e19 = "eval(e18)";
    var x36;
    if (Boolean(+(eval(e19)))) {
        var b25;
        if (x23 !== x24) {
            b25 = true;
        } else {
            b25 = false;
        }
        var s28 = '' + (Number(b25));
        var b29 = s22;
        var b30 = s28;
        var b31 = false;
        if (b29 < b30 == false) {
            b31 = true;
        }
        x36 = (b31 ? -63 : 180);
    } else {
        x36 = (b34) | 0;
    }
    return x36;
}
fn37(input_B2, input_S3, input_I1, input_S2, input_I2, input_B3, input_S1);
