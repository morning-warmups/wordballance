function balance(str) {
    var leftW = 0, leftS = 0, rightW = 0, rightS = 0;



    var leftPos = 0, rightPos = str.length - 1;
    while (leftPos < rightPos) {
        if (leftW <= rightW) { //consume a char from left side
            leftS += str.charCodeAt(leftPos) - 'A'.charCodeAt(0) + 1;
            leftW += leftS;
            leftPos++;
        } else { // consume a char from right side
            rightS += str.charCodeAt(rightPos) - 'A'.charCodeAt(0) + 1;
            rightW += rightS;
            rightPos--;
        }
    }
    if (leftPos == rightPos && leftW == rightW) {
        return str.substring(0, leftPos) + ' ' + str.substring(leftPos, leftPos + 1) + ' ' + str.substring(leftPos + 1) + ' - ' + leftW;
    } else {
        return str + ' DOES NOT BALANCE';
    }
}
