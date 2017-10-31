// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((if not(bool(input_string('S3'))) then input_bool('B2') else (if bool(str(len(input_string('S1')))) then input_bool('B2') else not(input_bool('B2'))))) then int(input_string('S3')) else int((int((bool(str(input_int('I1'))) && not(input_bool('B2')))) >= input_int('I1'))))

var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn32 = function (s1, s6, b10, x19) {
    var b22 = b10;
    var s17 = s1;
    var b5 = b10;
    var b4;
    if (eval("var b2 = !!(s1);b2")) {
        b4 = false;
    } else {
        b4 = true;
    }
    var x14;
    if (b4) {
        x14 = b5;
    } else {
        var b11 = b10;
        var b12;
        if (b11) {
            b12 = false;
        } else {
            b12 = true;
        }
        x14 = ((String((s6).length)) ? true : false ? b10 : b12);
    }
    var e15 = "x14";
    var b16 = !(eval(e15));
    var x27 = x19;
    var b21 = !! ((x19).toString());
    var b23;
    if (b22) {
        b23 = false;
    } else {
        b23 = true;
    }
    var b24;
    if (b23) {
        b24 = b21;
    } else {
        b24 = false;
    }
    var b28;
    if (+(b24) >= x27) {
        b28 = true;
    } else {
        b28 = false;
    }
    var x31;
    if (b16) {
        x31 = parseInt(s17, 10);
    } else {
        x31 = ~~ (b28);
    }
    return x31;
}
fn32(input_S3, input_S1, input_B2, input_I1);
