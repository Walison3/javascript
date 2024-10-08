let num = document.getElementById('num1')
let form = document.getElementById('form')
let res = document.getElementById('res')
let valores = []

function enumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function lista(n, l) {
    if (l.indexOf(Number(n))!= -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
  if (enumero(num.value) && !lista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        form.appendChild(item)
        res.innerHTML = ''
  } else {
    window.alert('Valor invalido ou já encontrado na lista!')
  }
  num.value = ''
  num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Lista vazia, por favor inserir valores.')
    } else {
        let tot = valores.length
        res.innerHTML = ''
        res.innerHTML += `Ao todo temos ${tot} números cadastrados`
    }
}
