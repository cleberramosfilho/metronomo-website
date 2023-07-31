let isPlaying = false;
let intervalId = null;
const metronomeElement = document.querySelector('.metronome');
const startButton = document.getElementById('startButton');
const ritmoButton = document.getElementById('ritmoButton');
const tempoInput = document.getElementById('tempo');

function tick() {
    if (!isPlaying) return;

    // Simule um ritmo aleatório dentro do valor escolhido
    const ritmo = Math.random() * (tempoInput.value - (tempoInput.value / 2)) + (tempoInput.value / 2);

    // Atualize a representação gráfica (usando CSS transform)
    metronomeElement.style.transform = 'scaleY(2)';
    setTimeout(() => {
        metronomeElement.style.transform = 'scaleY(1)';
    }, ritmo);
}

function toggleMetronome() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        startButton.textContent = 'Parar';
        tick(); // Primeira batida imediata
        intervalId = setInterval(tick, tempoInput.value);
    } else {
        startButton.textContent = 'Iniciar';
        clearInterval(intervalId);
    }
}

startButton.addEventListener('click', toggleMetronome);
