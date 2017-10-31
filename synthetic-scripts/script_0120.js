// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I3')) then str((str((not(not(not(input_bool('B3')))) !== (if input_bool('B1') then input_bool('B1') else not(input_bool('B2'))))) < str(bool(int(not(bool(str(bool(input_string('S1')))))))))) else str(input_int('I3')))

var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);

(function (b7, b9, s16, b3, x1) {
    var x30 = x1;
    var b2 = !! (x1);
    var x32;
    if (b2) {
        var b4 = !(b3);
        var b5 = !(b4);
        var b8 = b7;
        var x12;
        if (b7) {
            x12 = b8;
        } else {
            var b10 = !(b9);
            var e11 = "b10";
            x12 = eval(e11);
        }
        var b13 = false;
        if (!(b5) !== x12) {
            b13 = true;
        }
        var s15 = '' + (b13);
        var b17 = (s16) ? true : false;
        var s19 = (eval("b17")).toString();
        var b20 = (s19) ? true : false;
        var b21 = !(b20);
        var x22 = ~~ (b21);
        var e24 = "!!(x22)";
        var b26 = s15;
        var b27 = '' + (eval(e24));
        var s29 = '' + (eval("b26 < b27"));
        x32 = s29;
    } else {
        var s31 = '' + (x30);
        x32 = s31;
    }
    return x32;
})(input_B1, input_B2, input_S1, input_B3, input_I3);
