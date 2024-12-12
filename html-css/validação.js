document.getElementById("btnCadastrar").addEventListener("click", function (e) {
    const nome = document.getElementById("inputNome").value;
    const email = document.getElementById("inputEmail4").value;
    const marca = document.getElementById("inputMarca").value;
    const tipo = document.getElementById("inputTipo").value;
    const teclas = document.getElementById("inputTeclas").value;
    const valor = document.getElementById("inputValor").value;
    const cor = document.getElementById("inputCor").value;
  
    const emailValido = validarEmail(email);
    const nomeValido = validarNome(nome);
    const corValida = validarCor(cor);
    const camposValidos = validarCampos(nome, email, marca, tipo, teclas, valor, cor);
  
    if (!emailValido || !nomeValido || !corValida || !camposValidos) {
      return;
    }
  
    const novoPiano = {
      id: editingIndex === -1 ? contador++ : pianos[editingIndex].id,
      nome,
      email,
      marca,
      tipo,
      teclas,
      valor: parseFloat(valor).toFixed(2),
      cor
    };
  
    if (editingIndex !== -1) {
      pianos[editingIndex] = novoPiano;
      atualizarTabela();
      document.getElementById("btnCadastrar").textContent = "Cadastrar";
      editingIndex = -1;
    } else {
      pianos.push(novoPiano);
      atualizarTabela();
    }
  
    document.getElementById("formulario").reset();
  });
  
  function validarEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    document.getElementById("emailError").style.display = emailRegex.test(email) ? "none" : "block";
    return emailRegex.test(email);
  }
  
  function validarNome(nome) {
    const nomeRegex = /\d/;
    document.getElementById("nomeError").style.display = nomeRegex.test(nome) ? "block" : "none";
    return !nomeRegex.test(nome);
  }
  
  function validarCor(cor) {
    const corRegex = /\d/;
    document.getElementById("corError").style.display = corRegex.test(cor) ? "block" : "none";
    return !corRegex.test(cor);
  }
  
  function validarCampos(nome, email, marca, tipo, teclas, valor, cor) {
    if (!nome || !email || !marca || !tipo || !teclas || !valor || !cor) {
      alert("Por favor, preencha todos os campos.");
      return false;
    }
    return true;
  }  
