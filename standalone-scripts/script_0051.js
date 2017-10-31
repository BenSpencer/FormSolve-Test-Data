// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then true else ((str(bool(str(int(str(regex-test(input_string('S3'), /^[a-z]?of(Yu|rJg-\W)nF$/)))))) <= input_string('S1')) != bool(input_string('S2'))))

var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");

function fn18(s13, s10, b1, s3) {
    var x17;
    if (eval("b1")) {
        x17 = true;
    } else {
        var s7 = String(Number(((s3).match(/^[a-z]?of(Yu|rJg-\W)nF$/) !== null).toString()));
        var s9 = String( !! (s7));
        var b11 = false;
        if (s9 <= s10) {
            b11 = true;
        }
        var b14 = !! (s13);
        var b15;
        if (b11) {
            if (b14) {
                b15 = false;
            } else {
                b15 = true;
            }
        } else {
            if (b14) {
                b15 = true;
            } else {
                b15 = false;
            }
        }
        x17 = b15;
    }
    return x17;
}
fn18(input_S2, input_S1, input_B3, input_S3);
