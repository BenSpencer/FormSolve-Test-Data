// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (len(input_string('S1')) < (int(input_bool('B3')) % int(input_string('S2')))) then (input_bool('B2') !== input_bool('B2')) else (bool(len(str(int((bool(int((bool(input_int('I1')) === (input_bool('B1') || input_bool('B2'))))) && bool((if not((bool(int(str(not(input_bool('B3'))))) || (input_bool('B2') === not(input_bool('B2'))))) then str(int(bool(int((str(int(input_bool('B3'))) <= input_string('S2')))))) else str(input_bool('B3'))))))))) == input_bool('B2')))

var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");

function fn74(x16, s47, b29, b18, s1, b11) {
    var s5 = s47;
    var b3 = b29;
    var b21 = b11;
    var l2 = (s1).length;
    var b9 = false;
    if (l2 < (+(b3) % Number(s5))) {
        b9 = true;
    }
    var b12 = b11;
    var b14;
    if (b11 !== eval("b12")) {
        b14 = true;
    } else {
        b14 = false;
    }
    var b70 = b21;
    var s67 = (+(eval("var b35 = b21; var b17 = !!(x16);var e19 = \"b18\";var e20 = \"eval(e19)\";var b23; if (eval(e20)) { b23 = true; } else { b23 = eval(\"b21\"); }var b25 = b17 === b23;var x27 = ~~(b25);var b43 = b29; var b58 = b29; var e30 = \"b29\";var b31 = !(eval(e30));var s32 = '' + (b31);var x33 = Number(s32);var b34 = !!(x33);var b36 = b35; var b37; if (b36) { b37 = false; } else { b37 = true; }var b38 = b35 === b37;var b40; if (b34 || b38) { b40 = true; } else { b40 = false; }var x60; if (!(b40)) { var e44 = \"b43\";var x45 = ~~(eval(e44));var s46 = '' + (x45);var b48 = s46; var b49 = s47;var e50 = \"b48 <= b49\";var e54 = \"~~(eval(\\\"eval(\\\\\\\"eval(e50)\\\\\\\")\\\"))\"; x60 = '' + (~~(Boolean(eval(e54)))); } else { var s59 = (b58).toString(); x60 = s59; }var b63; if ((x27) ? true : false) { b63 = !!(eval(\"x60\")); } else { b63 = false; }b63"))).toString();
    var b71;
    if (((s67).length) ? true : false) {
        if (b70) {
            b71 = true;
        } else {
            b71 = false;
        }
    } else {
        if (b70) {
            b71 = false;
        } else {
            b71 = true;
        }
    }
    var x73;
    if (b9) {
        x73 = b14;
    } else {
        x73 = b71;
    }
    return x73;
}
fn74(input_I1, input_S2, input_B3, input_B1, input_S1, input_B2);
