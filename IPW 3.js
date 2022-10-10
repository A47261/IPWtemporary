const validators = [
    {
    name : "p1" , validators: [s => typeof s == 'string' && s.length > 2, s => s[0]=="a"]
    },
    {
    name : "p2" , validators: [s => Number.isInteger(s)]
    }
]

function validateProperty(obj, propValidator) {
    if (propValidator.name in obj === false || propValidator.validators.every(validator => validator(obj[propValidator.name])) === false) {
        return false
    }
    else return true
}

function validateProperties(obj, propValidators) {
    const arrayWithoutFalse = propValidators.filter( validator => validateProperty(obj,validator) === false) // filter removes the ones that are false
    const arrayWithNames = arrayWithoutFalse.map(name => name.name) // map transforms the ones that are true into their name(p1 or p2)
    return arrayWithNames
}

Object.prototype.validateProperties = function(validators){
    console.log(validateProperties(this, validators))
}

const obj1 = { p1 : "a" }
const obj2 = { p1 : 123  }
const obj3 = { p1 : "abc" , p2 : 123 }

obj1.validateProperties(validators)
obj2.validateProperties(validators)
obj3.validateProperties(validators)
