// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((if (input_bool('B3') != (int((input_string('S2') in ['iDP', 'Z9j', 'o', 'LF0'])) in [1, 1, 1, 1, 82, 164, -82, 8, 1, 0])) then input_bool('B1') else (if regex-test(str(int(input_string('S1'))), /^([A-Z]?|\t)$/) then true else not(input_bool('B3')))) != not(bool((if input_bool('B1') then int(str(int(str(len(str(int(not(input_bool('B3'))))))))) else input_int('I3'))))) then input_bool('B3') else input_bool('B1'))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");

function fn36(x34, b24, b25) {
    var x35;
    if (b24) {
        var b26 = !(b25);
        var s28 = '' + (+(b26));
        var l29 = (s28).length;
        var s30 = '' + (l29);
        var s32 = '' + (Number(s30));
        x35 = parseInt(s32, 10);
    } else {
        x35 = x34;
    }
    return x35;
}
var fn52 = Function('b14', 's2', 'x37', 's16', 'b1', "var b45 = b1; var b50 = b14; var b39 = b1; var b38 = b14; var b20 = b1; var opts10 = [1, 1, 1, 1, 82, 164, -82, 8, 1, 0];var b12; if (b1) { if (opts10.indexOf(Number(eval(\"var e3 = \\\"s2\\\";var opts5 = ['iDP', 'Z9j', 'o', 'LF0'];var b4 = false; for (var idx6 = 0; idx6 < opts5.length; idx6++) { if (opts5[idx6] == eval(e3)) { b4 = true; break; } }b4\"))) > -1) { b12 = false; } else { b12 = true; } } else { if (opts10.indexOf(Number(eval(\"var e3 = \\\"s2\\\";var opts5 = ['iDP', 'Z9j', 'o', 'LF0'];var b4 = false; for (var idx6 = 0; idx6 < opts5.length; idx6++) { if (opts5[idx6] == eval(e3)) { b4 = true; break; } }b4\"))) > -1) { b12 = true; } else { b12 = false; } }var x23; if (b12) { var e15 = \"b14\"; x23 = eval(e15); } else { var s18 = (Number(s16)).toString();var x22; if ((s18).match(/^([A-Z]?|\\t)$/) !== null) {  x22 = true; } else { var b21; if (b20) { b21 = false; } else { b21 = true; } x22 = b21; } x23 = x22; }var e42 = \"var b40 = Boolean(fn36(x37, b38, b39));!(b40)\";var b43 = x23 != eval(e42);var e49 = \"eval(\\\"var e47 = \\\\\\\"var e46 = \\\\\\\\\\\\\\\"b45\\\\\\\\\\\\\\\";eval(e46)\\\\\\\";eval(e47)\\\")\";var x51; if (b43) { x51 = eval(e49); } else {  x51 = b50; } return x51;");
fn52(input_B1, input_S2, input_I3, input_S1, input_B3);
