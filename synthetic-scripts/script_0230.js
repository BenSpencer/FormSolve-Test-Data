// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(bool(int(not((if bool(input_string('S3')) then input_bool('B1') else (input_string('S2') == (input_string('S3') + str(input_bool('B1')))))))))) then input_string('S1') else str(bool(int(str(int(regex-test(input_string('S3'), /^g(UcNO|[A-Z]?)\sakQFt$/)))))))

var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn35 = Function('s17', 's25', 'b16', 's15', "var s27 = s15; var fn14 = Function('s1', 'b3', 's4', \"var s5 = s1; var b6 = b3; var x13; if ((s1) ? true : false) { x13 = b3; } else { var e7 = \\\"b6\\\";var s8 = (eval(e7)).toString();var x9 = s5; var x10 = s8;var b11 = s4 == x9 + x10; x13 = b11; } return x13;\"); var b19; if (eval(\"fn14(s15, b16, s17)\")) { b19 = false; } else { b19 = true; }var x20 = Number(b19);var e22 = \"(x20) ? true : false\";var b23 = !(eval(e22));var e26 = \"s25\";var re28 = new RegExp(\"^g(UcNO|[A-Z]?)\\\\sakQFt$\");var x29 = (re28.test(s27)) | 0;var s33 = '' + (!!(parseInt(String(x29), 10)));var x34; if (!(b23)) { x34 = eval(e26); } else { x34 = s33; } return x34;");
fn35(input_S2, input_S1, input_B1, input_S3);
