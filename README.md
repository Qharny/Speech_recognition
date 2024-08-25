# Speech Recognition Web App

This is a simple web application that uses the Web Speech API to perform speech recognition. It allows users to convert their speech into text in real-time.

## Features

- Real-time speech-to-text conversion
- Support for English language (can be easily modified for other languages)
- Simple and intuitive user interface
- Error handling and feedback

## Getting Started

### Prerequisites

- A modern web browser that supports the Web Speech API (e.g., Chrome, Edge)
- A working microphone

### Installation

1. Clone this repository or download the files:
   - index.html
   - script.js

2. Ensure both files are in the same directory.

### Usage

1. Open the `index.html` file in a web browser.
2. Click the "Start Recognition" button.
3. Allow the browser to access your microphone if prompted.
4. Start speaking. Your speech will be converted to text and displayed on the screen.

## Technical Details

- The app uses the Web Speech API's `SpeechRecognition` interface.
- Speech recognition is set to continuous mode, allowing for uninterrupted speech input.
- The app is currently set to recognize English (GB). This can be changed in the script.js file.

## Customization

- To change the recognition language, modify the `recognition.lang` value in script.js.
- The UI can be further customized by modifying the CSS in the `<style>` section of index.html.

## Troubleshooting

- Ensure you're using a compatible browser.
- Check that your microphone is working and that you've granted the necessary permissions.
- If you encounter issues, check the browser's console for error messages.

## Limitations

- The Web Speech API may not be supported in all browsers.
- Recognition accuracy may vary depending on factors such as audio quality, accent, and background noise.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- This project uses the Web Speech API, which is developed and maintained by the W3C.