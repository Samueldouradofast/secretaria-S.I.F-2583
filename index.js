 function atualizarTotais() {
    const linhas = document.querySelectorAll("#corpo-tabela tr");
    let totaisColuna = [0, 0, 0, 0];
    let totalGeral = 0;

    linhas.forEach((tr, i) => {
      let totalLinha = 0;
      for (let col = 1; col <= 4; col++) {
        const input = tr.querySelector(`input[data-linha="${i}"][data-col="${col}"]`);
        const valor = input ? parseInt(input.value) || 0 : 0;
        totaisColuna[col - 1] += valor;
        totalLinha += valor;
      }
      document.getElementById(`total-linha-${i}`).textContent = totalLinha;
      totalGeral += totalLinha;
    });

    totaisColuna.forEach((total, i) => {
      document.getElementById(`total-col-${i + 1}`).textContent = total;
    });
    document.getElementById("total-geral").textContent = totalGeral;
  }

 document.querySelectorAll(".input").forEach(input => {
  input.addEventListener("focus", e => {
    if (e.target.value === "0") {
      e.target.value = ""; // Limpa o campo se for zero
    }
  });
  input.addEventListener("blur", e => {
    if (e.target.value === "") {
      e.target.value = "0"; // Volta para zero se ficar vazio
    }
  });
  input.addEventListener("input", e => {
    if (e.target.value === "") {
      e.target.value = "0"; // Volta para zero se apagar tudo
      e.target.select(); // Seleciona o zero para facilitar digitação
    }
    atualizarTotais();
  });
});
  

  document.getElementById("btn-limpar").addEventListener("click", () => {
    document.querySelectorAll(".input").forEach(input => input.value = 0);
    atualizarTotais();
  });

  atualizarTotais(); 