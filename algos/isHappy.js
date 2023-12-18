n = 19

var isHappy = function(n) {
    let new_value = 0;
    let array_of_prev_values = [];
    while(n!= 1){
        array_of_prev_values.push(n)
        n = n.toString().split("")
        n = n.map(x => x ** 2)
        n.forEach(x => new_value += x)
        n = new_value
        new_value = 0;
        console.log(n)
        if(array_of_prev_values.includes(n)){
            return false
        }
    }
    return true;
};

console.log(isHappy(n))