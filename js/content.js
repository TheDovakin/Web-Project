// Whale animation setup ONLY on Content.html
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

        whale.addEventListener('click', function () {
            const firstCardInner = document.querySelector('.card .card-inner');
            if (firstCardInner && firstCardInner.style.transform !== 'rotateY(180deg)') {
                firstCardInner.style.transform = 'rotateY(180deg)';
            }
        });

        // Turtle animation setup
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

        turtle.addEventListener('click', function () {
            const secondCardInner = document.querySelectorAll('.card .card-inner')[1];
            if (secondCardInner && secondCardInner.style.transform !== 'rotateY(180deg)') {
                secondCardInner.style.transform = 'rotateY(180deg)';
            }
        });

        // Vaquita animation setup
        const vaquita = document.createElement('img');
        vaquita.src = '../image/Vaquita.png';
        vaquita.id = 'vaquita';
        vaquita.alt = 'Vaquita animée';
        vaquita.style.position = 'absolute';
        vaquita.style.bottom = '140px';
        vaquita.style.width = '110px';
        vaquita.style.zIndex = '1000';
        vaquita.style.display = 'none';
        vaquita.style.cursor = 'pointer';
        vaquita.style.pointerEvents = 'auto';
        document.body.appendChild(vaquita);

        vaquita.addEventListener('click', function () {
            const thirdCardInner = document.querySelectorAll('.card .card-inner')[2];
            if (thirdCardInner && thirdCardInner.style.transform !== 'rotateY(180deg)') {
                thirdCardInner.style.transform = 'rotateY(180deg)';
            }
        });

        // Manta ray animation setup
        const manta = document.createElement('img');
        manta.src = '../image/Manta Ray.png';
        manta.id = 'manta-ray';
        manta.alt = 'Manta Ray animée';
        manta.style.position = 'absolute';
        manta.style.bottom = '160px';
        manta.style.width = '130px';
        manta.style.zIndex = '1000';
        manta.style.display = 'none';
        manta.style.cursor = 'pointer';
        manta.style.pointerEvents = 'auto';
        document.body.appendChild(manta);

        manta.addEventListener('click', function () {
            const fourthCardInner = document.querySelectorAll('.card .card-inner')[3];
            if (fourthCardInner && fourthCardInner.style.transform !== 'rotateY(180deg)') {
                fourthCardInner.style.transform = 'rotateY(180deg)';
            }
        });

        // Hammerhead shark animation setup
        const shark = document.createElement('img');
        shark.src = '../image/Shark.png';
        shark.id = 'hammerhead-shark';
        shark.alt = 'Scalloped Hammerhead Shark animée';
        shark.style.position = 'absolute';
        shark.style.bottom = '180px';
        shark.style.width = '140px';
        shark.style.zIndex = '1000';
        shark.style.display = 'none';
        shark.style.cursor = 'pointer';
        shark.style.pointerEvents = 'auto';
        document.body.appendChild(shark);

        shark.addEventListener('click', function () {
            const fifthCardInner = document.querySelectorAll('.card .card-inner')[4];
            if (fifthCardInner && fifthCardInner.style.transform !== 'rotateY(180deg)') {
                fifthCardInner.style.transform = 'rotateY(180deg)';
            }
        });

        // Southern sea otter animation setup
        const otter = document.createElement('img');
        otter.src = '../image/Otter.png';
        otter.id = 'sea-otter';
        otter.alt = 'Southern Sea Otter animée';
        otter.style.position = 'absolute';
        otter.style.bottom = '200px';
        otter.style.width = '100px';
        otter.style.zIndex = '1000';
        otter.style.display = 'none';
        otter.style.cursor = 'pointer';
        otter.style.pointerEvents = 'auto';
        otter.style.transform = 'scaleX(1)';
        document.body.appendChild(otter);

        otter.addEventListener('click', function () {
            const sixthCardInner = document.querySelectorAll('.card .card-inner')[5];
            if (sixthCardInner && sixthCardInner.style.transform !== 'rotateY(180deg)') {
                sixthCardInner.style.transform = 'rotateY(180deg)';
            }
        });
    });

    // Whale animation
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

        // Swimming
        let swimStep = 0;
        const swimAmplitude = 20; // px
        const swimSpeed = 80; // ms
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

    // Turtle animation
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

    // Vaquita animation
    function launchVaquita() {
        const vaquita = document.getElementById('vaquita');
        const direction = Math.random() < 0.5 ? 'left' : 'right';
        const minY = 120;
        const maxY = window.innerHeight - 220;
        const randomY = Math.random() * (maxY - minY) + minY + window.scrollY;
        vaquita.style.display = 'block';
        vaquita.style.top = `${randomY}px`;
        vaquita.style.left = direction === 'right' ? '-160px' : '100%';
        vaquita.style.transform = direction === 'right' ? 'scaleX(-1)' : 'scaleX(1)';
        vaquita.style.transition = 'left 12s linear, top 0.6s ease-in-out';

        let swimStep = 0;
        const swimAmplitude = 13;
        const swimSpeed = 85;
        const baseY = randomY;
        const swimInterval = setInterval(() => {
            swimStep += 1;
            const offset = Math.sin(swimStep / 2) * swimAmplitude;
            vaquita.style.top = `${baseY + offset}px`;
        }, swimSpeed);

        void vaquita.offsetWidth;
        vaquita.style.left = direction === 'right' ? '100%' : '-160px';
        setTimeout(() => {
            vaquita.style.display = 'none';
            clearInterval(swimInterval);
        }, 12000);
    }

    // Manta ray animation
    function launchManta() {
        const manta = document.getElementById('manta-ray');
        const direction = Math.random() < 0.5 ? 'left' : 'right';
        const minY = 160;
        const maxY = window.innerHeight - 240;
        const randomY = Math.random() * (maxY - minY) + minY + window.scrollY;
        manta.style.display = 'block';
        manta.style.top = `${randomY}px`;
        manta.style.left = direction === 'right' ? '-170px' : '100%';
        manta.style.transform = direction === 'right' ? 'scaleX(-1)' : 'scaleX(1)';
        manta.style.transition = 'left 13s linear, top 0.7s ease-in-out';

        let swimStep = 0;
        const swimAmplitude = 18;
        const swimSpeed = 90;
        const baseY = randomY;
        const swimInterval = setInterval(() => {
            swimStep += 1;
            const offset = Math.sin(swimStep / 2) * swimAmplitude;
            manta.style.top = `${baseY + offset}px`;
        }, swimSpeed);

        void manta.offsetWidth;
        manta.style.left = direction === 'right' ? '100%' : '-170px';
        setTimeout(() => {
            manta.style.display = 'none';
            clearInterval(swimInterval);
        }, 13000);
    }

    // Hammerhead shark animation
    function launchShark() {
        const shark = document.getElementById('hammerhead-shark');
        const direction = Math.random() < 0.5 ? 'left' : 'right';
        const minY = 180;
        const maxY = window.innerHeight - 250;
        const randomY = Math.random() * (maxY - minY) + minY + window.scrollY;
        shark.style.display = 'block';
        shark.style.top = `${randomY}px`;
        shark.style.left = direction === 'right' ? '-180px' : '100%';
        shark.style.transform = direction === 'right' ? 'scaleX(-1)' : 'scaleX(1)';
        shark.style.transition = 'left 11s linear, top 0.6s ease-in-out';

        let swimStep = 0;
        const swimAmplitude = 15;
        const swimSpeed = 80;
        const baseY = randomY;
        const swimInterval = setInterval(() => {
            swimStep += 1;
            const offset = Math.sin(swimStep / 2) * swimAmplitude;
            shark.style.top = `${baseY + offset}px`;
        }, swimSpeed);

        void shark.offsetWidth;
        shark.style.left = direction === 'right' ? '100%' : '-180px';
        setTimeout(() => {
            shark.style.display = 'none';
            clearInterval(swimInterval);
        }, 11000);
    }

    // Southern sea otter animation
    function launchOtter() {
        const otter = document.getElementById('sea-otter');
        const direction = Math.random() < 0.5 ? 'left' : 'right';
        const minY = 200;
        const maxY = window.innerHeight - 220;
        const randomY = Math.random() * (maxY - minY) + minY + window.scrollY;
        otter.style.display = 'block';
        otter.style.top = `${randomY}px`;
        otter.style.left = direction === 'right' ? '-120px' : '100%';
        otter.style.transform = direction === 'right' ? 'scaleX(1)' : 'scaleX(-1)';
        otter.style.transition = 'left 10s linear, top 0.6s ease-in-out';

        let swimStep = 0;
        const swimAmplitude = 10;
        const swimSpeed = 80;
        const baseY = randomY;
        const swimInterval = setInterval(() => {
            swimStep += 1;
            const offset = Math.sin(swimStep / 2) * swimAmplitude;
            otter.style.top = `${baseY + offset}px`;
        }, swimSpeed);
        void otter.offsetWidth;
        otter.style.left = direction === 'right' ? '100%' : '-120px';
        setTimeout(() => {
            otter.style.display = 'none';
            clearInterval(swimInterval);
        }, 10000);
    }

    // Whale loop
    function whaleLoop() {
        if (Math.random() < 0.7) {
            launchWhale();
        }
        setTimeout(whaleLoop, Math.random() * 10000 + 3000);
    }
    // Turtle loop
    function turtleLoop() {
        if (Math.random() < 0.5) {
            launchTurtle();
        }
        setTimeout(turtleLoop, Math.random() * 7000 + 7000); 
    }
    // Vaquita loop
    function vaquitaLoop() {
        if (Math.random() < 0.4) {
            launchVaquita();
        }
        setTimeout(vaquitaLoop, Math.random() * 9000 + 9000);
    }
    // Manta ray loop
    function mantaLoop() {
        if (Math.random() < 0.4) {
            launchManta();
        }
        setTimeout(mantaLoop, Math.random() * 11000 + 9000); 
    }
    // Hammerhead shark loop
    function sharkLoop() {
        if (Math.random() < 0.4) {
            launchShark();
        }
        setTimeout(sharkLoop, Math.random() * 10000 + 9000);
    }
    // Southern sea otter loop
    function otterLoop() {
        if (Math.random() < 0.4) {
            launchOtter();
        }
        setTimeout(otterLoop, Math.random() * 10000 + 9000); 
    }
    // DOMContentLoaded event for all loops
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', whaleLoop);
        document.addEventListener('DOMContentLoaded', turtleLoop);
        document.addEventListener('DOMContentLoaded', vaquitaLoop);
        document.addEventListener('DOMContentLoaded', mantaLoop);
        document.addEventListener('DOMContentLoaded', sharkLoop);
        document.addEventListener('DOMContentLoaded', otterLoop);
    } else {
        whaleLoop();
        turtleLoop();
        vaquitaLoop();
        mantaLoop();
        sharkLoop();
        otterLoop();
    }
}











// --- Seaweed Animation Logic ---
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

// --- Seaweed Bubble Animation Logic ---
function spawnSeaweedBubbles() {
    const seaweedContainer = document.getElementById('seaweed-container');
    if (!seaweedContainer) return;
    const algues = Array.from(seaweedContainer.getElementsByClassName('seaweed'));
    if (algues.length === 0) return;
    const algae = algues[Math.floor(Math.random() * algues.length)];
    const bubble = document.createElement('div');
    bubble.className = 'seaweed-bubble';
    const algaeRect = algae.getBoundingClientRect();
    const containerRect = seaweedContainer.getBoundingClientRect();
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

// --- Card Zoom and Widget Logic ---
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
          body.innerHTML = animalImg + `
            <h2>Blue Whale (Balaenoptera musculus) 🐋</h2>
            <p><b>Status:</b> Endangered</p>
            <p><b>Location:</b> All major oceans (except the Arctic)</p>
            <p><b>Threats:</b></p>
            <ul style="text-align:left; margin: 0 auto 1em 2em; max-width: 350px;">
              <li>Ship strikes</li>
              <li>Ocean noise pollution (affects communication)</li>
              <li>Climate change and prey availability</li>
            </ul>
          `;
        } else if (idx === 1) { // Turtle card
          animalImg = '<img src="../image/TortueLuth.png" alt="Turtle" class="modal-animal-img">';
          body.innerHTML = animalImg + `
            <h2>Hawksbill Sea Turtle 🐢</h2>
            <p><b>Location:</b> Tropical coral reefs around the world (e.g., Caribbean, Indo-Pacific)</p>
            <p><b>Threats:</b> Illegal trade of their beautiful shell (used for jewelry), Loss of nesting sites, Climate change affecting nesting temperatures and reef health</p>
            <p><b>Interesting Fact:</b> Hawksbills play a crucial role in maintaining the health of coral reefs by eating sponges.</p>
          `;
        } else if (idx === 2) {
          animalImg = '<img src="../image/Vaquita.png" alt="Vaquita" class="modal-animal-img">';
          body.innerHTML = animalImg + `
            <h2>Vaquita (Phocoena sinus) 🐬 </h2>
            <p><b>Status:</b> Critically Endangered</p>
            <p><b>Location:</b> Northern part of the Gulf of California, Mexico</p>
            <p><b>Population:</b> Fewer than 10 individuals remaining</p>
            <p><b>Threats:</b></p>
            <ul style="text-align:left; margin: 0 auto 1em 2em; max-width: 350px;">
              <li>Accidental entanglement in illegal gillnets (esp. for totoaba fish)</li>
              <li>Habitat degradation</li>
            </ul>
            <p><b>Interesting Fact:</b> The vaquita is the smallest cetacean in the world and was only discovered in 1958.</p>
          `;
        } else if (idx === 3) {
          animalImg = '<img src="../image/Manta Ray.png" alt="Manta Ray" class="modal-animal-img">';
          body.innerHTML = animalImg + `
            <h2>Giant Manta Ray (Mobula birostris) 🐟</h2>
            <p><b>Status:</b> Endangered</p>
            <p><b>Location:</b> Worldwide in tropical and subtropical oceans</p>
            <p><b>Threats:</b></p>
            <ul style="text-align:left; margin: 0 auto 1em 2em; max-width: 350px;">
              <li>Targeted and bycatch fishing (gill plates used in traditional Chinese medicine)</li>
              <li>Pollution and microplastics</li>
              <li>Boat strikes</li>
            </ul>
            <p><b>Interesting Fact:</b> They are among the largest rays, with a wingspan that can reach up to 7 meters (23 feet), and are incredibly intelligent.</p>
          `;
        } else if (idx === 4) {
          animalImg = '<img src="../image/Shark.png" alt="Hammerhead Shark" class="modal-animal-img">';
          body.innerHTML = animalImg + `
            <h2>Scalloped Hammerhead Shark (Sphyrna lewini) 🦈</h2>
            <p><b>Status:</b> Critically Endangered</p>
            <p><b>Location:</b> Coastal warm temperate and tropical seas worldwide</p>
            <p><b>Threats:</b></p>
            <ul style="text-align:left; margin: 0 auto 1em 2em; max-width: 350px;">
              <li>Overfishing for their fins (shark fin soup trade)</li>
              <li>Bycatch</li>
              <li>Habitat loss (especially mangroves for juveniles)</li>
            </ul>
            <p><b>Interesting Fact:</b> Their wide, flattened head (cephalofoil) gives them excellent 360-degree vision.</p>
          `;
        } else if (idx === 5) {
          animalImg = '<img src="../image/Otter.png" alt="Southern Sea Otter" class="modal-animal-img">';
          body.innerHTML = animalImg + `
            <h2>Southern Sea Otter (Enhydra lutris nereis) 🦦</h2>
            <p><b>Status:</b> Endangered (subspecies)</p>
            <p><b>Location:</b> Coastal waters of California, USA</p>
            <p><b>Threats:</b></p>
            <ul style="text-align:left; margin: 0 auto 1em 2em; max-width: 350px;">
              <li>Oil spills</li>
              <li>Fishing gear entanglement</li>
              <li>Disease (e.g., toxoplasmosis from land runoff)</li>
            </ul>
            <p><b>Interesting Fact:</b> Sea otters use tools (like rocks) to crack open shellfish — one of the few non-human animals that do!</p>
          `;
        } else {
          body.innerHTML = animalImg + (backContent ? backContent.innerHTML : '');
        }
        modal.style.display = 'flex';
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
});