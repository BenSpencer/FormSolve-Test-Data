// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if bool(str((input_bool('B1') === (str(int(("kvWTa" < str((input_bool('B1') || not(not(input_bool('B3')))))))) in ['x5', 'rC', 'dh', 'iYg', 'zcak', 'WMJbl', 'QrGIm', 'L1V', ''])))) then input_bool('B2') else (int((input_string('S1') === (if (str(input_int('I3')) !== input_string('S2')) then "ij" else str(not(bool(input_int('I3'))))))) in [38, 14, 98, 0, 160, -8])) then (input_bool('B2') != input_bool('B3')) else not(bool(int(input_bool('B3')))))

var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");

function fn61(s49, s46, b48, b45, x50, b47) {
    var b52 = b47;
    var b55 = b47;
    var b51 = b45;

    function fn44(b23, s28, b3, b1, s24, x25) {
        var b2 = b1;
        var b5 = !(eval("b3"));
        var e7 = "!(b5)";
        var b11 = "kvWTa" < ((b2 || eval(e7))).toString();
        var s14 = String(~~(b11));
        var opts17 = ['x5', 'rC', 'dh', 'iYg', 'zcak', 'WMJbl', 'QrGIm', 'L1V', ''];
        var b16 = opts17.indexOf(eval("s14")) > -1;
        var b19 = b1;
        var b20 = b16;
        var x31 = x25;
        var e26 = "x25";
        var b29 = '' + (eval(e26)) !== s28;
        var x35;
        if (b29) {
            x35 = "ij";
        } else {
            var b33 = !((x31) ? true : false);
            var s34 = '' + (b33);
            x35 = s34;
        }
        var b36 = s24 === x35;
        var x38 = +(b36);
        var e39 = "x38";
        var opts41 = [38, 14, 98, 0, 160, -8];
        var b40 = opts41.indexOf(eval(e39)) > -1;
        var x43;
        if ( !! ('' + (b19 === b20))) {
            x43 = b23;
        } else {
            x43 = b40;
        }
        return x43;
    }
    var b58 = Boolean((eval("b55")) | 0);
    var b59;
    if (b58) {
        b59 = false;
    } else {
        b59 = true;
    }
    var x60;
    if (fn44(b45, s46, b47, b48, s49, x50)) {
        var b53;
        if (b51) {
            if (b52) {
                b53 = false;
            } else {
                b53 = true;
            }
        } else {
            if (b52) {
                b53 = true;
            } else {
                b53 = false;
            }
        }
        x60 = b53;
    } else {
        x60 = b59;
    }
    return x60;
}
fn61(input_S1, input_S2, input_B1, input_B2, input_I3, input_B3);
