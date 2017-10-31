// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((if bool(replace(input_string('S1'), "4", "09g")) then input_string('S2') else str(len(str((int(str(int(input_bool('B3')))) != int(input_bool('B1'))))))) in ['sVAk', '8', 'ew', 'tG', 'D', 'RFoj', 'MAov', '', 'c8']) then input_bool('B1') else (int((int(input_string('S3')) !== input_int('I3'))) != len(str(bool(len(str(int(regex-test(input_string('S2'), /^-(\r|Y[0-9])+$/)))))))))

var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn41 = Function('b7', 'x26', 's30', 's24', 's1', 'b11', "var b23 = b11; var s5 = s30; var s3 = (eval(\"s1\")).replace(\"4\", \"09g\");var b4 = (s3) ? true : false;var e6 = \"s5\";var s9 = (Number(b7)).toString();var x10 = parseInt(s9, 10);var b13 = x10; var b14 = (b11) ? 1 : 0;var l16 = (String(b13 != b14)).length;var opts21 = ['sVAk', '8', 'ew', 'tG', 'D', 'RFoj', 'MAov', '', 'c8'];var b20 = opts21.indexOf((b4 ? eval(e6) : eval(\"'' + (l16)\"))) > -1;var x40; if (b20) { x40 = b23; } else { var re31 = new RegExp(\"^-(\\\\r|Y[0-9])+$\");var l34 = ((+(re31.test(s30))).toString()).length;var s36 = String(Boolean(l34));var l37 = (s36).length;var b38 = ~~((parseInt(s24, 10) !== x26)); var b39 = l37; x40 = b38 != b39; } return x40;");
fn41(input_B3, input_I3, input_S2, input_S3, input_S1, input_B1);
