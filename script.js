var confettiActive = true;
var currentThemeIndex = 0;
var currentSentenceIndex = 0;
const backgroundMusic = new Audio('music.mp3');
var isMusicPlaying = false;


window.onload = function() {
    const toggleButton = document.getElementById('toggleConfetti');
    const confettiContainer = document.getElementById('confetti');
    const toggleColorThemeButton = document.getElementById('toggleColorTheme');
    const colorThemes = ['','red-theme', 'blue-theme', 'green-theme'];
    const sentenceContainer = document.getElementById('sentenceContainer');
    const sentences = sentenceContainer.querySelectorAll('.sentence');

    for (var i = 0; i < 20; i++) {
        var confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() + 's';
        confetti.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
        confettiContainer.appendChild(confetti);
    }

    toggleButton.addEventListener('click', function() {
        confettiActive = !confettiActive;
        if (confettiActive) {
            activateConfetti();
        } else {
            deactivateConfetti();
        }
    });

    toggleColorThemeButton.addEventListener('click', function() {
        currentThemeIndex = (currentThemeIndex + 1) % colorThemes.length;
        applyColorTheme(colorThemes[currentThemeIndex]);
    });


    function activateConfetti() {
        confettiContainer.style.display = 'block';
    }

    function deactivateConfetti() {
        confettiContainer.style.display = 'none';
    }

    function applyColorTheme(themeClass) {
        document.body.className = themeClass;
    }

    function showSentence(index) {
        sentences.forEach((sentence, i) => {
            if (i === index) {
                sentence.classList.add('active');
            } else {
                sentence.classList.remove('active');
            }
        });
    }

    document.getElementById('prevSentence').addEventListener('click', function() {
        currentSentenceIndex = (currentSentenceIndex - 1 + sentences.length) % sentences.length;
        showSentence(currentSentenceIndex);
    });

    document.getElementById('nextSentence').addEventListener('click', function() {
        currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
        showSentence(currentSentenceIndex);
    });

    // Show the initial sentence
    showSentence(currentSentenceIndex);

    function toggleBackgroundMusic() {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            isMusicPlaying = false;
        } else {
            backgroundMusic.play();
            isMusicPlaying = true;
        }
    }
    document.getElementById('toggleMusic').addEventListener('click', function() {
        toggleBackgroundMusic();
    });
};
