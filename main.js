const pianoKeys = document.querySelectorAll(".piano-keys .key");
volumeSlider = document.querySelector(".volume-slider input");
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [];

let audio = new Audio("tunes/a.wav");


const playTune = (letter) => {
    audio.src = `tunes/${letter}.wav`
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${letter}"]`);
    clickedKey.classList.add("active")
    setTimeout(() => {
        clickedKey.classList.remove("active")
    }, 150);
}


pianoKeys.forEach(letter => {
    allKeys.push(letter.dataset.key)
    letter.addEventListener("click", () => playTune(letter.dataset.key))
})


document.addEventListener("keydown", (e) => {
    if (allKeys.includes(e.key)) {
        playTune(e.key)
    }
})

volumeSlider.addEventListener("input", (e) => {
    audio.volume = e.target.value;
})

keysCheckbox.addEventListener("click", (e) => {
    pianoKeys.forEach(element => {
        element.classList.toggle("hide");
    });
})