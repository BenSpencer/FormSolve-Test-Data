// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(input_bool('B1'))) then str(((false !== input_bool('B1')) || not(not((false !== not(((if (bool(input_int('I1')) == not(input_bool('B3'))) then input_string('S1') else str(not(not(input_bool('B3'))))) in ['RSn6', 'a', 'v', 'M', 'n']))))))) else str(((str(bool(str(input_bool('B2')))) in ['k2v', '', 'wFqZB', 'u3Y9', '3NG', 'wd', 'sWUQ', 'ylRaL', '', 'Qe']) === bool((input_int('I2') + -79)))))

var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn51 = function (b10, b34, x42, b1, s17, x8) {
    var b4 = b1;
    var x2 = Number(b1);
    var b3 = !! (x2);
    var b6 = false;
    var b7 = eval("b4");
    var b18 = b10;
    var b13;
    if (eval("eval(\"b10\")")) {
        b13 = false;
    } else {
        b13 = true;
    }
    var b14;
    if ((x8) ? true : false) {
        b14 = b13;
    } else {
        b14 = !b13;
    }
    var x22;
    if (eval("b14")) {
        x22 = s17;
    } else {
        var b20 = !(!(b18));
        x22 = '' + (b20);
    }
    var opts24 = ['RSn6', 'a', 'v', 'M', 'n'];
    var b26;
    if (opts24.indexOf(x22) > -1) {
        b26 = false;
    } else {
        b26 = true;
    }
    var b27;
    if (false !== b26) {
        b27 = true;
    } else {
        b27 = false;
    }
    var b29 = !(b27);
    var b31;
    if (b6 !== b7 || !(b29)) {
        b31 = true;
    } else {
        b31 = false;
    }
    var x50;
    if (b3) {
        x50 = (b31).toString();
    } else {
        var e48 = "var b37 = ('' + (eval(\"b34\"))) ? true : false;var s38 = String(b37);var opts40 = ['k2v', '', 'wFqZB', 'u3Y9', '3NG', 'wd', 'sWUQ', 'ylRaL', '', 'Qe'];x43 = x42; x44 = -79;var b46 = opts40.indexOf(s38) > -1; var b47 = !!(x43 + x44);b46 === b47";
        x50 = (eval(e48)).toString();
    }
    return x50;
}
fn51(input_B3, input_B2, input_I2, input_B1, input_S1, input_I1);
