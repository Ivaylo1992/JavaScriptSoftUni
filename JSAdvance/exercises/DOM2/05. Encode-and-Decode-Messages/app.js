function encodeAndDecodeMessages() {
    const [encodeArea, decodeArea] = document.querySelectorAll('div#container div textarea');
    const [encodeButton, decodeButton] = document.querySelectorAll('button');
        
    encodeButton.addEventListener('click', encodeMessage);
    decodeButton.addEventListener('click', decodeMessage);


    function encodeMessage () {
        let encodedMessage = '';

        for (const char of encodeArea.value) {
            encodedMessage += String.fromCharCode(char.charCodeAt() + 1)
        }

        encodeArea.value = ''

        decodeArea.value = encodedMessage
    }
    
    function decodeMessage () {
        let decodeMessage = '';

        for (let char of decodeArea.value) {
            decodeMessage += String.fromCharCode(char.charCodeAt() - 1);
        }

        decodeArea.value = decodeMessage
    }
}
