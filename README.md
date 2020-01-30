# Results on MacBook PRO (2019)

## Examples of hashing: 
Token: `123456789012`

Salt `$2b$10$BR8RufwrXQWEe6uOT0EB8u`

Hashed salt `a7ca99d21e9d4bd95395579bb83e0a4f1d77c7b7`


-----------------------------

[crypto] hash (sha1) {length: 40 chars}:
`8d993ccdf628e26e170a949ee2a3870455dbd8fa`

-----------------------------

[crypto] hash (sha512) {length: 128 chars}:
`50612777426d28fa502f60911fd5485df4c717cbe300d1e348bec83482cf21f96dbe067ee6c736a0f480b7c4e3018408edf6191f308db71c45841c28890308ef`

-----------------------------

[crypto] hmac (sha1 with global salt) {length: 40 chars}:
`c4a879a9d0b71ddc714e127844f49defa021b24b`

-----------------------------

[crypto] hmac (sha512 with global salt) {length: 128 chars}:
`5dea52130e8c5d9c8901f7cb3917f729406ad2c9a247f524ed2a1ef6c96eeb23b0b8585204e5538cae9d798142ef0d6177a7197ea2abac3c3badb5b3dff674c2`

-----------------------------

[crypto] hmac (sha1 with token salt) {length: 40 chars}:
`1b0b5ea325ce797354f318eaffc6f2ff3a410163`

-----------------------------

[crypto] hmac (sha512 with token salt) {length: 128 chars}:
`427bef3997ea8f566d3fad1b7178d02501989884ed9370193a4144d4bfd5860d783cf522615def02cc1d8e39482697afec636a813c3d314ab8bc0b2932037243`

-----------------------------

[crypto] hmac (sha1 with hashed salt) {length: 40 chars}:
`ef837bf9ac4147c3a5f5ba6b065a9798d548d8e6`

-----------------------------

[crypto] hmac (sha512 with hashed salt) {length: 128 chars}:
`def063f1e1bb6192b7bf0a60027603a33e9ee478a64340df2fb829b3a26a6127fcc9314bbb7d275f344be71342f6d3674c33b749c0da842091a14a0d43e51a1d`

-----------------------------

[crypto] pbkdf2 (sha512 with global salt) {length: 128 chars}:
`e8c1c1a15fbbcc0052ffaec91336dd7fb5d1bb21098de11f27aa06482b87aa3ec861b9dafb21d3cdc17d0f8fcdadccb730cb991a3e6dfd4ce0e1a749311450d6`

-----------------------------

[crypto] pbkdf2 (sha512 with hashed salt) {length: 128 chars}: 
`f244fa7dd16754bd3e76f5c15d803474a3ee9e9f1d69902939f8ff966127f5172a7727039ab21dc8052fd97af8c1dd34c8770b47bb460f4c4b1845c6004bde12`

-----------------------------

[bcrypt] hash {length: 60 chars}: 
`$2b$10$BR8RufwrXQWEe6uOT0EB8umVb8EmUSVQqJ4ZuAWaBroN4/PSF6cPK`


## Benchmark results

```shell
Benchmark started
[crypto] hash (sha1) x 458,687 ops/sec ±6.21% (64 runs sampled)
[crypto] hash (sha512) x 399,516 ops/sec ±4.52% (70 runs sampled)
[crypro] Hmac (sha1 with global salt) x 296,142 ops/sec ±2.84% (80 runs sampled)
[crypro] Hmac (sha512 with global salt) x 237,761 ops/sec ±3.50% (81 runs sampled)
[crypro] Hmac (sha1 with token salt) x 283,787 ops/sec ±5.31% (79 runs sampled)
[crypro] Hmac (sha512 with tokent salt) x 242,017 ops/sec ±3.51% (81 runs sampled)
[crypro] Hmac (sha1 with hashed salt) x 168,526 ops/sec ±7.54% (73 runs sampled)
[crypro] Hmac (sha512 with hashed salt) x 151,731 ops/sec ±6.19% (73 runs sampled)
[crypto] pbkdf2 with global salt x 1,440 ops/sec ±0.72% (90 runs sampled)
[crypto] pbkdf2 with hashed salt x 1,439 ops/sec ±0.72% (89 runs sampled)
[bcrypt] hash with global salt x 16.42 ops/sec ±2.85% (44 runs sampled)
Fastest is [crypto] hash (sha1)
```
