const getFlag = require('./desafio.js')

const proc = process.argv

let flag = []

for(i = 0; i < proc.length; i++) {
    const a = proc[i]
    
    if(a[0] == "-" && a[1] == "-"){
        flag.push(proc[i])
    }
}

const res = getFlag(flag)
console.log(res[0], res[1])