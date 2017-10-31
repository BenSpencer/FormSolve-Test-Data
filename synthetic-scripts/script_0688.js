// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(int((input_int('I2') <= len(input_string('S3')))))) then (input_bool('B3') || bool(int((if not(bool(len(input_string('S1')))) then str((if bool(input_int('I3')) then input_int('I2') else input_int('I3'))) else str((input_int('I3') / int(not((if not(not(bool(len(regex-replace(str((if (str(bool(input_int('I1'))) <= input_string('S2')) then len(str(input_bool('B1'))) else input_int('I1'))), /x(iC|l[-_ ]I)?/, "L1Nx"))))) then input_bool('B3') else not((true && bool(input_int('I2'))))))))))))) else input_bool('B1'))

var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

function fn37(s27, x23, b30) {
    var x35 = x23;
    var b28;
    if ('' + (eval("var b24 = (x23) ? true : false;b24")) <= s27) {
        b28 = true;
    } else {
        b28 = false;
    }
    var s31 = '' + (b30);
    var e33 = "(s31).length";
    var e34 = "eval(e33)";
    return (b28 ? eval(e34) : x35);
}
var fn70 = function (s2, b40, b10, s12, x39, s38, x16, x1) {
    var b68 = b40;
    var x18 = x1;
    var l3 = (s2).length;
    var e4 = "l3";
    var x7 = +((x1 <= eval(e4)));
    var b9;
    if (Boolean(x7)) {
        b9 = false;
    } else {
        b9 = true;
    }
    var b48 = b10;
    var x49 = x18;
    var x22 = x16;
    var b14 = !! ((s12).length);
    var x19 = x16;
    var b17 = (x16) ? true : false;
    var x20;
    if (b17) {
        x20 = x18;
    } else {
        x20 = x19;
    }
    var re43 = new RegExp("x(iC|l[-_ ]I)?");
    var b50 = !! (x49);
    var b51;
    if (b50) {
        b51 = true;
    } else {
        b51 = false;
    }
    var b53 = !(b51);
    var x54;
    if (!(!(Boolean((('' + (fn37(s38, x39, b40))).replace(re43, "L1Nx")).length)))) {
        x54 = b48;
    } else {
        x54 = b53;
    }
    var b55;
    if (x54) {
        b55 = false;
    } else {
        b55 = true;
    }
    var x56 = ~~ (b55);
    x57 = x22 / x56;
    var s59 = (x57).toString();
    var e60 = "s59";
    var e63 = "eval(\"(!(b14) ? String(x20) : eval(e60))\")";
    var b65 = !! (parseInt(eval(e63), 10));
    var b66 = eval("b10") || b65;
    var x69;
    if (b9) {
        x69 = b66;
    } else {
        x69 = b68;
    }
    return x69;
}
fn70(input_S3, input_B1, input_B3, input_S1, input_I1, input_S2, input_I3, input_I2);
