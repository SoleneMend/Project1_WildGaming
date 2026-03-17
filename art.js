const listOfUs = ["Laurent", "Solene", "Ulrich", "Hien", "Linda", "Samy"]

const listArtPresentation = 
[
    { title : "Okami", url : "https://store.steampowered.com/app/587620/Okami_HD/", urlImg : "images/art-presentation-dessin/art-presentation-okami-logo.jpg",recomandationFrom : listOfUs[1], description : "" },
    { title : "Gris", url : "https://store.steampowered.com/app/683320/GRIS/", urlImg : "images/art-presentation-dessin/art-presentation-gris-logo.jpg",recomandationFrom : listOfUs[1], description : "" },
    { title : "Little Nightmares ", url : "https://store.steampowered.com/app/424840/Little_Nightmares/", urlImg : "images/art-presentation-dessin/art-presentation-littleNightmares-logo.jpg",recomandationFrom : listOfUs[1], description : "" },
    { title : "Omori", url : "https://store.steampowered.com/app/1150690/OMORI/", urlImg : "images/art-presentation-dessin/art-presentation-omori-logo.jpg",recomandationFrom : listOfUs[1], description : "" },
    { title : "MIO: Memories in Orbit", url : "https://store.steampowered.com/app/1672810/MIO_Memories_in_Orbit/", urlImg : "images/art-presentation-dessin/art-presentation-mio-logo.jpg",recomandationFrom : listOfUs[1], description : "" },
    { title : "Hollow Knight + Silksong", url : "https://store.steampowered.com/app/367520/Hollow_Knight/", urlImg : "images/art-presentation-dessin/art-presentation-HKSilksong-logo.webp",recomandationFrom : listOfUs[1], description : "" },
    { title : "Illusion Carnival", url : "https://store.steampowered.com/app/2796340/Illusion_Carnival/", urlImg : "images/art-presentation-dessin/art-presentation-illusionCarnaval-logo.avif",recomandationFrom : listOfUs[1], description : "en early acces, seulement le premier chapitre de disponible... Soluta nemo tenetur repudiandae possimus consectetur facere dignissimos sunt totam unde, numquam neque assumenda excepturi ducimus aperiam odit" },
    { title : "Hauntii", url : "https://store.steampowered.com/app/2060790/Hauntii/", urlImg : "images/art-presentation-dessin/art-presentation-hauntii-logo.png",recomandationFrom : listOfUs[1], description : "" },
    //{ title : "", url : "", urlImg : "",recomandationFrom : "", description : "" },
]

// Create all presentation art

let section = document.querySelector(".art-dessin");

for (let i = 0; i < listArtPresentation.length; i++) {

    console.log(i)
    //Create the base
    let articleArt = document.createElement('article');
    articleArt.classList.add("dessin-presentation");

    // Create button
    let prevButton = document.createElement('button');
    prevButton.classList.add("prevButton");
    prevButton.onclick = function() {prev()};
    prevButton.innerText = "<";
    articleArt.append(prevButton);

    // Creation div
    let newDiv_classPres = document.createElement('div');
    newDiv_classPres.classList.add("pres");

    // Add title
    let newTitle = document.createElement('h3');
    newTitle.innerText = listArtPresentation[i].title;
    newDiv_classPres.append(newTitle);

    // Create another div
    let newDiv_classDesc = document.createElement('div');
    newDiv_classDesc.classList.add("desc");

    // Add paragraphe
    let newP = document.createElement('p')

    if (listArtPresentation[i].description === "") {
        newP.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta nemo tenetur repudiandae possimus consectetur facere dignissimos sunt totam unde, numquam neque assumenda excepturi ducimus aperiam odit";
    }
    else {
        newP.innerText = listArtPresentation[i].description;
    }

    newDiv_classDesc.append(newP);

    // Create another paragraphe
    let newP_classRecommandation = document.createElement('p');
    newP_classRecommandation.classList.add("recommandation");
    newP_classRecommandation.innerText = "Recommandation de " + listArtPresentation[i].recomandationFrom + " : ";
        
    // Add a link
    let newLink = document.createElement('a');
    newLink.href = listArtPresentation[i].url;
    newLink.innerText = "lien steam";
    newP_classRecommandation.append(newLink)

    // Link 
    newDiv_classDesc.append(newP_classRecommandation);
    newDiv_classPres.append(newDiv_classDesc);
    articleArt.append(newDiv_classPres);

    // Add image
    let newImg = document.createElement('img');
    newImg.src = listArtPresentation[i].urlImg;
    articleArt.append(newImg);

    // Link
    section.append(articleArt)

    // Create button
    let nextButton = document.createElement('button');
    nextButton.classList.add("nextButton");
    nextButton.onclick = function() {next()};
    nextButton.innerText = ">";
    articleArt.append(nextButton);
}

// Show only the one we want

let activeArtPresentation = 0;

let allArticle = document.querySelectorAll(".dessin-presentation")
allArticle[activeArtPresentation].style.display = 'flex';

// Hide all except first article
for (let i = 1; i < allArticle.length; i++) {
    allArticle[i].style.display = 'none';
}

// Next button
function next() {
    allArticle[activeArtPresentation].style.display = 'none';
    activeArtPresentation++;
    if (activeArtPresentation >= allArticle.length) {
        activeArtPresentation = 0;
    }
    allArticle[activeArtPresentation].style.display = 'flex';
}

// Prev button
function prev() {
    allArticle[activeArtPresentation].style.display = 'none';
    activeArtPresentation--;
    if (activeArtPresentation < 0) {
        activeArtPresentation = allArticle.length - 1;
    }
    allArticle[activeArtPresentation].style.display = 'flex';
}