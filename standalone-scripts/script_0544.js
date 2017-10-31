// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then (input_int('I1') !== (int(input_string('S1')) * len(str((bool(str(not((bool(int(input_bool('B2'))) === (if input_bool('B1') then bool(input_int('I1')) else bool(input_string('S2'))))))) != regex-test(input_string('S2'), /^(U|[a-z]*)$/)))))) else false)

var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

function fn37(b6, s12, x10, b1, s3) {
    var b9 = b1;
    var x2 = x10;
    var x4 = parseInt(s3, 10);
    var e5 = "x4";
    var s25 = s12;
    var e23 = "var e20 = \"var x7 = Number(b6);var e15 = \\\"(b9 ? !!(x10) : Boolean(s12))\\\";var b17 = (x7) ? true : false === eval(\\\"eval(e15)\\\");var b19 = !(b17);b19\";var e21 = \"eval(e20)\";var s22 = '' + (eval(e21));s22";
    var b24 = (eval(e23)) ? true : false;
    var re26 = new RegExp("^(U|[a-z]*)$");
    var b27 = b24 != re26.test(s25);
    x32 = eval(e5);
    x33 = (eval("'' + (b27)")).length;
    var b34 = false;
    if (x2 !== x32 * x33) {
        b34 = true;
    }
    return (b1 ? b34 : false);
}
fn37(input_B2, input_S2, input_I1, input_B1, input_S1);
