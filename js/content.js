// Initialisation des animaux animés (baleine, tortue, napoléon)
if (window.location.pathname.endsWith('/Content.html') || window.location.pathname.endsWith('Content.html')) {
    document.addEventListener('DOMContentLoaded', function () {
        // Fonction utilitaire pour créer un animal animé
        function createAnimal({src, id, alt, bottom, width, cardIdx}) {
            const img = document.createElement('img');
            img.src = src;
            img.id = id;
            img.alt = alt;
            img.style.position = 'absolute';
            img.style.bottom = bottom;
            img.style.width = width;
            img.style.zIndex = '1000';
            img.style.display = 'none';
            img.style.cursor = 'pointer';
            img.style.pointerEvents = 'auto';
            document.body.appendChild(img);
            // Flip card
            img.addEventListener('click', function () {
                const cardInner = document.querySelectorAll('.card .card-inner')[cardIdx];
                if (cardInner && cardInner.style.transform !== 'rotateY(180deg)') {
                    cardInner.style.transform = 'rotateY(180deg)';
                }
            });
            return img;
        }
        // Create animals
        createAnimal({
            src: '../image/BootleNoseWhale.png',
            id: 'baleine',
            alt: 'Baleine animée',
            bottom: '100px',
            width: '150px',
            cardIdx: 0
        });
        createAnimal({
            src: '../image/TortueLuth.png',
            id: 'tortue-luth',
            alt: 'Tortue Luth animée',
            bottom: '120px',
            width: '120px',
            cardIdx: 1
        });
        createAnimal({
            src: '../image/NapoleonFish.png',
            id: 'napoleon-fish',
            alt: 'Poisson Napoléon animé',
            bottom: '140px',
            width: '110px',
            cardIdx: 2
        });
    });

    // Animation functions
    function launchWhale() {
        const whale = document.getElementById('baleine');
        const direction = Math.random() < 0.5 ? 'left' : 'right';
        const minY = 30;
        const maxY = window.innerHeight - 180;
        const randomY = Math.random() * (maxY - minY) + minY + window.scrollY;
        whale.style.display = 'block';
        whale.style.top = `${randomY}px`;
        whale.style.left = direction === 'right' ? '-200px' : '100%';
        whale.style.transform = direction === 'right' ? 'scaleX(-1)' : 'scaleX(1)';
        whale.style.transition = 'left 10s linear, top 0.5s ease-in-out';
        let swimStep = 0;
        const swimAmplitude = 20;
        const swimSpeed = 80;
        const baseY = randomY;
        const swimInterval = setInterval(() => {
            swimStep += 1;
            const offset = Math.sin(swimStep / 2) * swimAmplitude;
            whale.style.top = `${baseY + offset}px`;
        }, swimSpeed);
        void whale.offsetWidth;
        whale.style.left = direction === 'right' ? '100%' : '-200px';
        setTimeout(() => {
            whale.style.display = 'none';
            clearInterval(swimInterval);
        }, 10000);
    }
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
        let swimStep = 0;
        const swimAmplitude = 16;
        const swimSpeed = 90;
        const baseY = randomY;
        const swimInterval = setInterval(() => {
            swimStep += 1;
            const offset = Math.sin(swimStep / 2) * swimAmplitude;
            turtle.style.top = `${baseY + offset}px`;
        }, swimSpeed);
        void turtle.offsetWidth;
        turtle.style.left = direction === 'right' ? '100%' : '-180px';
        setTimeout(() => {
            turtle.style.display = 'none';
            clearInterval(swimInterval);
        }, 14000);
    }
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
        let swimStep = 0;
        const swimAmplitude = 13;
        const swimSpeed = 85;
        const baseY = randomY;
        const swimInterval = setInterval(() => {
            swimStep += 1;
            const offset = Math.sin(swimStep / 2) * swimAmplitude;
            napoleon.style.top = `${baseY + offset}px`;
        }, swimSpeed);
        void napoleon.offsetWidth;
        napoleon.style.left = direction === 'right' ? '100%' : '-160px';
        setTimeout(() => {
            napoleon.style.display = 'none';
            clearInterval(swimInterval);
        }, 12000);
    }
    // Animation loops
    function whaleLoop() {
        if (Math.random() < 0.7) launchWhale();
        setTimeout(whaleLoop, Math.random() * 10000 + 3000);
    }
    function turtleLoop() {
        if (Math.random() < 0.5) launchTurtle();
        setTimeout(turtleLoop, Math.random() * 7000 + 7000);
    }
    function napoleonLoop() {
        if (Math.random() < 0.4) launchNapoleon();
        setTimeout(napoleonLoop, Math.random() * 9000 + 9000);
    }
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

// Add seaweed
if (window.location.pathname.endsWith('/Content.html') || window.location.pathname.endsWith('Content.html')) {
  document.addEventListener('DOMContentLoaded', function () {
    const seaweedContainer = document.getElementById('seaweed-container');
    if (seaweedContainer) {
      const seaweedCount = 62;
      for (let i = 0; i < seaweedCount; i++) {
        const img = document.createElement('img');
        img.src = '../image/Algues.png';
        img.className = 'seaweed';
        const left = Math.random() * 98;
        img.style.left = `calc(${left}% - ${Math.random() * 30}px)`;
        img.style.zIndex = Math.floor(Math.random() * 4) + 1;
        const scale = 0.4 + Math.random() * 1.3;
        img.style.transform = `scale(${scale})`;
        img.style.opacity = 0.5 + Math.random() * 0.5;
        seaweedContainer.appendChild(img);
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

// Génération de petites bulles qui sortent des algues
function spawnSeaweedBubbles() {
    const seaweedContainer = document.getElementById('seaweed-container');
    if (!seaweedContainer) return;
    const algues = Array.from(seaweedContainer.getElementsByClassName('seaweed'));
    if (algues.length === 0) return;
    const algae = algues[Math.floor(Math.random() * algues.length)];
    const bubble = document.createElement('div');
    bubble.className = 'seaweed-bubble';
    const left = algae.offsetLeft + algae.width / 2 + (Math.random() - 0.5) * 20;
    bubble.style.left = `${left}px`;
    bubble.style.bottom = '0px';
    const size = 8 + Math.random() * 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.opacity = 0.7 + Math.random() * 0.3;
    seaweedContainer.appendChild(bubble);
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

// Gestion du zoom sur les cartes et affichage du widget d'information
// Ce bloc permet d'ouvrir une fenêtre modale avec les infos de l'animal quand on clique sur une carte retournée
// et de fermer la fenêtre en cliquant sur la croix ou en dehors du widget

document.addEventListener('DOMContentLoaded', function () {
  if (!window.location.pathname.endsWith('Content.html')) return;
  document.querySelectorAll('.card').forEach(function(card, idx) {
    card.addEventListener('click', function (e) {
      const cardInner = card.querySelector('.card-inner');
      if (cardInner && cardInner.style.transform === 'rotateY(180deg)') {
        card.classList.add('zoomed');
        const modal = document.getElementById('card-widget-modal');
        const body = modal.querySelector('.card-widget-body');
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
        document.body.style.overflow = 'hidden';
      }
    });
  });
  document.querySelector('.card-widget-close').addEventListener('click', function() {
    document.getElementById('card-widget-modal').style.display = 'none';
    document.body.style.overflow = '';
    document.querySelectorAll('.card.zoomed').forEach(c => c.classList.remove('zoomed'));
  });
  document.getElementById('card-widget-modal').addEventListener('mousedown', function(e) {
    if (e.target === this) {
      this.style.display = 'none';
      document.body.style.overflow = '';
      document.querySelectorAll('.card.zoomed').forEach(c => c.classList.remove('zoomed'));
    }
  });
});

// Effet de transition avec des bulles lors du clic sur un lien du menu
// Ce bloc ajoute une animation de bulles lors de la navigation entre les pages

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
        bubble.style.left = `calc(${Math.random() * 100}% - ${size / 2}px)`;
        bubble.style.bottom = `${-60 - Math.random() * 40}px`;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.borderRadius = '50%';
        bubble.style.background = 'rgba(173, 216, 230, 0.7)';
        bubble.style.opacity = Math.random() * 0.5 + 0.5;
        bubble.style.transition = 'transform 1.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 1.2s';
        bubbleContainer.appendChild(bubble);
        bubbles.push(bubble);
        setTimeout(() => {
            const drift = (Math.random() - 0.5) * 100;
            bubble.style.transform = `translate(${drift}px, -${window.innerHeight + 100}px) scale(${Math.random() * 0.5 + 0.8})`;
            bubble.style.opacity = 0;
        }, 10 + Math.random() * 300);
    }
    setTimeout(() => {
        bubbleContainer.remove();
        if (callback) callback();
    }, 1100);
}