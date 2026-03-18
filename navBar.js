// connecte le CSS
const linkNavBar = document.createElement('link');
linkNavBar.rel = 'stylesheet';
linkNavBar.href = 'navBar.css';
document.head.appendChild(linkNavBar);

// place dans le HTML
document.getElementById('navbar').innerHTML =
`    <nav class="navbar">
        <div class="nav-container">
            <!-- Logo et titre -->
            <div class="nav-logo">
                <a href="index.html"><img class="nav-logoImg" src="images/pioupiouGaming.png" alt="Logo"></a>
                <span class="navTitle">Piou Piou Gaming</span>
            </div>

            <!-- Menu Navigation et de connexion-->
            <ul class="dropdown">
                <li class="dropdown-categorie"><a class="dropdown-accueil" href="#actualites">Les actualités</a>
                    <ul class="submenu">
                        <li class="submenuList"><a class="navList" href="discovery.html">Découvrir le jeu-vidéo</a></li>
                        <li class="submenuList"><a class="navList" href="genres.html">Les catégories de jeu</a></li>
                        <li class="submenuList"><a class="navList" href="pegi.html">Les normes PEGI</a></li>
                        <li class="submenuList"><a class="navList" href="retro.html">Le rétro-gaming</a></li>
                        <li class="submenuList"><a class="navList" href="art.html">L'art dans les jeux</a></li>
                        <li class="submenuList"><a class="navList" href="#">Les technologies</a></li>
                    </ul>
                </li>
                <li class="dropdown-categorie"><a class="dropdown-accueil" href="#recommandations">Nos recommandations</a>
                    <ul class="submenu">
                        <li class="submenuList"><a class="navList" href="https://store.steampowered.com/?l=french" target="_blank" rel="noopener noreferrer">Steam</a></li>
                        <li class="submenuList"><a class="navList" href="https://www.epicgames.com/site/fr/home" target="_blank" rel="noopener noreferrer">Epicgames</a></li>
                        <li class="submenuList"><a class="navList" href="https://www.humblebundle.com/games" target="_blank" rel="noopener noreferrer">Humble Bundle</a></li>
                    </ul>
                </li>
                <li class="dropdown-categorie"><a class="dropdown-accueil" href="#shop">Shop</a></li>
                <li class="login-icon"><a href="#"><svg class="navConnexion" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg></a></li>
            </ul>
        </div>
    </nav>`