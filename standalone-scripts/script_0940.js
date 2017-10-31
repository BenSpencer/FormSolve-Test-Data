// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B3')) then input_string('S1') else str((int(not(bool(len(str(len(input_string('S1'))))))) < int((bool(input_string('S1')) && ((if bool(str(bool(int(input_string('S3'))))) then ((input_int('I1') >= (if bool(str(bool(input_int('I2')))) then input_int('I2') else input_int('I1'))) && input_bool('B3')) else (input_string('S2') <= input_string('S1'))) || bool(str(input_int('I1')))))))))

var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);

function fn51(x18, s32, s13, s11, x19, b1) {
    var b29 = b1;
    var s3 = s11;
    var b2 = !(b1);
    var s4 = s11;
    var s6 = '' + ((s4).length);
    var l7 = (s6).length;
    var b8 = !! (l7);
    var b9;
    if (b8) {
        b9 = false;
    } else {
        b9 = true;
    }
    var x10 = (b9) ? 1 : 0;
    var s33 = s11;
    var b12 = (s11) ? true : false;
    var x37 = x18;
    var s38 = (x37).toString();
    var b40;
    if ((s38) ? true : false) {
        b40 = true;
    } else {
        var b15 = !! (parseInt(s13, 10));
        var s16 = String(b15);
        var b34 = s32;
        var b35 = s33;
        var x36;
        if ( !! (s16)) {
            var x25 = x18;
            var x24 = x19;
            var e20 = "x19";
            var b27 = x18 >= ( !! ('' + ((eval(e20)) ? true : false)) ? x24 : x25);
            x36 = (b27 && b29);
        } else {
            x36 = b34 <= b35;
        }
        b40 = x36;
    }
    var b42 = b12 && b40;
    var e45 = "(b42) | 0";
    var b46 = x10;
    var b47 = eval(e45);
    var e49 = "'' + (b46 < b47)";
    var x50;
    if (b2) {
        x50 = s3;
    } else {
        x50 = eval(e49);
    }
    return x50;
}
fn51(input_I1, input_S2, input_S3, input_S1, input_I2, input_B3);
