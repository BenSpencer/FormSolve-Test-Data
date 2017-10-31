// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I1') > len(regex-replace(str(bool(str(bool(int(bool(str(len(input_string('S2'))))))))), /nJ(b|\shuP)\W+R[-_ ]hUpX/, "bihUF"))) then bool(str((input_bool('B1') !== (input_string('S1') in ['a', 'NCV', '', 'SsXQv'])))) else input_bool('B3'))

var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);

(function (x1, s20, b28, s2, b19) {
    var b8 = !! ((Boolean(eval("((s2).length).toString()"))) | 0);
    var s10 = '' + (eval("b8"));
    var b11 = (s10) ? true : false;
    var re14 = new RegExp("nJ(b|\\shuP)\\W+R[-_ ]hUpX");
    var s13 = (String(b11)).replace(re14, "bihUF");
    var x29;
    if ((x1 > (eval("s13")).length)) {
        var opts22 = ['a', 'NCV', '', 'SsXQv'];
        var b21 = false;
        for (var idx23 = 0; idx23 < opts22.length; idx23++) {
            if (opts22[idx23] == s20) {
                b21 = true;
            }
        }
        var b24 = false;
        if (b19 !== b21) {
            b24 = true;
        }
        x29 = ('' + (b24)) ? true : false;
    } else {
        x29 = b28;
    }
    return x29;
})(input_I1, input_S1, input_B3, input_S2, input_B1);
