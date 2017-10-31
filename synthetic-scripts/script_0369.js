// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(input_int('I2')) == str(input_int('I2'))) then not(not(input_bool('B3'))) else (if (int(input_string('S2')) == input_int('I1')) then (input_string('S3') in ['9r0e', 'Cn', 'lq8', 'csamE', '0e', 'wbiT', 'DNQqA']) else (if input_bool('B1') then bool((int(str(input_bool('B2'))) / int(not((bool(str(input_int('I3'))) && (input_string('S1') === input_string('S1'))))))) else not(regex-test(input_string('S3'), /^n\t?([-_ ]|kZtZXTIlJ)lU$/)))))

var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);

function fn62(s59, s57, x1, s54, x58, x55, b56, b60, b9) {
    var x5 = x1;
    var e4 = "var e3 = \"'' + (x1)\";eval(e3)";
    var s6 = (x5).toString();
    var b7 = false;
    if (eval(e4) == s6) {
        b7 = true;
    }
    var fn53 = Function('s12', 'x14', 'b25', 's35', 'x30', 's20', 'b26', "var s47 = s20; var x52; if (eval(\"var e18 = \\\"(parseInt(s12, 10) == eval(\\\\\\\"x14\\\\\\\"))\\\";eval(e18)\")) { x52 = eval(\"var opts22 = ['9r0e', 'Cn', 'lq8', 'csamE', '0e', 'wbiT', 'DNQqA'];var b21 = false; for (var idx23 = 0; idx23 < opts22.length; idx23++) { if (opts22[idx23] == s20) { b21 = true; } }b21\"); } else { var e29 = \"Number(String(b26))\";var b32 = !!(String(x30));var e34 = \"eval(\\\"b32\\\")\";var s37 = s35; var b38 = false; if (eval(\"s35\") === s37) { b38 = true; }var b40; if (b38) { b40 = eval(e34); } else { b40 = false; }var b42; if (b40) { b42 = false; } else { b42 = true; }var b46 = !!((eval(e29) / Number(b42)));var e50 = \"!((s47).match(/^n\\\\t?([-_ ]|kZtZXTIlJ)lU$/) !== null)\";var x51; if (b25) { x51 = b46; } else { x51 = eval(e50); } x52 = x51; } return x52;");
    var x61;
    if (b7) {
        var b11 = !(!(b9));
        x61 = b11;
    } else {
        x61 = fn53(s54, x55, b56, s57, x58, s59, b60);
    }
    return x61;
}
fn62(input_S3, input_S1, input_I2, input_S2, input_I3, input_I1, input_B1, input_B2, input_B3);
