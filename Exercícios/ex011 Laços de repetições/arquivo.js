btn.addEventListener('click', clicar);

function clicar() {
    let btn = document.getElementById('btn');
    let res = document.getElementById('res');
    let n1 = Number(document.getElementById('num1').value);
    let n2 = Number(document.getElementById('num2').value);
    let n3 = Number(document.getElementById('num3').value);

    res.innerHTML = ''; // Limpa o resultado anterior

    if (n3 <= 0) {
        alert('Passo inválido! Considerando PASSO 1');
        n3 = 1;
    }

    // Verifica se os valores de início, fim e passo são válidos
    if (n1 < n2) {
        // Contagem crescente
        for (let c = n1; c <= n2; c += n3) {
            res.innerHTML += `${c} -> `;
        }
    } else {
        // Contagem decrescente
        for (let c = n1; c >= n2; c -= n3) {
            res.innerHTML += `${c} -> `;
        }
    }

    res.innerHTML += 'Fim!';
}

