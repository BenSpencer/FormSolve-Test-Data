// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(bool(int((int((bool(int(input_string('S3'))) == bool(int(input_string('S3'))))) in [1, 1, 1, 96, 0, 81, 0, 1, 1]))))) then bool(input_string('S3')) else (str((int(str(bool(input_string('S1')))) in [28, 19, 17])) != str(not((if true then input_bool('B3') else not(input_bool('B2')))))))

var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");

var fn40 = function (b30, s1, b32, s19) {
    var s17 = s1;
    var s4 = s1;
    var x5 = parseInt(s4, 10);
    var b7;
    if ( !! (parseInt(s1, 10)) == !! (x5)) {
        b7 = true;
    } else {
        b7 = false;
    }
    var x9 = (b7) ? 1 : 0;
    var opts11 = [1, 1, 1, 96, 0, 81, 0, 1, 1];
    var x15 = ((~~(opts11.indexOf(x9) > -1)) ? true : false) ? 1 : 0;
    var b16 = (x15) ? true : false;
    var e20 = "s19";
    var b21 = (eval(e20)) ? true : false;
    var x23 = Number((b21).toString());
    var opts25 = [28, 19, 17];
    var b24 = opts25.indexOf(x23) > -1;
    var b33;
    if (b32) {
        b33 = false;
    } else {
        b33 = true;
    }
    var x34;
    if (true) {
        var e31 = "b30";
        x34 = eval(e31);
    } else {
        x34 = b33;
    }
    var b37;
    if (eval("eval(\"String(b24)\")") != String(!(x34))) {
        b37 = true;
    } else {
        b37 = false;
    }
    var x39;
    if (b16) {
        x39 = !! (s17);
    } else {
        x39 = b37;
    }
    return x39;
}
fn40(input_B3, input_S3, input_B2, input_S1);
