function clicar() {
    var anoNascimento = document.getElementById('ano').value;
    var sexo = document.getElementsByName('sexo');
    var res = document.getElementById('res');
    var data = new Date();
    var anoAtual = data.getFullYear();
    var idade = anoAtual - Number(anoNascimento);
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    // Correção na verificação de anoNascimento
    if (anoNascimento == 0 || Number(anoNascimento) > anoAtual || Number(anoNascimento) < 1900) {
        window.alert('Atenção, verifique os dados digitados!');
    } else {
        if (sexo[0].checked) {
            genero = 'Masculino';
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'imagens/bebe-m.png');
            } else if (idade >= 13 && idade < 18) {
                img.setAttribute('src', 'imagens/jovem-m.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-m.png');
            } else if (idade < 125) {
                img.setAttribute('src', 'imagens/idoso-m.png');
            } else {
                window.alert('Atenção, verifique os dados digitados!');
            }
        } else {
            genero = 'Feminino';
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'imagens/bebe-f.png');
            } else if (idade >= 13 && idade < 18) {
                img.setAttribute('src', 'imagens/jovem-f.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-f.png');
            } else if (idade < 125) {
                img.setAttribute('src', 'imagens/idoso-f.png');
            } else {
                window.alert('Atenção, verifique os dados digitados!');
            }
        }    
        res.innerHTML = `Idade de ${idade} anos e do gênero ${genero}.`;
        res.appendChild(img);
    }
}
