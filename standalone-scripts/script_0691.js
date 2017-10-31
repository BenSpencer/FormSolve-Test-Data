// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then 158 else int(str(not(((input_int('I2') !== input_int('I3')) == (if (input_int('I1') >= input_int('I3')) then (bool(str(bool(input_string('S1')))) !== (not((input_bool('B3') === false)) === input_bool('B3'))) else (str(bool(len(str(input_bool('B3'))))) != str(not(not(input_bool('B3')))))))))))

var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);

var fn46 = function (s11, x2, x1, b17, x6) {
    var x45;
    if (true) {
        x45 = 158;
    } else {
        var x44 = parseInt(eval("var x7 = x2; var b26 = b17; var b8; if (x6 >= x7) { b8 = true; } else { b8 = false; }var e10 = \"b8\";var e37 = \"var b31 = b26; var s30 = String((((b26).toString()).length) ? true : false);var b32 = !(b31);var b33; if (b32) { b33 = false; } else { b33 = true; }var s34 = String(b33);(s30 != s34)\";var x38; if (eval(e10)) { var e15 = \"var e14 = \\\"(Boolean(s11)).toString()\\\";eval(e14)\";var b21 = b17; var b18; if (b17 === false) { b18 = true; } else { b18 = false; }var b20; if (b18) { b20 = false; } else { b20 = true; }var b22; if (b20 === b21) { b22 = true; } else { b22 = false; }var b24; if ((eval(e15)) ? true : false !== b22) { b24 = true; } else { b24 = false; } x38 = b24; } else { x38 = eval(e37); }var b39 = false; if (eval(\"var b3 = x1; var b4 = x2;b3 !== b4\") == x38) { b39 = true; }var b41; if (b39) { b41 = false; } else { b41 = true; }var s42 = (b41).toString();s42"), 10);
        x45 = x44;
    }
    return x45;
}
fn46(input_S1, input_I3, input_I2, input_B3, input_I1);
