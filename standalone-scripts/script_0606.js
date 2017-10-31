// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str((if false then input_bool('B1') else input_bool('B3'))) in ['', 'Qhq', 'MX']) then (if (if not(input_bool('B1')) then not(not(bool(str((input_bool('B3') == input_bool('B3')))))) else (int(input_string('S1')) == 43)) then (not(not((int(str(input_bool('B2'))) > input_int('I1')))) == bool(int(input_bool('B3')))) else input_bool('B1')) else regex-test(input_string('S1'), /^(V[a-z]Y|O)?TW\D\s$/))

var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn5 = Function('b1', 'b3', "var x4; if (false) {  x4 = eval(\"b1\"); } else { x4 = b3; } return x4;");
var fn50 = function (b30, x34, s24, b12, b14) {
    var b7 = b14;
    var b6 = b12;
    var s47 = s24;
    var opts10 = ['', 'Qhq', 'MX'];
    var b9 = opts10.indexOf(String(fn5(b6, b7))) > -1;
    var re48 = /^(V[a-z]Y|O)?TW\D\s$/;
    var x49;
    if (b9) {
        var b39 = b14;
        var b45 = b12;
        var e20 = "var b15 = b14; var e16 = \"b15\";var b17 = false; if (b14 == eval(e16)) { b17 = true; }String(b17)";
        var b22 = !((eval(e20)) ? true : false);
        var b23 = !(b22);
        var x29;
        if (!(b12)) {
            x29 = b23;
        } else {
            var b26 = false;
            if (parseInt(s24, 10) == 43) {
                b26 = true;
            }
            var e28 = "b26";
            x29 = eval(e28);
        }
        var x46;
        if (x29) {
            var x33 = parseInt('' + (eval("b30")), 10);
            var b35 = x33 > x34;
            var x41 = Number(eval("b39"));
            var b42 = (x41) ? true : false;
            var b43;
            if (!(!(b35))) {
                if (b42) {
                    b43 = true;
                } else {
                    b43 = false;
                }
            } else {
                if (b42) {
                    b43 = false;
                } else {
                    b43 = true;
                }
            }
            x46 = b43;
        } else {
            x46 = b45;
        }
        x49 = x46;
    } else {
        x49 = re48.test(s47);
    }
    return x49;
}
fn50(input_B2, input_I1, input_S1, input_B1, input_B3);
