// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((if not(input_bool('B1')) then len(str(not(input_bool('B3')))) else input_int('I2')) !== int(not(not(bool((len(str((str(input_bool('B3')) !== str(input_int('I1'))))) + input_int('I1'))))))) then not(not(bool(len(str(not((len(input_string('S2')) === len(str(input_int('I2')))))))))) else not(((input_int('I2') in [10, 1, 5, 1]) != input_bool('B1'))))

var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);

(function (s35, x16, b11, b12, x13) {
    var x37 = x13;
    var x49 = x13;
    var b53 = b11;
    var b14 = b12;
    var x58;
    if (((function (b1, b4, x8) {
        var b2;
        if (b1) {
            b2 = false;
        } else {
            b2 = true;
        }
        var e3 = "b2";
        return (eval(e3) ? ((!(b4)).toString()).length : x8);
    })(b11, b12, x13) !== eval("var e28 = \"var x24 = x16; var s21 = String(eval(\\\"var s15 = String(b14);var b18 = false; if (s15 !== (x16).toString()) { b18 = true; }b18\\\"));!!((eval(\\\"(s21).length\\\") + x24))\";var b29; if (eval(e28)) { b29 = false; } else { b29 = true; }var x31 = ~~(!(b29));x31"))) {
        var l36 = (s35).length;
        var s38 = (x37).toString();
        var l39 = (s38).length;
        var e40 = "l39";
        var b43 = !((l36 === eval(e40)));
        var b46 = !! (((b43).toString()).length);
        var b47;
        if (b46) {
            b47 = false;
        } else {
            b47 = true;
        }
        var b48 = !(b47);
        x58 = b48;
    } else {
        var opts51 = [10, 1, 5, 1];
        var b54 = opts51.indexOf(x49) > -1 != b53;
        x58 = eval("!(b54)");
    }
    return x58;
})(input_S2, input_I1, input_B1, input_B3, input_I2);
