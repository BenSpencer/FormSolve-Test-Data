// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((not(((if bool(input_int('I3')) then replace((if regex-test(str((int(input_bool('B1')) == len(input_string('S3')))), /^(tHUjjJW|q)+[-_ ]F$/) then input_string('S3') else "d"), "uEBX", "LQ") else str(bool(input_string('S1')))) >= str((len(input_string('S3')) < int(input_bool('B1')))))) === bool(input_int('I3')))) then input_string('S1') else input_string('S3'))

var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn15 = function (s13, b3) {
    var s5 = s13;
    var x4 = (b3) ? 1 : 0;
    var e8 = "var e7 = \"(s5).length\";eval(e7)";
    var b9;
    if (x4 == eval(e8)) {
        b9 = true;
    } else {
        b9 = false;
    }
    var s11 = (b9).toString();
    var re12 = /^(tHUjjJW|q)+[-_ ]F$/;
    var x14;
    if (re12.test(s11)) {
        x14 = s13;
    } else {
        x14 = "d";
    }
    return x14;
}
    function fn45(b17, s16, s19, x1) {
        var s43 = s16;
        var s41 = s19;
        var x36 = x1;
        var s25 = s16;
        var b27 = b17;
        var b2 = !! (x1);
        var s18 = (fn15(s16, b17)).replace("uEBX", "LQ");
        var e22 = "'' + (!!(s19))";
        var x24;
        if (b2) {
            x24 = s18;
        } else {
            x24 = eval("eval(e22)");
        }
        var b30 = (s25).length;
        var b31 = (eval("b27")) ? 1 : 0;
        var b33 = false;
        if (x24 >= String(b30 < b31)) {
            b33 = true;
        }
        var b35;
        if (b33) {
            b35 = false;
        } else {
            b35 = true;
        }
        var b37 = Boolean(x36);
        var b38 = false;
        if (b35 === b37) {
            b38 = true;
        }
        var x44;
        if (!(b38)) {
            x44 = eval("s41");
        } else {
            x44 = s43;
        }
        return x44;
    }
fn45(input_B1, input_S3, input_S1, input_I3);
