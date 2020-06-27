//define language reload anchors
let dataReload = document.querySelectorAll("[data-reload]");

// language translations
let language = {
      eng:{
        "subtitulo":"Fiction and Documentary Editor",
        "more":"Read More"
      },
      pt:{
        "subtitulo":"Editor de Ficção e Documentário",
        "more":"Saiba Mais"
      }
    };

//define language via window hash
if (window.location.hash){
  if(window.location.hash === "#pt") {
    subtil.textContent = language.pt.subtitulo;
  }
}

//define language reload onclick illiteration
/*for (i = 0; i <= dataReload.length; i++) {
  dataReload[i].onclick = function(){
    location.reload(true);
  }
}*/