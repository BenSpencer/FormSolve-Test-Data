// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B2') then (int(bool(str(not((int(input_string('S3')) != int(str(not(input_bool('B3'))))))))) == input_int('I2')) else (bool(input_int('I3')) || not(bool(input_int('I3'))))) then input_int('I3') else len(str(int((str((if (int(input_bool('B1')) >= int(not(input_bool('B1')))) then input_bool('B3') else (len(input_string('S2')) < int((str(input_bool('B2')) === str((false && bool(input_string('S3'))))))))) in ['nkQ6', 'q', 'GKt', 'dsz', 'Gz7s', 'QO', 'M', 'rctG'])))))

var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn64 = function (s2, s37, x19, b1, x15, b28, b36) {
    var s41 = s2;
    var b4 = b36;
    var x27 = x19;
    var b39 = b1;
    var e6 = "var b5; if (b4) { b5 = false; } else { b5 = true; }b5";
    var s7 = (eval(e6)).toString();
    var x8 = parseInt(s7, 10);
    var b9 = Number(s2) != x8;
    var s12 = '' + (!(b9));
    var b13 = Boolean(s12);
    var b16 = (b13) | 0 == x15;
    var e18 = "b16";
    var x26;
    if (b1) {
        x26 = eval(e18);
    } else {
        var x21 = x19;
        var b22 = (x21) ? true : false;
        var b23;
        if (b22) {
            b23 = false;
        } else {
            b23 = true;
        }
        var b24;
        if (b23) {
            b24 = true;
        } else {
            b24 = !! (x19);
        }
        x26 = b24;
    }
    var b30 = b28;
    var x29 = (b28) | 0;
    var b32 = !(eval("b30"));
    var x33 = (b32) ? 1 : 0;
    var x54;
    if ((x29 >= x33)) {
        x54 = b36;
    } else {
        var e53 = "var b51 = false; if ((s37).length < eval(\"var b42 = Boolean(s41);var b43 = false; if (false && b42) { b43 = true; }var b47; if ('' + (b39) === String(eval(\\\"b43\\\"))) { b47 = true; } else { b47 = false; }Number(b47)\")) { b51 = true; }b51";
        x54 = eval(e53);
    }
    var opts58 = ['nkQ6', 'q', 'GKt', 'dsz', 'Gz7s', 'QO', 'M', 'rctG'];
    var b57 = opts58.indexOf(String(eval("x54"))) > -1;
    var x60 = (b57) | 0;
    var l62 = ((x60).toString()).length;
    return (x26 ? x27 : l62);
}
fn64(input_S3, input_S2, input_I3, input_B2, input_I2, input_B1, input_B3);
