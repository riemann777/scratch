var _ = require("lodash");


function binary(n) {

    var result = [];

    binaryRec(n, "", result);

    return result;

}

function binaryRec(n, binStr, result) {

    if (binStr.length === n) {

        return result.push(binStr);

    }

    binaryRec(n, binStr + "0", result);
    binaryRec(n, binStr + "1", result);

}

console.log(binary(4));

console.log(_.isEqual(binary(1, ""), ['0', '1']));
console.log(_.isEqual(binary(2, ""), ["00", "01", "10", "11"]));