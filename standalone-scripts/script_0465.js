// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((input_bool('B3') != not((str((if ((input_int('I2') === input_int('I1')) !== true) then int((input_string('S2') === input_string('S2'))) else input_int('I3'))) in ['IdE', '2p4F', 'I5i', '', 'IPw', 'z7', 'd5D', 'P', 'xwn', 'a']))) || input_bool('B1')) then ((str(int(input_bool('B1'))) == str(not(bool(int(bool(input_string('S1'))))))) !== input_bool('B1')) else bool(int(str(not((input_int('I3') in [1, 0, 4, 0, 4, 0, -99]))))))

var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");

(function (s32, s10, x2, x3, b23, b1, x14) {
    var b27 = b23;
    var x46 = x14;
    var b5 = x2 === eval("x3");
    var x15;
    if ((b5 !== true)) {
        var s9 = s10;
        var b11 = false;
        if (s9 === s10) {
            b11 = true;
        }
        x15 = Number(b11);
    } else {
        x15 = x14;
    }
    var s16 = '' + (x15);
    var opts18 = ['IdE', '2p4F', 'I5i', '', 'IPw', 'z7', 'd5D', 'P', 'xwn', 'a'];
    var b20;
    if (opts18.indexOf(s16) > -1) {
        b20 = false;
    } else {
        b20 = true;
    }
    var b21;
    if (b1) {
        if (b20) {
            b21 = false;
        } else {
            b21 = true;
        }
    } else {
        if (b20) {
            b21 = true;
        } else {
            b21 = false;
        }
    }
    var e24 = "b23";
    var b25 = b21;
    var b26 = eval(e24);
    var b40 = b27;
    var x28 = Number(b27);
    var e29 = "x28";
    var b33 = !! (s32);
    var b35 = Boolean((b33) ? 1 : 0);
    var b36 = !(b35);
    var s37 = (b36).toString();
    var b38 = false;
    if (String(eval("eval(e29)")) == s37) {
        b38 = true;
    }
    var b41;
    if (b38 !== b40) {
        b41 = true;
    } else {
        b41 = false;
    }
    var e44 = "eval(\"b41\")";
    var e45 = "eval(e44)";
    var e52 = "var e51 = \"var opts48 = [1, 0, 4, 0, 4, 0, -99];var b50; if (opts48.indexOf(x46) > -1) { b50 = false; } else { b50 = true; }b50\";eval(e51)";
    var x56;
    if (b25 || b26) {
        x56 = eval(e45);
    } else {
        x56 = !! (Number((eval(e52)).toString()));
    }
    return x56;
})(input_S1, input_S2, input_I2, input_I1, input_B1, input_B3, input_I3);
