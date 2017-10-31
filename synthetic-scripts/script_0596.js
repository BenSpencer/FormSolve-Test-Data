// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then not((if bool(int(not((false || not(regex-test(str((input_int('I3') % (if bool(input_int('I3')) then input_int('I2') else (len((if (bool(input_string('S3')) != input_bool('B3')) then input_string('S3') else input_string('S3'))) + input_int('I1'))))), /^[A-Z]?(MY|b U\WP)N$/)))))) then input_bool('B2') else not((input_bool('B3') || not((if input_bool('B3') then input_bool('B3') else not((str(input_bool('B1')) > input_string('S3'))))))))) else not(input_bool('B1')))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn55 = function (s11, b33, x5, b1, x2, b38, x17) {
    var b52 = b38;
    var b32 = b1;
    var s41 = s11;
    var b8 = b33;
    var re25 = new RegExp("^[A-Z]?(MY|b U\\WP)N$");
    var b27;
    if (false || !(re25.test((eval("var x3 = x2; var e16 = \"var s13 = s11; var s6 = s11; var b9; if ((s6) ? true : false != b8) { b9 = true; } else { b9 = false; }var x14; if (b9) {  x14 = eval(\\\"s11\\\"); } else {  x14 = s13; }var l15 = (x14).length;l15\";x18 = eval(e16) + x17;x21 = x2 % ((x3) ? true : false ? x5 : x18);x21")).toString()))) {
        b27 = true;
    } else {
        b27 = false;
    }
    var b29;
    if (b27) {
        b29 = false;
    } else {
        b29 = true;
    }
    var x30 = ~~ (b29);
    var b36 = b33;
    var e35 = "eval(\"b33\")";
    var b37 = b36;
    var x45;
    if (b36) {
        x45 = b37;
    } else {
        var b44 = !((eval("var s39 = '' + (b38);s39") > s41));
        x45 = b44;
    }
    var b46;
    if (x45) {
        b46 = false;
    } else {
        b46 = true;
    }
    var b47 = false;
    if (eval(e35) || b46) {
        b47 = true;
    }
    var b49;
    if (b47) {
        b49 = false;
    } else {
        b49 = true;
    }
    var b51 = !(((x30) ? true : false ? b32 : b49));
    var b53 = !(b52);
    return (b1 ? b51 : b53);
}
fn55(input_S3, input_B3, input_I2, input_B2, input_I3, input_B1, input_I1);
