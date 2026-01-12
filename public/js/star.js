// Star-er shadharon sankhya (proti layer-e koto gulo tara thakbe)
const STARS = 700; // Choto tara
const MEDIUM_STARS = 200; // Majhari tara
const BIG_STARS = 100; // Boro tara

// Ekta function ja random tarader box-shadow values toiri korbe
function generateBoxShadows(numberOfStars) {
    let shadowValue = '';
    for (let i = 0; i < numberOfStars; i++) {
        // Random x, y position (0 theke 2000 pixel-er modhye)
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);

        // Comma diye alada kore box-shadow values jora hoche
        shadowValue += `${x}px ${y}px #FFF${i === numberOfStars - 1 ? '' : ','}`;
    }
    return shadowValue;
}

// Protiti star layer-er jonno box-shadow generate ebong set kora
document.getElementById('stars').style.boxShadow = generateBoxShadows(STARS);
document.getElementById('stars2').style.boxShadow = generateBoxShadows(MEDIUM_STARS);
document.getElementById('stars3').style.boxShadow = generateBoxShadows(BIG_STARS);