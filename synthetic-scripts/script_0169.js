// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S3') !== str(int(input_string('S3')))) then (if (bool((int(str(int(str((int(input_string('S3')) > len(input_string('S1'))))))) + len(input_string('S1')))) || not(bool(str(input_int('I1'))))) then regex-test(str(input_bool('B2')), /^(\W|[-_ ]*)z$/) else bool(input_int('I1'))) else (int(not((input_string('S3') in ['3', 'RX53F', 'kNVZF', '', '', 'PsU', 'a8u']))) !== ((if (input_bool('B3') || bool(input_int('I3'))) then 15 else 46) + len(input_string('S1')))))

var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);

function fn49(b43, x44) {
    var b46;
    if ((x44) ? true : false) {
        b46 = true;
    } else {
        b46 = b43;
    }
    var x48;
    if (b46) {
        x48 = 15;
    } else {
        x48 = 46;
    }
    return x48;
}
var fn59 = function (x51, b28, s17, b50, x22, s1) {
    var s35 = s1;
    var s7 = s1;
    var s52 = s17;
    var s2 = s1;
    var s4 = (parseInt(s2, 10)).toString();
    var e34 = "var x31 = x22; var s9 = s17; var b11 = Number(s7); var b12 = (s9).length;var x14 = Number(String(b11 > b12));var s15 = String(x14);var x16 = parseInt(s15, 10);var l18 = (s17).length;x19 = x16; x20 = l18;var s23 = (x22).toString();var b24 = Boolean(s23);var b25; if (b24) { b25 = false; } else { b25 = true; }var b26 = false; if ((x19 + x20) ? true : false || b25) { b26 = true; }var s29 = '' + (b28);var re30 = new RegExp(\"^(\\\\W|[-_ ]*)z$\");var b32 = (x31) ? true : false;var x33; if (b26) { x33 = re30.test(s29); } else { x33 = b32; }x33";
    var opts38 = ['3', 'RX53F', 'kNVZF', '', '', 'PsU', 'a8u'];
    var b37 = opts38.indexOf(eval("s35")) > -1;
    var e41 = "!(b37)";
    var x42 = (eval(e41)) ? 1 : 0;
    var l53 = (s52).length;
    x54 = fn49(b50, x51) + l53;
    var b56 = false;
    if (x42 !== x54) {
        b56 = true;
    }
    return ((s1 !== s4) ? eval(e34) : b56);
}
fn59(input_I3, input_B2, input_S1, input_B3, input_I1, input_S3);
