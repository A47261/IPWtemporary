let numbers = ["one", "two", "three", "four"]

Array.prototype.associateWith = function(transform){
    let arrayLength = this.length
    let i = 0
    const obj = { }
    while(i < arrayLength){
        var digit = transform(this[i])
        obj[this[i]] = digit
        i++
    }
    return obj
}

console.log(numbers.associateWith( str => str.length ))