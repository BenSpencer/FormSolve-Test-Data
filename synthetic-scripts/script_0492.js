// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S3') < "Otg") then bool((input_int('I2') % len(str(input_bool('B3'))))) else ((if input_bool('B3') then str(input_bool('B3')) else "fPr") in ['wvC', 'hdp6', '', '9', 'Ki', 'Wj082', 'hLcn', 'LM', 'pius', '7']))

var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn22 = function (s1, b12, x4) {
    var b6 = b12;
    var b2 = s1 < "Otg";
    var s7 = '' + (b6);
    var l8 = (s7).length;
    x9 = eval("x4") % l8;
    var e20 = "var opts18 = ['wvC', 'hdp6', '', '9', 'Ki', 'Wj082', 'hLcn', 'LM', 'pius', '7'];opts18.indexOf(eval(\"var b13 = b12; var x15; if (b12) { x15 = '' + (b13); } else {  x15 = \\\"fPr\\\"; }x15\")) > -1";
    return (b2 ? (x9) ? true : false : eval(e20));
}
fn22(input_S3, input_B3, input_I2);
