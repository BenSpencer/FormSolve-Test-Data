// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((if input_bool('B2') then str(len(str((input_int('I3') >= (int(regex-test(input_string('S1'), /^([-_ ]|\w*f)$/)) + (int(str(input_int('I2'))) / int(not(bool(len(str(int(input_string('S2'))))))))))))) else input_string('S2')) !== str(bool(int(input_string('S1'))))) then not(input_bool('B3')) else not(input_bool('B1')))

var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);

function fn41(x2, s29, b38, b1, x6, s27, b35) {
    var s3 = s29;
    var s9 = s27;
    var re4 = new RegExp("^([-_ ]|\\w*f)$");
    var x5 = (re4.test(s3)) | 0;
    var e10 = "s9";
    var x11 = parseInt(eval(e10), 10);
    var s12 = String(x11);
    var l13 = (s12).length;
    var b14 = !! (l13);
    var b15;
    if (b14) {
        b15 = false;
    } else {
        b15 = true;
    }
    var x16 = (b15) | 0;
    x17 = parseInt('' + (x6), 10) / x16;
    var s24 = String((x2 >= (x5 + eval("x17"))));
    var s26 = ((s24).length).toString();
    var x40;
    if (((b1 ? s26 : s27) !== (Boolean(Number(s29))).toString())) {
        var e36 = "b35";
        var b37;
        if (eval(e36)) {
            b37 = false;
        } else {
            b37 = true;
        }
        x40 = b37;
    } else {
        x40 = !(b38);
    }
    return x40;
}
fn41(input_I3, input_S1, input_B1, input_B2, input_I2, input_S2, input_B3);
