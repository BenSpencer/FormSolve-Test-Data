// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(replace(input_string('S3'), "", "j4")) then not(input_bool('B2')) else bool(int((input_bool('B1') && bool((if ((input_bool('B1') != input_bool('B3')) && input_bool('B1')) then input_string('S1') else str((input_bool('B2') == (if regex-test(str(bool(int(input_bool('B1')))), /^([A-Z]wlDZ|SJA\r+dH)$/) then input_bool('B1') else input_bool('B1'))))))))))

var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);

function fn53(b43, b10, s1, b41, s40) {
    var b6 = b43;
    var e50 = "var b42 = b10; var b45; if (b10) { var b44 = ((function(s21, b14, b11, b22) { var b23 = b11; var b17 = b11; var e13 = \"eval(\\\"b11\\\")\";var b15 = eval(e13) != b14;var b18; if (b15 && b17) { b18 = true; } else { b18 = false; }var b31 = b23; var b33 = b23; var e25 = \"~~(b23)\";var s28 = (Boolean(eval(\"eval(e25)\"))).toString();var x34; if ((eval(\"s28\")).match(/^([A-Z]wlDZ|SJA\\r+dH)$/) !== null) { x34 = eval(\"b31\"); } else { x34 = b33; }var b35; if (b22 == x34) { b35 = true; } else { b35 = false; }var x38; if (eval(\"b18\")) { x38 = s21; } else { x38 = String(b35); } return x38; })(s40, b41, b42, b43) ) ? true : false; b45 = b44; } else { b45 = false; }var e49 = \"+(eval(\\\"b45\\\"))\";eval(e49)";
    var b51 = Boolean(eval(e50));
    return (Boolean(eval("eval(\"var s2 = (s1).replace(\\\"\\\", \\\"j4\\\");s2\")")) ? eval("var b7; if (b6) { b7 = false; } else { b7 = true; }var e8 = \"b7\";eval(e8)") : b51);
}
fn53(input_B2, input_B1, input_S3, input_B3, input_S1);
