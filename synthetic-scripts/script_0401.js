// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((input_bool('B1') !== ((if not(input_bool('B3')) then input_string('S1') else str(input_bool('B3'))) in ['ia', 'Tw1D', 'g6f', 'zwuIL']))) then (bool(len(str(bool(str(((input_int('I1') <= (int(input_bool('B3')) % int(not((int(bool(input_int('I3'))) === (if not((if not(bool(input_int('I2'))) then false else regex-test(input_string('S1'), /^([A-Z]|mOKhNN)?$/))) then (1 + int(bool(len(str(input_bool('B2')))))) else input_int('I3'))))))) == regex-test(str(input_bool('B3')), /^\SjWTDQBL(-|x[0-9]ld)*$/))))))) == not(input_bool('B3'))) else false)

var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn66 = function (x22, x25, b32, b1, x18, s10, b11) {
    var b19 = b11;
    var s28 = s10;
    var opts13 = ['ia', 'Tw1D', 'g6f', 'zwuIL'];
    var b15;
    if (b1 !== opts13.indexOf((function (s4, b2) {
        var b5 = b2;
        var x8;
        if (!(b2)) {
            x8 = s4;
        } else {
            var e7 = "'' + (b5)";
            x8 = eval(e7);
        }
        return x8;
    })(s10, b11)) > -1) {
        b15 = true;
    } else {
        b15 = false;
    }
    var x65;
    if (!(b15)) {
        var b61 = b19;
        var b51 = b19;
        var e50 = "var b44; if (eval(\"var x39 = x22; var b26 = (x25) ? true : false;var b27 = !(b26);var x30; if (b27) { x30 = false; } else { var re29 = /^([A-Z]|mOKhNN)?$/; x30 = re29.test(s28); }var b31; if (x30) { b31 = false; } else { b31 = true; }var x40; if (b31) { var s33 = '' + (b32);var l34 = (s33).length;var b35 = (l34) ? true : false;x37 = 1; x38 = +(b35); x40 = x37 + x38; } else { x40 = x39; }var b41 = +((x22) ? true : false) === x40;b41\")) { b44 = false; } else { b44 = true; }var x45 = +(b44);x46 = (eval(\"b19\")) ? 1 : 0 % x45;var b48 = x18; var b49 = x46;b48 <= b49";
        var s52 = (b51).toString();
        var re53 = /^\SjWTDQBL(-|x[0-9]ld)*$/;
        var s56 = '' + ((eval(e50) == re53.test(s52)));
        var b57 = !! (s56);
        var s58 = String(b57);
        var b60 = !! ((s58).length);
        x65 = (b60 == !(b61));
    } else {
        x65 = false;
    }
    return x65;
}
fn66(input_I3, input_I2, input_B2, input_B1, input_I1, input_S1, input_B3);
