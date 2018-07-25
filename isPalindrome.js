console.log(isPalindrome("abccba") === true);
console.log(isPalindrome("abcba") === true);
console.log(isPalindrome("wertrew") === true);
console.log(isPalindrome("abcdef") === false);
console.log(isPalindrome("abcabc") === false);
console.log(isPalindrome("dedfgded") === false);


function isPalindrome(letters) {

    var lettersLength = letters.length;

    if (lettersLength <= 1) {

        return true
    }

    var firstLetter = letters[0],
        lastLetter = letters[lettersLength - 1];

    if (firstLetter !== lastLetter) {

        return false
    }
 
    return isPalindrome(letters.slice(1, lettersLength - 1));
}