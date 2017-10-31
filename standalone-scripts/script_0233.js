// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if (input_string('S1') === str(bool(int((bool(input_int('I1')) && not(input_bool('B1'))))))) then not(input_bool('B3')) else bool(str(input_bool('B1')))) then (bool(int(bool((int((int(str(input_int('I2'))) > (if input_bool('B3') then int(not(not((input_bool('B2') && not((int(input_string('S2')) == int(str((len(str(input_int('I1'))) >= input_int('I1')))))))))) else input_int('I3')))) / 173)))) && input_bool('B1')) else not(not(bool(input_string('S2')))))

var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn64 = function (b13, s1, x2, b24, s25, x20, x46, b15) {
    var b56 = b15;
    var s59 = s25;
    var x27 = x2;
    var b23 = b13;
    var b4 = b15;
    var b3 = (x2) ? true : false;
    var b5 = !(b4);
    var b6;
    if (b5) {
        b6 = b3;
    } else {
        b6 = false;
    }
    var b9 = (~~(b6)) ? true : false;
    var b11;
    if (s1 === (b9).toString()) {
        b11 = true;
    } else {
        b11 = false;
    }
    var x19;
    if (b11) {
        var b14;
        if (b13) {
            b14 = false;
        } else {
            b14 = true;
        }
        x19 = b14;
    } else {
        var s17 = (eval("b15")).toString();
        x19 = Boolean(s17);
    }
    var x47;
    if (b23) {
        var x31 = x27;
        var l30 = (eval("String(x27)")).length;
        var b32 = false;
        if (l30 >= x31) {
            b32 = true;
        }
        var b36 = Number(s25);
        var b37 = parseInt((b32).toString(), 10);
        var b38;
        if (b36 == b37) {
            b38 = false;
        } else {
            b38 = true;
        }
        var b39;
        if (b24) {
            b39 = b38;
        } else {
            b39 = false;
        }
        var b42;
        if (eval("b39")) {
            b42 = false;
        } else {
            b42 = true;
        }
        var e43 = "b42";
        x47 = +(!(eval(e43)));
    } else {
        x47 = x46;
    }
    var x50 = +((parseInt((x20).toString(), 10) > x47));
    var b57 = (Number(((x50 / 173)) ? true : false)) ? true : false;
    var b58 = b56;
    var x63;
    if (x19) {
        x63 = b57 && b58;
    } else {
        x63 = !(!(Boolean(s59)));
    }
    return x63;
}
fn64(input_B3, input_S1, input_I1, input_B2, input_S2, input_I2, input_I3, input_B1);
