
function min_collect(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(min > num){
            min = num
        }
    }
    return min;
}





const heights = [65,66,68,72,78,60];
const minimum = min_collect(heights);
console.log("Total Minimum Number is ::  ",minimum);





