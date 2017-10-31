// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(len(str(((if input_bool('B3') then (str(int(input_string('S2'))) in ['w', 'ML', 'Y']) else (input_bool('B3') || bool(int(input_bool('B3'))))) !== bool(str(input_int('I2')))))))) then ((if bool(int(input_string('S1'))) then bool(len(input_string('S1'))) else (if input_bool('B2') then (int(input_bool('B3')) < int(input_bool('B1'))) else input_bool('B2'))) !== (if true then input_bool('B1') else input_bool('B2'))) else (input_string('S1') in ['NziS', '54mpd', '', '', 'm', '', '', 'B', 'O', 'ZO']))

var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);

function fn52(s24, b31, x15, b34, s2, b1) {
    var b32 = b1;
    var s46 = s24;
    var b8 = b1;
    var b9 = b8;
    var x10 = (b9) ? 1 : 0;
    var b12 = false;
    if (b8 || (x10) ? true : false) {
        b12 = true;
    }
    var x14;
    if (b1) {
        var opts6 = ['w', 'ML', 'Y'];
        x14 = opts6.indexOf('' + (Number(s2))) > -1;
    } else {
        x14 = b12;
    }
    var b18 = x14;
    var b19 = ((x15).toString()) ? true : false;
    var s20 = (b18 !== b19).toString();
    var b42 = b31;
    var b41 = b34;
    var s27 = s24;
    var x25 = parseInt(s24, 10);
    var x40;
    if (Boolean(x25)) {
        var e28 = "s27";
        var l29 = (eval(e28)).length;
        var b30 = !! (l29);
        x40 = b30;
    } else {
        var b38 = b31;
        var x33 = ~~ (b32);
        var x35 = (b34) | 0;
        var b36 = false;
        if (x33 < x35) {
            b36 = true;
        }
        var x39;
        if (b31) {
            x39 = b36;
        } else {
            x39 = b38;
        }
        x40 = x39;
    }
    var x43;
    if (true) {
        x43 = b41;
    } else {
        x43 = b42;
    }
    var e47 = "s46";
    var opts49 = ['NziS', '54mpd', '', '', 'm', '', '', 'B', 'O', 'ZO'];
    return (!(Boolean((s20).length)) ? (x40 !== x43) : opts49.indexOf(eval(e47)) > -1);
}
fn52(input_S1, input_B2, input_I2, input_B1, input_S2, input_B3);
