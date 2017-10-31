// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S2')) then (if bool(str(not((not((input_bool('B3') && not(not(input_bool('B1'))))) != (str(not(input_bool('B2'))) < str((if (if input_bool('B3') then input_bool('B1') else input_bool('B1')) then not(((len(input_string('S2')) in [7, 187, 1, 1, 9, 5, 73, 1]) || input_bool('B1'))) else not(input_bool('B1'))))))))) then input_int('I2') else len(input_string('S2'))) else (int(bool(str(input_bool('B2')))) + int(((input_int('I1') / input_int('I1')) > len(input_string('S2'))))))

var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);

function fn66(b16, x51, b12, s1, x40, b17) {
    var s20 = s1;
    var s57 = s1;
    var b45 = b12;
    var s42 = s20;
    var b3 = b16;
    var b4 = b17;
    var b9;
    if (b3) {
        b9 = eval("!(eval(\"var b5 = !(b4);b5\"))");
    } else {
        b9 = false;
    }
    var e13 = "b12";
    var b14;
    if (eval(e13)) {
        b14 = false;
    } else {
        b14 = true;
    }
    var s15 = String(b14);
    var b25 = b17;
    var b29 = b17;
    var b18 = b17;
    var x19;
    if (b16) {
        x19 = b17;
    } else {
        x19 = b18;
    }
    var x31;
    if (x19) {
        var opts23 = [7, 187, 1, 1, 9, 5, 73, 1];
        var b22 = opts23.indexOf((s20).length) > -1;
        var b26;
        if (b22) {
            b26 = true;
        } else {
            b26 = b25;
        }
        x31 = !(b26);
    } else {
        var b30 = !(b29);
        x31 = b30;
    }
    var b33 = false;
    if (s15 < '' + (x31)) {
        b33 = true;
    }
    var b35;
    if (!(b9)) {
        if (b33) {
            b35 = false;
        } else {
            b35 = true;
        }
    } else {
        if (b33) {
            b35 = true;
        } else {
            b35 = false;
        }
    }
    var s38 = '' + (!(b35));
    var x44;
    if ( !! (s38)) {
        var e41 = "x40";
        x44 = eval(e41);
    } else {
        x44 = (s42).length;
    }
    var x65;
    if ((s1) ? true : false) {
        x65 = x44;
    } else {
        var e50 = "var b47 = (String(b45)) ? true : false;var x48 = +(b47);eval(\"x48\")";
        var x53 = x51;
        var e52 = "x51";
        x55 = eval(e52) / eval("x53");
        var x62 = ~~ ((x55 > eval("(s57).length")));
        x63 = eval(e50) + x62;
        x65 = x63;
    }
    return x65;
}
fn66(input_B3, input_I1, input_B2, input_S2, input_I2, input_B1);
