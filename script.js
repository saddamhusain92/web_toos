// Text Manipulation Functions
function convertToUppercase() {
    const inputText = document.getElementById('inputText').value;
    document.getElementById('outputText').innerText = inputText.toUpperCase();
}

function convertToLowercase() {
    const inputText = document.getElementById('inputText').value;
    document.getElementById('outputText').innerText = inputText.toLowerCase();
}
function capitalizeText() {
    const inputText = document.getElementById('inputText').value;
    const capitalizedText = inputText
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    document.getElementById('outputText').innerText = capitalizedText;
}

function reverseText() {
    const inputText = document.getElementById('inputText').value;
    document.getElementById('outputText').innerText = inputText.split('').reverse().join('');
}

function countWords() {
    const inputText = document.getElementById('inputText').value;
    const words = inputText.split(/\s+/).filter(word => word.length > 0);
    document.getElementById('outputText').innerText = `Word Count: ${words.length}`;
}

function countCharacters() {
    const inputText = document.getElementById('inputText').value;
    document.getElementById('outputText').innerText = `Character Count: ${inputText.length}`;
}

function removeSpaces() {
    const inputText = document.getElementById('inputText').value;
    document.getElementById('outputText').innerText = inputText.replace(/\s+/g, '');
}

// Utility Functions
function copyOutput() {
    const outputText = document.getElementById('outputText').innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Output copied to clipboard!');
    });
}

function clearText() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').innerText = '';
}
