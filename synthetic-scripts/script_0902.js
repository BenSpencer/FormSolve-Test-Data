// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if false then input_int('I1') else (if (str((str(not((bool(input_string('S1')) != input_bool('B2')))) == str((if (if bool(input_int('I3')) then (if (input_int('I1') in [0, 70, 0, 31, 1, 7, 0, 60, 73]) then input_bool('B3') else (input_int('I2') in [157, 1, 1])) else bool(input_string('S3'))) then input_int('I2') else input_int('I2'))))) in ['dZ', '', 'IVp1v']) then int((int(input_bool('B2')) > int(str(input_bool('B3'))))) else input_int('I2')))

var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);

function fn23(b16, x11, x18) {
    var e15 = "var opts13 = [0, 70, 0, 31, 1, 7, 0, 60, 73];opts13.indexOf(x11) > -1";
    var x22;
    if (eval(e15)) {
        x22 = eval("b16");
    } else {
        var opts20 = [157, 1, 1];
        x22 = opts20.indexOf(x18) > -1;
    }
    return x22;
}(function (x1, x9, b4, x26, b24, s2, s27) {
    var x25 = x1;
    var x48 = x26;
    var b42 = b24;
    var b40 = b4;
    var b3 = (s2) ? true : false;
    var b5 = false;
    if (b3 != b4) {
        b5 = true;
    }
    var s8 = '' + (!(b5));
    var x30 = x26;
    var x31 = x26;
    var x29;
    if ((x9) ? true : false) {
        x29 = fn23(b24, x25, x26);
    } else {
        x29 = Boolean(s27);
    }
    var x32;
    if (x29) {
        x32 = x30;
    } else {
        x32 = x31;
    }
    var b34 = s8 == '' + (x32);
    var s36 = '' + (b34);
    var opts38 = ['dZ', '', 'IVp1v'];
    var b37 = opts38.indexOf(s36) > -1;
    var x41 = (b40) ? 1 : 0;
    var x44 = Number((b42).toString());
    var b45 = x41;
    var b46 = x44;
    var x49;
    if (b37) {
        x49 = ~~ (b45 > b46);
    } else {
        x49 = x48;
    }
    return (false ? x1 : x49);
})(input_I1, input_I3, input_B2, input_I2, input_B3, input_S1, input_S3);
