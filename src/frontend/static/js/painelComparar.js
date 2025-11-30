// Lista global para armazenar os nomes dos planetas selecionados
let planetasSelecionados = new Set();

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica do Carrossel/Pop-up (Manter o existente)
    const planetSlides = document.querySelectorAll('.planet-slide');

    planetSlides.forEach(slide => {
        slide.addEventListener('click', (event) => {
            const painel = slide.querySelector('.painel-planet');
            // Fecha outros painéis abertos antes de abrir este
            document.querySelectorAll('.painel-planet.mostrar').forEach(p => {
                if(p !== painel) p.classList.remove('mostrar');
            });
            painel.classList.toggle('mostrar');
            event.stopPropagation();
        });
    });

    document.addEventListener('click', (event) => {
        const todosOsPaneis = document.querySelectorAll('.painel-planet');
        todosOsPaneis.forEach(painel => {
            if (painel.classList.contains('mostrar')) {
                const cliqueDentroDoPainel = event.target.closest('.painel-planet');
                const cliqueNoGatilho = event.target.closest('.planet-slide');
                if (!cliqueDentroDoPainel && !cliqueNoGatilho) {
                    painel.classList.remove('mostrar');
                }
            }
        });
    });

    // 2. Evento do botão final "Comparar" (na barra flutuante)
    const btnAction = document.getElementById('btn-compare');
    if (btnAction) {
        btnAction.addEventListener('click', () => {
            if (planetasSelecionados.size < 2) return;
            // Converte o Set para Array, junta com virgulas e cria a URL
            const nomes = Array.from(planetasSelecionados).join(',');
            window.location.href = `/comparar?planetas=${encodeURIComponent(nomes)}`;
        });
    }
});

// 3. Função chamada pelo botão dentro do pop-up
function toggleComparacao(nomePlaneta) {
    // Para evitar que o clique feche o pop-up imediatamente
    event.stopPropagation();

    const btn = document.getElementById(`btn-compare-${nomePlaneta}`);
    const spanText = btn.querySelector('.btn-text');

    if (planetasSelecionados.has(nomePlaneta)) {
        // REMOVER
        planetasSelecionados.delete(nomePlaneta);
        btn.classList.remove('selecionado');
        spanText.innerText = "Adicionar à comparação";
    } else {
        // ADICIONAR
        if (planetasSelecionados.size >= 3) {
            alert("Máximo de 3 planetas para comparação.");
            return;
        }
        planetasSelecionados.add(nomePlaneta);
        btn.classList.add('selecionado');
        spanText.innerText = "Remover da comparação";
    }

    atualizarBarraFlutuante();
}

// 4. Atualiza a barra preta embaixo
function atualizarBarraFlutuante() {
    const bar = document.getElementById('compare-bar');
    const countSpan = document.getElementById('count-selected');
    const btnAction = document.getElementById('btn-compare');
    const qtd = planetasSelecionados.size;

    countSpan.innerText = qtd;

    if (qtd > 0) {
        bar.classList.add('active');
    } else {
        bar.classList.remove('active');
    }

    if (qtd >= 2) {
        btnAction.disabled = false;
        btnAction.innerText = "Comparar Planetas";
    } else {
        btnAction.disabled = true;
        btnAction.innerText = "Selecione mais um";
    }
}