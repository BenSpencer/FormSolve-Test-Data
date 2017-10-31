// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (bool(int(input_bool('B3'))) || bool(int(str(int((input_int('I3') >= len(input_string('S3')))))))) then bool(input_string('S3')) else (input_string('S2') >= str(len(str(not((not(not(input_bool('B1'))) && ((input_int('I2') / input_int('I2')) >= int(not((if input_bool('B2') then bool(str(input_int('I2'))) else (input_string('S1') == input_string('S2')))))))))))))

var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");

function fn56(s18, b19, x4, b1, s16, b38, x22, s40) {
    var s5 = s16;
    var b3 = ((b1) | 0) ? true : false;
    var l6 = (s5).length;
    var b7 = x4 >= l6;
    var s10 = String((b7) | 0);
    var x11 = Number(s10);
    var b12 = Boolean(x11);
    var e13 = "b12";
    var b14 = false;
    if (b3 || eval(e13)) {
        b14 = true;
    }
    var s39 = s18;
    var b20 = !(b19);
    var b21 = !(b20);
    var e46 = "var x41 = x22; var x23 = x22; x24 = x22; x25 = x23;var fn37 = Function('b26', 's32', 's31', 'x28', \"var b30 = !!('' + (x28));var b33 = s31 == s32;var x36; if (eval(\\\"b26\\\")) { x36 = b30; } else { x36 = eval(\\\"b33\\\"); } return x36;\"); var b44 = false; if (x24 / x25 >= ~~(!(fn37(b38, s39, s40, x41)))) { b44 = true; }b44";
    var b47 = b21 && eval(e46);
    var b49;
    if (b47) {
        b49 = false;
    } else {
        b49 = true;
    }
    var l51 = (String(b49)).length;
    var b53 = false;
    if (s18 >= (l51).toString()) {
        b53 = true;
    }
    var x55;
    if (b14) {
        x55 = Boolean(s16);
    } else {
        x55 = b53;
    }
    return x55;
}
fn56(input_S2, input_B1, input_I3, input_B3, input_S3, input_B2, input_I2, input_S1);
