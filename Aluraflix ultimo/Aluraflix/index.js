var lastOrder = ""
var multiverse = false
var movies = []

function buildMovie(id, nomeFilme, anoLanc, imagem, anoCron, linkPag, linkTrailer) {
  var movie = {
    id: id,
    nome: nomeFilme,
    anoLancamento: anoLanc,
    linkImagem: imagem,
    anoCronologico: anoCron,
    linkPagina: linkPag,
    linkTrailer: linkTrailer
  }

  return movie;
}

movies.push(buildMovie(0,
                       "El viaje de chihiro",
                       2001,
                       "https://m.media-amazon.com/images/M/MV5BM2E2YzcwMTQtNWRlMC00ZGZlLWJhZTEtMDU4ZGIzMWI0NzJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",  // Nueva URL de la imagen
                       2001,
                       "https://www.youtube.com/watch?v=YgO6g_gHtaE")) // Manteniendo el ID de video de YouTube
                       
movies.push(buildMovie(1,
                       "Ponyo",
                       2008,
                       "https://m.media-amazon.com/images/M/MV5BZDkzMzQ5ZmQtOTA3MC00MjhiLTk5M2UtNzk0MjEzZmVjN2UxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                       2008,
                       "https://www.youtube.com/watch?v=4YpxyQit8fk"))

movies.push(buildMovie(2,
                       "El niño y la Garza",
                       2023,
                       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGmBWMFnGW7OJ9VPNWzk8niz7Cf0VlLyv3jw&s",
                       2023,
                       "https://www.youtube.com/watch?v=PW7vSgGGElA"))

movies.push(buildMovie(3,
                       "La tumba de las luciernagas",
                       1988,
                       "https://m.media-amazon.com/images/M/MV5BMjdlOTNhMGItMDgxYy00OTYwLTkwMGYtNzAzMDRlNGEyODI1XkEyXkFqcGc@._V1_.jpg",
                       1988,
                       "https://www.youtube.com/watch?v=3YeP-UMHVaE"))

movies.push(buildMovie(4,
                       "Mi vecino Totoro",
                       1988,
                       "https://m.media-amazon.com/images/M/MV5BMGZiNDdiNDctNGRkNC00MTViLThlN2ItMDQzYTI2NzA2MTdkXkEyXkFqcGc@._V1_.jpg",
                       1988,
                       "https://www.youtube.com/watch?v=BjeBG8Xrci8"))

movies.push(buildMovie(5,
                       "El castillo ambulante",
                       2013,
                       "https://m.media-amazon.com/images/M/MV5BMTZhNTc2M2YtOGFhMS00MmQ2LTkxNWUtYWNhNWYyN2E2YzY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                       2013,
                       "https://www.youtube.com/watch?v=TioZt2aBZVE"))

movies.push(buildMovie(6,
                       "La princesa Mononoke",
                       1997,
                       "https://m.media-amazon.com/images/M/MV5BYjc1YjI2OGUtNzgyOC00ZmFiLThkNzgtYTRkNDQ5ZGEwM2I1XkEyXkFqcGc@._V1_.jpg",
                       1997,
                       "https://www.youtube.com/watch?v=4OiMOHRDs14"))

movies.push(buildMovie(7,
                       "El tiempo contigo",
                       2016,
                       "https://m.media-amazon.com/images/M/MV5BN2Q3Y2VhMGQtODRlZS00MzI0LThhYTAtMDE5ZTQwMjQ5NTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                       2016,
                       "https://www.youtube.com/watch?v=RfmDF1pY8Sk"))

movies.push(buildMovie(8,
                       "Suzume",
                       2017,
                       "https://m.media-amazon.com/images/M/MV5BODhkNDhmNzktODFmMC00NDZiLWEzN2UtY2YwYzgzYTVlMWZmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                       2017,
                       "https://www.youtube.com/watch?v=8OEn2k4YCHM",
                       "v7MGUNV8MxU"))

movies.push(buildMovie(9,
                       "Arrietty y el mundo de los diminutos",
                       2010,
                       "https://m.media-amazon.com/images/M/MV5BYTExMDBjNDUtZGI2My00Zjg3LWE5NGMtZTFmNTU4MDJmMTQ3XkEyXkFqcGc@._V1_.jpg",
                       2010,
                       "https://www.youtube.com/watch?v=u8gCNCjCO2w",
                       "JerVrbLldXw"))

movies.push(buildMovie(10,
                       "La colina de las amapolas",
                       2011,
                       "https://m.media-amazon.com/images/M/MV5BMWVjMWRhMzYtOGRmMi00ODExLTk2M2YtZDhjNGY5OWQ5NDY4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                       2011,
                       "https://www.youtube.com/watch?v=9nzpk_Br6yo",
                       "tbayiPxkUMM"))

movies.push(buildMovie(11,
                       "El cuento de la princesa Kaguya",
                       2013,
                       "https://m.media-amazon.com/images/M/MV5BN2IxN2ZmNzQtNjQ5Mi00OTFkLThmZWItM2FiMDlmOTE3YTc0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                       2013,
                       "https://www.youtube.com/watch?v=ombrVPWXVbw"))

movies.push(buildMovie(12,
                       "Belle",
                       2021,
                       "https://m.media-amazon.com/images/M/MV5BZGNlZDg3NjEtMGQwNy00NDc5LWIxNmUtMTgxM2M4MWZlMWUxXkEyXkFqcGc@._V1_.jpg",
                       2021,
                       "https://www.youtube.com/watch?v=SgVUft_Ogkg"))

movies.push(buildMovie(13,
                       "Amor de gata",
                       2021,
                       "https://m.media-amazon.com/images/M/MV5BZmI1OTgzMzUtOTNjZS00MjgyLWFmMGYtNTNiYjQ5MjRiZDYxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                       2021,
                       "https://www.youtube.com/watch?v=f6onABRed1s"))

movies.push(buildMovie(14,
                       "El niño y la bestia",
                       2015,
                       "https://m.media-amazon.com/images/M/MV5BNmJkZmI0MWYtNzEwNC00MWM1LWE2OWUtMDJiNjg1NjQwN2Q1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                       2015,
                       "https://www.youtube.com/watch?v=A1PCUW3fh38"))

movies.push(buildMovie(15,
                       "El castillo en el cielo",
                       1986,
                       "https://m.media-amazon.com/images/M/MV5BYmE0ZjEzMDgtNmJlOS00YjNhLTgyZTctNzExOTNhNjdjNzEzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                       1986,
                       "https://www.youtube.com/results?search_query=el+castillo+en+el+cielo+trailer+espa%C3%B1ol"))

movies.push(buildMovie(16,
                       "Porco Rosso",
                       1992,
                       "https://m.media-amazon.com/images/M/MV5BZDUyNjFiNGUtMmU3My00MGYzLWJiMzAtNmM0YjA2NDUxN2ViXkEyXkFqcGc@._V1_.jpg",
                       1992,
                       "https://www.youtube.com/watch?v=awEC-aLDzjs"))

movies.push(buildMovie(17,
                       "Recuerdos del ayer",
                       1991,
                       "https://m.media-amazon.com/images/M/MV5BNmYxMmU0MDItMTFkYy00MDEzLTlhZTktZTY4OTg2NTAyZDU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                       1991,
                       "https://www.youtube.com/watch?v=_s1cYBMEByk"))

movies.push(buildMovie(18,
                       "Puedo escuchar el mar",
                       1993,
                       "https://m.media-amazon.com/images/M/MV5BMzNhNTZkNjItNzUxYi00YzFhLWEzYmYtMTM5ZDViZTgzZTkwXkEyXkFqcGc@._V1_.jpg",
                       1993,
                       "https://www.youtube.com/watch?v=qNh9t_HlJR0"))

movies.push(buildMovie(19,
                       "Mary y la flor de la bruja",
                       2017,
                       "https://m.media-amazon.com/images/M/MV5BMjk2ZWU3YzctNTAyZi00ZTM4LWI0NDQtYTIxMzE3YzY1M2I0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                       2017,
                       "https://www.youtube.com/watch?v=ziM1cqVaERs"))

movies.push(buildMovie(20,
                       "La tortuga roja",
                       2016,
                       "https://m.media-amazon.com/images/M/MV5BMzg0MjVlZmYtOWMyYy00NjgxLThlZmQtOThmZDU4ZWI3MDU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                       2016,
                       "https://www.youtube.com/watch?v=42aQ3TQG5fw"))

movies.push(buildMovie(21,
                       "Paprika",
                       2018,
                       "https://m.media-amazon.com/images/M/MV5BZGJkYjkyMDUtM2U3ZC00NDM3LWI0MzItZjU5MmYwYjg2YmIwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                       2017,
                       "https://www.youtube.com/watch?v=PIUqozzyW2k"))

movies.push(buildMovie(22,
                       "Se levanta el viento",
                       2013,
                       "https://m.media-amazon.com/images/M/MV5BYzdmOWJlNmUtYzE2MC00M2IzLTk2MTktNDFjOTA5ZDVkOGZmXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg",
                       2013,
                       "https://www.youtube.com/watch?v=QrpSt5wZN3c"))

movies.push(buildMovie(23,
                       "El recuerdo de Marnie",
                       2014,
                       "https://m.media-amazon.com/images/M/MV5BOTY1MDM5YWUtODVkMy00MGRkLTlkMTEtYTQyMTFhZmFjYmZiXkEyXkFqcGc@._V1_.jpg",
                       2014,
                       "https://www.youtube.com/watch?v=JeDyp2JkvEs"))

ordenar()

function ordenar() {
  var ordem = document.getElementById("ordenarFilmes").value

  if (ordem == "anoCronologico") {
    arraySort(movies, "anoLancamento")
  }

  arraySort(movies, ordem)

  // console.log(ordem + " - " + lastOrder)
  // if (ordem == lastOrder) {
  //   if (multiverse) {
  //     movies.sort() 
  //   } else {
  //     movies.reverse()
  //   }
  //   multiverse = !multiverse
  // }
  // lastOrder = ordem

  imprime()
}

function arraySort(vet, x) {
  vet.sort(function compare(a, b) {
    return a[x] < b[x] ? -1 : a[x] > b[x] ? 1 : 0
  })

  return vet
}

function imprime() {
  var ordem = document.getElementById("ordenarFilmes").value
  var filtro = ordem == "anoCronologico" ? "Cronologia: " : "Lançamento: "
  var div = document.querySelector('.container-total') //Mapeia o HTML em busca de um elemento com a classe '.container-total'
  div.innerHTML = ""

  for (movie of movies) {
    // Criação dos elementos
    var tagDivFilme = document.createElement('div')
    var tagA = document.createElement('a')
    var tagH2 = document.createElement('h2')
    var tagImage = document.createElement('img')

    // Anexando os elementos filhos aos elementos pais
    tagDivFilme.appendChild(tagH2)
    tagDivFilme.appendChild(tagImage)
    tagA.appendChild(tagDivFilme)
    div.appendChild(tagA)

    tagA.addEventListener('click', printTrailer)
    // Cria um atributo "data-linktrailer" com o trailer do filme
    tagA.dataset.linktrailer = movie.linkTrailer
    tagA.dataset.linkpagina = movie.linkPagina

    tagDivFilme.classList.add('container-movies') //Adiciono uma classe ao elemento

    tagH2.innerHTML = movie.nome + "<br>" + filtro + 
      parseInt(ordem == "anoCronologico" ? movie.anoCronologico : movie.anoLancamento)

    tagImage.src = movie.linkImagem
    tagImage.alt = movie.nome
  }
}

function habilitaContainerCadastro() {
  document.querySelector('.container-cadastro').classList.add('ativo')
}

function desabilitaContainerCadastro() {
  let divCadastro = document.querySelector('.container-cadastro')

  divCadastro.classList.remove('ativo')
  limparCamposCadastro()
  // Criar a div .container-cadastro pelo javascript para utilizar a função remove()
  // setTimeout(() => {
  //   divCadastro.remove()
  // }, 1000)
}

function salvarFilme() {
  var nomeFilme = document.querySelector('#nomeFilme').value
  var anoLancamento = document.querySelector('#anoLancamentoFilme').value
  var imagem = document.querySelector('#linkImagemFilme').value
  var anoCronologico = document.querySelector('#anoCronologiaFilme').value
  var linkPagina = document.querySelector('#linkImdbFilme').value
  var linkTrailer = document.querySelector('#linkTrailerFilme').value

  var validacao = validaDadosCadastro(nomeFilme, anoLancamento, imagem, anoCronologico, linkPagina, linkTrailer)

  if (validacao.status) {
    var trailerLinkEdited = linkTrailer.substr(linkTrailer.indexOf("watch?v=", 0), 19).substr(8, 11)

    movies.push(buildMovie(0, nomeFilme, anoLancamento, imagem, anoCronologico, linkPagina, trailerLinkEdited))
    tocarSom()
    desabilitaContainerCadastro()
    ordenar()
  } else {
    imprimeErro(validacao.mensagem)
  }
}

function limparCamposCadastro() {
  document.querySelector('#nomeFilme').value = ""
  document.querySelector('#anoLancamentoFilme').value = ""
  document.querySelector('#linkImagemFilme').value = ""
  document.querySelector('#anoCronologiaFilme').value = ""
  document.querySelector('#linkImdbFilme').value = ""
  document.querySelector('#linkTrailerFilme').value = ""
}

function validaDadosCadastro(nome, anoLancamento, enderecoImagem, anoCronologico, enderecoResumo, enderecoTrailer) {
  var validacao = {
    status: true,
    mensagem: ""
  }

  if (nome == "") {
    validacao.status = false
    validacao.mensagem = "Informe o nome do filme"
    return validacao
  }
  if (isNaN(parseFloat(anoLancamento))) {
    validacao.status = false
    validacao.mensagem = "Ano de lançamento inválido"
    return validacao
  }
  if (isNaN(parseFloat(anoCronologico))) {
    validacao.status = false
    validacao.mensagem = "Ano cronológico inválido"
    return validacao
  }
  let strSize = enderecoTrailer.substr(enderecoTrailer.indexOf("watch?v=", 0), 19).substr(8, 11).length

  if (!isValidHttpUrl(enderecoTrailer) || (strSize < 11)) {
    validacao.status = false
    validacao.mensagem = "Endereço do trailer inválido"
    return validacao
  }
  if (!isValidHttpUrl(enderecoImagem)) {
    validacao.status = false
    validacao.mensagem = "Endereço da imagem inválido"
    return validacao
  }
  if (!(enderecoImagem.endsWith(".jpg") ||
        enderecoImagem.endsWith(".png") ||
        enderecoImagem.endsWith(".jfif"))) {
    validacao.status = false
    validacao.mensagem = "Imagem com formato inválido"
    return validacao
  }
  if (!isValidHttpUrl(enderecoResumo)) {
    validacao.status = false
    validacao.mensagem = "Endereço resumo inválido"
    return validacao
  }

  return validacao
}

function isValidHttpUrl(endereco) {
  let url

  try {
    url = new URL(endereco)
  } catch (_) {
    return false
  }

  return url.protocol === "http:" || url.protocol === "https:"
}

function tocarSom() {
  var audio = new Audio("https://protettordelinks.com/wp-content/baixar/mario_moeda_efeito_sonoro_toquesengracadosmp3.com.mp3")
  // var audio = new Audio("https://www.myinstants.com/media/sounds/avengers_assemble_l.mp3")
  audio.play()
}

function imprimeErro(mensagem) {
  let tagBody = document.querySelector("body")

  // Criação dos elementos
  let tagSpan = document.createElement("span")
  let tagDiv = document.createElement("div")

  // Anexando os elementos filhos aos elementos pais
  tagDiv.appendChild(tagSpan)
  tagBody.appendChild(tagDiv)

  tagDiv.classList.add("modal-erro") //id = atributo, modal = o valor do atributo

  tagSpan.innerHTML = mensagem
  tagSpan.classList.add("animate__animated")
  tagSpan.classList.add("animate__tada")
  //tagDiv.addEventListener('click', fechaModalErro)

  setTimeout(() => {
    tagDiv.remove()
  }, 2750)
}

function printTrailer(e) {
  let tagBody = document.querySelector("body");
  // Busca o conteúdo do atributo "data-linktrailer" referente a tag "a" mais próxima
  let movie = e.target.closest('a')
console.log(movie)
  // Criação dos elementos
  let tagDivGeral = document.createElement("div");
  let tagDivTrailer = document.createElement("div");
  let tagIFrame = document.createElement("iframe");
  let tagButton = document.createElement("button");

  tagDivGeral.innerHTML = "";

  // Anexando os elementos filhos aos elementos pais
  // tagA.appendChild(tagButton)
  tagDivTrailer.appendChild(tagButton);
  tagDivTrailer.appendChild(tagIFrame);
  tagDivGeral.appendChild(tagDivTrailer);
  tagBody.appendChild(tagDivGeral);

  tagDivGeral.classList.add("modal-video-geral");
  tagDivGeral.addEventListener("click", closeTrailer);

  tagDivTrailer.classList.add("modal-video-trailer");

  tagIFrame.classList.add("modal-video-iframe");
  tagIFrame.setAttribute("src", "https://www.youtube.com/embed/" + movie.dataset.linktrailer);
  tagIFrame.setAttribute("title", "YouTube video player");
  tagIFrame.setAttribute("frameborder", 0);
  tagIFrame.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
  tagIFrame.setAttribute("allowfullscreen", "");

  tagButton.dataset.href = movie.dataset.linkpagina
  tagButton.addEventListener("click", goTo)
  tagButton.innerHTML = "Resumo"
}

function closeTrailer() {
  document.querySelector(".modal-video-geral").remove();
}

function goTo(e) {
  // Para a propagação do evento (Neste caso, o click)
  e.stopPropagation()
  var linkPagina = e.target.closest("button").dataset.href
  window.open(linkPagina)
}
