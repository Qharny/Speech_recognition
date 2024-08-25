const element = document.getElementById('text');
const startButton = document.getElementById('startButton');

if (!('SpeechRecognition' in window) && !('webkitSpeechRecognition' in window)) {
    alert("Sorry, your browser doesn't support speech recognition. Try Chrome or Edge.");
    startButton.disabled = true;
} else {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.lang = "en-GB";
    recognition.continuous = true;

    startButton.addEventListener('click', () => {
        element.textContent = "Listening...";
        recognition.start();
    });

    recognition.onresult = (event) => {
        const lastResult = event.results[event.results.length - 1];
        element.textContent = lastResult[0].transcript;
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        element.textContent = "Error: " + event.error;
    };

    recognition.onend = () => {
        console.log('Speech recognition ended');
        element.textContent += " (Finished)";
    };
}