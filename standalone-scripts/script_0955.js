// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S2')) then (not(input_bool('B2')) !== regex-test(str((if bool(input_int('I1')) then (if not((if false then bool(int(input_string('S2'))) else input_bool('B2'))) then bool((input_int('I3') * (if input_bool('B1') then 1 else int(input_string('S1'))))) else input_bool('B2')) else input_bool('B1'))), /^[A-Z]CAUnEL(pgzP|vq)*BV-$/)) else bool(input_int('I1')))

var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);

function fn46(b12, s20, x18, b19, s1, x43) {
    var s8 = s1;
    var x5 = x43;
    var b3 = b12;
    var b4 = !(b3);
    var e39 = "var b35 = b19; var b31 = b12; var e33 = \"eval(\\\"b31\\\")\";var x34; if (eval(\"var b15; if ((false ? (eval(\\\"var x9 = parseInt(s8, 10);x9\\\")) ? true : false : eval(\\\"b12\\\"))) { b15 = false; } else { b15 = true; }eval(\\\"b15\\\")\")) { var e30 = \"var e29 = \\\"var x25; if (b19) {  x25 = 1; } else { var e22 = \\\\\\\"var e21 = \\\\\\\\\\\\\\\"s20\\\\\\\\\\\\\\\";eval(e21)\\\\\\\";var x24 = Number(eval(\\\\\\\"eval(e22)\\\\\\\")); x25 = x24; }var b28 = Boolean((x18 * x25));b28\\\";eval(e29)\"; x34 = eval(e30); } else { x34 = eval(e33); }var x36; if (eval(\"(x5) ? true : false\")) { x36 = x34; } else {  x36 = b35; }var e38 = \"String(x36)\";eval(e38)";
    var re40 = /^[A-Z]CAUnEL(pgzP|vq)*BV-$/;
    var b41 = b4;
    var b42 = re40.test(eval(e39));
    var x45;
    if ( !! (s1)) {
        x45 = b41 !== b42;
    } else {
        x45 = Boolean(x43);
    }
    return x45;
}
fn46(input_B2, input_S1, input_I3, input_B1, input_S2, input_I1);
