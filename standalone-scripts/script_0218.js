// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then input_bool('B1') else (if (str(input_bool('B1')) == "olh") then (str(input_int('I2')) === input_string('S1')) else input_bool('B3')))

var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");

(function (s10, x7, b2, b1) {
    var b13 = b1;
    var b3 = b2;
    var b5 = (b3).toString();
    var b6 = "olh";
    return (b1 ? b2 : (b5 == b6 ? (eval("String(x7)") === s10) : b13));
})(input_S1, input_I2, input_B1, input_B3);
