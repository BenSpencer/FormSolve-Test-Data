// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(not(((input_int('I1') in [0, 85, 67]) === (input_int('I2') >= input_int('I3')))))) then len(input_string('S1')) else int((input_bool('B1') === ((if (if true then input_bool('B1') else input_bool('B2')) then int(input_string('S2')) else int(input_string('S3'))) <= input_int('I1')))))

var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn28 = Function('b21', 's25', 'b20', 's23', "var x22; if (true) { x22 = b20; } else {  x22 = b21; }var x26 = parseInt(s25, 10); return (x22 ? Number(s23) : x26);");
var fn42 = function (s17, x6, b19, s32, x5, x1, b29, s30) {
    var x33 = x1;
    var opts3 = [0, 85, 67];
    var e7 = "x6";
    var b8;
    if (x5 >= eval(e7)) {
        b8 = true;
    } else {
        b8 = false;
    }
    var b10 = opts3.indexOf(x1) > -1;
    var b11 = b8;
    var b12;
    if (b10 === b11) {
        b12 = false;
    } else {
        b12 = true;
    }
    var e14 = "String(b12)";
    var b15 = !! (eval(e14));
    var x40 = +(eval("var b31 = b19; var b34 = fn28(b29, s30, b31, s32); var b35 = x33;var e36 = \"b34 <= b35\";var b37 = false; if (b19 === eval(e36)) { b37 = true; }b37"));
    return (eval("b15") ? (s17).length : x40);
}
fn42(input_S1, input_I3, input_B1, input_S2, input_I2, input_I1, input_B2, input_S3);
