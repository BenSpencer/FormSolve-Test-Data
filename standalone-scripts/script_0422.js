// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I3') >= int(bool((if not(bool(str((bool(input_int('I2')) != input_bool('B1'))))) then str((str(bool(str(input_int('I2')))) != str(input_bool('B1')))) else str(not(bool(input_string('S1')))))))) then bool(input_string('S2')) else (not(input_bool('B3')) !== (bool(("" + input_string('S1'))) == (if input_bool('B3') then input_bool('B2') else not(input_bool('B3'))))))

var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);

function fn53(s31, b34, s22, x1, b15, b43, x10) {
    var s36 = s22;
    var x2 = x10;
    var b4 = b15;
    var s7 = '' + (( !! (x2) != b4));
    var x26;
    if (!((s7) ? true : false)) {
        var e21 = "var s16 = String(b15);var b18; if (eval(\"var s11 = '' + (x10);var b12 = !!(s11);var s13 = String(b12);s13\") != eval(\"s16\")) { b18 = true; } else { b18 = false; }(b18).toString()";
        x26 = eval(e21);
    } else {
        var b24 = !( !! (s22));
        x26 = String(b24);
    }
    var x28 = +((x26) ? true : false);
    var b29 = x1 >= x28;
    var x52;
    if (b29) {
        var b32 = Boolean(s31);
        x52 = eval("b32");
    } else {
        var e51 = "var b41 = b34; var b35; if (b34) { b35 = false; } else { b35 = true; }var x37 = \"\" + s36;var b39 = Boolean(x37);var e40 = \"b39\";var b44 = b41; var x46; if (eval(\"b41\")) {  x46 = b43; } else {  x46 = !(b44); }var b49 = b35; var b50 = (eval(e40) == x46);b49 !== b50";
        x52 = eval(e51);
    }
    return x52;
}
fn53(input_S2, input_B3, input_S1, input_I3, input_B1, input_B2, input_I2);
