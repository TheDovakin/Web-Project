
// 🐋 Whale animation setup UNIQUEMENT sur Content.html
if (window.location.pathname.endsWith('/Content.html') || window.location.pathname.endsWith('Content.html')) {
    document.addEventListener('DOMContentLoaded', function () {
        const whale = document.createElement('img');
        whale.src = '../image/BootleNoseWhale.png';
        whale.id = 'baleine';
        whale.alt = 'Baleine animée';
        whale.style.position = 'absolute';
        whale.style.bottom = '100px';
        whale.style.width = '150px';
        whale.style.zIndex = '1000';
        whale.style.display = 'none';
        whale.style.cursor = 'pointer';
        whale.style.pointerEvents = 'auto';
        document.body.appendChild(whale);

        // Au clic sur la baleine, retourne la première carte
        whale.addEventListener('click', function () {
            const firstCardInner = document.querySelector('.card .card-inner');
            if (firstCardInner) {
                firstCardInner.style.transform =
                  firstCardInner.style.transform === 'rotateY(180deg)'
                    ? ''
                    : 'rotateY(180deg)';
            }
        });

        // 🐢 Ajout de la tortue luth animée
        const turtle = document.createElement('img');
        turtle.src = '../image/TortueLuth.png';
        turtle.id = 'tortue-luth';
        turtle.alt = 'Tortue Luth animée';
        turtle.style.position = 'absolute';
        turtle.style.bottom = '120px';
        turtle.style.width = '120px';
        turtle.style.zIndex = '1000';
        turtle.style.display = 'none';
        turtle.style.cursor = 'pointer';
        turtle.style.pointerEvents = 'auto';
        document.body.appendChild(turtle);

        // Au clic sur la tortue, retourne la deuxième carte
        turtle.addEventListener('click', function () {
            const secondCardInner = document.querySelectorAll('.card .card-inner')[1];
            if (secondCardInner) {
                secondCardInner.style.transform =
                    secondCardInner.style.transform === 'rotateY(180deg)'
                        ? ''
                        : 'rotateY(180deg)';
            }
        });

        // 🐟 Ajout du poisson Napoléon animé
        const napoleon = document.createElement('img');
        napoleon.src = '../image/NapoleonFish.png';
        napoleon.id = 'napoleon-fish';
        napoleon.alt = 'Poisson Napoléon animé';
        napoleon.style.position = 'absolute';
        napoleon.style.bottom = '140px';
        napoleon.style.width = '110px';
        napoleon.style.zIndex = '1000';
        napoleon.style.display = 'none';
        napoleon.style.cursor = 'pointer';
        napoleon.style.pointerEvents = 'auto';
        document.body.appendChild(napoleon);

        // Au clic sur le poisson Napoléon, retourne la troisième carte
        napoleon.addEventListener('click', function () {
            const thirdCardInner = document.querySelectorAll('.card .card-inner')[2];
            if (thirdCardInner) {
                thirdCardInner.style.transform =
                    thirdCardInner.style.transform === 'rotateY(180deg)'
                        ? ''
                        : 'rotateY(180deg)';
            }
        });
    });

    // 🐳 Animation de passage de la baleine avec nage
    function launchWhale() {
        const whale = document.getElementById('baleine');
        const direction = Math.random() < 0.5 ? 'left' : 'right';
        // Hauteur aléatoire sur toute la fenêtre (hors marges)
        const minY = 30;
        const maxY = window.innerHeight - 180; // 150px whale + 30px marge
        const randomY = Math.random() * (maxY - minY) + minY + window.scrollY;
        whale.style.display = 'block';
        whale.style.top = `${randomY}px`;
        whale.style.left = direction === 'right' ? '-200px' : '100%';
        whale.style.transform = direction === 'right' ? 'scaleX(-1)' : 'scaleX(1)';
        whale.style.transition = 'left 10s linear, top 0.5s ease-in-out';

        // Mouvement de nage (oscillation haut/bas)
        let swimStep = 0;
        const swimAmplitude = 20; // px
        const swimSpeed = 80; // ms
        const baseY = randomY;
        const swimInterval = setInterval(() => {
            swimStep += 1;
            const offset = Math.sin(swimStep / 2) * swimAmplitude;
            whale.style.top = `${baseY + offset}px`;
        }, swimSpeed);

        // Forcer le reflow
        void whale.offsetWidth;
        // Lancer l'animation
        whale.style.left = direction === 'right' ? '100%' : '-200px';
        // La cacher après 10s
        setTimeout(() => {
            whale.style.display = 'none';
            clearInterval(swimInterval);
        }, 10000);
    }

    // 🐢 Animation de passage de la tortue luth
    function launchTurtle() {
        const turtle = document.getElementById('tortue-luth');
        const direction = Math.random() < 0.5 ? 'left' : 'right';
        const minY = 80;
        const maxY = window.innerHeight - 200;
        const randomY = Math.random() * (maxY - minY) + minY + window.scrollY;
        turtle.style.display = 'block';
        turtle.style.top = `${randomY}px`;
        turtle.style.left = direction === 'right' ? '-180px' : '100%';
        turtle.style.transform = direction === 'right' ? 'scaleX(1)' : 'scaleX(-1)';
        turtle.style.transition = 'left 14s linear, top 0.7s ease-in-out';

        // Mouvement de nage (oscillation haut/bas)
        let swimStep = 0;
        const swimAmplitude = 16;
        const swimSpeed = 90;
        const baseY = randomY;
        const swimInterval = setInterval(() => {
            swimStep += 1;
            const offset = Math.sin(swimStep / 2) * swimAmplitude;
            turtle.style.top = `${baseY + offset}px`;
        }, swimSpeed);

        // Forcer le reflow
        void turtle.offsetWidth;
        // Lancer l'animation
        turtle.style.left = direction === 'right' ? '100%' : '-180px';
        // La cacher après 14s
        setTimeout(() => {
            turtle.style.display = 'none';
            clearInterval(swimInterval);
        }, 14000);
    }

    // 🐟 Animation de passage du poisson Napoléon
    function launchNapoleon() {
        const napoleon = document.getElementById('napoleon-fish');
        const direction = Math.random() < 0.5 ? 'left' : 'right';
        const minY = 120;
        const maxY = window.innerHeight - 220;
        const randomY = Math.random() * (maxY - minY) + minY + window.scrollY;
        napoleon.style.display = 'block';
        napoleon.style.top = `${randomY}px`;
        napoleon.style.left = direction === 'right' ? '-160px' : '100%';
        napoleon.style.transform = direction === 'right' ? 'scaleX(1)' : 'scaleX(-1)';
        napoleon.style.transition = 'left 12s linear, top 0.6s ease-in-out';

        // Mouvement de nage (oscillation haut/bas)
        let swimStep = 0;
        const swimAmplitude = 13;
        const swimSpeed = 85;
        const baseY = randomY;
        const swimInterval = setInterval(() => {
            swimStep += 1;
            const offset = Math.sin(swimStep / 2) * swimAmplitude;
            napoleon.style.top = `${baseY + offset}px`;
        }, swimSpeed);

        // Forcer le reflow
        void napoleon.offsetWidth;
        // Lancer l'animation
        napoleon.style.left = direction === 'right' ? '100%' : '-160px';
        // La cacher après 12s
        setTimeout(() => {
            napoleon.style.display = 'none';
            clearInterval(swimInterval);
        }, 12000);
    }

    // Fonction récursive pour lancer la baleine à intervalle aléatoire
    function whaleLoop() {
        if (Math.random() < 0.7) {
            launchWhale();
        }
        setTimeout(whaleLoop, Math.random() * 10000 + 3000); // 3 à 6 secondes
    }
    // Boucle d'apparition de la tortue luth
    function turtleLoop() {
        if (Math.random() < 0.5) {
            launchTurtle();
        }
        setTimeout(turtleLoop, Math.random() * 7000 + 7000); // 7 à 14 secondes
    }
    // Boucle d'apparition du poisson Napoléon
    function napoleonLoop() {
        if (Math.random() < 0.4) {
            launchNapoleon();
        }
        setTimeout(napoleonLoop, Math.random() * 9000 + 9000); // 9 à 18 secondes
    }
    // Démarre la boucle après chargement du DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', whaleLoop);
        document.addEventListener('DOMContentLoaded', turtleLoop);
        document.addEventListener('DOMContentLoaded', napoleonLoop);
    } else {
        whaleLoop();
        turtleLoop();
        napoleonLoop();
    }
}

// 🌿 Ajout d'algues animées en bas de page sur Content.html
if (
  window.location.pathname.endsWith('/Content.html') ||
  window.location.pathname.endsWith('Content.html')
) {
  document.addEventListener('DOMContentLoaded', function () {
    const seaweedContainer = document.getElementById('seaweed-container');
    if (seaweedContainer) {
      const seaweedCount = 62;
      for (let i = 0; i < seaweedCount; i++) {
        const img = document.createElement('img');
        img.src = '../image/Algues.png';
        img.className = 'seaweed';
        // Positionnement horizontal aléatoire (avec superposition possible)
        const left = Math.random() * 98;
        img.style.left = `calc(${left}% - ${Math.random() * 30}px)`;
        // Z-index pour superposer
        img.style.zIndex = Math.floor(Math.random() * 4) + 1;
        // Taille variable
        const scale = 0.4 + Math.random() * 1.3;
        img.style.transform = `scale(${scale})`;
        // Opacité légère pour effet de profondeur
        img.style.opacity = 0.5 + Math.random() * 0.5;
        seaweedContainer.appendChild(img);
        // Animation d'ondulation
        const phase = Math.random() * Math.PI * 1.5;
        setInterval(() => {
          const t = Date.now() / 900 + phase;
          const sway = Math.sin(t) * 12 * scale;
          img.style.transform = `scale(${scale}) rotate(${sway}deg)`;
        }, 40);
      }
    }
  });
}

// 🌱 Génération de petites bulles qui sortent des algues
function spawnSeaweedBubbles() {
    const seaweedContainer = document.getElementById('seaweed-container');
    if (!seaweedContainer) return;
    const algues = Array.from(seaweedContainer.getElementsByClassName('seaweed'));
    if (algues.length === 0) return;
    // On choisit une algue au hasard
    const algae = algues[Math.floor(Math.random() * algues.length)];
    const bubble = document.createElement('div');
    bubble.className = 'seaweed-bubble';
    // Position de l'algue
    const algaeRect = algae.getBoundingClientRect();
    const containerRect = seaweedContainer.getBoundingClientRect();
    // Position horizontale aléatoire autour de l'algue
    const left = algae.offsetLeft + algae.width / 2 + (Math.random() - 0.5) * 20;
    bubble.style.left = `${left}px`;
    bubble.style.bottom = '0px';
    // Taille aléatoire
    const size = 8 + Math.random() * 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.opacity = 0.7 + Math.random() * 0.3;
    seaweedContainer.appendChild(bubble);
    // Animation
    const rise = 60 + Math.random() * 60;
    const drift = (Math.random() - 0.5) * 30;
    bubble.animate([
        { transform: `translateY(0) translateX(0)`, opacity: bubble.style.opacity },
        { transform: `translateY(-${rise}px) translateX(${drift}px)`, opacity: 0 }
    ], {
        duration: 1200 + Math.random() * 800,
        easing: 'ease-out',
        fill: 'forwards'
    });
    setTimeout(() => bubble.remove(), 1800);
}
setInterval(spawnSeaweedBubbles, 350);

// --- Card Zoom and Widget Logic ---
document.addEventListener('DOMContentLoaded', function () {
  // Only on Content.html
  if (!window.location.pathname.endsWith('Content.html')) return;

  // Card click for zoom+widget (only when flipped)
  document.querySelectorAll('.card').forEach(function(card, idx) {
    card.addEventListener('click', function (e) {
      const cardInner = card.querySelector('.card-inner');
      // Only if card is flipped (rotateY(180deg))
      if (cardInner && cardInner.style.transform === 'rotateY(180deg)') {
        // Zoom effect
        card.classList.add('zoomed');
        // Show widget
        const modal = document.getElementById('card-widget-modal');
        const body = modal.querySelector('.card-widget-body');
        // Get card back content
        const backContent = card.querySelector('.card-back-content');
        let animalImg = '';
        if (idx === 0) {
          animalImg = '<img src="../image/BootleNoseWhale.png" alt="Whale" class="modal-animal-img">';
        } else if (idx === 1) {
          animalImg = '<img src="../image/TortueLuth.png" alt="Turtle" class="modal-animal-img">';
        } else if (idx === 2) {
          animalImg = '<img src="../image/NapoleonFish.png" alt="Napoleon Fish" class="modal-animal-img">';
        }
        body.innerHTML = animalImg + (backContent ? backContent.innerHTML : '');
        modal.style.display = 'flex';
        // Prevent scroll
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close widget
  document.querySelector('.card-widget-close').onclick = function() {
    document.getElementById('card-widget-modal').style.display = 'none';
    document.body.style.overflow = '';
    document.querySelectorAll('.card.zoomed').forEach(c => c.classList.remove('zoomed'));
  };

  // Click outside widget closes
  document.getElementById('card-widget-modal').addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.display = 'none';
      document.body.style.overflow = '';
      document.querySelectorAll('.card.zoomed').forEach(c => c.classList.remove('zoomed'));
    }
  });
// Bubble transition effect on link click
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            createBubbles(() => {
                window.location.href = href;
            });
        });
    });
});

function createBubbles(callback) {
    const bubbleContainer = document.createElement('div');
    bubbleContainer.style.position = 'fixed';
    bubbleContainer.style.left = 0;
    bubbleContainer.style.top = 0;
    bubbleContainer.style.width = '100vw';
    bubbleContainer.style.height = '100vh';
    bubbleContainer.style.pointerEvents = 'none';
    bubbleContainer.style.zIndex = 9999;
    document.body.appendChild(bubbleContainer);

    const bubbles = [];
    for (let i = 0; i < 30; i++) {
        const bubble = document.createElement('div');
        const size = Math.random() * 40 + 20;
        bubble.style.position = 'absolute';
        // Spread bubbles randomly across the width (0vw to 100vw)
        bubble.style.left = `calc(${Math.random() * 100}% - ${size / 2}px)`;
        // Randomize the initial bottom position a bit for more natural effect
        bubble.style.bottom = `${-60 - Math.random() * 40}px`;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.borderRadius = '50%';
        bubble.style.background = 'rgba(173, 216, 230, 0.7)';
        bubble.style.opacity = Math.random() * 0.5 + 0.5;
        bubble.style.transition = 'transform 1.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 1.2s';
        bubbleContainer.appendChild(bubble);
        bubbles.push(bubble);
        // Add a random delay for each bubble for a more natural effect
        setTimeout(() => {
            // Add a little horizontal drift
            const drift = (Math.random() - 0.5) * 100; // px
            bubble.style.transform = `translate(${drift}px, -${window.innerHeight + 100}px) scale(${Math.random() * 0.5 + 0.8})`;
            bubble.style.opacity = 0;
        }, 10 + Math.random() * 300);
    }
    setTimeout(() => {
        bubbleContainer.remove();
        if (callback) callback();
    }, 1100);

    
}



// 🐋 Whale animation setup UNIQUEMENT sur Content.html
if (window.location.pathname.endsWith('/Content.html') || window.location.pathname.endsWith('Content.html')) {
    document.addEventListener('DOMContentLoaded', function () {
        const whale = document.createElement('img');
        whale.src = '../image/BootleNoseWhale.png';
        whale.id = 'baleine';
        whale.alt = 'Baleine animée';
        whale.style.position = 'absolute';
        whale.style.bottom = '100px';
        whale.style.width = '150px';
        whale.style.zIndex = '1000';
        whale.style.display = 'none';
        whale.style.cursor = 'pointer';
        whale.style.pointerEvents = 'auto';
        document.body.appendChild(whale);

        // Au clic sur la baleine, retourne la première carte
        whale.addEventListener('click', function () {
            const firstCardInner = document.querySelector('.card .card-inner');
            if (firstCardInner) {
                firstCardInner.style.transform =
                  firstCardInner.style.transform === 'rotateY(180deg)'
                    ? ''
                    : 'rotateY(180deg)';
            }
        });

        // 🐢 Ajout de la tortue luth animée
        const turtle = document.createElement('img');
        turtle.src = '../image/TortueLuth.png';
        turtle.id = 'tortue-luth';
        turtle.alt = 'Tortue Luth animée';
        turtle.style.position = 'absolute';
        turtle.style.bottom = '120px';
        turtle.style.width = '120px';
        turtle.style.zIndex = '1000';
        turtle.style.display = 'none';
        turtle.style.cursor = 'pointer';
        turtle.style.pointerEvents = 'auto';
        document.body.appendChild(turtle);

        // Au clic sur la tortue, retourne la deuxième carte
        turtle.addEventListener('click', function () {
            const secondCardInner = document.querySelectorAll('.card .card-inner')[1];
            if (secondCardInner) {
                secondCardInner.style.transform =
                    secondCardInner.style.transform === 'rotateY(180deg)'
                        ? ''
                        : 'rotateY(180deg)';
            }
        });

        // 🐟 Ajout du poisson Napoléon animé
        const napoleon = document.createElement('img');
        napoleon.src = '../image/NapoleonFish.png';
        napoleon.id = 'napoleon-fish';
        napoleon.alt = 'Poisson Napoléon animé';
        napoleon.style.position = 'absolute';
        napoleon.style.bottom = '140px';
        napoleon.style.width = '110px';
        napoleon.style.zIndex = '1000';
        napoleon.style.display = 'none';
        napoleon.style.cursor = 'pointer';
        napoleon.style.pointerEvents = 'auto';
        document.body.appendChild(napoleon);

        // Au clic sur le poisson Napoléon, retourne la troisième carte
        napoleon.addEventListener('click', function () {
            const thirdCardInner = document.querySelectorAll('.card .card-inner')[2];
            if (thirdCardInner) {
                thirdCardInner.style.transform =
                    thirdCardInner.style.transform === 'rotateY(180deg)'
                        ? ''
                        : 'rotateY(180deg)';
            }
        });
    });

    // 🐳 Animation de passage de la baleine avec nage
    function launchWhale() {
        const whale = document.getElementById('baleine');
        const direction = Math.random() < 0.5 ? 'left' : 'right';
        // Hauteur aléatoire sur toute la fenêtre (hors marges)
        const minY = 30;
        const maxY = window.innerHeight - 180; // 150px whale + 30px marge
        const randomY = Math.random() * (maxY - minY) + minY + window.scrollY;
        whale.style.display = 'block';
        whale.style.top = `${randomY}px`;
        whale.style.left = direction === 'right' ? '-200px' : '100%';
        whale.style.transform = direction === 'right' ? 'scaleX(-1)' : 'scaleX(1)';
        whale.style.transition = 'left 10s linear, top 0.5s ease-in-out';

        // Mouvement de nage (oscillation haut/bas)
        let swimStep = 0;
        const swimAmplitude = 20; // px
        const swimSpeed = 80; // ms
        const baseY = randomY;
        const swimInterval = setInterval(() => {
            swimStep += 1;
            const offset = Math.sin(swimStep / 2) * swimAmplitude;
            whale.style.top = `${baseY + offset}px`;
        }, swimSpeed);

        // Forcer le reflow
        void whale.offsetWidth;
        // Lancer l'animation
        whale.style.left = direction === 'right' ? '100%' : '-200px';
        // La cacher après 10s
        setTimeout(() => {
            whale.style.display = 'none';
            clearInterval(swimInterval);
        }, 10000);
    }

    // 🐢 Animation de passage de la tortue luth
    function launchTurtle() {
        const turtle = document.getElementById('tortue-luth');
        const direction = Math.random() < 0.5 ? 'left' : 'right';
        const minY = 80;
        const maxY = window.innerHeight - 200;
        const randomY = Math.random() * (maxY - minY) + minY + window.scrollY;
        turtle.style.display = 'block';
        turtle.style.top = `${randomY}px`;
        turtle.style.left = direction === 'right' ? '-180px' : '100%';
        turtle.style.transform = direction === 'right' ? 'scaleX(1)' : 'scaleX(-1)';
        turtle.style.transition = 'left 14s linear, top 0.7s ease-in-out';

        // Mouvement de nage (oscillation haut/bas)
        let swimStep = 0;
        const swimAmplitude = 16;
        const swimSpeed = 90;
        const baseY = randomY;
        const swimInterval = setInterval(() => {
            swimStep += 1;
            const offset = Math.sin(swimStep / 2) * swimAmplitude;
            turtle.style.top = `${baseY + offset}px`;
        }, swimSpeed);

        // Forcer le reflow
        void turtle.offsetWidth;
        // Lancer l'animation
        turtle.style.left = direction === 'right' ? '100%' : '-180px';
        // La cacher après 14s
        setTimeout(() => {
            turtle.style.display = 'none';
            clearInterval(swimInterval);
        }, 14000);
    }

    // 🐟 Animation de passage du poisson Napoléon
    function launchNapoleon() {
        const napoleon = document.getElementById('napoleon-fish');
        const direction = Math.random() < 0.5 ? 'left' : 'right';
        const minY = 120;
        const maxY = window.innerHeight - 220;
        const randomY = Math.random() * (maxY - minY) + minY + window.scrollY;
        napoleon.style.display = 'block';
        napoleon.style.top = `${randomY}px`;
        napoleon.style.left = direction === 'right' ? '-160px' : '100%';
        napoleon.style.transform = direction === 'right' ? 'scaleX(1)' : 'scaleX(-1)';
        napoleon.style.transition = 'left 12s linear, top 0.6s ease-in-out';

        // Mouvement de nage (oscillation haut/bas)
        let swimStep = 0;
        const swimAmplitude = 13;
        const swimSpeed = 85;
        const baseY = randomY;
        const swimInterval = setInterval(() => {
            swimStep += 1;
            const offset = Math.sin(swimStep / 2) * swimAmplitude;
            napoleon.style.top = `${baseY + offset}px`;
        }, swimSpeed);

        // Forcer le reflow
        void napoleon.offsetWidth;
        // Lancer l'animation
        napoleon.style.left = direction === 'right' ? '100%' : '-160px';
        // La cacher après 12s
        setTimeout(() => {
            napoleon.style.display = 'none';
            clearInterval(swimInterval);
        }, 12000);
    }

    // Fonction récursive pour lancer la baleine à intervalle aléatoire
    function whaleLoop() {
        if (Math.random() < 0.7) {
            launchWhale();
        }
        setTimeout(whaleLoop, Math.random() * 10000 + 3000); // 3 à 6 secondes
    }
    // Boucle d'apparition de la tortue luth
    function turtleLoop() {
        if (Math.random() < 0.5) {
            launchTurtle();
        }
        setTimeout(turtleLoop, Math.random() * 7000 + 7000); // 7 à 14 secondes
    }
    // Boucle d'apparition du poisson Napoléon
    function napoleonLoop() {
        if (Math.random() < 0.4) {
            launchNapoleon();
        }
        setTimeout(napoleonLoop, Math.random() * 9000 + 9000); // 9 à 18 secondes
    }
    // Démarre la boucle après chargement du DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', whaleLoop);
        document.addEventListener('DOMContentLoaded', turtleLoop);
        document.addEventListener('DOMContentLoaded', napoleonLoop);
    } else {
        whaleLoop();
        turtleLoop();
        napoleonLoop();
    }
}

// 🌿 Ajout d'algues animées en bas de page sur Content.html
if (
  window.location.pathname.endsWith('/Content.html') ||
  window.location.pathname.endsWith('Content.html')
) {
  document.addEventListener('DOMContentLoaded', function () {
    const seaweedContainer = document.getElementById('seaweed-container');
    if (seaweedContainer) {
      const seaweedCount = 62;
      for (let i = 0; i < seaweedCount; i++) {
        const img = document.createElement('img');
        img.src = '../image/Algues.png';
        img.className = 'seaweed';
        // Positionnement horizontal aléatoire (avec superposition possible)
        const left = Math.random() * 98;
        img.style.left = `calc(${left}% - ${Math.random() * 30}px)`;
        // Z-index pour superposer
        img.style.zIndex = Math.floor(Math.random() * 4) + 1;
        // Taille variable
        const scale = 0.4 + Math.random() * 1.3;
        img.style.transform = `scale(${scale})`;
        // Opacité légère pour effet de profondeur
        img.style.opacity = 0.5 + Math.random() * 0.5;
        seaweedContainer.appendChild(img);
        // Animation d'ondulation
        const phase = Math.random() * Math.PI * 1.5;
        setInterval(() => {
          const t = Date.now() / 900 + phase;
          const sway = Math.sin(t) * 12 * scale;
          img.style.transform = `scale(${scale}) rotate(${sway}deg)`;
        }, 40);
      }
    }
  });
}

// 🌱 Génération de petites bulles qui sortent des algues
function spawnSeaweedBubbles() {
    const seaweedContainer = document.getElementById('seaweed-container');
    if (!seaweedContainer) return;
    const algues = Array.from(seaweedContainer.getElementsByClassName('seaweed'));
    if (algues.length === 0) return;
    // On choisit une algue au hasard
    const algae = algues[Math.floor(Math.random() * algues.length)];
    const bubble = document.createElement('div');
    bubble.className = 'seaweed-bubble';
    // Position de l'algue
    const algaeRect = algae.getBoundingClientRect();
    const containerRect = seaweedContainer.getBoundingClientRect();
    // Position horizontale aléatoire autour de l'algue
    const left = algae.offsetLeft + algae.width / 2 + (Math.random() - 0.5) * 20;
    bubble.style.left = `${left}px`;
    bubble.style.bottom = '0px';
    // Taille aléatoire
    const size = 8 + Math.random() * 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.opacity = 0.7 + Math.random() * 0.3;
    seaweedContainer.appendChild(bubble);
    // Animation
    const rise = 60 + Math.random() * 60;
    const drift = (Math.random() - 0.5) * 30;
    bubble.animate([
        { transform: `translateY(0) translateX(0)`, opacity: bubble.style.opacity },
        { transform: `translateY(-${rise}px) translateX(${drift}px)`, opacity: 0 }
    ], {
        duration: 1200 + Math.random() * 800,
        easing: 'ease-out',
        fill: 'forwards'
    });
    setTimeout(() => bubble.remove(), 1800);
}
setInterval(spawnSeaweedBubbles, 350);

// --- Card Zoom and Widget Logic ---
document.addEventListener('DOMContentLoaded', function () {
  // Only on Content.html
  if (!window.location.pathname.endsWith('Content.html')) return;

  // Card click for zoom+widget (only when flipped)
  document.querySelectorAll('.card').forEach(function(card, idx) {
    card.addEventListener('click', function (e) {
      const cardInner = card.querySelector('.card-inner');
      // Only if card is flipped (rotateY(180deg))
      if (cardInner && cardInner.style.transform === 'rotateY(180deg)') {
        // Zoom effect
        card.classList.add('zoomed');
        // Show widget
        const modal = document.getElementById('card-widget-modal');
        const body = modal.querySelector('.card-widget-body');
        // Get card back content
        const backContent = card.querySelector('.card-back-content');
        let animalImg = '';
        if (idx === 0) {
          animalImg = '<img src="../image/BootleNoseWhale.png" alt="Whale" class="modal-animal-img">';
        } else if (idx === 1) {
          animalImg = '<img src="../image/TortueLuth.png" alt="Turtle" class="modal-animal-img">';
        } else if (idx === 2) {
          animalImg = '<img src="../image/NapoleonFish.png" alt="Napoleon Fish" class="modal-animal-img">';
        }
        body.innerHTML = animalImg + (backContent ? backContent.innerHTML : '');
        modal.style.display = 'flex';
        // Prevent scroll
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close widget
  document.querySelector('.card-widget-close').onclick = function() {
    document.getElementById('card-widget-modal').style.display = 'none';
    document.body.style.overflow = '';
    document.querySelectorAll('.card.zoomed').forEach(c => c.classList.remove('zoomed'));
  };

  // Click outside widget closes
  document.getElementById('card-widget-modal').addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.display = 'none';
      document.body.style.overflow = '';
      document.querySelectorAll('.card.zoomed').forEach(c => c.classList.remove('zoomed'));
    }
  });

// Bubble transition effect on link click
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            createBubbles(() => {
                window.location.href = href;
            });
        });
    });
});

function createBubbles(callback) {
    const bubbleContainer = document.createElement('div');
    bubbleContainer.style.position = 'fixed';
    bubbleContainer.style.left = 0;
    bubbleContainer.style.top = 0;
    bubbleContainer.style.width = '100vw';
    bubbleContainer.style.height = '100vh';
    bubbleContainer.style.pointerEvents = 'none';
    bubbleContainer.style.zIndex = 9999;
    document.body.appendChild(bubbleContainer);

    const bubbles = [];
    for (let i = 0; i < 30; i++) {
        const bubble = document.createElement('div');
        const size = Math.random() * 40 + 20;
        bubble.style.position = 'absolute';
        // Spread bubbles randomly across the width (0vw to 100vw)
        bubble.style.left = `calc(${Math.random() * 100}% - ${size / 2}px)`;
        // Randomize the initial bottom position a bit for more natural effect
        bubble.style.bottom = `${-60 - Math.random() * 40}px`;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.borderRadius = '50%';
        bubble.style.background = 'rgba(173, 216, 230, 0.7)';
        bubble.style.opacity = Math.random() * 0.5 + 0.5;
        bubble.style.transition = 'transform 1.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 1.2s';
        bubbleContainer.appendChild(bubble);
        bubbles.push(bubble);
        // Add a random delay for each bubble for a more natural effect
        setTimeout(() => {
            // Add a little horizontal drift
            const drift = (Math.random() - 0.5) * 100; // px
            bubble.style.transform = `translate(${drift}px, -${window.innerHeight + 100}px) scale(${Math.random() * 0.5 + 0.8})`;
            bubble.style.opacity = 0;
        }, 10 + Math.random() * 300);
    }
    setTimeout(() => {
        bubbleContainer.remove();
        if (callback) callback();
    }, 1100);

    
}



// 🐋 Whale animation setup UNIQUEMENT sur Content.html
if (window.location.pathname.endsWith('/Content.html') || window.location.pathname.endsWith('Content.html')) {
    document.addEventListener('DOMContentLoaded', function () {
        const whale = document.createElement('img');
        whale.src = '../image/BootleNoseWhale.png';
        whale.id = 'baleine';
        whale.alt = 'Baleine animée';
        whale.style.position = 'absolute';
        whale.style.bottom = '100px';
        whale.style.width = '150px';
        whale.style.zIndex = '1000';
        whale.style.display = 'none';
        whale.style.cursor = 'pointer';
        whale.style.pointerEvents = 'auto';
        document.body.appendChild(whale);

        // Au clic sur la baleine, retourne la première carte
        whale.addEventListener('click', function () {
            const firstCardInner = document.querySelector('.card .card-inner');
            if (firstCardInner) {
                firstCardInner.style.transform =
                  firstCardInner.style.transform === 'rotateY(180deg)'
                    ? ''
                    : 'rotateY(180deg)';
            }
        });

        // 🐢 Ajout de la tortue luth animée
        const turtle = document.createElement('img');
        turtle.src = '../image/TortueLuth.png';
        turtle.id = 'tortue-luth';
        turtle.alt = 'Tortue Luth animée';
        turtle.style.position = 'absolute';
        turtle.style.bottom = '120px';
        turtle.style.width = '120px';
        turtle.style.zIndex = '1000';
        turtle.style.display = 'none';
        turtle.style.cursor = 'pointer';
        turtle.style.pointerEvents = 'auto';
        document.body.appendChild(turtle);

        // Au clic sur la tortue, retourne la deuxième carte
        turtle.addEventListener('click', function () {
            const secondCardInner = document.querySelectorAll('.card .card-inner')[1];
            if (secondCardInner) {
                secondCardInner.style.transform =
                    secondCardInner.style.transform === 'rotateY(180deg)'
                        ? ''
                        : 'rotateY(180deg)';
            }
        });

        // 🐟 Ajout du poisson Napoléon animé
        const napoleon = document.createElement('img');
        napoleon.src = '../image/NapoleonFish.png';
        napoleon.id = 'napoleon-fish';
        napoleon.alt = 'Poisson Napoléon animé';
        napoleon.style.position = 'absolute';
        napoleon.style.bottom = '140px';
        napoleon.style.width = '110px';
        napoleon.style.zIndex = '1000';
        napoleon.style.display = 'none';
        napoleon.style.cursor = 'pointer';
        napoleon.style.pointerEvents = 'auto';
        document.body.appendChild(napoleon);

        // Au clic sur le poisson Napoléon, retourne la troisième carte
        napoleon.addEventListener('click', function () {
            const thirdCardInner = document.querySelectorAll('.card .card-inner')[2];
            if (thirdCardInner) {
                thirdCardInner.style.transform =
                    thirdCardInner.style.transform === 'rotateY(180deg)'
                        ? ''
                        : 'rotateY(180deg)';
            }
        });
    });

    // 🐳 Animation de passage de la baleine avec nage
    function launchWhale() {
        const whale = document.getElementById('baleine');
        const direction = Math.random() < 0.5 ? 'left' : 'right';
        // Hauteur aléatoire sur toute la fenêtre (hors marges)
        const minY = 30;
        const maxY = window.innerHeight - 180; // 150px whale + 30px marge
        const randomY = Math.random() * (maxY - minY) + minY + window.scrollY;
        whale.style.display = 'block';
        whale.style.top = `${randomY}px`;
        whale.style.left = direction === 'right' ? '-200px' : '100%';
        whale.style.transform = direction === 'right' ? 'scaleX(-1)' : 'scaleX(1)';
        whale.style.transition = 'left 10s linear, top 0.5s ease-in-out';

        // Mouvement de nage (oscillation haut/bas)
        let swimStep = 0;
        const swimAmplitude = 20; // px
        const swimSpeed = 80; // ms
        const baseY = randomY;
        const swimInterval = setInterval(() => {
            swimStep += 1;
            const offset = Math.sin(swimStep / 2) * swimAmplitude;
            whale.style.top = `${baseY + offset}px`;
        }, swimSpeed);

        // Forcer le reflow
        void whale.offsetWidth;
        // Lancer l'animation
        whale.style.left = direction === 'right' ? '100%' : '-200px';
        // La cacher après 10s
        setTimeout(() => {
            whale.style.display = 'none';
            clearInterval(swimInterval);
        }, 10000);
    }

    // 🐢 Animation de passage de la tortue luth
    function launchTurtle() {
        const turtle = document.getElementById('tortue-luth');
        const direction = Math.random() < 0.5 ? 'left' : 'right';
        const minY = 80;
        const maxY = window.innerHeight - 200;
        const randomY = Math.random() * (maxY - minY) + minY + window.scrollY;
        turtle.style.display = 'block';
        turtle.style.top = `${randomY}px`;
        turtle.style.left = direction === 'right' ? '-180px' : '100%';
        turtle.style.transform = direction === 'right' ? 'scaleX(1)' : 'scaleX(-1)';
        turtle.style.transition = 'left 14s linear, top 0.7s ease-in-out';

        // Mouvement de nage (oscillation haut/bas)
        let swimStep = 0;
        const swimAmplitude = 16;
        const swimSpeed = 90;
        const baseY = randomY;
        const swimInterval = setInterval(() => {
            swimStep += 1;
            const offset = Math.sin(swimStep / 2) * swimAmplitude;
            turtle.style.top = `${baseY + offset}px`;
        }, swimSpeed);

        // Forcer le reflow
        void turtle.offsetWidth;
        // Lancer l'animation
        turtle.style.left = direction === 'right' ? '100%' : '-180px';
        // La cacher après 14s
        setTimeout(() => {
            turtle.style.display = 'none';
            clearInterval(swimInterval);
        }, 14000);
    }

    // 🐟 Animation de passage du poisson Napoléon
    function launchNapoleon() {
        const napoleon = document.getElementById('napoleon-fish');
        const direction = Math.random() < 0.5 ? 'left' : 'right';
        const minY = 120;
        const maxY = window.innerHeight - 220;
        const randomY = Math.random() * (maxY - minY) + minY + window.scrollY;
        napoleon.style.display = 'block';
        napoleon.style.top = `${randomY}px`;
        napoleon.style.left = direction === 'right' ? '-160px' : '100%';
        napoleon.style.transform = direction === 'right' ? 'scaleX(1)' : 'scaleX(-1)';
        napoleon.style.transition = 'left 12s linear, top 0.6s ease-in-out';

        // Mouvement de nage (oscillation haut/bas)
        let swimStep = 0;
        const swimAmplitude = 13;
        const swimSpeed = 85;
        const baseY = randomY;
        const swimInterval = setInterval(() => {
            swimStep += 1;
            const offset = Math.sin(swimStep / 2) * swimAmplitude;
            napoleon.style.top = `${baseY + offset}px`;
        }, swimSpeed);

        // Forcer le reflow
        void napoleon.offsetWidth;
        // Lancer l'animation
        napoleon.style.left = direction === 'right' ? '100%' : '-160px';
        // La cacher après 12s
        setTimeout(() => {
            napoleon.style.display = 'none';
            clearInterval(swimInterval);
        }, 12000);
    }

    // Fonction récursive pour lancer la baleine à intervalle aléatoire
    function whaleLoop() {
        if (Math.random() < 0.7) {
            launchWhale();
        }
        setTimeout(whaleLoop, Math.random() * 10000 + 3000); // 3 à 6 secondes
    }
    // Boucle d'apparition de la tortue luth
    function turtleLoop() {
        if (Math.random() < 0.5) {
            launchTurtle();
        }
        setTimeout(turtleLoop, Math.random() * 7000 + 7000); // 7 à 14 secondes
    }
    // Boucle d'apparition du poisson Napoléon
    function napoleonLoop() {
        if (Math.random() < 0.4) {
            launchNapoleon();
        }
        setTimeout(napoleonLoop, Math.random() * 9000 + 9000); // 9 à 18 secondes
    }
    // Démarre la boucle après chargement du DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', whaleLoop);
        document.addEventListener('DOMContentLoaded', turtleLoop);
        document.addEventListener('DOMContentLoaded', napoleonLoop);
    } else {
        whaleLoop();
        turtleLoop();
        napoleonLoop();
    }
}

// 🌿 Ajout d'algues animées en bas de page sur Content.html
if (
  window.location.pathname.endsWith('/Content.html') ||
  window.location.pathname.endsWith('Content.html')
) {
  document.addEventListener('DOMContentLoaded', function () {
    const seaweedContainer = document.getElementById('seaweed-container');
    if (seaweedContainer) {
      const seaweedCount = 62;
      for (let i = 0; i < seaweedCount; i++) {
        const img = document.createElement('img');
        img.src = '../image/Algues.png';
        img.className = 'seaweed';
        // Positionnement horizontal aléatoire (avec superposition possible)
        const left = Math.random() * 98;
        img.style.left = `calc(${left}% - ${Math.random() * 30}px)`;
        // Z-index pour superposer
        img.style.zIndex = Math.floor(Math.random() * 4) + 1;
        // Taille variable
        const scale = 0.4 + Math.random() * 1.3;
        img.style.transform = `scale(${scale})`;
        // Opacité légère pour effet de profondeur
        img.style.opacity = 0.5 + Math.random() * 0.5;
        seaweedContainer.appendChild(img);
        // Animation d'ondulation
        const phase = Math.random() * Math.PI * 1.5;
        setInterval(() => {
          const t = Date.now() / 900 + phase;
          const sway = Math.sin(t) * 12 * scale;
          img.style.transform = `scale(${scale}) rotate(${sway}deg)`;
        }, 40);
      }
    }
  });
}

// 🌱 Génération de petites bulles qui sortent des algues
function spawnSeaweedBubbles() {
    const seaweedContainer = document.getElementById('seaweed-container');
    if (!seaweedContainer) return;
    const algues = Array.from(seaweedContainer.getElementsByClassName('seaweed'));
    if (algues.length === 0) return;
    // On choisit une algue au hasard
    const algae = algues[Math.floor(Math.random() * algues.length)];
    const bubble = document.createElement('div');
    bubble.className = 'seaweed-bubble';
    // Position de l'algue
    const algaeRect = algae.getBoundingClientRect();
    const containerRect = seaweedContainer.getBoundingClientRect();
    // Position horizontale aléatoire autour de l'algue
    const left = algae.offsetLeft + algae.width / 2 + (Math.random() - 0.5) * 20;
    bubble.style.left = `${left}px`;
    bubble.style.bottom = '0px';
    // Taille aléatoire
    const size = 8 + Math.random() * 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.opacity = 0.7 + Math.random() * 0.3;
    seaweedContainer.appendChild(bubble);
    // Animation
    const rise = 60 + Math.random() * 60;
    const drift = (Math.random() - 0.5) * 30;
    bubble.animate([
        { transform: `translateY(0) translateX(0)`, opacity: bubble.style.opacity },
        { transform: `translateY(-${rise}px) translateX(${drift}px)`, opacity: 0 }
    ], {
        duration: 1200 + Math.random() * 800,
        easing: 'ease-out',
        fill: 'forwards'
    });
    setTimeout(() => bubble.remove(), 1800);
}
setInterval(spawnSeaweedBubbles, 350);

// --- Card Zoom and Widget Logic ---
document.addEventListener('DOMContentLoaded', function () {
  // Only on Content.html
  if (!window.location.pathname.endsWith('Content.html')) return;

  // Card click for zoom+widget (only when flipped)
  document.querySelectorAll('.card').forEach(function(card, idx) {
    card.addEventListener('click', function (e) {
      const cardInner = card.querySelector('.card-inner');
      // Only if card is flipped (rotateY(180deg))
      if (cardInner && cardInner.style.transform === 'rotateY(180deg)') {
        // Zoom effect
        card.classList.add('zoomed');
        // Show widget
        const modal = document.getElementById('card-widget-modal');
        const body = modal.querySelector('.card-widget-body');
        // Get card back content
        const backContent = card.querySelector('.card-back-content');
        let animalImg = '';
        if (idx === 0) {
          animalImg = '<img src="../image/BootleNoseWhale.png" alt="Whale" class="modal-animal-img">';
        } else if (idx === 1) {
          animalImg = '<img src="../image/TortueLuth.png" alt="Turtle" class="modal-animal-img">';
        } else if (idx === 2) {
          animalImg = '<img src="../image/NapoleonFish.png" alt="Napoleon Fish" class="modal-animal-img">';
        }
        body.innerHTML = animalImg + (backContent ? backContent.innerHTML : '');
        modal.style.display = 'flex';
        // Prevent scroll
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close widget
  document.querySelector('.card-widget-close').onclick = function() {
    document.getElementById('card-widget-modal').style.display = 'none';
    document.body.style.overflow = '';
    document.querySelectorAll('.card.zoomed').forEach(c => c.classList.remove('zoomed'));
  };

  // Click outside widget closes
  document.getElementById('card-widget-modal').addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.display = 'none';
      document.body.style.overflow = '';
      document.querySelectorAll('.card.zoomed').forEach(c => c.classList.remove('zoomed'));
    }
  });
});})})