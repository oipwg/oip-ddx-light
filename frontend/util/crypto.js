import CryptoJS from 'crypto-js'

export function decrypt (encryptedMnemonic, password) {
    try {
        const decrypted = CryptoJS.AES.decrypt(encryptedMnemonic, password)
        const plaintext = decrypted.toString(CryptoJS.enc.Utf8)

        return plaintext
    } catch (error) {
        return console.log('Decrypt Failed', error)
    }
}

export function encrypt (mnemonic, password) {
    const encrypted = CryptoJS.AES.encrypt(mnemonic, password).toString()

    return encrypted
}
