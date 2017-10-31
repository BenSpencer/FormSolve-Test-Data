// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then str((int(input_string('S1')) + ((if not(not(not(not((not(input_bool('B2')) == not(bool(input_int('I3')))))))) then input_int('I1') else input_int('I1')) % input_int('I2')))) else str(len(str(int(str(not(bool(int(str(bool(str(len(input_string('S1'))))))))))))))

var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);

function fn41(b4, x20, b1, x6, x17, s2) {
    var s27 = s2;
    var x18 = x17;
    var b5 = !(b4);
    var e9 = "var b8; if ((x6) ? true : false) { b8 = false; } else { b8 = true; }b8";
    var b12;
    if ((b5 == eval(e9))) {
        b12 = false;
    } else {
        b12 = true;
    }
    var b13;
    if (b12) {
        b13 = false;
    } else {
        b13 = true;
    }
    var b15;
    if (!(b13)) {
        b15 = false;
    } else {
        b15 = true;
    }
    var e16 = "b15";
    var x19;
    if (eval(e16)) {
        x19 = x17;
    } else {
        x19 = x18;
    }
    x22 = x19;
    x23 = eval("x20");
    x24 = Number(s2);
    x25 = x22 % x23;
    var x40;
    if (b1) {
        x40 = '' + (x24 + x25);
    } else {
        var l28 = (s27).length;
        var s29 = String(l28);
        var s31 = String( !! (s29));
        var b33 = !! (parseInt(s31, 10));
        var b34;
        if (b33) {
            b34 = false;
        } else {
            b34 = true;
        }
        var s35 = String(b34);
        var s37 = '' + (parseInt(s35, 10));
        var s39 = ((s37).length).toString();
        x40 = s39;
    }
    return x40;
}
fn41(input_B2, input_I2, input_B1, input_I3, input_I1, input_S1);
