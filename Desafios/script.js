function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora > 4 && hora < 12) {
        img.src = 'imagens/fotmanha.png'
        document.body.style.backgroundColor = '#F2DA91'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'imagens/fototarde.png'
        document.body.style.backgroundColor = '#A66D3C'
    } else {
        img.src = 'imagens/fotonoite.png'
        document.body.style.backgroundColor = '#0A2740'
    }
}

