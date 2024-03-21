function TextoTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

TextoTela("h4", "Apenas letras minúsculas e sem acento.");
TextoTela("h1", "Nenhuma mensagem encontrada");
TextoTela("p", "Digite um texto que você deseja criptografar ou descriptografar.");

  let textoDeEntrada = document.querySelector('#conteudo__esquerdo__textoEntrada');
  let textoSaida = document.querySelector('#conteudo__esquerdo__texto__textoSaida');
  let matrizCriptografar = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufa"]];

  function Criptografar() {
    let resultadoCriptografado = criptografar(textoEntrada.value.toLowerCase());
    textoSaida.value = resultadoCriptografado;
}

function Descriptografar() {
  let resultadoTraduzido = descriptografar(textoEntrada.value.toLowerCase());
  textoSaida.value = resultadoTraduzido;
}

function criptografar(textoParaCriptografia) {
  for(let i = 0; i < matrizCriptografar.length; i++) {
      if(textoParaCriptografia.includes(matrizCriptografar[i][0])) {
          textoParaCriptografia = textoParaCriptografia.replaceAll(matrizCriptografar[i][0], matrizCriptografar[i][1])
      }
  }
  if (textoParaCriptografia !== "") {
      document.querySelector('#mensagem').style.display = 'none';
      document.querySelector('#conteudo__esquerdo__texto__textoSaida').style.display = 'block';
      document.querySelector('#btn-copiar').style.display = 'block';
  }
  return textoParaCriptografia;
}

function descriptografar(textoParaDescriptografia) {
  for(let i = 0; i < matrizCriptografar.length; i++) {
      if(textoParaDescriptografia.includes(matrizCriptografar[i][1])) {
          textoParaDescriptografia = textoParaDescriptografia.replaceAll(matrizCriptografar[i][1], matrizCriptografar[i][0])
      }
  }
  if (textoParaDescriptografia !== "") {
      document.querySelector('#mensagem').style.display = 'none';
      document.querySelector('#conteudo__esquerdo__texto__textoSaida').style.display = 'block';
      document.querySelector('#btn-copiar').style.display = 'block';
  }
  return textoParaDescriptografia;
}

function Copiar() {
  let textoCopiado = document.querySelector('#conteudo__esquerdo__texto__textoSaida');
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textoCopiado.value);
}