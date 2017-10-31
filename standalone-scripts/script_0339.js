// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (len(str((if input_bool('B2') then bool(int(str(input_int('I2')))) else bool(int(input_bool('B3')))))) >= int((if input_bool('B1') then str(len(str((input_bool('B2') === bool(len(str((not(bool(int(input_string('S1')))) == bool(str(bool(input_string('S3')))))))))))) else input_string('S2')))) then input_bool('B3') else not(input_bool('B2')))

var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn49 = function (s22, s38, b1, x2, b45, s18, b15) {
    var b7 = b45;
    var b46 = b1;
    var b16 = b1;
    var s3 = (x2).toString();
    var x4 = Number(s3);
    var x12;
    if (b1) {
        x12 = eval("Boolean(x4)");
    } else {
        x12 = !! (eval("Number(eval(\"b7\"))"));
    }
    var s13 = String(x12);
    var l14 = (s13).length;
    var x41;
    if (b15) {
        var x19 = Number(s18);
        var b21;
        if (Boolean(x19)) {
            b21 = false;
        } else {
            b21 = true;
        }
        var b27;
        if (b21) {
            if ((eval("var b23 = Boolean(s22);String(b23)")) ? true : false) {
                b27 = true;
            } else {
                b27 = false;
            }
        } else {
            if ((eval("var b23 = Boolean(s22);String(b23)")) ? true : false) {
                b27 = false;
            } else {
                b27 = true;
            }
        }
        var s29 = String(b27);
        var l30 = (s29).length;
        var b31 = !! (l30);
        var b32 = eval("b16");
        var b33 = b31;
        var e35 = "'' + (b32 === b33)";
        x41 = String((eval(e35)).length);
    } else {
        x41 = eval("eval(\"s38\")");
    }
    var x42 = parseInt(x41, 10);
    var b43;
    if (l14 >= x42) {
        b43 = true;
    } else {
        b43 = false;
    }
    var b47;
    if (b46) {
        b47 = false;
    } else {
        b47 = true;
    }
    return (b43 ? b45 : b47);
}
fn49(input_S3, input_S2, input_B2, input_I2, input_B3, input_S1, input_B1);
