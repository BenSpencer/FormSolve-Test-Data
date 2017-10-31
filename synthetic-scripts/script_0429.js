// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then str((33 <= (input_int('I2') % int(input_string('S3'))))) else str(int(input_string('S2'))))

var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");

var fn17 = Function('b1', 's13', 's3', 'x2', "var e12 = \"var e4 = \\\"s3\\\";var e5 = \\\"eval(e4)\\\";String((33 <= (x2 % parseInt(eval(e5), 10))))\";var x16; if (b1) { x16 = eval(e12); } else { var s15 = (Number(s13)).toString(); x16 = s15; } return x16;");
fn17(input_B3, input_S2, input_S3, input_I2);
