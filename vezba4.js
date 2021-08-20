function rot13(message) {
    alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    upper_alphabet = "abcdefghijklmnopqrstuvwxyz"
    .toUpperCase
    .split("");
    msg = message.split("")
    for (let i = 0; i < msg.length; i++) {
        if (message[i] == message[i].toUpperCase()) {
            inx = upper_alphabet.indexOf(msg[i]);
            ltr = upper_alphabet[inx + 13];
            console.log(ltr)
        } else {
            inx = alphabet.indexOf(msg[i]);
            ltr = alphabet[inx + 13];
            console.log(ltr);
        }
    }
}
rot13("test")