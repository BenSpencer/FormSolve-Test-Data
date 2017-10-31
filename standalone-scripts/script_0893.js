// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I2') == len(str(int(input_bool('B2'))))) then (int(not((int(str(input_bool('B3'))) !== (int(regex-replace(str(len(str((int(input_bool('B2')) == input_int('I2'))))), /RAgJyIZnWi([A-Z]|.k)+o/, "PSciL")) * int(not(input_bool('B3'))))))) % int(not(bool(input_string('S3'))))) else input_int('I3'))

var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);

(function (x1, s33, x39, b11, b23) {
    var x14 = x1;
    var b2 = b11;
    var s4 = String(Number(b2));
    var l5 = (s4).length;
    var b6;
    if (x1 == l5) {
        b6 = true;
    } else {
        b6 = false;
    }
    var b8 = b23;
    var x13 = ~~ (eval("b11"));
    var b15 = false;
    if (x13 == x14) {
        b15 = true;
    }
    var s19 = '' + (((b15).toString()).length);
    var re21 = new RegExp("RAgJyIZnWi([A-Z]|.k)+o");
    var b24;
    if (b23) {
        b24 = false;
    } else {
        b24 = true;
    }
    x26 = parseInt((s19).replace(re21, "PSciL"), 10);
    x27 = Number(b24);
    var b28 = parseInt(String(b8), 10);
    var b29 = x26 * x27;
    var b30;
    if (b28 !== b29) {
        b30 = false;
    } else {
        b30 = true;
    }
    x37 = eval("~~(b30)");
    x38 = (!(Boolean(s33))) | 0;
    var x40;
    if (b6) {
        x40 = x37 % x38;
    } else {
        x40 = x39;
    }
    return x40;
})(input_I2, input_S3, input_I3, input_B2, input_B3);
