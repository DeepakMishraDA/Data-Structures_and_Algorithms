function twoSum(arr, value) {
    const resObj = {};
    for (let i = 0; i < arr.length; i++){
        let num = value-arr[i];
        if(resObj[num] !== undefined){
            return [resObj[num], i];
        }
        resObj[arr[i]] = i;
    }
}

//const narr = [1,8,92,120];
//console.log(twoSum(narr, 121));