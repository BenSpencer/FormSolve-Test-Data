// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool((if true then 0 else int(bool((if input_bool('B3') then input_int('I3') else (input_int('I3') - input_int('I3'))))))) then ((if (if false then (bool(input_string('S3')) !== bool(str(int(input_bool('B2'))))) else bool(input_string('S2'))) then bool(int(input_string('S1'))) else (input_string('S3') > input_string('S1'))) != not(input_bool('B2'))) else (len(str(len(str(input_int('I3'))))) in [130, 0, 8, 1, 0, 3, 1, 0]))

var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn51 = function (x2, s37, b35, s36, s34, b1) {
    var x42 = x2;
    var x12;
    if (true) {
        x12 = 0;
    } else {
        var b10 = Boolean(eval("var x3 = x2; var x4 = x3; x5 = x3; x6 = x4;var e7 = \"x5 - x6\";(b1 ? x2 : eval(e7))"));
        var x11 = (b10) ? 1 : 0;
        x12 = x11;
    }
    var b13 = Boolean(x12);
    var s45 = String(((x42).toString()).length);
    var opts48 = [130, 0, 8, 1, 0, 3, 1, 0];
    var b47 = false;
    for (var idx49 = 0; idx49 < opts48.length; idx49++) {
        if (opts48[idx49] == (s45).length) {
            b47 = true;
        }
    }
    var x50;
    if (b13) {
        var b38 = b35;

        function fn33(s25, b16, s14, s22) {
            var s29 = s25;
            var s28 = s14;
            var x24;
            if (false) {
                x24 = ( !! (s14) !== Boolean((Number(b16)).toString()));
            } else {
                x24 = !! (s22);
            }
            var x26 = Number(s25);
            var b27 = !! (x26);
            var b30 = s28;
            var b31 = s29;
            var x32;
            if (x24) {
                x32 = b27;
            } else {
                x32 = b30 > b31;
            }
            return x32;
        }
        var b39 = !(b38);
        var b40;
        if (fn33(s34, b35, s36, s37) != b39) {
            b40 = true;
        } else {
            b40 = false;
        }
        x50 = b40;
    } else {
        x50 = b47;
    }
    return x50;
}
fn51(input_I3, input_S2, input_B2, input_S3, input_S1, input_B3);
