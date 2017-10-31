// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int((bool(len(input_string('S1'))) || bool(((if input_bool('B3') then len(str((if ((if not(bool(int(bool(len(str(input_int('I3'))))))) then int(input_bool('B1')) else int((input_string('S1') > "4mz9"))) <= input_int('I3')) then true else input_bool('B3')))) else len(input_string('S2'))) / len(input_string('S1'))))))) then input_bool('B3') else bool(input_int('I1')))

var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");

var fn47 = function (x23, b16, b26, x43, s1, s30) {
    var b42 = b26;
    var s18 = s1;
    var e3 = "var e2 = \"s1\";eval(e2)";
    var s33 = s18;
    var b6 = b26;
    var x32;
    if (b6) {
        var x7 = x23;
        var e8 = "x7";
        var l11 = ((eval("eval(e8)")).toString()).length;
        var b12 = Boolean(l11);
        var b14 = (~~(b12)) ? true : false;
        var b15;
        if (b14) {
            b15 = false;
        } else {
            b15 = true;
        }
        var x17 = ~~ (b16);
        var b19 = s18 > "4mz9";
        var x21 = (b19) | 0;
        var x22;
        if (b15) {
            x22 = x17;
        } else {
            x22 = x21;
        }
        var b24 = false;
        if (x22 <= x23) {
            b24 = true;
        }
        var x27;
        if (b24) {
            x27 = true;
        } else {
            x27 = b26;
        }
        var s28 = '' + (x27);
        x32 = (s28).length;
    } else {
        x32 = (s30).length;
    }
    var b37 = !! ((x32 / (s33).length));
    var b38 = false;
    if (Boolean((eval(e3)).length) || b37) {
        b38 = true;
    }
    var b41 = !! (+(b38));
    var x46;
    if (b41) {
        x46 = b42;
    } else {
        var b45 = !! (eval("x43"));
        x46 = b45;
    }
    return x46;
}
fn47(input_I3, input_B1, input_B3, input_I1, input_S1, input_S2);
