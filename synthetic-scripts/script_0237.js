// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(regex-test(str((if input_bool('B1') then len(str(len(input_string('S1')))) else int(input_string('S1')))), /^[A-Z]?xW(V-zc|i)be y$/))) then not(((72 * input_int('I1')) > int((if not(not(bool(int(input_bool('B1'))))) then str(input_int('I1')) else str((if bool(int(str(input_int('I1')))) then input_bool('B3') else not((int(str(input_int('I1'))) == int(input_string('S3')))))))))) else (true == input_bool('B3')))

var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");

function fn57(s40, b36, s2, b1, x16) {
    var b53 = b36;
    var b22 = b1;
    var e12 = "(eval(\"var s7 = s2; var x8 = Number(s7);var x9; if (b1) { var s5 = String((eval(\\\"s2\\\")).length);var l6 = (s5).length; x9 = l6; } else { x9 = x8; }x9\")).toString()";
    var re13 = new RegExp("^[A-Z]?xW(V-zc|i)be y$");
    var b14 = !(re13.test(eval(e12)));
    var b15;
    if (b14) {
        b15 = false;
    } else {
        b15 = true;
    }
    var x28 = x16;
    var e18 = "eval(\"x16\")";
    x19 = 72 * eval(e18);
    var e21 = "x19";
    var x30 = x28;
    var e24 = "+(b22)";
    var b25 = (eval(e24)) ? true : false;
    var x37 = x30;
    var x39 = Number((x37).toString());
    var e42 = "Number(s40)";
    var b43 = false;
    if (x39 == eval(e42)) {
        b43 = true;
    }
    var x48;
    if (!(!(b25))) {
        x48 = (x28).toString();
    } else {
        x48 = String((eval("var e32 = \"var s31 = (x30).toString();s31\";Boolean(parseInt(eval(e32), 10))") ? b36 : !(b43)));
    }
    var b50 = eval(e21) > Number(x48);
    var b52 = !(b50);
    var b54;
    if (true) {
        b54 = b53;
    } else {
        b54 = !b53;
    }
    var x56;
    if (b15) {
        x56 = b52;
    } else {
        x56 = b54;
    }
    return x56;
}
fn57(input_S3, input_B3, input_S1, input_B1, input_I1);
