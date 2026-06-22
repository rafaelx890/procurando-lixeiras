function alternarIframe() {
      const iframe = document.getElementById('meuIframe');
      if (iframe.style.display === 'none' || iframe.style.display === '') {
        iframe.style.display = 'block';
      } else {
        iframe.style.display = 'none';
      }
}
 function mostrarDescricao() {
        var select = document.getElementById("Empresas");
        var paragrafo1 = document.getElementById("descricaoPlastsul");
        var paragrafo2 = document.getElementById("descricaoBahia-Reciclagem");
        var paragrafo3 = document.getElementById("descricaoAms-Reciclagem");
        var paragrafo4 = document.getElementById("descricaoRei-do-Aluminio");
        var paragrafo5 = document.getElementById("descricao");
        var paragrafo6 = document.getElementById("descricao");
        var paragrafo7 = document.getElementById("descricao");
        var paragrafo8 = document.getElementById("descricao");
        var paragrafo9 = document.getElementById("descricao");
        var paragrafo10 = document.getElementById("descricao");
        var paragrafo11 = document.getElementById("descricao");
        var paragrafo12 = document.getElementById("descricao");

        // Verifica se a opção "EcoVitra" está selecionada
        if (select.value === "Plastsul") {
            paragrafo1.style.display = "block"; // Mostra o parágrafo
        } else {
            paragrafo1.style.display = "none";  // Oculta caso outra opção seja escolhida
        }
        if (select.value === "Bahia-Reciclagem") {
            paragrafo2.style.display = "block"; // Mostra o parágrafo
        } else {
            paragrafo2.style.display = "none";  // Oculta caso outra opção seja escolhida
        }
        if (select.value === "Ams-Reciclagem") {
            paragrafo3.style.display = "block"; // Mostra o parágrafo
        } else {
            paragrafo3.style.display = "none";  // Oculta caso outra opção seja escolhida
        }
        if (select.value === "Rei-do-Aluminio") {
            paragrafo4.style.display = "block"; // Mostra o parágrafo
        } else {
            paragrafo4.style.display = "none";  // Oculta caso outra opção seja escolhida
        }
        if (select.value === "") {
            paragrafo2.style.display = "block"; // Mostra o parágrafo
        } else {
            paragrafo2.style.display = "none";  // Oculta caso outra opção seja escolhida
        }
    }

    // Executa a função ao carregar a página para garantir que o texto apareça já que está como "selected"
    window.onload = mostrarDescricao;