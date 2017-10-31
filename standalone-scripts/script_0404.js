// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then not(bool(int(str(input_bool('B1'))))) else (if (if bool(len(input_string('S3'))) then (input_bool('B1') || bool(str((if input_bool('B1') then len(str(not((input_int('I3') != int(not(bool(input_int('I2')))))))) else input_int('I3'))))) else not(bool(int(not(not(input_bool('B3'))))))) then not((input_string('S1') >= (if bool(str(input_int('I1'))) then (if (input_int('I2') in [1, 1, 1, 0, 96, 0, 0, 83]) then input_string('S3') else input_string('S2')) else input_string('S2')))) else input_bool('B2')))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);

var fn54 = Function('s50', 'x44', 'x40', 's49', "var s52 = s50; var e45 = \"x44\";var opts47 = [1, 1, 1, 0, 96, 0, 0, 83]; return (!!(eval(\"var s41 = '' + (x40);s41\")) ? (opts47.indexOf(eval(e45)) > -1 ? s49 : s50) : s52);");

function fn66(x14, s39, s55, x57, s58, b31, b1, x13, b62) {
    var b11 = b1;
    var b2 = b1;
    var b7;
    if ( !! (eval("var s3 = (b2).toString();var x4 = Number(s3);x4"))) {
        b7 = false;
    } else {
        b7 = true;
    }
    var x65;
    if (b1) {
        x65 = b7;
    } else {
        var s8 = s58;
        var x56 = x14;
        var l9 = (s8).length;
        var x38;
        if ( !! (l9)) {
            var b12 = b11;
            var x25 = x13;
            var e20 = "var b16; if (Boolean(x14)) { b16 = false; } else { b16 = true; }var b18 = x13 != ~~(b16);b18";
            var e24 = "(String(!(eval(e20)))).length";
            var x26;
            if (b12) {
                x26 = eval(e24);
            } else {
                x26 = x25;
            }
            var s27 = String(x26);
            var b29 = b11 || Boolean(s27);
            x38 = b29;
        } else {
            var e32 = "b31";
            var x35 = (!(!(eval(e32)))) ? 1 : 0;
            var b37;
            if (Boolean(x35)) {
                b37 = false;
            } else {
                b37 = true;
            }
            x38 = b37;
        }
        var b59 = s39;
        var b60 = fn54(s55, x56, x57, s58);
        var b61;
        if (b59 >= b60) {
            b61 = false;
        } else {
            b61 = true;
        }
        var x63;
        if (x38) {
            x63 = b61;
        } else {
            x63 = b62;
        }
        var e64 = "x63";
        x65 = eval(e64);
    }
    return x65;
}
fn66(input_I2, input_S1, input_S2, input_I1, input_S3, input_B3, input_B1, input_I3, input_B2);
