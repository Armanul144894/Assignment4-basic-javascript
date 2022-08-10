function radianToDegree(radian){
    if(typeof radian !== 'number'){
        return 'Please enter a number'
    }
    let degree = radian * (180 / Math.PI)
    degree = degree.toFixed(2)
    degree = parseFloat(degree)
    return degree
}

degree = radianToDegree('10')
console.log(degree)