// connecte le CSS
const linkNavBar = document.createElement('link');
linkNavBar.rel = 'stylesheet';
linkNavBar.href = 'navBar.css';
document.head.appendChild(linkNavBar);

// place dans le HTML
fetch('navBar.html')
    .then(function(response) {
        return response.text();
    })
    .then(function(html) {
        document.getElementById('navbar').innerHTML = html;
    });