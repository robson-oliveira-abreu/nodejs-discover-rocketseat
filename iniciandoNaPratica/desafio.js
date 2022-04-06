module.exports = function getFlag(flag) {
    const arr = process.argv
    let res = []
    
    for (i = 0; i < arr.length; i++) {

        if(arr[i] == flag[0]) { 
            res.push(arr[i + 1])
        }
        if(arr[i] == flag[1]) { 
            res.push(arr[i + 1])
        }
    }

    return res
    
}
