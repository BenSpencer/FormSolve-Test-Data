// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(int(not(input_bool('B1'))))) then ((len(input_string('S1')) !== int(input_string('S3'))) !== not(input_bool('B1'))) else ((if (str(int((input_string('S3') in ['frCq4', 'VS6', 'pev']))) >= str((if input_bool('B2') then (if input_bool('B3') then input_bool('B1') else input_bool('B3')) else bool(len(str(not(input_bool('B2')))))))) then input_bool('B3') else input_bool('B2')) == not(bool(int(not(bool(str((if input_bool('B2') then input_bool('B3') else input_bool('B2'))))))))))

var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);

var fn62 = function (b1, b24, s6, b31, s18) {
    var s8 = s18;
    var b12 = b1;
    var b30 = b1;
    var b2;
    if (b1) {
        b2 = false;
    } else {
        b2 = true;
    }
    var x3 = +(b2);
    var x9 = Number(s8);
    var b10;
    if ((s6).length !== x9) {
        b10 = true;
    } else {
        b10 = false;
    }
    var b14 = !(eval("b12"));
    var b15 = false;
    if (b10 !== b14) {
        b15 = true;
    }
    var e17 = "b15";
    var b47 = b31;
    var b46 = b24;
    var b43 = b31;
    var b44 = b24;
    var opts20 = ['frCq4', 'VS6', 'pev'];
    var b19 = false;
    for (var idx21 = 0; idx21 < opts20.length; idx21++) {
        if (opts20[idx21] == s18) {
            b19 = true;
        }
    }
    var s23 = '' + ((b19) | 0);
    var b32 = b24;
    var fn29 = function (b26, b25) {
        var b27 = b25;
        var x28;
        if (b25) {
            x28 = b26;
        } else {
            x28 = b27;
        }
        return x28;
    }
    var b33;
    if (b32) {
        b33 = false;
    } else {
        b33 = true;
    }
    var e35 = "(b33).toString()";
    var b37 = ((eval(e35)).length) ? true : false;
    var x38;
    if (b24) {
        x38 = fn29(b30, b31);
    } else {
        x38 = b37;
    }
    var b41;
    if (s23 >= '' + (eval("x38"))) {
        b41 = true;
    } else {
        b41 = false;
    }
    var x45;
    if (b41) {
        x45 = b43;
    } else {
        x45 = b44;
    }
    var s52 = (eval("eval(\"var b48 = b46; (b46 ? b47 : b48)\")")).toString();
    var b53 = Boolean(s52);
    var b54 = !(b53);
    var x55 = +(b54);
    var b57 = !((x55) ? true : false);
    var b58;
    if (x45 == b57) {
        b58 = true;
    } else {
        b58 = false;
    }
    return (!((x3) ? true : false) ? eval(e17) : eval("b58"));
}
fn62(input_B1, input_B2, input_S1, input_B3, input_S3);
