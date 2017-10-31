// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then str(int(str((len(str((if not((int((input_string('S1') !== str(not(input_bool('B1'))))) <= int(str(bool(input_int('I3')))))) then input_bool('B2') else (str(input_bool('B3')) in ['8mMrE', 'GH', 'iOFc'])))) < int(input_string('S2')))))) else str(regex-test(str(int(not(input_bool('B3')))), /^([0-9]|nNimK)fG\t*L$/)))

var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn43 = function (b1, b17, b18, s2, s27, x10) {
    var b4 = b1;
    var b35 = b18;
    var e31 = "var e3 = \"s2\";var b5; if (b4) { b5 = false; } else { b5 = true; }var s6 = (b5).toString();var b7 = eval(e3); var b8 = s6;var b14; if ((b7 !== b8) ? 1 : 0 <= Number('' + (Boolean(x10)))) { b14 = true; } else { b14 = false; }var b16; if (b14) { b16 = false; } else { b16 = true; }var opts21 = ['8mMrE', 'GH', 'iOFc'];var b20 = false; for (var idx22 = 0; idx22 < opts21.length; idx22++) { if (opts21[idx22] == '' + (b18)) { b20 = true; break; } }var x23; if (b16) { x23 = b17; } else { x23 = b20; }var s24 = (x23).toString();var e25 = \"s24\";((eval(e25)).length < parseInt(s27, 10))";
    var s32 = String(eval(e31));
    var e36 = "b35";
    var b37 = !(eval(e36));
    var x38 = ~~ (b37);
    var s39 = (x38).toString();
    var re40 = new RegExp("^([0-9]|nNimK)fG\\t*L$");
    var s41 = (re40.test(s39)).toString();
    return (b1 ? '' + (parseInt(s32, 10)) : s41);
}
fn43(input_B1, input_B2, input_B3, input_S1, input_S2, input_I3);
