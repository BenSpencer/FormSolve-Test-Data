// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B3')) then (if bool(str(int(bool(int((str(input_int('I1')) !== (if input_bool('B3') then str(not(not(bool(str(input_bool('B3')))))) else input_string('S2')))))))) then input_string('S2') else str(("8no" < str(input_int('I3'))))) else str(((not(not(input_bool('B1'))) != bool(input_string('S1'))) || (str(int(input_string('S2'))) in ['rbxhz', '', '']))))

var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn33 = function (s13, b5, x25, x3) {
    var s24 = s13;
    var e31 = "var b28; if (\"8no\" < eval(\"(x25).toString()\")) { b28 = true; } else { b28 = false; }var s30 = '' + (b28);s30";
    var x32;
    if (eval("var s4 = '' + (x3);var b6 = b5; var s12 = String(!(!(Boolean(eval(\"(b6).toString()\")))));var x18 = ~~((s4 !== eval(\"(b5 ? s12 : s13)\")));var x20 = ((x18) ? true : false) | 0;var s21 = '' + (x20);Boolean(s21)")) {
        x32 = s24;
    } else {
        x32 = eval(e31);
    }
    return x32;
}
var fn58 = function (x36, s41, s34, b38, b1, x37) {
    var s46 = s34;
    var b35 = b1;
    var b2;
    if (b1) {
        b2 = false;
    } else {
        b2 = true;
    }
    var x57;
    if (b2) {
        x57 = fn33(s34, b35, x36, x37);
    } else {
        x57 = eval("var b39; if (b38) { b39 = false; } else { b39 = true; }var b40 = !(b39);var b44 = b40 != (eval(\"s41\")) ? true : false;var opts50 = ['rbxhz', '', ''];var b49 = false; for (var idx51 = 0; idx51 < opts50.length; idx51++) { if (opts50[idx51] == String(parseInt(s46, 10))) { b49 = true; break; } }var e52 = \"b49\";var b53; if (eval(e52)) { b53 = true; } else { b53 = b44; }String(b53)");
    }
    return x57;
}
fn58(input_I3, input_S1, input_S2, input_B1, input_B3, input_I1);
