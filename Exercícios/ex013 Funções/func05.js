function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1) 
    }
}

console.log(`O fatorial de 5 vale ${fatorial(5)}!`)
