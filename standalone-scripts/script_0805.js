// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B3') || (if input_bool('B1') then input_bool('B2') else bool(input_int('I2')))) then ((int((true != input_bool('B3'))) < len(str((((input_string('S2') + "") <= str(len(str(bool(input_int('I2')))))) === (str(input_int('I1')) === str(bool(int(regex-test(str((input_int('I2') - input_int('I3'))), /^([a-z]|cY)?N$/))))))))) && not(input_bool('B2'))) else false)

var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);

function fn54(b2, x28, x18, x25, s15, b3, b1) {
    var x4 = x18;
    var b10 = b1;
    var b48 = b3;
    var b8;
    if (b1) {
        b8 = true;
    } else {
        var e5 = "x4";
        var b6 = Boolean(eval(e5));
        b8 = (b2 ? b3 : b6);
    }
    var x53;
    if (b8) {
        var e11 = "b10";
        var b12 = false;
        if (true != eval(e11)) {
            b12 = true;
        }
        var x14 = ~~ (b12);
        var b46;
        if (x14 < eval("var x27 = x18; var x16 = s15; var x17 = \"\";var b23 = false; if (x16 + x17 <= '' + (('' + (Boolean(x18))).length)) { b23 = true; }var e40 = \"var e37 = \\\"var s32 = '' + (eval(\\\\\\\"(x27 - x28)\\\\\\\"));var re33 = /^([a-z]|cY)?N$/;var x34 = Number(re33.test(s32));var b35 = !!(x34);var s36 = String(b35);s36\\\";var b38 = (x25).toString(); var b39 = eval(e37);b38 === b39\";var b41; if (b23 === eval(e40)) { b41 = true; } else { b41 = false; }var s43 = String(b41);var l44 = (s43).length;l44")) {
            b46 = true;
        } else {
            b46 = false;
        }
        var b49 = !(b48);
        var e50 = "b49";
        x53 = (b46 && eval(e50));
    } else {
        x53 = false;
    }
    return x53;
}
fn54(input_B1, input_I3, input_I2, input_I1, input_S2, input_B2, input_B3);
