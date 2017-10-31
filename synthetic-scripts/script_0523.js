// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(len(input_string('S2')))) then "K" else str((str(len(str(input_bool('B3')))) > str(int((if not(input_bool('B3')) then not(input_bool('B2')) else (if (not(input_bool('B2')) || not(not(bool(str((if true then input_bool('B2') else (if input_bool('B1') then (input_bool('B2') !== (if bool(int((if false then input_bool('B3') else input_bool('B3')))) then not(input_bool('B2')) else input_bool('B1'))) else bool(str(int(str(not(not(input_bool('B3')))))))))))))) then input_bool('B2') else (int(bool(input_int('I1'))) < int(input_string('S3'))))))))))

var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");

function fn65(s52, b12, b10, b17, x49, s1) {
    var e2 = "s1";
    var l3 = (eval(e2)).length;
    var s4 = '' + (l3);
    var b5 = (s4) ? true : false;
    var x64;
    if (b5) {
        x64 = "K";
    } else {
        var b6 = b10;
        var l8 = (String(b6)).length;
        var b19 = b10;
        var b14 = b12;
        var b11;
        if (b10) {
            b11 = false;
        } else {
            b11 = true;
        }
        var b13 = !(b12);
        var x58;
        if (b11) {
            x58 = b13;
        } else {
            var b47 = b14;
            var b16 = b14;
            var b18 = b16;
            var b31 = b19;
            var b27 = b17;
            var b25 = b18;
            var x23 = (eval("var b20 = b19; (false ? b19 : b20)")) ? 1 : 0;
            var b24 = !! (x23);
            var b26;
            if (b25) {
                b26 = false;
            } else {
                b26 = true;
            }
            var x28;
            if (b24) {
                x28 = b26;
            } else {
                x28 = b27;
            }
            var b29 = false;
            if (b18 !== x28) {
                b29 = true;
            }
            var b32;
            if (b31) {
                b32 = false;
            } else {
                b32 = true;
            }
            var b34 = !(eval("b32"));
            var s35 = String(b34);
            var x36 = parseInt(s35, 10);
            var x39;
            if (b17) {
                x39 = b29;
            } else {
                x39 = !! ((x36).toString());
            }
            var s41 = String((true ? b16 : x39));
            var b42 = Boolean(s41);
            var b43 = !(b42);
            var b44;
            if (b43) {
                b44 = false;
            } else {
                b44 = true;
            }
            var x57;
            if ((!(b14) || b44)) {
                var e48 = "b47";
                x57 = eval(e48);
            } else {
                var x51 = +( !! (x49));
                var e53 = "s52";
                var b55 = x51 < Number(eval(e53));
                x57 = b55;
            }
            x58 = x57;
        }
        var s60 = (Number(x58)).toString();
        x64 = String((String(l8) > s60));
    }
    return x64;
}
fn65(input_S3, input_B2, input_B3, input_B1, input_I1, input_S2);
