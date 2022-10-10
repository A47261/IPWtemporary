function Spy(target, method) {
    
}

var spy = Spy(console, "error")

console.error('calling console.error')
console.error('calling console.error')
console.error('calling console.error')

console.log(spy.count)