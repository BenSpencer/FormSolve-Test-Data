// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool((input_int('I2') + (if true then (87 * int((str(input_bool('B1')) in ['', '', 'p', '', '4re', '', '5']))) else int(input_string('S3'))))) then bool(str(int(((if (if ((input_bool('B1') === input_bool('B1')) !== false) then ((len(input_string('S1')) == int(input_string('S2'))) || input_bool('B2')) else input_bool('B1')) then int(str(input_bool('B3'))) else int(input_string('S2'))) in [1, 1, 0, 92, 164, 87, 98])))) else input_bool('B1'))

var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);

var fn44 = Function('s25', 's27', 'b38', 'b32', 'b19', "var s41 = s27; var b36 = b19; var b20 = b19; var b21 = b19; var b22 = b20;var x37; if ((b21 === b22 !== false)) { var l26 = (s25).length;var x28 = Number(s27);var b29 = l26; var b30 = x28;var e33 = \"b32\";var b34; if (eval(e33)) { b34 = true; } else { b34 = eval(\"b29 == b30\"); } x37 = b34; } else { x37 = b36; }var x42 = parseInt(s41, 10);var x43; if (x37) {  x43 = parseInt(String(b38), 10); } else { x43 = x42; } return x43;");

function fn59(b48, s45, s46, b47, b3, s13, x1) {
    var b49 = b3;
    var b56 = b3;
    var e10 = "var e9 = \"var s4 = (b3).toString();var opts6 = ['', '', 'p', '', '4re', '', '5'];var b5 = false; for (var idx7 = 0; idx7 < opts6.length; idx7++) { if (opts6[idx7] == s4) { b5 = true; break; } }var x8 = (b5) | 0;x8\";eval(e9)";
    var x15;
    if (true) {
        x15 = (87 * eval(e10));
    } else {
        x15 = Number(s13);
    }
    x16 = eval("x1") + x15;
    var opts51 = [1, 1, 0, 92, 164, 87, 98];
    var b50 = false;
    for (var idx52 = 0; idx52 < opts51.length; idx52++) {
        if (opts51[idx52] == fn44(s45, s46, b47, b48, b49)) {
            b50 = true;
            break;
        }
    }
    var x53 = +(b50);
    var x58;
    if ((x16) ? true : false) {
        x58 = !! (String(x53));
    } else {
        var e57 = "b56";
        x58 = eval(e57);
    }
    return x58;
}
fn59(input_B2, input_S1, input_S2, input_B3, input_B1, input_S3, input_I2);
