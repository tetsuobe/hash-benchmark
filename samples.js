const crypto = require('crypto')
const bcrypt = require('bcrypt')

const token = '123456789012'
const salt = '$2b$10$BR8RufwrXQWEe6uOT0EB8u'

function hashSalt() {
    return crypto.createHash('sha1').update(salt + token).digest('hex')
}

function cryptoHash(algorithm) {
    return crypto.createHash(algorithm).update(token).digest('hex');
}
function cryptoHmac(algorithm) {
    return crypto.createHmac(algorithm, salt).update(token).digest('hex');   
}
function cryptoHmacTokenSalt(algorithm) {
    return crypto.createHmac(algorithm, salt + token).update(token).digest('hex');   
}
function cryptoHmacHashSalt(algorithm) {
    return crypto.createHmac(algorithm, hashSalt()).update(token).digest('hex');   
}
function bcryptHash() {
    return bcrypt.hashSync(token, salt)
}
function cryptoPbkdf2(algorithm) {
    return crypto.pbkdf2Sync(token, salt, 1000, 64, algorithm).toString('hex')
}
function cryptoPbkdf2HashSalt(algorithm) {
    return crypto.pbkdf2Sync(token, hashSalt(), 1000, 64, algorithm).toString('hex')
}

module.exports = {
    cryptoHash,
    cryptoHmac,
    cryptoHmacTokenSalt,
    cryptoHmacHashSalt,
    bcryptHash,
    cryptoPbkdf2,
    cryptoPbkdf2HashSalt
}

console.log(
    "Examples of hashing: \n" +
    "Token: '" + token + "' \n" +
    "Salt '" + salt + "' \n" +
    "Hashed salt '" + hashSalt() + "' \n" +
    "=============================\n" +
    "[crypto] hash (sha1) {length: " + cryptoHash('sha1').length + " chars}: \n" + cryptoHash('sha1') + "\n" +
    "-----------------------------\n" +
    "[crypto] hash (sha512) {length: " + cryptoHash('sha512').length + " chars}: \n" + cryptoHash('sha512') + "\n" +
    "-----------------------------\n" +
    "[crypto] hmac (sha1 with global salt) {length: " + cryptoHmac('sha1').length + " chars}: \n" + cryptoHmac('sha1') + "\n" +
    "-----------------------------\n" +
    "[crypto] hmac (sha512 with global salt) {length: " + cryptoHmac('sha512').length + " chars}: \n" + cryptoHmac('sha512') + "\n" +
    "-----------------------------\n" +
    "[crypto] hmac (sha1 with token salt) {length: " + cryptoHmacTokenSalt('sha1').length + " chars}: \n" + cryptoHmacTokenSalt('sha1') + "\n" +
    "-----------------------------\n" +
    "[crypto] hmac (sha512 with token salt) {length: " + cryptoHmacTokenSalt('sha512').length + " chars}: \n" + cryptoHmacTokenSalt('sha512') + "\n" + 
    "-----------------------------\n" +
    "[crypto] hmac (sha1 with hashed salt) {length: " + cryptoHmacHashSalt('sha1').length + " chars}: \n" + cryptoHmacHashSalt('sha1') + "\n" +
    "-----------------------------\n" +
    "[crypto] hmac (sha512 with hashed salt) {length: " + cryptoHmacHashSalt('sha512').length + " chars}: \n" + cryptoHmacHashSalt('sha512') + "\n" + 
    "-----------------------------\n" +
    "[crypto] pbkdf2 (sha512 with global salt) {length: " + cryptoPbkdf2('sha512').length + " chars}: \n" + cryptoPbkdf2('sha512') + " \n" +
    "-----------------------------\n" +
    "[crypto] pbkdf2 (sha512 with hashed salt) {length: " + cryptoPbkdf2HashSalt('sha512').length + " chars}: \n" + cryptoPbkdf2HashSalt('sha512') + " \n" +
    "-----------------------------\n" +
    "[bcrypt] hash {length: " + bcryptHash().length + " chars}: \n" + bcryptHash() + "\n" + 
    "=============================\n\n"
)