// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if false then (if not((not(bool(len(input_string('S3')))) == (int(input_string('S1')) in [48, 1, 0, 91, 3, 78, 45]))) then int((if not(not(input_bool('B3'))) then input_bool('B2') else (str(input_int('I1')) < input_string('S2')))) else int((if (input_string('S1') < input_string('S2')) then bool(input_int('I3')) else false))) else int((((input_int('I1') in [40, 0, 2, -87, 146]) != input_bool('B3')) && bool(input_int('I1')))))

var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");

function fn53(x34, b14, s28, b17, s22, x18, s1) {
    var x40 = x18;
    var b44 = b14;
    var x52;
    if (false) {
        var s30 = s22;
        var s5 = s28;
        var b4;
        if (((s1).length) ? true : false) {
            b4 = false;
        } else {
            b4 = true;
        }
        var opts8 = [48, 1, 0, 91, 3, 78, 45];
        var b7 = opts8.indexOf(parseInt(s5, 10)) > -1;
        var b10;
        if (b4) {
            b10 = b7;
        } else {
            b10 = !b7;
        }
        var x39;
        if (eval("!(b10)")) {
            var e27 = "var b15; if (b14) { b15 = false; } else { b15 = true; }var x25; if (!(b15)) {  x25 = b17; } else { var s21 = '' + (eval(\"eval(\\\"x18\\\")\"));var b23 = s21 < s22; x25 = b23; }var x26 = (x25) ? 1 : 0;x26";
            x39 = eval(e27);
        } else {
            var b32 = eval("s28") < eval("s30");
            var x36;
            if (b32) {
                var b35 = Boolean(x34);
                x36 = b35;
            } else {
                x36 = false;
            }
            var e37 = "x36";
            x39 = Number(eval(e37));
        }
        x52 = x39;
    } else {
        var x47 = x40;
        var opts42 = [40, 0, 2, -87, 146];
        var b45;
        if (opts42.indexOf(x40) > -1) {
            b45 = !b44;
        } else {
            b45 = b44;
        }
        var b48 = !! (x47);
        var b49 = false;
        if (b45 && b48) {
            b49 = true;
        }
        x52 = ~~ (b49);
    }
    return x52;
}
fn53(input_I3, input_B3, input_S1, input_B2, input_S2, input_I1, input_S3);
