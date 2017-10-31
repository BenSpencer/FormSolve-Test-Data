// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(input_string('S3'))) then (bool(str(input_bool('B2'))) !== input_bool('B1')) else (if input_bool('B2') then (len(str((int(input_string('S3')) <= input_int('I3')))) in [0, 7, 97, 1, 74]) else bool(input_int('I3'))))

var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn27 = function (b10, b7, s1, x14) {
    var b4 = b10;
    var s12 = s1;
    var b3;
    if ( !! (s1)) {
        b3 = false;
    } else {
        b3 = true;
    }
    var x26;
    if (b3) {
        var b6 = !! ('' + (b4));
        var b8 = false;
        if (b6 !== b7) {
            b8 = true;
        }
        x26 = b8;
    } else {
        var x23 = x14;
        var e15 = "x14";
        var b16;
        if (parseInt(s12, 10) <= eval(e15)) {
            b16 = true;
        } else {
            b16 = false;
        }
        var l19 = ('' + (b16)).length;
        var opts21 = [0, 7, 97, 1, 74];
        var b20 = false;
        for (var idx22 = 0; idx22 < opts21.length; idx22++) {
            if (opts21[idx22] == l19) {
                b20 = true;
            }
        }
        var b24 = !! (x23);
        x26 = (eval("b10") ? b20 : b24);
    }
    return x26;
}
fn27(input_B2, input_B1, input_S3, input_I3);
