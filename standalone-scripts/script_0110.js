// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(((if not(bool(int((not(bool(len(input_string('S1')))) == regex-test(str(input_int('I1')), /^Y[A-Z]B(\davHH\S?ppgQNa|w)sC $/))))) then "" else str((len(str((len(str(bool(str(input_int('I1'))))) === input_int('I3')))) === int((not(input_bool('B1')) == bool(input_string('S1'))))))) > str(int(not(not(not(not(bool(str(input_int('I1'))))))))))) then (input_int('I3') !== input_int('I2')) else (int(bool(str(regex-test(input_string('S1'), /^(pm|\d)+[-_ ]mqw$/)))) !== -38))

var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);

function fn64(x52, x14, b26, x19, s1) {
    var x51 = x19;
    var s56 = s1;
    var x38 = x14;
    var x6 = x14;
    var s28 = s1;
    var e5 = "var l2 = (s1).length;var b3 = (l2) ? true : false;!(b3)";
    var s7 = (x6).toString();
    var b9 = eval(e5);
    var b10 = (s7).match(/^Y[A-Z]B(\davHH\S?ppgQNa|w)sC $/) !== null;
    var x11 = +(b9 == b10);
    var b13;
    if ((x11) ? true : false) {
        b13 = false;
    } else {
        b13 = true;
    }
    var b27 = !(b26);
    var e29 = "s28";
    var b31;
    if (b27) {
        if ( !! (eval(e29))) {
            b31 = true;
        } else {
            b31 = false;
        }
    } else {
        if ( !! (eval(e29))) {
            b31 = false;
        } else {
            b31 = true;
        }
    }
    var x33 = +(b31);
    var b34 = eval("var l24 = ('' + (eval(\"var s15 = (x14).toString();var b16 = !!(s15);var l18 = ((b16).toString()).length;var b20 = l18 === x19;b20\"))).length;l24") === x33;
    var x37;
    if (b13) {
        x37 = "";
    } else {
        x37 = '' + (b34);
    }
    var b44 = !(!(eval("var s39 = String(x38);var b40 = !!(s39);var b41 = !(b40);b41")));
    var b48 = false;
    if (x37 > String((!(b44)) | 0)) {
        b48 = true;
    }
    var x60 = ( !! (String((s56).match(/^(pm|\d)+[-_ ]mqw$/) !== null))) | 0;
    var b61;
    if (x60 !== -38) {
        b61 = true;
    } else {
        b61 = false;
    }
    var x63;
    if (!(b48)) {
        var b54 = x51 !== eval("x52");
        x63 = b54;
    } else {
        x63 = b61;
    }
    return x63;
}
fn64(input_I2, input_I1, input_B1, input_I3, input_S1);
