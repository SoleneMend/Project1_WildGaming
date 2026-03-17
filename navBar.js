// Inject le CSS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'navBar.css';
document.head.appendChild(link);

// Inject le HTML
fetch('navBar.html')
    .then(function(response) {
        return response.text();
    })
    .then(function(html) {
        document.getElementById('navbar').innerHTML = html;
    });