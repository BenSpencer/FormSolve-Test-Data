// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int((input_string('S1') >= str(regex-test(input_string('S2'), /^(bD|[a-z]*)$/))))) then not((input_int('I2') > len(str(bool(str(not((bool((if not(bool(int(bool(int((bool(int(str(int(not(input_bool('B1')))))) || input_bool('B2'))))))) then input_int('I2') else len(input_string('S1')))) === not(input_bool('B3')))))))))) else (input_string('S3') in ['i9l', 'W', '', 'WvBYT', 'XOH', 'nh', '', 'EjRo', 'Zp8']))

var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn49 = function (b32, b11, s44, s2, s1, b18, x10) {
    var s27 = s1;
    var b9 = Boolean(eval("var b5 = s1 >= '' + ((s2).match(/^(bD|[a-z]*)$/) !== null);var x7 = Number(b5);x7"));
    var x26 = x10;
    var e14 = "var b12; if (b11) { b12 = false; } else { b12 = true; }Number(b12)";
    var b19 = false;
    if (Boolean(parseInt('' + (eval(e14)), 10)) || b18) {
        b19 = true;
    }
    var x21 = +(b19);
    var x23 = +( !! (x21));
    var b25 = !( !! (x23));
    var e28 = "s27";
    var x30;
    if (b25) {
        x30 = x26;
    } else {
        x30 = (eval(e28)).length;
    }
    var b31 = !! (x30);
    var b33 = !(b32);
    var b34;
    if (b31 === b33) {
        b34 = true;
    } else {
        b34 = false;
    }
    var b38 = !! ((!(b34)).toString());
    var s39 = (b38).toString();
    var b41 = x10 > (s39).length;
    var b43 = !(b41);
    var x48;
    if (b9) {
        x48 = b43;
    } else {
        var opts46 = ['i9l', 'W', '', 'WvBYT', 'XOH', 'nh', '', 'EjRo', 'Zp8'];
        var b45 = false;
        for (var idx47 = 0; idx47 < opts46.length; idx47++) {
            if (opts46[idx47] == s44) {
                b45 = true;
            }
        }
        x48 = b45;
    }
    return x48;
}
fn49(input_B3, input_B1, input_S3, input_S2, input_S1, input_B2, input_I2);
