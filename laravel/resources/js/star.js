// Shobgulo star-er jonno shadow toiri korar function
function createStars(selector, numStars) {
    const stars = document.querySelector(selector);
    if (!stars) return;

    // Random position-er jonno string toiri kora
    let starShadows = "";
    for (let i = 0; i < numStars; i++) {
        const x = Math.floor(Math.random() * 2000); // 2000px er modhye random position
        const y = Math.floor(Math.random() * 2000);
        starShadows += `${x}px ${y}px #FFF, `;
    }

    // Sesh comma remove kora
    starShadows = starShadows.slice(0, -2);

    // Shadow gulo style hishebe set kora
    stars.style.boxShadow = starShadows;
}

// DOM load howar por star toiri kora
document.addEventListener('DOMContentLoaded', () => {
    createStars('#stars', 700); // 700ti choto tara
    createStars('#stars2', 200); // 200ti majhari tara
    createStars('#stars3', 100); // 100ti boro tara
});
