// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(bool(int(input_string('S1'))))) then not((int(input_bool('B3')) >= len((if not(not((if input_bool('B3') then (input_int('I2') != int((str(not(input_bool('B2'))) != input_string('S2')))) else input_bool('B1')))) then (if input_bool('B3') then str(len(input_string('S2'))) else str(len(input_string('S1')))) else str(not((len((if not(input_bool('B1')) then input_string('S3') else input_string('S2'))) != int((int(input_string('S3')) in [7, 32, -85, 48, 0, 0, 63, 1, 173, 148]))))))))) else bool(len(input_string('S2'))))

var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");

(function (s1, x11, s16, b12, s37, b10, b22) {
    var s59 = s16;
    var s31 = s1;
    var e2 = "s1";
    var x3 = Number(eval(e2));
    var b6 = (((x3) ? true : false).toString()) ? true : false;
    var b7 = b10;
    var e8 = "b7";
    var x9 = +(eval(e8));
    var b35 = b22;
    var s27 = s16;
    var s38 = s16;
    var b26 = b10;
    var x23;
    if (b10) {
        var e13 = "b12";
        var b14;
        if (eval(e13)) {
            b14 = false;
        } else {
            b14 = true;
        }
        var s15 = '' + (b14);
        var b17 = s15;
        var b18 = s16;
        var x19 = ~~ (b17 != b18);
        var b20;
        if (x11 != x19) {
            b20 = true;
        } else {
            b20 = false;
        }
        x23 = b20;
    } else {
        x23 = b22;
    }
    var b24 = !(x23);
    var b25;
    if (b24) {
        b25 = false;
    } else {
        b25 = true;
    }
    var x34;
    if (b26) {
        var l28 = (s27).length;
        var e29 = "l28";
        var s30 = String(eval(e29));
        x34 = s30;
    } else {
        var l32 = (s31).length;
        var s33 = (l32).toString();
        x34 = s33;
    }
    var s41 = s37;
    var b36 = !(b35);
    var x39;
    if (b36) {
        x39 = s37;
    } else {
        x39 = s38;
    }
    var e44 = "eval(\"Number(s41)\")";
    var opts46 = [7, 32, -85, 48, 0, 0, 63, 1, 173, 148];
    var x48 = (opts46.indexOf(eval(e44)) > -1) | 0;
    var b51 = !(((x39).length != x48));
    var x53;
    if (b25) {
        x53 = x34;
    } else {
        x53 = (b51).toString();
    }
    var l54 = (x53).length;
    var e55 = "l54";
    var b56 = x9 >= eval(e55);
    var b58;
    if (b56) {
        b58 = false;
    } else {
        b58 = true;
    }
    var b61 = !! ((s59).length);
    return (b6 ? b58 : b61);
})(input_S1, input_I2, input_S2, input_B2, input_S3, input_B3, input_B1);
