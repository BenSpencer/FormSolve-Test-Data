// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S3')) then ((if input_bool('B3') then (str(((if not(input_bool('B3')) then input_int('I1') else input_int('I3')) > len(str(input_bool('B3'))))) === "DXV") else not((if false then input_bool('B3') else bool(int(str(input_bool('B2'))))))) != (int(bool(input_string('S3'))) >= int(str(bool(str(input_int('I1'))))))) else (not(bool(str(input_int('I3')))) && (bool(input_int('I3')) != not(input_bool('B1')))))

var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);

function fn56(s1, x42, b11, x33, b27, b49) {
    var s30 = s1;
    var x8 = x42;
    var b2 = !! (s1);
    var x7 = x33;
    var b26 = b11;
    var b3 = b11;
    var b4 = b11;
    var e10 = "var x9; if (!(eval(\"b4\"))) { x9 = x7; } else {  x9 = x8; }x9";
    var s12 = String(b11);
    var b14 = eval(e10) > (s12).length;
    var b17 = String(b14);
    var b18 = "DXV";

    function fn25(b19, b20) {
        var x24;
        if (false) {
            x24 = b19;
        } else {
            var s21 = '' + (b20);
            var x22 = Number(s21);
            x24 = (x22) ? true : false;
        }
        return x24;
    }
    var b28 = !(fn25(b26, b27));
    var x29;
    if (b3) {
        x29 = b17 === b18;
    } else {
        x29 = b28;
    }
    var x37 = parseInt(String(((x33).toString()) ? true : false), 10);
    var b38 = ( !! (s30)) ? 1 : 0;
    var b39 = x37;
    var b40 = x29 != b38 >= b39;
    var x47 = x42;
    var e44 = "String(x42)";
    var b46;
    if ((eval(e44)) ? true : false) {
        b46 = false;
    } else {
        b46 = true;
    }
    var b50;
    if (b49) {
        b50 = false;
    } else {
        b50 = true;
    }
    var b51;
    if ((x47) ? true : false) {
        b51 = !b50;
    } else {
        b51 = b50;
    }
    var b53;
    if (b46) {
        b53 = b51;
    } else {
        b53 = false;
    }
    var x55;
    if (b2) {
        x55 = b40;
    } else {
        x55 = b53;
    }
    return x55;
}
fn56(input_S3, input_I3, input_B3, input_I1, input_B2, input_B1);
