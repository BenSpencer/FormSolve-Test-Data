// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((str(len((if not(not((len(str(bool(int(input_string('S1'))))) === input_int('I1')))) then str((if not(not(input_bool('B3'))) then bool(str(input_bool('B2'))) else not(input_bool('B2')))) else str((int(input_bool('B2')) < int(str(input_bool('B3')))))))) in ['d', '', 'C', 'K9FZQ', 'Ysr', '6lw'])) then "iLI" else str(input_bool('B2')))

var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn44 = function (b13, s1, x7, b17) {
    var b41 = b17;
    var b27 = b13;
    var b25 = b17;
    var x2 = parseInt(s1, 10);
    var s4 = '' + ( !! (x2));
    var l6 = (eval("s4")).length;
    var b8;
    if (l6 === x7) {
        b8 = true;
    } else {
        b8 = false;
    }
    var e10 = "b8";
    var b11 = !(eval(e10));
    var b12 = !(b11);
    var b21 = b17;
    var e14 = "b13";
    var b19 = ((b17).toString()) ? true : false;
    var e20 = "b19";
    var x23;
    if (!(!(eval(e14)))) {
        x23 = eval(e20);
    } else {
        x23 = !(b21);
    }
    var x26 = Number(b25);
    var s28 = '' + (b27);
    var x29 = Number(s28);
    var b30;
    if (x26 < x29) {
        b30 = true;
    } else {
        b30 = false;
    }
    var s32 = '' + (b30);
    var l34 = ((b12 ? '' + (x23) : s32)).length;
    var opts37 = ['d', '', 'C', 'K9FZQ', 'Ysr', '6lw'];
    var e39 = "opts37.indexOf('' + (l34)) > -1";
    var b40;
    if (eval(e39)) {
        b40 = false;
    } else {
        b40 = true;
    }
    return (b40 ? "iLI" : (b41).toString());
}
fn44(input_B3, input_S1, input_I1, input_B2);
