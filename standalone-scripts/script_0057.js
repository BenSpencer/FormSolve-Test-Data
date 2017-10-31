// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(input_bool('B3')) in [-36, 0, 99, 1, 23, -45, 1, 32, -85]) then (if (if bool(input_string('S2')) then not((if input_bool('B2') then not(bool(str((bool(input_string('S1')) && (input_bool('B3') !== bool(input_string('S1'))))))) else not(not(not((bool(input_string('S1')) == input_bool('B2'))))))) else bool(input_string('S3'))) then input_string('S3') else input_string('S2')) else (if bool(len(str((input_string('S1') == "myA0")))) then str(input_int('I3')) else (str(input_int('I1')) + "g")))

var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);

var fn55 = function (b25, s38, s33, x47, b1, s11, x49) {
    var b13 = b1;
    var s40 = s11;
    var opts4 = [-36, 0, 99, 1, 23, -45, 1, 32, -85];
    var s50 = (x49).toString();
    var x51 = s50;
    var x52 = "g";
    var x54;
    if (opts4.indexOf(Number(b1)) > -1) {
        var s6 = s38;
        var s37 = s33;
        var b7 = !! (s6);
        var b9 = b25;
        var s23 = s11;
        var e10 = "b9";
        var x31;
        if (eval(e10)) {
            var s14 = s11;
            var b18;
            if ( !! (s11)) {
                var b16 = b13;
                var b17 = Boolean(s14);
                b18 = b16 !== b17;
            } else {
                b18 = false;
            }
            var s20 = (b18).toString();
            var b22;
            if ( !! (s20)) {
                b22 = false;
            } else {
                b22 = true;
            }
            x31 = b22;
        } else {
            var b24 = (s23) ? true : false;
            var b26;
            if (b24) {
                if (b25) {
                    b26 = true;
                } else {
                    b26 = false;
                }
            } else {
                if (b25) {
                    b26 = false;
                } else {
                    b26 = true;
                }
            }
            var b28;
            if (b26) {
                b28 = false;
            } else {
                b28 = true;
            }
            var b30 = !(!(b28));
            x31 = b30;
        }
        var b32;
        if (x31) {
            b32 = false;
        } else {
            b32 = true;
        }
        var b34 = Boolean(s33);
        var x39;
        if (eval("(eval(\"b7\") ? b32 : b34)")) {
            x39 = s37;
        } else {
            x39 = s38;
        }
        x54 = x39;
    } else {
        x54 = ((((eval("var b41; if (s40 == \"myA0\") { b41 = true; } else { b41 = false; }b41")).toString()).length) ? true : false ? (x47).toString() : x51 + x52);
    }
    return x54;
}
fn55(input_B2, input_S2, input_S3, input_I3, input_B3, input_S1, input_I1);
