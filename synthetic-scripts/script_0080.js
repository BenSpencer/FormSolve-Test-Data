// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then str((1 == (input_int('I2') * (if ("6Nu" < str(bool(int(input_string('S3'))))) then 18 else input_int('I2'))))) else "LSc")

var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);

var fn20 = function (s2, x1) {
    var x10 = x1;
    var e11 = "x10";
    var x12;
    if (eval("var e8 = \"var s5 = String(Boolean(parseInt(s2, 10)));var b6 = \\\"6Nu\\\" < s5;b6\";eval(e8)")) {
        x12 = 18;
    } else {
        x12 = eval(e11);
    }
    x13 = x1 * x12;
    var e15 = "x13";
    var x19;
    if (true) {
        x19 = ((1 == eval(e15))).toString();
    } else {
        x19 = "LSc";
    }
    return x19;
}
fn20(input_S3, input_I2);
