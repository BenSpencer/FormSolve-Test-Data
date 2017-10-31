// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str((int(str(int(str((bool(input_int('I3')) && (len(input_string('S3')) in [1, 14, 1])))))) != input_int('I3')))) then bool(int(bool((if input_bool('B1') then (if regex-test(input_string('S3'), /^(P|[0-9])?$/) then input_int('I1') else len(str(input_int('I1')))) else len(str((if input_bool('B1') then 0 else len(input_string('S1'))))))))) else false)

var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");

(function (s30, b19, s20, x1, x22) {
    var s3 = s20;
    var x14 = x1;
    var b2 = !! (x1);
    var opts6 = [1, 14, 1];
    var b5 = false;
    for (var idx7 = 0; idx7 < opts6.length; idx7++) {
        if (opts6[idx7] == (s3).length) {
            b5 = true;
            break;
        }
    }
    var x11 = Number(((b2 && b5)).toString());
    var s12 = (x11).toString();
    var b15 = Number(s12);
    var b16 = x14;
    var b18 = (String(b15 != b16)) ? true : false;
    var b39 = !! (eval("var b28 = b19; var x23 = x22; var re21 = new RegExp(\"^(P|[0-9])?$\");var e24 = \"x23\";var e29 = \"b28\";var x32; if (eval(e29)) { x32 = 0; } else { var l31 = (s30).length; x32 = l31; }var s33 = (x32).toString();var l34 = (s33).length;+(Boolean((b19 ? (re21.test(s20) ? x22 : (String(eval(e24))).length) : l34)))"));
    return (b18 ? b39 : false);
})(input_S1, input_B1, input_S3, input_I3, input_I1);
