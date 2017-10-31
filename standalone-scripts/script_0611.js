// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(bool(input_int('I3'))) <= int(input_bool('B1'))) then (str((if input_bool('B2') then not(bool(input_string('S2'))) else bool(int(bool(input_int('I3')))))) <= input_string('S2')) else (input_int('I3') == int((bool(input_int('I3')) && input_bool('B2')))))

var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);

function fn33(s10, b4, x1, b26) {
    var b9 = b26;
    var x13 = x1;
    var x23 = x1;
    var e5 = "b4";
    var b7;
    if (+((x1) ? true : false) <= +(eval(e5))) {
        b7 = true;
    } else {
        b7 = false;
    }
    var s20 = s10;
    var x18;
    if (b9) {
        var b11 = (s10) ? true : false;
        var b12;
        if (b11) {
            b12 = false;
        } else {
            b12 = true;
        }
        x18 = b12;
    } else {
        var e16 = "var b14 = Boolean(x13);(b14) ? 1 : 0";
        var b17 = Boolean(eval(e16));
        x18 = b17;
    }
    var s19 = (x18).toString();
    var b21 = false;
    if (s19 <= s20) {
        b21 = true;
    }
    var x24 = x23;
    var b25 = !! (x24);
    var b27 = b25 && b26;
    var b30;
    if (x23 == ~~(b27)) {
        b30 = true;
    } else {
        b30 = false;
    }
    return (b7 ? b21 : b30);
}
fn33(input_S2, input_B1, input_I3, input_B2);
