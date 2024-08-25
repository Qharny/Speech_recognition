// let element = document.getElementById('text');

// const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition);

// recognition.lang = "en-GB";
// recognition.continuous = true;

// document.onclick = recognition.start();


// recognition.onresult = (event) => {
//     for (const result of event.result){
//         element.innerHTML = result[0].transcript;
//     }
// }

const element = document.getElementById('text');
const startButton = document.getElementById('startButton');

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.lang = "en-GB";
recognition.continuous = true;

startButton.addEventListener('click', () => {
    recognition.start();
});

recognition.onresult = (event) => {
    const lastResult = event.results[event.results.length - 1];
    element.textContent = lastResult[0].transcript;
};

recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
};

recognition.onend = () => {
    console.log('Speech recognition ended');
};