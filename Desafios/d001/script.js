function carregar(){
    var mensagem = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    mensagem.innerHTML = `Agora são ${(hora)} horas.`

    if (hora >=5 && hora < 12) {
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#eccf7a'
    } else if (hora <= 18){
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#A66D3C'
    } else {
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#0A2740'
    }
}

