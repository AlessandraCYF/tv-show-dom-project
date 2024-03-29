function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
 
   episodeList.map((episode) => {
    let cardElt = document.createElement("div");
    let titleElt = document.createElement("h2");
    let imgElt = document.createElement("div");
    let textElt = document.createElement("div");

    cardElt.className = "card";
    titleElt.className = "card_title";
    imgElt.className = "card_img";
    textElt.className = "card_text";
    titleElt.textContent = episode.name;
    imgElt.style.backgroundImage = `url(${episode.image.medium})`;
    textElt.innerHTML = episode.summary;

    cardElt.append(titleElt, imgElt, textElt);
    rootElem.appendChild(cardElt);
  });
}

window.onload = setup;
