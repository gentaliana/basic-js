const CustomError = require('../extensions/custom-error');

class VigenereCipheringMachine {
  constructor(isMod = true) {
    this.isMod = isMod;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    return this.crypt(message, key, 'encrypt');
  }
  decrypt(message, key) {
    return this.crypt(message, key, 'decrypt');
  }
  crypt(message, key, mode) {
    if (message && key) {
      const result = [];
      const newMessage = message.toUpperCase();
      const newKey = key.toUpperCase();
      let keyIndex = 0;

      for (let i = 0; i < newMessage.length; i++) {
        if (newMessage[i] >= 'A' && newMessage[i] <= 'Z') {
          let charIndex = 0;
          if (mode === 'encrypt') {
            charIndex =
              (this.alphabet.indexOf(newMessage[i]) + this.alphabet.indexOf(newKey[keyIndex])) % this.alphabet.length;
          } else {
            charIndex =
              (this.alphabet.indexOf(newMessage[i]) + this.alphabet.length - this.alphabet.indexOf(newKey[keyIndex])) %
              this.alphabet.length;
          }
          result.push(this.alphabet[charIndex]);
          keyIndex++;
          if (keyIndex === newKey.length) {
            keyIndex = 0;
          }
        } else {
          result.push(newMessage[i]);
        }
      }
      if (!this.isMod) {
        return result.reverse().join('');
      }
      return result.join('');
    } else {
      throw new Error('error');
    }
  }
}

module.exports = VigenereCipheringMachine;
