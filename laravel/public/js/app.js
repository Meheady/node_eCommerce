// Star animation
function createStars(selector, numStars) {
    const stars = document.querySelector(selector);
    if (!stars) return;

    let starShadows = "";
    for (let i = 0; i < numStars; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        starShadows += `${x}px ${y}px #FFF, `;
    }
    starShadows = starShadows.slice(0, -2);
    stars.style.boxShadow = starShadows;
}

document.addEventListener('DOMContentLoaded', () => {
    createStars('#stars', 700);
    createStars('#stars2', 200);
    createStars('#stars3', 100);

    // PWA Installation Logic
    let deferredPrompt;
    const installDialog = document.getElementById('install-dialog');
    const installButton = document.getElementById('install-button-dialog');
    const closeButton = document.getElementById('close-button-dialog');

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        if (installDialog) {
            installDialog.style.display = 'flex';
        }
    });

    if(installButton) {
        installButton.addEventListener('click', () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    deferredPrompt = null;
                });
            }
            if (installDialog) {
                installDialog.style.display = 'none';
            }
        });
    }

    if(closeButton) {
        closeButton.addEventListener('click', () => {
            if (installDialog) {
                installDialog.style.display = 'none';
            }
        });
    }

    // VH unit fix
    const setVh = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);
    setVh();
});
