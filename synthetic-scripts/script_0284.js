// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (("ovPt" >= str(input_int('I1'))) && input_bool('B2')) then (int(str((not((regex-test(input_string('S3'), /^(Lh|Y)+[0-9]jT$/) == input_bool('B3'))) === ((if (if not(not((int(input_bool('B1')) !== ((input_int('I2') + 6) * int(str(input_int('I1'))))))) then true else bool(len(str(input_bool('B3'))))) then input_string('S2') else input_string('S2')) !== str((int(bool(input_int('I3'))) / input_int('I1'))))))) in [19, 198, 1, 0, 3, 5, -54, 115, 0]) else input_bool('B2'))

var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);

function fn58(x16, b14, s35, b10, x1, x38, s8, b5) {
    var x19 = x1;
    var b56 = b5;
    var b6;
    if (("ovPt" >= '' + (x1))) {
        b6 = b5;
    } else {
        b6 = false;
    }
    var x57;
    if (b6) {
        var b29 = b10;
        var re9 = new RegExp("^(Lh|Y)+[0-9]jT$");
        var b11;
        if (re9.test(s8) == b10) {
            b11 = true;
        } else {
            b11 = false;
        }
        var x41 = x19;
        var s36 = s35;
        x17 = x16;
        x18 = 6;
        var x22 = Number(String(eval("x19")));
        x23 = x17 + x18 * x22;
        var b25 = Number(b14);
        var b26 = x23;
        var b27;
        if (b25 !== b26) {
            b27 = false;
        } else {
            b27 = true;
        }
        var b28;
        if (b27) {
            b28 = false;
        } else {
            b28 = true;
        }
        var x33;
        if (b28) {
            x33 = true;
        } else {
            var l31 = ('' + (b29)).length;
            var b32 = !! (l31);
            x33 = b32;
        }
        var x37;
        if (eval("x33")) {
            x37 = s35;
        } else {
            x37 = s36;
        }
        var b39 = Boolean(x38);
        var s44 = ((Number(b39) / x41)).toString();
        var b45 = x37 !== s44;
        var b48 = !(b11) === eval("b45");
        var s51 = (eval("b48")).toString();
        var opts54 = [19, 198, 1, 0, 3, 5, -54, 115, 0];
        x57 = opts54.indexOf(Number(s51)) > -1;
    } else {
        x57 = b56;
    }
    return x57;
}
fn58(input_I2, input_B1, input_S2, input_B3, input_I1, input_I3, input_S3, input_B2);
