// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if (bool(str(bool(input_int('I3')))) && (if (if false then (input_bool('B2') != (true !== bool(len(input_string('S1'))))) else (if bool(int((if input_bool('B2') then "" else input_string('S1')))) then not((input_bool('B2') == (str(input_bool('B2')) >= str((if input_bool('B3') then int(input_string('S1')) else 54))))) else bool(input_int('I1')))) then bool(input_int('I3')) else input_bool('B2'))) then not(not(input_bool('B2'))) else input_bool('B2')) then input_string('S3') else input_string('S2'))

var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);

var fn56 = function (s54, b24, x1, b13, x35, s14, s53) {
    var b47 = b13;
    var b50 = b13;
    var x39 = x1;
    var s3 = ( !! (x1)).toString();
    var b4 = (s3) ? true : false;
    var b45;
    if (b4) {
        var b42 = b13;
        var b5 = b13;
        var s6 = s14;
        var b8 = !! ((s6).length);
        var b11;
        if (b5) {
            b11 = !(true !== b8);
        } else {
            b11 = (true !== b8);
        }
        var b21 = b13;
        var s25 = s14;
        var e19 = "eval(\"var x15; if (b13) {  x15 = \\\"\\\"; } else {  x15 = s14; }Number(eval(\\\"x15\\\"))\")";
        var b36 = Boolean(x35);
        var x37;
        if ((eval(e19)) ? true : false) {
            var b22 = b21;
            var x27;
            if (b24) {
                x27 = parseInt(s25, 10);
            } else {
                x27 = 54;
            }
            var b29 = String(b22) >= '' + (x27);
            var e31 = "b29";
            var b32 = b21;
            var b33 = eval(e31);
            var b34;
            if (b32 == b33) {
                b34 = false;
            } else {
                b34 = true;
            }
            x37 = b34;
        } else {
            x37 = b36;
        }
        var x38;
        if (false) {
            x38 = b11;
        } else {
            x38 = x37;
        }
        var e41 = "!!(x39)";
        var x43;
        if (x38) {
            x43 = eval(e41);
        } else {
            x43 = b42;
        }
        b45 = eval("x43");
    } else {
        b45 = false;
    }
    var x52;
    if (b45) {
        var b48;
        if (b47) {
            b48 = false;
        } else {
            b48 = true;
        }
        x52 = !(b48);
    } else {
        var e51 = "b50";
        x52 = eval(e51);
    }
    return (x52 ? s53 : s54);
}
fn56(input_S2, input_B3, input_I3, input_B2, input_I1, input_S1, input_S3);
