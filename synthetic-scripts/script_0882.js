// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((bool(int(bool((if (int(str(bool(int(input_string('S2'))))) in [0, 9, -11, 7, 0, 1, 0, -21, 28]) then str(bool(input_int('I1'))) else str(input_int('I3')))))) == bool(input_int('I3'))) || input_bool('B2')) then (int(not(bool(str(not(input_bool('B2')))))) >= int(bool(int(bool(len(input_string('S2'))))))) else not(regex-test(input_string('S2'), /^(-s\s?U|_ xp\s)D[A-Z]P$/)))

var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);

(function (x10, s1, b23, x13) {
    var s32 = s1;
    var s40 = s1;
    var b26 = b23;
    var x19 = x13;
    var x2 = parseInt(s1, 10);
    var b3 = Boolean(x2);
    var s4 = String(b3);
    var x5 = Number(s4);
    var opts8 = [0, 9, -11, 7, 0, 1, 0, -21, 28];
    var s12 = '' + (Boolean(x10));
    var x15;
    if (opts8.indexOf(eval("x5")) > -1) {
        x15 = s12;
    } else {
        var s14 = (x13).toString();
        x15 = s14;
    }
    var b16 = !! (x15);
    var x17 = +(b16);
    var b24;
    if (((x17) ? true : false == Boolean(x19))) {
        b24 = true;
    } else {
        b24 = b23;
    }
    var x44;
    if (b24) {
        var b27 = !(b26);
        var x31 = ~~ (!( !! ((b27).toString())));
        x44 = (x31 >= ~~(((((s32).length) ? true : false) | 0) ? true : false));
    } else {
        var e42 = "var re41 = /^(-s\\s?U|_ xp\\s)D[A-Z]P$/;re41.test(s40)";
        var b43;
        if (eval(e42)) {
            b43 = false;
        } else {
            b43 = true;
        }
        x44 = b43;
    }
    return x44;
})(input_I1, input_S2, input_B2, input_I3);
