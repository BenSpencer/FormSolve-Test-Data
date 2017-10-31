// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I1')) then (input_int('I2') % input_int('I3')) else int(str((len(str(bool(int((int(str((input_bool('B1') !== (int((str(not(input_bool('B3'))) != str((len(input_string('S3')) === input_int('I2'))))) <= 1)))) != len((if input_bool('B1') then input_string('S2') else str(input_int('I1'))))))))) / int(input_string('S3'))))))

var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");

var fn50 = function (b8, x4, x1, b27, s28, s12, x14) {
    var x30 = x1;
    var x3 = x14;
    var b2 = !! (x1);
    var x49;
    if (b2) {
        x5 = x3 % x4;
        x49 = x5;
    } else {
        var s43 = s12;
        var b7 = b27;
        var e11 = "var b9; if (b8) { b9 = false; } else { b9 = true; }String(b9)";
        var l13 = (s12).length;
        var b15 = l13 === x14;
        var s17 = '' + (b15);
        var b18 = false;
        if (eval(e11) != s17) {
            b18 = true;
        }
        var x20 = (b18) ? 1 : 0;
        var b21 = x20 <= 1;
        var b23 = b7 !== b21;
        var s25 = (b23).toString();
        var b39 = Boolean(((Number(s25) != eval("var e33 = \"var x32; if (b27) {  x32 = eval(\\\"s28\\\"); } else { var s31 = String(x30); x32 = s31; }x32\";var l34 = (eval(e33)).length;l34"))) ? 1 : 0);
        var e42 = "('' + (b39)).length";
        var x44 = parseInt(s43, 10);
        x45 = eval(e42) / x44;
        x49 = parseInt(String(x45), 10);
    }
    return x49;
}
fn50(input_B3, input_I3, input_I1, input_B1, input_S2, input_S3, input_I2);
