// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then false else ((input_string('S1') in ['', '3PMcT', 'vI', 'lBxP', 'N1U', '9gT', 'r89N', 'W4gj', '', 'sdUL']) != regex-test(str(int(str(((if input_bool('B2') then false else bool(int((not((int(input_string('S2')) === int(bool(input_string('S2'))))) != input_bool('B3'))))) != (input_bool('B1') != not(input_bool('B1'))))))), /^vC(fxSh_j.[-_ ]+|T)v$/)))

var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");

function fn38(b1, s2, b16, b22, s7) {
    var b6 = b1;
    var x37;
    if (b1) {
        x37 = false;
    } else {
        var opts4 = ['', '3PMcT', 'vI', 'lBxP', 'N1U', '9gT', 'r89N', 'W4gj', '', 'sdUL'];
        var b3 = opts4.indexOf(s2) > -1;
        var s9 = s7;
        var b10 = (s9) ? true : false;
        var x11 = (b10) | 0;
        var e12 = "x11";
        var b13 = false;
        if (Number(s7) === eval(e12)) {
            b13 = true;
        }
        var b17;
        if (!(b13)) {
            if (b16) {
                b17 = false;
            } else {
                b17 = true;
            }
        } else {
            if (b16) {
                b17 = true;
            } else {
                b17 = false;
            }
        }
        var x19 = +(b17);
        var x21;
        if (b6) {
            x21 = false;
        } else {
            x21 = Boolean(x19);
        }
        var b23 = b22;
        var b27;
        if (b22 != eval("var e25 = \"var b24; if (b23) { b24 = false; } else { b24 = true; }b24\";eval(e25)")) {
            b27 = true;
        } else {
            b27 = false;
        }
        var b29;
        if (x21) {
            b29 = !b27;
        } else {
            b29 = b27;
        }
        var s33 = String(parseInt('' + (b29), 10));
        var re34 = /^vC(fxSh_j.[-_ ]+|T)v$/;
        var b35 = false;
        if (b3 != re34.test(s33)) {
            b35 = true;
        }
        x37 = b35;
    }
    return x37;
}
fn38(input_B2, input_S1, input_B3, input_B1, input_S2);
