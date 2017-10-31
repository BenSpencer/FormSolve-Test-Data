// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then str((if bool(int(not((if bool(int(str((len(str(input_int('I1'))) >= input_int('I3'))))) then input_bool('B2') else not(not((false && not(bool((input_int('I3') % len(str(input_bool('B3'))))))))))))) then input_bool('B2') else ((input_int('I1') - input_int('I1')) >= len(str(int(input_bool('B1'))))))) else "L")

var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);

var fn49 = function (b1, x14, x2, b13, b39) {
    var b15 = b1;
    var x34 = x2;
    var b33 = b13;
    var e29 = "var x7 = x14; var e6 = \"var s3 = String(x2);(eval(\\\"s3\\\")).length\";var b8 = eval(e6); var b9 = x7;var x11 = parseInt('' + (b8 >= b9), 10);var x28; if ((x11) ? true : false) { x28 = b13; } else { var e25 = \"var l18 = ('' + (eval(\\\"b15\\\"))).length;var b21 = Boolean((x14 % l18));var b22 = !(b21);var b23; if (false) { b23 = b22; } else { b23 = false; }b23\";var b26 = !(eval(e25));var b27; if (b26) { b27 = false; } else { b27 = true; } x28 = b27; }x28";
    var b30 = !(eval(e29));
    var x36 = x34;
    var e35 = "x34";
    var l43 = (String(+(eval("b39")))).length;
    var x46;
    if (Boolean(Number(b30))) {
        x46 = b33;
    } else {
        x46 = ((eval(e35) - x36) >= l43);
    }
    var s47 = String(x46);
    var x48;
    if (b1) {
        x48 = s47;
    } else {
        x48 = "L";
    }
    return x48;
}
fn49(input_B3, input_I3, input_I1, input_B2, input_B1);
