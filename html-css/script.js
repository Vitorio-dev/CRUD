let editingIndex = -1;
let contador = 1;
let pianos = [];

function atualizarTabela() {
  const tabela = document.getElementById("tabelaPianos");

  tabela.innerHTML = ``;

  const pianosParaExibir = document.getElementById("campoBusca").value ? pianos.filter(piano => {
    const busca = document.getElementById("campoBusca").value.toLowerCase();
    return (
      piano.id.toString().includes(busca) || 
      piano.nome.toLowerCase().includes(busca) ||
      piano.email.toLowerCase().includes(busca) ||
      piano.marca.toLowerCase().includes(busca) ||
      piano.tipo.toLowerCase().includes(busca) ||
      piano.teclas.toString().includes(busca) ||
      piano.cor.toLowerCase().includes(busca) ||
      piano.valor.toString().includes(busca)
    );
  }) : pianos;

  pianosParaExibir.forEach((piano, index) => {
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
      <td>${piano.id}</td> 
      <td>${piano.nome}</td>
      <td>${piano.email}</td>
      <td>${piano.tipo} ${piano.marca}</td>
      <td>R$ ${piano.valor}</td>
      <td>${piano.teclas}</td>
      <td>${piano.cor}</td>
      <td>
        <button class="btn-editar" onclick="editarLinha(${index})">
          <img src="../img/editar-texto.png" alt="Editar" />
        </button>
        <button class="btn-excluir" onclick="excluirLinha(${index})">
          <img src="../img/lata-de-lixo.png" alt="Excluir" />
        </button>
      </td>
    `;
    tabela.appendChild(novaLinha);
  });
}

function editarLinha(index) {
  const piano = pianos[index];

  document.getElementById("inputNome").value = piano.nome;
  document.getElementById("inputEmail4").value = piano.email;
  document.getElementById("inputTipo").value = piano.tipo;
  document.getElementById("inputMarca").value = piano.marca;
  document.getElementById("inputValor").value = piano.valor;
  document.getElementById("inputTeclas").value = piano.teclas;
  document.getElementById("inputCor").value = piano.cor;

  document.getElementById("btnCadastrar").textContent = "Salvar alterações";

  editingIndex = index;
}

function excluirLinha(index) {
  pianos.splice(index, 1);
  atualizarTabela();
}

function filtrarPianos() {
  const busca = document.getElementById("campoBusca").value.toLowerCase();

  const pianosFiltrados = pianos.filter(piano => {
    return (
      piano.id.toString().includes(busca) || 
      piano.nome.toLowerCase().includes(busca) ||
      piano.email.toLowerCase().includes(busca) ||
      piano.marca.toLowerCase().includes(busca) ||
      piano.tipo.toLowerCase().includes(busca) ||
      piano.teclas.toString().includes(busca) ||
      piano.cor.toLowerCase().includes(busca) ||
      piano.valor.toString().includes(busca)
    );
  });

  atualizarTabelaFiltrada(pianosFiltrados);
}

function atualizarTabelaFiltrada(pianosFiltrados) {
  const tabela = document.getElementById("tabelaPianos");

  tabela.innerHTML = ``;

  pianosFiltrados.forEach((piano, index) => {
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
      <td>${piano.id}</td>
      <td>${piano.nome}</td>
      <td>${piano.email}</td>
      <td>${piano.tipo} ${piano.marca}</td>
      <td>R$ ${piano.valor}</td>
      <td>${piano.teclas}</td>
      <td>${piano.cor}</td>
      <td>
        <button class="btn-editar" onclick="editarLinha(${index})">
          <img src="../img/editar-texto.png" alt="Editar" />
        </button>
        <button class="btn-excluir" onclick="excluirLinha(${index})">
          <img src="../img/lata-de-lixo.png" alt="Excluir" />
        </button>
      </td>
    `;
    tabela.appendChild(novaLinha);
  });
}
