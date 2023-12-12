s = "A man, a plan, a canal: Panama"

var isPalindrome = function(s) {
    cleaned_string = s.split(" ").join("").replace(/[^0-9a-z]/gi, '').toLowerCase()
    if(cleaned_string === cleaned_string.split("").reverse().join("").toLowerCase()){
        return true
    }
    else{
        return false
    }

};

console.log(isPalindrome(s))