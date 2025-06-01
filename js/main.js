// Change the color of the background based on the position on the page
document.addEventListener('scroll', function () {
    // Get scroll position and document height
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    // Calculate scroll percentage (0 at top, 1 at bottom)
    let percent = docHeight > 0 ? scrollTop / docHeight : 0;
    percent = Math.max(0, Math.min(1, percent));
    // Interpolate between two colors (light blue to dark blue)
    // Light: rgb(173,216,230), Dark: rgb(10,30,60)
    const r = Math.round(173 + (10 - 173) * percent);
    const g = Math.round(216 + (30 - 216) * percent);
    const b = Math.round(230 + (60 - 230) * percent);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
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


