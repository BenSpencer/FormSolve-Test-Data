// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int((input_int('I3') != (if true then int(str(int(str(int(not(not(input_bool('B3')))))))) else len(str((if (input_string('S2') in ['wO', 'Fty', 'Brh', '', '', 't84z', '', 'yp', '9']) then bool(replace(str(bool(str((input_int('I2') / input_int('I1'))))), "", "d7mUl")) else (if input_bool('B2') then input_bool('B3') else bool(int((input_string('S3') >= str(len((str((input_int('I2') >= input_int('I1'))) + input_string('S2')))))))))))))) >= input_int('I2')) then input_bool('B3') else bool(len(str(input_int('I1')))))

var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn50 = Function('b28', 's30', 'x16', 'x17', 's11', 'b29', "var x32 = x17; var s36 = s11; var x31 = x16; var opts13 = ['wO', 'Fty', 'Brh', '', '', 't84z', '', 'yp', '9'];var b12 = opts13.indexOf(s11) > -1;var e15 = \"b12\";var x49; if (eval(e15)) { var e26 = \"x18 = x16 / x17;var s20 = '' + (x18);var s23 = '' + (eval(\\\"!!(s20)\\\"));var s24 = (s23).replace(\\\"\\\", \\\"d7mUl\\\");var b25 = (s24) ? true : false;b25\"; x49 = eval(\"eval(e26)\"); } else { var x37 = ((x31 >= x32)).toString() + s36;var l39 = (x37).length;var x43 = Number((s30 >= String(l39)));var e44 = \"x43\";var e45 = \"eval(e44)\";var x47; if (b28) { x47 = b29; } else { x47 = Boolean(eval(e45)); }var e48 = \"x47\"; x49 = eval(e48); } return x49;");

function fn74(b51, s55, x1, x53, b2, s52, x54) {
    var x69 = x54;
    var b68 = b2;
    var x64 = x53;
    var b56 = b2;
    var x60;
    if (true) {
        var e3 = "b2";
        var b4;
        if (eval(e3)) {
            b4 = false;
        } else {
            b4 = true;
        }
        var b5;
        if (b4) {
            b5 = false;
        } else {
            b5 = true;
        }
        var x6 = (b5) ? 1 : 0;
        var s7 = '' + (x6);
        var x8 = parseInt(s7, 10);
        var s9 = (x8).toString();
        var x10 = parseInt(s9, 10);
        x60 = x10;
    } else {
        var e57 = "fn50(b51, s52, x53, x54, s55, b56)";
        x60 = ((eval(e57)).toString()).length;
    }
    var b61 = x1 != x60;
    var b65 = false;
    if ((b61) ? 1 : 0 >= x64) {
        b65 = true;
    }
    var x73;
    if (eval("b65")) {
        x73 = b68;
    } else {
        var s70 = (x69).toString();
        var l71 = (s70).length;
        x73 = Boolean(l71);
    }
    return x73;
}
fn74(input_B2, input_S2, input_I3, input_I2, input_B3, input_S3, input_I1);
