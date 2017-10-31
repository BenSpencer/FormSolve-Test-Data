// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(str(input_bool('B3')))) then str(((int((if not(not(not((str(bool(int((input_bool('B1') === ((input_string('S2') == input_string('S1')) !== input_bool('B1')))))) == "sy")))) then not(input_bool('B3')) else ((int(input_bool('B2')) != int(str(input_bool('B3')))) == not(bool(len(str(input_bool('B3')))))))) - 1) + int(input_string('S1')))) else str(int(input_string('S2'))))

var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");

function fn54(s45, b26, s50, b11, b1) {
    var s7 = s50;
    var b24 = b1;
    var s2 = (b1).toString();
    var x3 = parseInt(s2, 10);
    var s8 = s45;
    var b28 = b24;
    var b5 = b11;
    var e6 = "b5";
    var b9;
    if (s7 == s8) {
        b9 = true;
    } else {
        b9 = false;
    }
    var b14 = eval(e6) === (b9 !== b11);
    var b19;
    if (((~~(b14)) ? true : false).toString() == "sy") {
        b19 = true;
    } else {
        b19 = false;
    }
    var b21 = !(b19);
    var b22;
    if (b21) {
        b22 = false;
    } else {
        b22 = true;
    }
    var b23;
    if (b22) {
        b23 = false;
    } else {
        b23 = true;
    }
    var b33 = b28;
    var x27 = (b26) | 0;
    var s29 = (b28).toString();
    var e34 = "b33";
    var l36 = ('' + (eval(e34))).length;
    var b37 = !! (l36);
    var b38;
    if (b37) {
        b38 = false;
    } else {
        b38 = true;
    }
    var b39;
    if ((x27 != Number(s29))) {
        if (b38) {
            b39 = true;
        } else {
            b39 = false;
        }
    } else {
        if (b38) {
            b39 = false;
        } else {
            b39 = true;
        }
    }
    var x42 = ((b23 ? !(b24) : b39)) ? 1 : 0;
    x47 = (x42 - 1);
    x48 = Number(s45);
    var x53;
    if ( !! (x3)) {
        x53 = String(x47 + x48);
    } else {
        var x51 = parseInt(s50, 10);
        x53 = String(x51);
    }
    return x53;
}
fn54(input_S1, input_B2, input_S2, input_B1, input_B3);
