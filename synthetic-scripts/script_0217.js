// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then bool(int((input_int('I3') !== int(bool(str((input_bool('B1') === not((int(str(input_int('I2'))) > input_int('I1')))))))))) else not((len(input_string('S1')) <= int((str(not((input_string('S2') in ['', 'y', 'BGcO1', '0x', '', 'L5t', '', '']))) <= (if bool(input_int('I1')) then str(int((input_bool('B3') != bool(int(input_string('S1')))))) else input_string('S1')))))))

var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

function fn51(s20, b33, x2, b3, b1, x31, x4, s24) {
    var x7 = x31;
    var x50;
    if (b1) {
        var b8 = Number('' + (x4)) > x7;
        var b14 = (String((b3 === !(b8)))) ? true : false;
        var b16 = x2 !== (b14) | 0;
        var x18 = ~~ (b16);
        var b19 = !! (x18);
        x50 = b19;
    } else {
        var s34 = s20;
        var e25 = "s24";
        var opts27 = ['', 'y', 'BGcO1', '0x', '', 'L5t', '', ''];
        var b26 = false;
        for (var idx28 = 0; idx28 < opts27.length; idx28++) {
            if (opts27[idx28] == eval(e25)) {
                b26 = true;
                break;
            }
        }
        var b29;
        if (b26) {
            b29 = false;
        } else {
            b29 = true;
        }
        var s30 = '' + (b29);
        var s42 = s34;
        var b32 = Boolean(x31);
        var b36 = !! (parseInt(s34, 10));
        var b37 = b33 != b36;
        var e39 = "b37";
        var x40 = (eval(e39)) | 0;
        var x43;
        if (b32) {
            x43 = String(x40);
        } else {
            x43 = s42;
        }
        var b44 = false;
        if (s30 <= x43) {
            b44 = true;
        }
        var x46 = Number(b44);
        var b47 = eval("(eval(\"s20\")).length") <= x46;
        var b49 = !(b47);
        x50 = b49;
    }
    return x50;
}
fn51(input_S1, input_B3, input_I3, input_B1, input_B2, input_I1, input_I2, input_S2);
