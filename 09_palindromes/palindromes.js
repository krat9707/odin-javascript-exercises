const palindromes = function (str) {
    const rangeOfChars = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let newString = str
        .toLowerCase()
        .split('')
        .filter((character) => rangeOfChars.includes(character))
        .join('');
    
    const reverseString = newString.split('').reverse().join('');

    return newString === reverseString;
};

function isValidLetter(ch)
{
    if(ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122)
        return true;
    return false;
}

// Do not edit below this line
module.exports = palindromes;
