document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const original = document.getElementById('original').value;
  /*
    const validacao = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!validacao.test(original.value)) {
      window.alert("Link inválido");
    }
  */
    if(!original){
      window.alert("Campo vazio, coloque uma url para ser encurtada!")
    }else{
    axios.post('http://localhost:7777/encurtar', { original })
      .then(function(response) {
        document.getElementById('curto').textContent = 'http://localhost:7777/estagiario/' + response.data.curto;
        console.log(response)
      })
      .catch(function(error) {
        console.error(error);
        document.getElementById('curto').textContent = 'Ocorreu um erro ao encurtar o link.';
      });
    }
  });

  function copia() {
    var texto = document.getElementById("curto").textContent;
    navigator.clipboard.writeText(texto)
      .then(function() {
        document.getElementById('original').value = '';
        console.log("Texto copiado com sucesso!");
      })
      .catch(function(error) {
        console.error("Erro ao copiar o texto:", error);
      });
      
  }




  
  