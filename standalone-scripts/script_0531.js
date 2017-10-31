// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if false then bool(int((int(str(input_int('I1'))) != len(str(input_bool('B3')))))) else bool(len((if input_bool('B2') then str(input_bool('B2')) else str(int(not(bool(len(input_string('S3'))))))))))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn32 = function (x1, b4, b14, s17) {
    var x31;
    if (false) {
        var e8 = "var e6 = \"var s5 = String(b4);s5\";(eval(e6)).length";
        var b9 = Number((x1).toString()) != eval(e8);
        var e12 = "(b9) ? 1 : 0";
        x31 = Boolean(eval(e12));
    } else {
        var b15 = b14;
        var b19 = !! ((s17).length);
        var b20;
        if (b19) {
            b20 = false;
        } else {
            b20 = true;
        }
        var e23 = "String((b20) | 0)";
        var e24 = "eval(e23)";
        var e26 = "eval(\"eval(e24)\")";
        var x27;
        if (b14) {
            var s16 = String(b15);
            x27 = s16;
        } else {
            x27 = eval(e26);
        }
        var b29 = ((x27).length) ? true : false;
        x31 = eval("b29");
    }
    return x31;
}
fn32(input_I1, input_B3, input_B2, input_S3);
