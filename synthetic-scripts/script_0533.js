// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then (if bool(str(bool(str(int(bool(int(str(input_int('I2'))))))))) then (str(input_int('I1')) < str(bool(len(str(input_bool('B3')))))) else bool(str(int(bool(str(input_bool('B2'))))))) else not(not((not((int(not(bool(input_int('I3')))) > int(input_string('S3')))) === bool(len(input_string('S3')))))))

var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);

(function (b23, x32, s36, b1, x2, x12) {
    var b14 = b1;
    var s41 = s36;
    var b33 = !! (x32);
    var b34 = !(b33);
    var b38;
    if (+(b34) > parseInt(s36, 10)) {
        b38 = true;
    } else {
        b38 = false;
    }
    var e43 = "(s41).length";
    var b44 = !! (eval(e43));
    var b48 = !((!(b38) === eval("b44")));
    var b49 = !(b48);
    var x50;
    if (b1) {
        var e10 = "var x4 = parseInt(String(x2), 10);var s9 = '' + (!!(String((Boolean(x4)) ? 1 : 0)));s9";
        var s13 = '' + (x12);
        var l16 = ((b14).toString()).length;
        var b17 = (l16) ? true : false;
        var e19 = "String(b17)";
        var b20 = s13;
        var b21 = eval(e19);
        var e22 = "b20 < b21";
        var e29 = "var b25 = ('' + (b23)) ? true : false;var x26 = +(b25);var e28 = \"'' + (x26)\";eval(e28)";
        var x31;
        if ((eval(e10)) ? true : false) {
            x31 = eval(e22);
        } else {
            x31 = (eval(e29)) ? true : false;
        }
        x50 = x31;
    } else {
        x50 = b49;
    }
    return x50;
})(input_B2, input_I3, input_S3, input_B3, input_I2, input_I1);
