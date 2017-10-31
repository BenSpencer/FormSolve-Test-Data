// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I3') != int(input_bool('B2'))) then (if bool(input_int('I3')) then (str(input_bool('B2')) + input_string('S3')) else "") else (if not(not(not((if bool(str(input_bool('B3'))) then bool(input_int('I3')) else not((int(input_string('S2')) <= int((if not((bool(int(input_bool('B1'))) === input_bool('B2'))) then false else bool(str(input_bool('B1'))))))))))) then str(not(input_bool('B3'))) else "Q"))

var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);

function fn50(b16, x1, b2, s21, s11, b23) {
    var x19 = x1;
    var x6 = x1;
    var b27 = b2;
    var b8 = b2;
    var x3 = Number(b2);
    var x14;
    if ((x6) ? true : false) {
        var e10 = "'' + (b8)";
        var x12 = eval(e10) + s11;
        x14 = x12;
    } else {
        x14 = "";
    }
    var e15 = "x14";
    var b44 = b16;
    var b20 = !! (x19);
    var b32 = b23;
    var e30 = "var b28 = eval(\"var x24 = Number(b23);!!(x24)\"); var b29 = b27;b28 === b29";
    var b31;
    if (eval(e30)) {
        b31 = false;
    } else {
        b31 = true;
    }
    var x35;
    if (b31) {
        x35 = false;
    } else {
        x35 = Boolean('' + (b32));
    }
    var x36 = (x35) ? 1 : 0;
    var b37 = Number(s21);
    var b38 = x36;
    var b39 = !(b37 <= b38);
    var x40;
    if ((String(b16)) ? true : false) {
        x40 = b20;
    } else {
        x40 = b39;
    }
    var b41 = !(x40);
    var b42 = !(b41);
    var b43 = !(b42);
    var x48;
    if (b43) {
        var e45 = "b44";
        var b46;
        if (eval(e45)) {
            b46 = false;
        } else {
            b46 = true;
        }
        var s47 = (b46).toString();
        x48 = s47;
    } else {
        x48 = "Q";
    }
    return ((x1 != x3) ? eval(e15) : x48);
}
fn50(input_B3, input_I3, input_B2, input_S2, input_S3, input_B1);
