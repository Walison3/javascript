function contar() {
    var nume1 = window.document.getElementById('num1')
    var nume2 = window.document.getElementById('num2')
    var nume3 = window.document.getElementById('num3')
    var res = document.getElementById('res')
    
    if (nume1.value.length == 0 || nume2.value.length == 0 || nume3.value.length == 0) {
        window.alert('Erro! Faltam dados a serem inseridos!')
    } else {
        res.innerHTML = 'contando: '
        var i = Number(nume1.value)
        let f = Number(nume2.value)
        let p = Number(nume3.value)
        if (p <= 0) {
            window.alert('Impossível contar. Considerando passo 1')
            p = 1
        }
        if (i < f) {
            for (var c = i; c <= f; c+= p) {
                res.innerHTML += `${c} `
            }
        } else {
            for (var c = i; c>= f; c-= p) {
                res.innerHTML += `${c} `
            }
        }
        
    }

}