// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I3')) then (if (int(input_string('S1')) > int(input_bool('B1'))) then str(bool((if input_bool('B3') then input_int('I3') else int((int(not(not(input_bool('B1')))) >= int(not((not(input_bool('B1')) || (bool(str(int(input_string('S1')))) === input_bool('B1')))))))))) else (if true then "kO" else str(not(bool(input_int('I3')))))) else str(input_int('I1')))

var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn41 = function (b9, s17, x10, b11) {
    var b5 = b11;
    var x34 = x10;
    var s3 = s17;
    var b7;
    if (Number(s3) > (b5) ? 1 : 0) {
        b7 = true;
    } else {
        b7 = false;
    }
    var b15 = b11;
    var b12 = !(b11);
    var x14 = +(!(b12));
    var b21 = b15;
    var s19 = String(Number(s17));
    var b22 = (s19) ? true : false === b21;
    var b24 = false;
    if (!(b15) || b22) {
        b24 = true;
    }
    var x27 = Number(!(b24));
    var x30 = ~~ ((x14 >= x27));
    var x39;
    if (true) {
        x39 = "kO";
    } else {
        var e38 = "var b36 = !(Boolean(x34));var s37 = (b36).toString();s37";
        x39 = eval(e38);
    }
    var x40;
    if (b7) {
        x40 = '' + ( !! ((b9 ? x10 : x30)));
    } else {
        x40 = x39;
    }
    return x40;
}
var fn49 = Function('x1', 'b45', 's43', 'b42', 'x46', "var x44 = x1; var s47 = (x46).toString(); return (!!(x1) ? fn41(b42, s43, x44, b45) : s47);");
fn49(input_I3, input_B1, input_S1, input_B3, input_I1);
