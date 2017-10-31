// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int((regex-test(str(input_bool('B3')), /^([-_ ]|vgIFq)+$/) && bool(str(int(str(not(input_bool('B1'))))))))) then (input_bool('B2') != (input_int('I2') in [-31, 76, 0, 1, 2, 90, 6, 1, 3, -13])) else ((if input_bool('B1') then not((((len(str(input_bool('B3'))) * int(input_string('S2'))) == input_int('I1')) !== bool(input_string('S3')))) else input_bool('B2')) === ((if not(not(input_bool('B3'))) then input_int('I1') else input_int('I2')) >= input_int('I1'))))

var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn45 = Function('s27', 'b23', 'b43', 'x32', 'b24', 's35', "var x44; if (b23) { var s25 = '' + (b24);var l26 = (s25).length;var e29 = \"Number(s27)\";x30 = l26 * eval(e29);var b33 = x30 == x32;var b37 = !!(eval(\"s35\"));var b39 = false; if (b33 !== eval(\"b37\")) { b39 = true; } x44 = eval(\"!(b39)\"); } else { x44 = b43; } return x44;");
(function (x15, s46, b14, x49, b4, s51, b1) {
    var b47 = b4;
    var x57 = x15;
    var b50 = b1;
    var b48 = b14;
    var b5;
    if (b4) {
        b5 = false;
    } else {
        b5 = true;
    }
    var x7 = Number('' + (b5));
    var s8 = '' + (x7);
    var b9 = Boolean(s8);
    var b10;
    if (((b1).toString()).match(/^([-_ ]|vgIFq)+$/) !== null) {
        b10 = b9;
    } else {
        b10 = false;
    }
    var x12 = ~~ (b10);
    var b13 = Boolean(x12);
    var x65;
    if (b13) {
        var e22 = "var e16 = \"x15\";var opts18 = [-31, 76, 0, 1, 2, 90, 6, 1, 3, -13];var b20; if (b14) { if (opts18.indexOf(eval(e16)) > -1) { b20 = false; } else { b20 = true; } } else { if (opts18.indexOf(eval(e16)) > -1) { b20 = true; } else { b20 = false; } }b20";
        x65 = eval(e22);
    } else {
        var x55 = x49;
        var b52 = b50;
        var x59 = x55;
        var b53;
        if (b52) {
            b53 = false;
        } else {
            b53 = true;
        }
        var b54 = !(b53);
        var x58;
        if (b54) {
            var e56 = "x55";
            x58 = eval(e56);
        } else {
            x58 = x57;
        }
        var b60 = x58;
        var b61 = x59;
        var b62 = false;
        if (fn45(s46, b47, b48, x49, b50, s51) === b60 >= b61) {
            b62 = true;
        }
        x65 = eval("b62");
    }
    return x65;
})(input_I2, input_S2, input_B2, input_I1, input_B1, input_S3, input_B3);
