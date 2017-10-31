// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool((if bool(input_int('I1')) then int(input_bool('B2')) else len(str(int((input_int('I3') === (if (str(input_int('I1')) <= input_string('S2')) then int(bool(int((str(input_int('I3')) != str((if input_bool('B1') then not(input_bool('B2')) else bool(input_int('I3')))))))) else len(str(int(bool(len(input_string('S1'))))))))))))) then input_bool('B2') else input_bool('B2'))

var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn24 = function (b17, b16, x21) {
    var e19 = "var e18 = \"b17\";eval(e18)";
    var b20 = !(eval(e19));
    var b22 = !! (x21);
    var x23;
    if (b16) {
        x23 = b20;
    } else {
        x23 = b22;
    }
    return x23;
}
var fn52 = function (x14, b25, b26, s34, x1, s11) {
    var b49 = b25;
    var b50 = b25;
    var x7 = x1;
    var b4 = b25;
    var x6 = x14;
    var e10 = "(eval(\"x7\")).toString()";
    var b12;
    if (eval(e10) <= s11) {
        b12 = true;
    } else {
        b12 = false;
    }
    var x27 = x14;
    var b29 = String(x14);
    var b30 = '' + (fn24(b25, b26, x27));
    var b32 = !! (~~(b29 != b30));
    var l36 = (eval("s34")).length;
    var x38 = +( !! (l36));
    var b42 = x6 === (b12 ? (b32) ? 1 : 0 : ('' + (x38)).length);
    var x44 = ~~ (b42);
    var l46 = (String(x44)).length;
    var x47;
    if ( !! (eval("x1"))) {
        x47 = +(b4);
    } else {
        x47 = l46;
    }
    var b48 = (x47) ? true : false;
    var x51;
    if (b48) {
        x51 = b49;
    } else {
        x51 = b50;
    }
    return x51;
}
fn52(input_I3, input_B2, input_B1, input_S1, input_I1, input_S2);
