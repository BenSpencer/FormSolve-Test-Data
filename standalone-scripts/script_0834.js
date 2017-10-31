// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then (input_string('S1') > input_string('S1')) else (if (str((input_bool('B2') && input_bool('B2'))) > input_string('S2')) then (str(input_bool('B3')) > input_string('S2')) else ((if (input_bool('B2') || true) then (if not(bool(int(input_bool('B1')))) then int(not(bool(int(input_bool('B1'))))) else input_int('I1')) else (int(str(input_bool('B1'))) % len(input_string('S3')))) == input_int('I2'))))

var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn53 = function (b1, s42, x37, b15, x48, s2, b20, s12) {
    var b23 = b1;
    var s3 = s2;
    var b4;
    if (s2 > s3) {
        b4 = true;
    } else {
        b4 = false;
    }
    var s17 = s12;
    var b6 = b20;
    var b7 = b6;
    var s10 = ((b6 && b7)).toString();
    var e11 = "s10";
    var b13 = eval(e11) > s12;
    var s16 = (b15).toString();
    var b18 = false;
    if (s16 > s17) {
        b18 = true;
    }
    var b39 = b23;
    var b21;
    if (true) {
        b21 = true;
    } else {
        b21 = b20;
    }
    x45 = parseInt((b39).toString(), 10) % (eval("s42")).length;
    var x47;
    if (b21) {
        var b31 = b23;
        var x38;
        if (eval("var e26 = \"(eval(\\\"b23\\\")) | 0\";var e27 = \"eval(e26)\";!(Boolean(eval(e27)))")) {
            var b33 = !! ((b31) | 0);
            var e34 = "b33";
            x38 = (!(eval(e34))) | 0;
        } else {
            x38 = x37;
        }
        x47 = x38;
    } else {
        x47 = x45;
    }
    var b49 = false;
    if (x47 == x48) {
        b49 = true;
    }
    var x51;
    if (b13) {
        x51 = b18;
    } else {
        x51 = b49;
    }
    var x52;
    if (b1) {
        x52 = b4;
    } else {
        x52 = x51;
    }
    return x52;
}
fn53(input_B1, input_S3, input_I1, input_B3, input_I2, input_S1, input_B2, input_S2);
