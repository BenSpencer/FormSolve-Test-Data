// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((input_bool('B1') && (str(int(bool(int((if regex-test(str(bool(len((if (int(input_bool('B3')) > int(not(bool(int(str(input_bool('B2'))))))) then input_string('S1') else "")))), /^(.[-_ ]l_Wk|LL)*$/) then not(bool(int((int(input_bool('B1')) in [90, 1, 1, -53, 181])))) else bool(str(input_bool('B2')))))))) >= input_string('S2')))) then input_bool('B1') else input_bool('B3'))

var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn52 = function (b31, b1, s15, s41, b3) {
    var b50 = b3;
    var b49 = b1;
    var b21 = b1;
    var e2 = "b1";
    var x51;
    if (eval("!((eval(e2) && eval(\"var x39 = ~~(!!(eval(\\\"var b6 = b31; var e5 = \\\\\\\"var x4 = (b3) ? 1 : 0;x4\\\\\\\";var e9 = \\\\\\\"var s7 = String(b6);Number(s7)\\\\\\\";var b13; if (eval(e5) > (!((eval(e9)) ? true : false)) ? 1 : 0) { b13 = true; } else { b13 = false; }var x16; if (b13) { x16 = s15; } else {  x16 = \\\\\\\"\\\\\\\"; }var l17 = (x16).length;var s19 = String(Boolean(l17));var x35; if ((s19).match(/^(.[-_ ]l_Wk|LL)*$/) !== null) { var x28 = Number(eval(\\\\\\\"var opts24 = [90, 1, 1, -53, 181];var b23 = false; for (var idx25 = 0; idx25 < opts24.length; idx25++) { if (opts24[idx25] == ~~(b21)) { b23 = true; break; } }var e26 = \\\\\\\\\\\\\\\"b23\\\\\\\\\\\\\\\";eval(e26)\\\\\\\"));var b29 = (x28) ? true : false;var b30; if (b29) { b30 = false; } else { b30 = true; } x35 = b30; } else { x35 = Boolean(eval(\\\\\\\"var s32 = (b31).toString();s32\\\\\\\")); }(x35) | 0\\\")));var s40 = (x39).toString();var b42 = false; if (s40 >= s41) { b42 = true; }b42\")))")) {
        x51 = b49;
    } else {
        x51 = b50;
    }
    return x51;
}
fn52(input_B2, input_B1, input_S1, input_S2, input_B3);
