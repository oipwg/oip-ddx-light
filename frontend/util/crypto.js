import CryptoJS from 'crypto-js';

export function decrypt(encryptedMnemonic, password) {
    try {
        let decrypted = CryptoJS.AES.decrypt(encryptedMnemonic, password);
        let plaintext = decrypted.toString(CryptoJS.enc.Utf8);

        return plaintext;
    } catch (error) {
        return console.log('Decrypt Failed', error);
    }
}

export function encrypt(mnemonic, password) {
    let encrypted = CryptoJS.AES.encrypt(mnemonic, password).toString();

    return encrypted;
}
