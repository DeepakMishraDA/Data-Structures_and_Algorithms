function pattern(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i+1] > arr[i+2] && arr[i+2] > arr[i]){
            return true
        }
        return false
    }
}

const  nums = [3,1,4,2]
console.log(pattern(nums))