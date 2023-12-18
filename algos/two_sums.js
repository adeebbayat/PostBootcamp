numbers = [2,7,11,15]
target = 9

var twoSum = function(numbers, target) {
    
    let front_pointer = numbers[0]
    let back_pointer = numbers[numbers.length-1]
    let new_sum = front_pointer + back_pointer;
    let back_counter = 1;
    let front_counter = 0;
    while(new_sum != target){
        if(new_sum > target){
            back_counter++
            back_pointer = numbers[numbers.length-back_counter]
            new_sum = front_pointer + back_pointer;
        }
        if(new_sum < target){
            front_counter++
            front_pointer = numbers[front_counter]
            new_sum = front_pointer + back_pointer;
        }
    }
    return [front_counter+1 , numbers.length-back_counter+1]
    
};

console.log(twoSum(numbers,target))