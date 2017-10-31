// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(int(bool(int((not(input_bool('B2')) == not(input_bool('B1')))))))) then not(input_bool('B1')) else (input_int('I3') <= int(not(input_bool('B2')))))

var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn27 = function (b15, b1, x19) {
    var b3 = b15;
    var b20 = b1;
    var b14 = !( !! (~~((eval("eval(\"var b4; if (b3) { b4 = false; } else { b4 = true; }var b6 = !(b1) == eval(\\\"b4\\\");(b6) | 0\")")) ? true : false)));
    var e18 = "eval(\"!(b15)\")";
    var b22;
    if (eval("b20")) {
        b22 = false;
    } else {
        b22 = true;
    }
    var x26;
    if (b14) {
        x26 = eval(e18);
    } else {
        x26 = (x19 <= Number(b22));
    }
    return x26;
}
fn27(input_B1, input_B2, input_I3);
