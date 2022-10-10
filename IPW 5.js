var goodUsers = [
    {id: 1},
    {id: 2},
    {id: 3}
]

function checkUsersValid(goodUsers){
    let validUsers = Object.fromEntries(goodUsers.map(user => [`${user.id}`, true])) //dbUsers = {"1": true, "2": true, "3":true}
    return function (usersToTest){
        let i = 0
        let arr = []
        while(i<usersToTest.length) {
            if(usersToTest[i] in validUsers){
                arr.push(1)
            }
            i++
        }
        if(arr.length === i) return true
        else return false
    }
}


var testAllValid = checkUsersValid(goodUsers)

console.log(testAllValid([
    { id: 2 },
    { id: 1 }
]))

console.log(testAllValid([
    { id: 2 },
    { id: 4 },
    { id: 1 }
]))