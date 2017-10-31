// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (false && input_bool('B2')) then (int(str((if input_bool('B2') then regex-test(input_string('S1'), /^c(yo[a-z]| -x)?$/) else (int(input_bool('B2')) != (if false then input_int('I3') else len(input_string('S1'))))))) > input_int('I1')) else ((if bool(str(bool(str(bool(input_int('I3')))))) then len(input_string('S3')) else int(not(not(input_bool('B3'))))) <= int(input_bool('B1'))))

var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

(function (b33, x10, s11, b1, x20, s30, b39) {
    var x23 = x10;
    var b4 = b1;
    var b2;
    if (b1) {
        b2 = false;
    } else {
        b2 = false;
    }
    var x45;
    if (b2) {
        var b8 = b4;
        var s6 = s11;
        var e5 = "b4";
        var x9 = (b8) | 0;
        var l12 = (s11).length;
        var x13;
        if (false) {
            x13 = x10;
        } else {
            x13 = l12;
        }
        var b14 = x9;
        var b15 = x13;
        var e16 = "b14 != b15";
        var s18 = String((eval(e5) ? (s6).match(/^c(yo[a-z]| -x)?$/) !== null : eval(e16)));
        var b21;
        if (parseInt(s18, 10) > x20) {
            b21 = true;
        } else {
            b21 = false;
        }
        x45 = b21;
    } else {
        var e28 = "var b24 = (x23) ? true : false;var b26 = ('' + (b24)) ? true : false;'' + (b26)";
        var b35;
        if (!(b33)) {
            b35 = false;
        } else {
            b35 = true;
        }
        var x38;
        if (Boolean(eval(e28))) {
            x38 = eval("(s30).length");
        } else {
            x38 = eval("+(b35)");
        }
        var e42 = "var e40 = \"b39\";var x41 = ~~(eval(e40));x41";
        var b43 = x38 <= eval(e42);
        x45 = b43;
    }
    return x45;
})(input_B3, input_I3, input_S1, input_B2, input_I1, input_S3, input_B1);
