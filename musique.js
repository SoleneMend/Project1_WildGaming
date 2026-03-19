const listUs = ["Laurent", "Solene", "Ulrich", "Hien"]

const listMusicPresentation = 
[
    { title : "The Witcher 3", url : "https://youtu.be/uqp4Jc-XkCw?si=kf6wVtNzQW_AxQLO", urlImg : "images/art-presentation-musique/art-presentation-witcher3-logo.jpg",recomandationFrom : listUs[0], description : "" },
    { title : "Clair Obscur", url : "https://youtu.be/xnzs5eOXqs0?si=rX5c1kPcqsmFMzlH", urlImg : "images/art-presentation-musique/art-presentation-clairObscur-logo.jpg",recomandationFrom : listUs[1], description : "" },
    { title : "Doom", url : "https://youtu.be/BSsfjHCFosw?si=b8uhpmlXbNiHuQG3", urlImg : "images/art-presentation-musique/art-presentation-doom-logo.png",recomandationFrom : listUs[1], description : "" },
    { title : "Pokemon : Diamond/ Pearl", url : "https://youtu.be/rXefFHRgyE0?si=KE5kPUvtooAmIGON", urlImg : "images/art-presentation-musique/art-presentation-pokemon-logo.png",recomandationFrom : listUs[1], description : "" },
    { title : "Skyrim", url : "https://youtu.be/UsnRQJxanVM?si=lLHYmN3Tj-yXqL_j", urlImg : "images/art-presentation-musique/art-presentation-skyrim-logo.jpg",recomandationFrom : listUs[0], description : "" },
    { title : "Minecraft", url : "https://youtu.be/Gpd85y_iTxY?si=LV1kwaCxtIBwxBHr", urlImg : "images/art-presentation-musique/art-presentation-minecraft-logo.jpg",recomandationFrom : listUs[1], description : "" },
    { title : "Undertale", url : "https://youtu.be/NH-GAwLAO30?si=KscJCVzNI0TiQn_r", urlImg : "images/art-presentation-musique/art-presentation-undertale-logo.png",recomandationFrom : listUs[1], description : "" },
    { title : "Final Fantasy VII", url : "https://youtu.be/mYdf0yqK_Fc?si=Guf-8aWvdFuGJ2z2", urlImg : "images/art-presentation-musique/art-presentation-finalfantasyVII-logo.jpg",recomandationFrom : listUs[0], description : "" },
    { title : "Cyberpunk 2077 (dlc)", url : "https://youtu.be/u15tEo0wsQI?si=vJ_27CzE-FghsDOs", urlImg : "images/art-presentation-musique/art-presentation-cyberpunk2077-logo.jpg",recomandationFrom : listUs[2], description : "" },
    { title : "Uncharted 1", url : "https://youtu.be/Z0PufLvQCRo?si=P7P2ZcW2k2N3qvk4", urlImg : "images/art-presentation-musique/art-presentation-uncharted-logo.png",recomandationFrom : listUs[2], description : "" },
    { title : "Need for speed", url : "https://youtu.be/DoJQfzxu9r8?si=_Y2yhpIly_UguZIi", urlImg : "images/art-presentation-musique/art-presentation-needForSpeed-logo.png",recomandationFrom : listUs[3], description : "" },
    { title : "Hollow Knight", url : "https://youtu.be/fWquuWkHVP4?si=nR_Qo4IRszkGftA9", urlImg : "images/art-presentation-musique/art-presentation-hollowKnight-logo.webp", recomandationFrom : "", description : "petit bonus : https://youtu.be/Mq8E_1LkoAc?si=_comOt5DWRJr8u_B" },
    //{ title : "", url : "", urlImg : "images/art-presentation-musique/", recomandationFrom : "", description : "" },
]

// Create all presentation musique

let sectionMusic = document.querySelector(".art-musique");

for (let i = 0; i < listMusicPresentation.length; i++) {
    
    // Create the base
    let articleMusique = document.createElement('article');
    articleMusique.classList.add("musique-presentation");
    articleMusique.onmouseenter = function() {clearInterval(autoIntervalMusique); autoIntervalMusique = null;};
    articleMusique.onmouseleave = function() {startAutoMusique()}; 
    sectionMusic.append(articleMusique);

    // Create button prev
    let prevButtonMusique = document.createElement('button');
    prevButtonMusique.classList.add("prevButton");
    prevButtonMusique.onclick = function() {prevMusique()};
    prevButtonMusique.innerText = "<";
    articleMusique.append(prevButtonMusique);

    // Create div - pres
    let newDivMusique_classPres = document.createElement('div');
    newDivMusique_classPres.classList.add("pres");
    articleMusique.append(newDivMusique_classPres)

    // Add title
    let newMusiqueTitle = document.createElement('h3');
    newMusiqueTitle.innerText = listMusicPresentation[i].title;
    newDivMusique_classPres.append(newMusiqueTitle);

    // Create another div - desc
    let newDivMusique_classDesc = document.createElement('div');
    newDivMusique_classDesc.classList.add("desc");
    newDivMusique_classPres.append(newDivMusique_classDesc);

    // Add paragraphe 
    let newMusiqueP = document.createElement('p');

    if (listMusicPresentation[i].description === "") {
        newMusiqueP.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta nemo tenetur repudiandae possimus consectetur facere dignissimos sunt totam unde, numquam neque assumenda excepturi ducimus aperiam odit";
    } 
    else {
        newMusiqueP.innerText = listMusicPresentation[i].description;
    }
    
    newDivMusique_classDesc.append(newMusiqueP);

    // Create another paragraphe
    let newMusiqueP_reco = document.createElement('p');
    newMusiqueP_reco.classList.add("recommandation")
    newMusiqueP_reco.innerText = "Recommandation de " + listMusicPresentation[i].recomandationFrom + " : ";
    newDivMusique_classDesc.append(newMusiqueP_reco)

    // Add link
    let newMusiqueLink = document.createElement('a');
    newMusiqueLink.href = listMusicPresentation[i].url;
    newMusiqueLink.innerText = "Ecoute maintenant";
    newMusiqueP_reco.append(newMusiqueLink);

    // Add image
    let newMusiqueImg = document.createElement('img');
    newMusiqueImg.src = listMusicPresentation[i].urlImg;
    articleMusique.append(newMusiqueImg);

    // Create next button
    let nextButtonMusique = document.createElement('button');
    nextButtonMusique.classList.add("nextButton");
    nextButtonMusique.onclick = function() {nextMusique()};
    nextButtonMusique.innerText = ">";
    articleMusique.append(nextButtonMusique);
}


// Show only the one we want

let activeMusiquePresentation = 0;

let allMusiqueArticles = document.querySelectorAll(".musique-presentation");
allMusiqueArticles[activeMusiquePresentation].style.display = 'flex';

// Hide all except first articles
for (let i = 1; i < allMusiqueArticles.length; i++) {
    allMusiqueArticles[i].style.display = 'none';
}

// Changement Automatique

let autoIntervalMusique;
function startAutoMusique() {
    autoIntervalMusique = setInterval( () => {
        nextMusique();
    }, 3000);
}

startAutoMusique();

function nextMusique() {
    allMusiqueArticles[activeMusiquePresentation].style.display = 'none';
    activeMusiquePresentation++;
    if(activeMusiquePresentation >= allMusiqueArticles.length){
        activeMusiquePresentation = 0;
    }
    allMusiqueArticles[activeMusiquePresentation].style.display = 'flex';
    clearInterval(autoIntervalMusique);
    autoIntervalMusique = null;
    startAutoMusique();
}

function prevMusique() {    
    allMusiqueArticles[activeMusiquePresentation].style.display = 'none';
    activeMusiquePresentation--;
    if (activeMusiquePresentation < 0) {
        activeMusiquePresentation = allMusiqueArticles.length - 1;
    }
    allMusiqueArticles[activeMusiquePresentation].style.display = 'flex';
    clearInterval(autoIntervalMusique);
    autoIntervalMusique = null;
    startAutoMusique();
}
