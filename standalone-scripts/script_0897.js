// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (len(input_string('S3')) === int((if bool(str(bool(replace((if (bool(int(bool(input_string('S3')))) != bool(input_int('I1'))) then str((int(str(input_bool('B3'))) >= int(not(bool(int(bool(input_string('S1')))))))) else input_string('S2')), "uw", "R")))) then (not(bool(input_string('S1'))) && not(input_bool('B2'))) else (input_int('I1') in [7, 1, 57, 28])))) then int(input_bool('B1')) else int(not(not((input_int('I3') != input_int('I3'))))))

var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn71 = function (s40, b39, x63, s1, b61, s38, x36, b48) {
    var s37 = s1;
    var e57 = "var x52 = x36; var s45 = s40; function fn35(x9, s3, s33, b14, s19) { var b10 = Boolean(x9);var b11; if (eval(\"((eval(\\\"var b4 = !!(s3);b4\\\")) | 0) ? true : false\")) { b11 = !b10; } else { b11 = b10; }var e13 = \"b11\";var x34; if (eval(e13)) { x34 = (eval(\"var x27 = ~~(eval(\\\"eval(\\\\\\\"var b23 = !!((eval(\\\\\\\\\\\\\\\"Boolean(s19)\\\\\\\\\\\\\\\")) | 0);!(b23)\\\\\\\")\\\"));var b28 = Number(eval(\\\"(eval(\\\\\\\"b14\\\\\\\")).toString()\\\")) >= x27;var e30 = \\\"b28\\\";eval(e30)\")).toString(); } else { x34 = s33; } return x34; } var s41 = (fn35(x36, s37, s38, b39, s40)).replace(\"uw\", \"R\");var s43 = '' + (Boolean(s41));var b44 = Boolean(s43);var b46 = !!(s45);var b47; if (b46) { b47 = false; } else { b47 = true; }var b50; if (b47) { var b49; if (b48) { b49 = false; } else { b49 = true; } b50 = b49; } else { b50 = false; }var opts54 = [7, 1, 57, 28];var b53 = false; for (var idx55 = 0; idx55 < opts54.length; idx55++) { if (opts54[idx55] == x52) { b53 = true; } }var x56; if (b44) { x56 = b50; } else { x56 = b53; }x56";
    var x58 = +(eval(e57));
    var x70;
    if (((s1).length === x58)) {
        x70 = Number(b61);
    } else {
        var x64 = x63;
        var b67 = !((x63 != x64));
        var b68 = !(b67);
        var x69 = (b68) | 0;
        x70 = x69;
    }
    return x70;
}
fn71(input_S1, input_B3, input_I3, input_S3, input_B1, input_S2, input_I1, input_B2);
