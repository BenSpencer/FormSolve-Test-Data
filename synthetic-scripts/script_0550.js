// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(input_bool('B1'))) then ((input_bool('B1') !== (input_bool('B3') && (10 == input_int('I2')))) && (int(not(input_bool('B3'))) != int(str(int(bool(str(len(str(int(bool((if regex-test(str(input_int('I3')), /^(\D|[-_ ])+o\tHS$/) then input_string('S3') else input_string('S2'))))))))))))) else false)

var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn40 = Function('b1', 'x17', 's22', 'x6', 's21', 'b13', "var b4 = b1; var s2 = '' + (b1);var x39; if ((s2) ? true : false) { var b5 = b13; var b7 = 10; var b8 = x6;var b9; if (b5) { b9 = b7 == b8; } else { b9 = false; }var b11 = b4; var b12 = b9;var b14 = !(b13);var e15 = \"b14\";var re20 = /^(\\D|[-_ ])+o\\tHS$/;var x23; if (re20.test((eval(\"x17\")).toString())) {  x23 = s21; } else { x23 = s22; }var x25 = Number(!!(x23));var l28 = ((eval(\"x25\")).toString()).length;var x31 = ~~(!!((l28).toString()));var b35 = (eval(e15)) | 0 != eval(\"parseInt('' + (x31), 10)\");var b37; if (b11 !== b12) { b37 = b35; } else { b37 = false; } x39 = b37; } else { x39 = false; } return x39;");
fn40(input_B1, input_I3, input_S2, input_I2, input_S3, input_B3);
