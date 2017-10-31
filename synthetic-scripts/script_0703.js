// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then (str(input_int('I3')) !== input_string('S1')) else regex-test(str((if bool(int((if not(bool(input_string('S2'))) then (if input_bool('B2') then str((str(len(input_string('S2'))) !== input_string('S3'))) else input_string('S2')) else input_string('S2')))) then input_int('I1') else len(str(int(input_string('S3')))))), /^(P|[A-Z])?$/))

var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");

var fn48 = function (x42, s41, s43, x1, s3, b44) {
    var b4 = String(x1) !== s3;
    var fn40 = Function('s27', 'x32', 's28', 'b29', "var s33 = s28; var fn26 = function(s11, s15, b10) { var s24 = s11; var s6 = s11; var e8 = \"(s6) ? true : false\";var b9 = !(eval(e8));var s22 = s11; var e14 = \"var l12 = (s11).length;String(l12)\";var e16 = \"s15\";var b18; if (eval(e14) !== eval(\"eval(e16)\")) { b18 = true; } else { b18 = false; }var e21 = \"String(b18)\";var x23; if (b10) { x23 = eval(e21); } else { x23 = s22; }var x25; if (b9) { x25 = x23; } else {  x25 = s24; } return x25; } var x30 = Number(fn26(s27, s28, b29));var e34 = \"s33\";var e35 = \"eval(e34)\";var x36 = Number(eval(e35));var l38 = ((x36).toString()).length;var x39; if ((x30) ? true : false) {  x39 = x32; } else { x39 = l38; } return x39;");
    var s45 = '' + (fn40(s41, x42, s43, b44));
    return (true ? b4 : (s45).match(/^(P|[A-Z])?$/) !== null);
}
fn48(input_I1, input_S2, input_S3, input_I3, input_S1, input_B2);
