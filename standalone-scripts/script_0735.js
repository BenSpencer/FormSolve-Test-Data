// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(len(input_string('S1'))) then len(str(((bool(replace(str((if input_bool('B2') then int(not(input_bool('B3'))) else len(str(int(bool(str(int(bool(str((input_int('I1') < len(input_string('S1'))))))))))))), "s", "pI")) || (if (22 >= int(input_bool('B3'))) then bool(int(input_bool('B2'))) else not((input_int('I3') in [0, 77, 1, 94, 0, 155])))) === input_bool('B2')))) else (if not(input_bool('B3')) then input_int('I2') else input_int('I3')))

var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn66 = function (x64, b60, x63) {
    var b62 = !(eval("b60"));
    var x65;
    if (b62) {
        x65 = x63;
    } else {
        x65 = x64;
    }
    return x65;
}
var fn71 = Function('x31', 's1', 'x69', 'x46', 'b32', 'b29', "var b68 = b32; var x67 = x46; var s30 = s1; var l3 = (eval(\"s1\")).length;var b55 = b29; var b36 = b32; var b42 = b29; var s33 = String((function(b6, s13, x12, b7) { var s19 = '' + (eval(\"(x12 < eval(\\\"var l14 = (s13).length;l14\\\"))\"));var b20 = !!(s19);var x24 = (Boolean(((b20) ? 1 : 0).toString())) | 0;var s25 = String(x24);var l26 = (s25).length;var x27; if (b6) { var b8 = !(b7);var e10 = \"eval(\\\"b8\\\")\"; x27 = Number(eval(e10)); } else { x27 = l26; } return x27; })(b29, s30, x31, b32) );var b35 = ((s33).replace(\"s\", \"pI\")) ? true : false;var b40 = false; if (22 >= eval(\"eval(\\\"~~(b36)\\\")\")) { b40 = true; }var opts48 = [0, 77, 1, 94, 0, 155];var b47 = false; for (var idx49 = 0; idx49 < opts48.length; idx49++) { if (opts48[idx49] == x46) { b47 = true; break; } }var e51 = \"!(b47)\";var x52; if (b40) { var e43 = \"b42\";var b45 = (+(eval(e43))) ? true : false; x52 = b45; } else { x52 = eval(e51); }var b53; if (b35 || x52) { b53 = true; } else { b53 = false; }var b56 = b53 === b55;var s58 = String(b56);var x70; if (eval(\"(l3) ? true : false\")) { x70 = (s58).length; } else { x70 = fn66(x67, b68, x69); } return x70;");
fn71(input_I1, input_S1, input_I2, input_I3, input_B3, input_B2);
