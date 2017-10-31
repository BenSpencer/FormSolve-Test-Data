// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if false then (false == (str(bool(input_int('I3'))) === str((if input_bool('B2') then not((bool(int(input_bool('B1'))) || ((if input_bool('B1') then int(not(not(not((int((str(bool(input_int('I1'))) === input_string('S2'))) >= int(str(not(input_bool('B1'))))))))) else input_int('I1')) === input_int('I1')))) else not(not(not(not(input_bool('B2'))))))))) else (if bool(input_string('S3')) then (input_bool('B2') && bool(str(input_int('I3')))) else not(bool(int(bool(input_int('I3')))))))

var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);

var fn65 = function (x1, b36, s13, x10, s49, b17) {
    var x52 = x1;
    var b51 = b36;
    var x57 = x52;
    var b50 = Boolean(s49);
    var x62;
    if (b50) {
        var s53 = String(x52);
        var b55;
        if (b51 && !! (s53)) {
            b55 = true;
        } else {
            b55 = false;
        }
        x62 = b55;
    } else {
        var x59 = ( !! (x57)) ? 1 : 0;
        var b60 = Boolean(x59);
        var b61;
        if (b60) {
            b61 = false;
        } else {
            b61 = true;
        }
        x62 = b61;
    }
    var e63 = "x62";
    var x64;
    if (false) {
        var b45;
        if (String(Boolean(x1)) === eval("var b4 = b36; var b39 = !(eval(\"!(b36)\"));var b40 = !(b39);var b41 = !(b40);var x42; if (b4) { var b5 = b17; var e8 = \"var b7 = ((b5) ? 1 : 0) ? true : false;b7\";var x29 = x10; var x27 = x10; var b9 = b17; var x28; if (b9) { var s12 = '' + (!!(x10));var b14 = s12; var b15 = s13;var x16 = (b14 === b15) | 0;var b18; if (b17) { b18 = false; } else { b18 = true; }var s19 = String(b18);var b23; if ((x16 >= Number(s19))) { b23 = false; } else { b23 = true; }var b24 = !(b23);var b25; if (b24) { b25 = false; } else { b25 = true; }var x26 = ~~(b25); x28 = x26; } else { x28 = x27; }var e30 = \"x29\";var b31; if (x28 === eval(e30)) { b31 = true; } else { b31 = false; }var b33; if (eval(e8)) { b33 = true; } else { b33 = b31; }var b35 = !(b33); x42 = b35; } else { x42 = b41; }'' + (x42)")) {
            b45 = true;
        } else {
            b45 = false;
        }
        x64 = (false == b45);
    } else {
        x64 = eval(e63);
    }
    return x64;
}
fn65(input_I3, input_B2, input_S2, input_I1, input_S3, input_B1);
