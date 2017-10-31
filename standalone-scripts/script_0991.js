// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(not(input_bool('B1')))) then (bool((str(not(input_bool('B1'))) + input_string('S3'))) === bool((if input_bool('B3') then str(input_int('I1')) else "wcV"))) else ((if input_bool('B3') then input_int('I3') else int((int(str(input_bool('B2'))) in [0, 0, 68, 0, 1, 0, 0, 32, 1, 20]))) <= input_int('I1')))

var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn43 = function (x28, b17, b1, x19, b29, s12) {
    var b7 = b1;
    var x39 = x19;
    var b27 = b17;
    var e18 = "b17";
    var e21 = "eval(\"x19\")";
    var x23;
    if (eval(e18)) {
        x23 = '' + (eval(e21));
    } else {
        x23 = "wcV";
    }
    var b25;
    if (eval("var e9 = \"eval(\\\"b7\\\")\";var b10; if (eval(e9)) { b10 = false; } else { b10 = true; }var x13 = (b10).toString(); var x14 = s12;!!(x13 + x14)") === Boolean(x23)) {
        b25 = true;
    } else {
        b25 = false;
    }
    var opts34 = [0, 0, 68, 0, 1, 0, 0, 32, 1, 20];
    var b33 = false;
    for (var idx35 = 0; idx35 < opts34.length; idx35++) {
        if (opts34[idx35] == parseInt(eval("String(b29)"), 10)) {
            b33 = true;
            break;
        }
    }
    var x37 = Number(eval("b33"));
    var x38;
    if (b27) {
        x38 = x28;
    } else {
        x38 = x37;
    }
    var b40;
    if (x38 <= x39) {
        b40 = true;
    } else {
        b40 = false;
    }
    return (eval("eval(\"var b2; if (b1) { b2 = false; } else { b2 = true; }var b3 = !(b2);!(b3)\")") ? b25 : b40);
}
fn43(input_I3, input_B3, input_B1, input_I1, input_B2, input_S3);
