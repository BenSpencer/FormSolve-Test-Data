// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if true then bool(input_int('I2')) else input_bool('B3')) then not((len(str(input_int('I2'))) <= len(str(input_bool('B2'))))) else ((if input_bool('B3') then len(str(not((len(input_string('S3')) < ((int(input_string('S1')) - int(bool(input_int('I2')))) / input_int('I2')))))) else int(input_bool('B1'))) > int(str(bool(int(input_string('S3')))))))

var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");

var fn46 = function (x1, s17, b16, s19, b34, b9) {
    var x21 = x1;
    var x6 = x1;
    var b4 = b16;
    var x5;
    if (true) {
        var e2 = "x1";
        x5 = Boolean(eval(e2));
    } else {
        x5 = b4;
    }
    var l8 = ('' + (x6)).length;
    var s10 = String(b9);
    var e11 = "s10";
    var b13;
    if (l8 <= (eval(e11)).length) {
        b13 = true;
    } else {
        b13 = false;
    }
    var s38 = s17;
    var x37;
    if (b16) {
        var l18 = (s17).length;
        var x26 = x21;
        var x20 = Number(s19);
        var b22 = !! (x21);
        x27 = (x20 - (b22) | 0);
        x28 = x26;
        var b29 = l18 < x27 / x28;
        var b31 = !(b29);
        x37 = ((b31).toString()).length;
    } else {
        var x35 = +(b34);
        var e36 = "x35";
        x37 = eval(e36);
    }
    var b40 = (parseInt(s38, 10)) ? true : false;
    var s41 = '' + (b40);
    var b43 = x37;
    var b44 = parseInt(s41, 10);
    return (x5 ? !(b13) : b43 > b44);
}
fn46(input_I2, input_S3, input_B3, input_S1, input_B1, input_B2);
