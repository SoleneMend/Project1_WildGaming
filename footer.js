const linkFooter = document.createElement('link');
linkFooter.rel = 'stylesheet';
linkFooter.href = 'footer.css';
document.head.appendChild(linkFooter);

fetch('footer.html')
    .then(function (response) {
        return response.text();
    })
    .then(function (html) {
        document.getElementById('footer').innerHTML = html;
    });

