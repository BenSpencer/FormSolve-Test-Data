// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(("hFa" >= str(int(((not(input_bool('B2')) !== bool(str(input_int('I2')))) && bool(str(not((if bool(input_int('I2')) then (66 == int(str(int(((len(input_string('S1')) in [77, 50, 95]) == false))))) else bool((if input_bool('B2') then int(input_string('S1')) else int(not(bool(input_int('I1'))))))))))))))) then input_int('I3') else int(not((input_int('I3') !== len(input_string('S1'))))))

var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);

function fn66(x4, x34, s12, b1, x54) {
    var x56 = x54;
    var s57 = s12;
    var e53 = "var x9 = x4; var b35 = b1; var e3 = \"var b2; if (b1) { b2 = false; } else { b2 = true; }b2\";var s5 = '' + (x4);var b7 = false; if (eval(e3) !== Boolean(s5)) { b7 = true; }var b43; if (eval(\"var s36 = s12; var e10 = \\\"x9\\\";var e20 = \\\"var opts15 = [77, 50, 95];var b14 = false; for (var idx16 = 0; idx16 < opts15.length; idx16++) { if (opts15[idx16] == (s12).length) { b14 = true; } }var b17 = b14; var b18 = false;var x19 = (b17 == b18) ? 1 : 0;x19\\\";var s21 = (eval(e20)).toString();var x22 = parseInt(s21, 10);var b23 = 66; var b24 = x22;var e40 = \\\"eval(\\\\\\\"eval(\\\\\\\\\\\\\\\"var fn33 = Function('x28', 'b25', 's26', \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"var b29 = !!(x28);var x31 = (!(b29)) ? 1 : 0;var x32; if (b25) { var x27 = parseInt(s26, 10); x32 = x27; } else { x32 = x31; } return x32;\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"); Boolean(fn33(x34, b35, s36))\\\\\\\\\\\\\\\")\\\\\\\")\\\";var x41; if (!!(eval(e10))) { x41 = b23 == b24; } else { x41 = eval(e40); }x41\")) { b43 = false; } else { b43 = true; }var b46; if (b7 && ('' + (b43)) ? true : false) { b46 = true; } else { b46 = false; }var x48 = Number(b46);var s49 = String(x48);var b52; if ((\"hFa\" >= s49)) { b52 = false; } else { b52 = true; }b52";
    var x65;
    if (eval(e53)) {
        x65 = eval("x54");
    } else {
        var b61 = x56;
        var b62 = eval("var l59 = (eval(\"s57\")).length;l59");
        var b63 = !(b61 !== b62);
        x65 = ~~ (b63);
    }
    return x65;
}
fn66(input_I2, input_I1, input_S1, input_B2, input_I3);
