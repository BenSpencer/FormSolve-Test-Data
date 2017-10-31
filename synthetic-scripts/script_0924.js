// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then bool(int(str(len((input_string('S1') + replace(input_string('S1'), "wHlO", "k")))))) else bool(int(not((input_int('I3') < int((if (input_bool('B3') != not(not((str((len(str(not(not(bool((input_int('I3') + len(str(bool(input_int('I2')))))))))) in [58, 0, 0, 55, -66, -5, 0])) in ['y', 'BMG', '', 'R', 'GC3Yp'])))) then false else input_bool('B1'))))))))

var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);

(function (x17, s2, b1, x13, b40) {
    var b15 = b1;
    var x16 = x13;
    var e14 = "x13";
    var e27 = "var s19 = String((x17) ? true : false);var b23 = !!((x16 + (s19).length));(!(!(b23))).toString()";
    var opts30 = [58, 0, 0, 55, -66, -5, 0];
    var b29 = false;
    for (var idx31 = 0; idx31 < opts30.length; idx31++) {
        if (opts30[idx31] == (eval(e27)).length) {
            b29 = true;
            break;
        }
    }
    var s32 = String(b29);
    var opts34 = ['y', 'BMG', '', 'R', 'GC3Yp'];
    var b38;
    if (b15) {
        if (!(!(opts34.indexOf(s32) > -1))) {
            b38 = false;
        } else {
            b38 = true;
        }
    } else {
        if (!(!(opts34.indexOf(s32) > -1))) {
            b38 = true;
        } else {
            b38 = false;
        }
    }
    var x41;
    if (b38) {
        x41 = false;
    } else {
        x41 = b40;
    }
    var e42 = "x41";
    var b44 = eval(e14);
    var b45 = ~~ (eval(e42));
    var b48 = !! (+(!(b44 < b45)));
    var x49;
    if (b1) {
        x49 = eval("var s3 = s2; var s4 = (s3).replace(\"wHlO\", \"k\");var x5 = s2 + s4;var l7 = (x5).length;var s8 = (l7).toString();var x9 = parseInt(s8, 10);!!(eval(\"x9\"))");
    } else {
        x49 = b48;
    }
    return x49;
})(input_I2, input_S1, input_B3, input_I3, input_B1);
