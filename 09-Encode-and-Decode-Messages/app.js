function encodeAndDecodeMessages() {
    const buttons = document.querySelectorAll('button');
    const inputs = document.querySelectorAll('textarea');

    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode() {
        let encodedText = '';
        let text = inputs[0].value;
        for (let ch = 0; ch < text.length; ch++) {
            encodedText += String.fromCharCode(text.charCodeAt(ch) + 1)
        }
        inputs[1].value = encodedText;
        inputs[0].value = '';
    }

    function decode() {
        let decodedText = '';
        let text = inputs[1].value;
        for (let ch = 0; ch < text.length; ch++) {
            decodedText += String.fromCharCode(text.charCodeAt(ch) - 1)
        }
        inputs[0].value = decodedText;
        inputs[1].value = '';
    }
}