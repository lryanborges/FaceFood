const TipoPrato = [
        {
          nome: 'Arroz',
          calorias: 200,
          descricao: 'Arroz branco soltinho',
          tipos: ['acompanhamento', 'vegano'],
          ingredientes: ['arroz', 'água', 'sal'],
          imagem: 'arroz.jpg'
        },
        {
          nome: 'Feijão',
          calorias: 150,
          descricao: 'Feijão preto temperado',
          tipos: ['acompanhamento', 'vegano'],
          ingredientes: ['feijão', 'água', 'cebola', 'alho', 'óleo', 'sal'],
          imagem: 'feijao.jpg'
        },
        {
          nome: 'Frango grelhado',
          calorias: 300,
          descricao: 'Peito de frango grelhado',
          tipos: ['prato principal', 'baixo teor de gordura'],
          ingredientes: ['peito de frango', 'sal', 'pimenta', 'azeite'],
          imagem: 'frango.jpg'
        },
        {
          nome: 'Salada',
          calorias: 100,
          descricao: 'Salada de folhas verdes com tomate e cenoura',
          tipos: ['acompanhamento', 'vegano', 'baixo teor de gordura'],
          ingredientes: ['alface', 'rúcula', 'tomate', 'cenoura'],
          imagem: 'salada.jpg'
        }
      ];

      const refeicoes = [
        {
        horario: '12:00',
        pratos: [
            TipoPrato[0],
            TipoPrato[1],
            TipoPrato[3]
        ]
        },
        {
        horario: '19:00',
        pratos: [
            TipoPrato[2],
            TipoPrato[3]
        ]
        }
        ];

      const tipoSelect = document.getElementById("tipo");
      tipoSelect.innerHTML = TipoPrato.map(tipo => `<option value="${tipo.nome}">${tipo.nome}</option>`).join("");

function openPopup() {
    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("popup-background").addEventListener("click", closePopup);
    
  }
  
  function closePopup() {
    document.getElementById("popup").classList.add("hidden");
    document.getElementById("popup-background").removeEventListener("click", closePopup);
  }

  const tabelaRefeicoes = document.getElementById('tabela-refeicoes');
  const modeloRefeicao = document.getElementById('modelo-refeicao').content;
  
  document.addEventListener('DOMContentLoaded', () => {
    refeicoes.forEach(refeicao => {
      const novaLinha = modeloRefeicao.cloneNode(true);
      novaLinha.querySelector('td:nth-child(1)').textContent = refeicao.horario;
  
      let pratosStr = '';
      for (let i = 0; i < refeicao.pratos.length; i++) {
        pratosStr += refeicao.pratos[i].nome;
        if (i < refeicao.pratos.length - 1) {
          pratosStr += ', ';
        }
      }
      novaLinha.querySelector('td:nth-child(2)').textContent = pratosStr;
  
      tabelaRefeicoes.appendChild(novaLinha);
    });
  });
  
  function adicionarRefeicao() {
    const horario = document.getElementById('horario').value;
    const pratos = [...document.getElementById('pratos').options].filter(option => option.selected).map(option => option.value);
  
    const novaLinha = modeloRefeicao.cloneNode(true);
    novaLinha.querySelector('td:nth-child(1)').textContent = horario;
    novaLinha.querySelector('td:nth-child(2)').textContent = pratos.join(', ');
  
    tabelaRefeicoes.appendChild(novaLinha);
    closePopup();
  }