// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then not(input_bool('B2')) else not((str((not(not(not(input_bool('B2')))) == (str((input_bool('B1') == false)) == (if bool(len(str((input_bool('B1') == not((input_string('S1') in ['ml', '15F', 'L8K', 'IT', 'h', 'lXFOk', 'xj', 'b7', 'Fws2'])))))) then input_string('S3') else input_string('S1'))))) !== input_string('S1'))))

var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);

function fn41(s27, b2, s17, b1) {
    var b4 = b2;
    var b11 = b1;
    var b3;
    if (b2) {
        b3 = false;
    } else {
        b3 = true;
    }
    var s36 = s17;
    var b16 = b11;
    var e15 = "var b12; if (b11) { b12 = false; } else { b12 = !false; }String(b12)";
    var s28 = s17;
    var opts19 = ['ml', '15F', 'L8K', 'IT', 'h', 'lXFOk', 'xj', 'b7', 'Fws2'];
    var b18 = false;
    for (var idx20 = 0; idx20 < opts19.length; idx20++) {
        if (opts19[idx20] == s17) {
            b18 = true;
        }
    }
    var b21;
    if (b18) {
        b21 = false;
    } else {
        b21 = true;
    }
    var b22;
    if (b16 == b21) {
        b22 = true;
    } else {
        b22 = false;
    }
    var l25 = ('' + (b22)).length;
    var x29;
    if (Boolean(l25)) {
        x29 = s27;
    } else {
        x29 = s28;
    }
    var b30;
    if (eval(e15) == x29) {
        b30 = true;
    } else {
        b30 = false;
    }
    var b32 = false;
    if (eval("var e6 = \"var b5 = !(b4);b5\";var b7 = !(eval(e6));var b9 = !(eval(\"b7\"));b9") == b30) {
        b32 = true;
    }
    var e34 = "b32";
    var b37 = false;
    if (String(eval(e34)) !== s36) {
        b37 = true;
    }
    var b39 = !(b37);
    return (b1 ? b3 : b39);
}
fn41(input_S3, input_B2, input_S1, input_B1);
