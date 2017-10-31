// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(len(input_string('S1')))) then false else not((if (if (if (input_int('I2') != input_int('I3')) then (input_bool('B2') === input_bool('B2')) else bool(input_string('S1'))) then (input_int('I2') > int(input_string('S1'))) else (if true then bool(input_int('I1')) else not((1 != input_int('I1'))))) then not(input_bool('B1')) else bool((input_int('I2') + int(input_bool('B2')))))))

var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

(function (b34, b10, x22, s1, x17, x7) {
    var s14 = s1;
    var l2 = (s1).length;
    var s3 = '' + (l2);
    var x36 = x17;
    var b37 = b10;
    var x5 = x17;
    var s18 = s14;
    var e6 = "x5";
    var b8 = eval(e6) != x7;
    var b11 = b10;
    var b12 = b10 === b11;
    var x32;
    if ((b8 ? b12 : Boolean(s14))) {
        var x19 = Number(s18);
        x32 = (x17 > x19);
    } else {
        var x24 = x22;
        var x31;
        if (true) {
            var b23 = Boolean(x22);
            x31 = b23;
        } else {
            var b30 = !(eval("var e25 = \"x24\";var e26 = \"eval(e25)\";(1 != eval(e26))"));
            x31 = b30;
        }
        x32 = x31;
    }
    var e33 = "x32";
    var b35;
    if (b34) {
        b35 = false;
    } else {
        b35 = true;
    }
    var x43;
    if (eval(e33)) {
        x43 = b35;
    } else {
        x39 = x36;
        x40 = +(b37);
        var b41 = Boolean(x39 + x40);
        x43 = eval("b41");
    }
    var b44 = !(x43);
    var x45;
    if (Boolean(s3)) {
        x45 = false;
    } else {
        x45 = b44;
    }
    return x45;
})(input_B1, input_B2, input_I1, input_S1, input_I2, input_I3);
