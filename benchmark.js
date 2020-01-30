const Benchmark = require('benchmark')
const run = require('./samples')

const suite = new Benchmark.Suite;
 
// add tests
suite
.add('[crypto] hash (sha1)', function() {
    run.cryptoHash('sha1')
})
.add('[crypto] hash (sha512)', function() {
    run.cryptoHash('sha512')
})
.add('[crypro] Hmac (sha1 with global salt)', function() {
    run.cryptoHmac('sha1')
})
.add('[crypro] Hmac (sha512 with global salt)', function() {
    run.cryptoHmac('sha512')
})
.add('[crypro] Hmac (sha1 with token salt)', function() {
    run.cryptoHmacTokenSalt('sha1')
})
.add('[crypro] Hmac (sha512 with tokent salt)', function() {
    run.cryptoHmacTokenSalt('sha512')
})
.add('[crypro] Hmac (sha1 with hashed salt)', function() {
    run.cryptoHmacHashSalt('sha1')
})
.add('[crypro] Hmac (sha512 with hashed salt)', function() {
    run.cryptoHmacHashSalt('sha512')
})
.add('[crypto] pbkdf2 with global salt', function() {
    run.cryptoPbkdf2('sha512')
})
.add('[crypto] pbkdf2 with hashed salt', function() {
    run.cryptoPbkdf2HashSalt('sha512')
})
.add('[bcrypt] hash with global salt', function() {
    run.bcryptHash()
})
// add listeners
.on('start', function() { 
    console.log('Benchmark started');
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('abort', function() {
  console.log('Benchmark aborted');
})
.on('error', function(error) {
  console.log(error)
})
.on('reset', function() {
  console.log('reset')
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });