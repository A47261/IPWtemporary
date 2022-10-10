const validator = {name : "p1" , validators: [s => typeof s == 'string' && s.length > 2, s => s[0]=="a"]}
const obj1 = { p1 : "abc"}
const obj2 = { p2 : 123 }
const obj3 = { p1 : "a", p2 : 123}

function validateProperty(obj, propValidator) {
    if (propValidator.name in obj === false || propValidator.validators.every(validator => validator(obj[propValidator.name])) === false) { 
        return false
    }
    else return true
}

console.log(validateProperty(obj1, validator))
console.log(validateProperty(obj2, validator))
console.log(validateProperty(obj3, validator))