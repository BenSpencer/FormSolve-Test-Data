// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S1')) then input_bool('B1') else (input_bool('B2') === (if input_bool('B3') then (if bool(input_string('S1')) then input_bool('B3') else (len(str(int(str(not(input_bool('B2')))))) >= input_int('I1'))) else not((input_int('I3') > input_int('I1'))))))

var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn34 = function (b3, s1, x24, b10, x19, b6) {
    var s7 = s1;
    var x33;
    if ((s1) ? true : false) {
        x33 = eval("b3");
    } else {
        var b5 = b10;
        var x26 = x19;
        var b9 = b6;
        var x30;
        if (b6) {
            var x22;
            if (Boolean(s7)) {
                x22 = b9;
            } else {
                x22 = (eval("var e17 = \"var e14 = \\\"var b11 = !(b10);var s12 = (b11).toString();Number(s12)\\\";var s15 = (eval(e14)).toString();(s15).length\";eval(e17)") >= x19);
            }
            var e23 = "x22";
            x30 = eval(e23);
        } else {
            var e25 = "x24";
            var b27;
            if (eval(e25) > x26) {
                b27 = true;
            } else {
                b27 = false;
            }
            var b29 = !(b27);
            x30 = b29;
        }
        var b31 = b5 === x30;
        x33 = b31;
    }
    return x33;
}
fn34(input_B1, input_S1, input_I3, input_B2, input_I1, input_B3);
