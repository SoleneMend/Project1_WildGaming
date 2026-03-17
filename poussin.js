function ajouterImage() {
    const img = document.createElement('img');
    img.src = './images/genr-logo.png';
    img.style.position = 'absolute';
    const x = Math.floor(Math.random() * 90);
    const y = Math.floor(Math.random() * 90);
    img.style.left = x + '%';
    img.style.top = y + '%';
    img.style.width = '100px';
    document.body.appendChild(img);
}
for (let i = 0; i < 100; i++) {
    ajouterImage();
}
setInterval(ajouterImage, 100);
function spammerEtGrandir() {
    const img = document.createElement('img');
    img.src = './images/genr-logo.png';
    img.classList.add('image-qui-grandit');
    img.style.left = Math.random() * 90 + '%';
    img.style.top = Math.random() * 90 + '%';
    document.body.appendChild(img);
    setTimeout(() => img.remove(), 10000);
}
setInterval(spammerEtGrandir, 300);