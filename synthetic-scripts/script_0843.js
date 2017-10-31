// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(str(bool((int(input_string('S1')) * int(input_string('S1'))))))) then str(bool(len(str(bool(regex-replace(str(bool(str(input_bool('B3')))), /YMtLzKvZex(t|[-_ ]yHvAq\r)+/, "")))))) else input_string('S3'))

var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");

function fn31(b17, s29, s1) {
    var b14 = !! (eval("'' + (eval(\"var s4 = s1; var e5 = \\\"s4\\\";var x6 = Number(eval(e5));x7 = parseInt(eval(\\\"s1\\\"), 10); x8 = x6;!!(eval(\\\"x7 * x8\\\"))\"))"));
    var e15 = "b14";
    var b16;
    if (eval(e15)) {
        b16 = false;
    } else {
        b16 = true;
    }
    var s20 = '' + ( !! (String(b17)));
    var re22 = new RegExp("YMtLzKvZex(t|[-_ ]yHvAq\\r)+");
    var s21 = (s20).replace(re22, "");
    var s24 = ((s21) ? true : false).toString();
    var l25 = (s24).length;
    var b26 = !! (l25);
    var s28 = String(eval("b26"));
    var x30;
    if (b16) {
        x30 = s28;
    } else {
        x30 = s29;
    }
    return x30;
}
fn31(input_B3, input_S3, input_S1);
