s = "aaaaaa"
t = "bbaaaa"

var isSubsequence = function(s,t) {
    let split_t = t.split("")
    for(let i = 0; i < s.length; i++){
        let current_letter = s[i];
        if(split_t.indexOf(current_letter) != -1){
            split_t = split_t.splice(split_t.indexOf(current_letter)+1)
        }
        else{
            return false;
        }
    }
    return true;
};

console.log(isSubsequence(s,t))