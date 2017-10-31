// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if regex-test(str(input_bool('B3')), /^l(bE[a-z]hnFhT|YskJc)pIg\r+z$/) then not((input_bool('B2') === not(((if (input_bool('B3') != not(input_bool('B3'))) then int(input_string('S1')) else input_int('I1')) >= len(input_string('S3')))))) else not(bool(input_int('I3')))) then input_int('I1') else int(input_string('S1')))

var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);

var fn37 = function (x27, s18, x16, s19, b1, b4) {
    var x31 = x16;
    var s33 = s18;
    var b17 = b1;
    var re3 = /^l(bE[a-z]hnFhT|YskJc)pIg\r+z$/;
    var b28 = !! (x27);
    var x30;
    if (re3.test(String(b1))) {
        var fn15 = function (x13, b5, s11) {
            var b6 = b5;
            var e7 = "b6";
            var b8;
            if (eval(e7)) {
                b8 = false;
            } else {
                b8 = true;
            }
            var b9 = b5 != b8;
            var x12 = parseInt(s11, 10);
            return (b9 ? x12 : x13);
        }
        var b21;
        if (fn15(x16, b17, s18) >= (s19).length) {
            b21 = true;
        } else {
            b21 = false;
        }
        var b23;
        if (b21) {
            b23 = false;
        } else {
            b23 = true;
        }
        x30 = !((b4 === b23));
    } else {
        x30 = !(b28);
    }
    var x36;
    if (x30) {
        var e32 = "x31";
        x36 = eval(e32);
    } else {
        var e35 = "parseInt(s33, 10)";
        x36 = eval(e35);
    }
    return x36;
}
fn37(input_I3, input_S1, input_I1, input_S3, input_B3, input_B2);
