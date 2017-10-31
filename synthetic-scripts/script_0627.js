// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(not(input_bool('B1')))) then input_bool('B1') else (if ((int(input_bool('B1')) == len(input_string('S1'))) && not(bool(str(not(bool(input_string('S3'))))))) then not((if (bool(int(input_string('S2'))) != bool(input_int('I1'))) then input_bool('B3') else input_bool('B1'))) else bool(input_string('S2'))))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");

var fn37 = function (x23, s8, b1, s20, b27, s12) {
    var b28 = b1;
    var b5 = b1;
    var b3 = !(!(b1));
    var x36;
    if (!(b3)) {
        x36 = b5;
    } else {
        var b6 = b28;
        var s33 = s20;
        var b10 = false;
        if (~~(b6) == (s8).length) {
            b10 = true;
        }
        var b13 = Boolean(s12);
        var b14 = !(b13);
        var s15 = '' + (b14);
        var b16 = Boolean(s15);
        var b18;
        if (!(b16)) {
            b18 = b10;
        } else {
            b18 = false;
        }
        var x21 = parseInt(s20, 10);
        var b22 = Boolean(x21);
        var b24 = !! (x23);
        var b25;
        if (b22) {
            b25 = !b24;
        } else {
            b25 = b24;
        }
        var x31;
        if (b25) {
            x31 = b27;
        } else {
            var e30 = "eval(\"b28\")";
            x31 = eval(e30);
        }
        var b32 = !(x31);
        x36 = (b18 ? b32 : !! (s33));
    }
    return x36;
}
fn37(input_I1, input_S1, input_B1, input_S2, input_B3, input_S3);
