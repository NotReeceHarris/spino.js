 <div align="center">
  <p></p>
  <img src="https://github.com/NotReeceHarris/spino.js/blob/main/spino-logo.png?raw=true" width="40%"/>
  <p></p>
</div>

<h2 align="center">
  <img src="https://img.shields.io/npm/v/spino.js?style=for-the-badge&amp;labelColor=%23313531&amp;color=%23f1e845" alt="npm">
  <img src="https://img.shields.io/github/license/notreeceharris/spino.js?style=for-the-badge&amp;labelColor=%23313531&amp;color=%23f1e845" alt="GitHub">
  <a href="#supported-algorithms"><img src="https://img.shields.io/badge/supported_algorithms-30-we?style=for-the-badge&amp;labelColor=%23313531&amp;color=%23f1e845" alt="Static Badge"></a>
  <br>
  <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/471ef670bb0f49a485cc5fc8f2690ee0?style=for-the-badge&label=Codacy%20score&labelColor=%23313531&color=%23f1e845">
  <img alt="GitHub Workflow Status (with event)" src="https://img.shields.io/github/actions/workflow/status/NotReeceHarris/spino.js/github-code-scanning%2Fcodeql?style=for-the-badge&label=CodeQL&labelColor=%23313531&color=%23f1e845">
  <p> </p>
</h2>

<br>
<p>Harnessing the power of <a href="https://nodejs.org/api/crypto.html">crypto</a> and <a href="https://github.com/tugrul/cryptian">cryptian</a> to provide a user-friendly framework. With support for a diverse range of algorithms and industry compliances, it makes encrypting your data straightforward and secure.</p>

##

```py
# Install module package
npm i spino.js@latest

# Require the package
const spinojs = require('spino.js')
```
## Key Features

- `🔒` **Assured Security**: Prioritizing your data's safety. 
- `🧂` **Innovative Salting Algorithm**: Easy and effective protection. [[wiki](https://github.com/NotReeceHarris/spino.js/wiki/salting)]
- `✅` **Industry-Compliant Algorithms**: Meeting regulatory standards. 
- `🏎` **Fast and Easy Implementation**: Swift integration. 
- `👐` **Open-Source**: Collaborative and transparent development.
- `🥣` **Algorithm mixing**: SImple way to mix algorithms.
- `🕷` **Vulnerability Monitoring**: Continuous code scrutiny. 


## Supported Algorithms

Name | Syntax | Wiki
--- | --- | ---
aes-cbc | `spinojs.aes.cbc()` | [/wiki/AES#cbc](https://github.com/NotReeceHarris/spino.js/wiki/AES#cbc)
aes-gcm | `spinojs.aes.gcm()` | [/wiki/AES#gcm](https://github.com/NotReeceHarris/spino.js/wiki/AES#gcm)
aes-ofb | `spinojs.aes.ofb()` | [/wiki/AES#ofb](https://github.com/NotReeceHarris/spino.js/wiki/AES#ofb)
sha1 | `spinojs.sha.sha1() ` | [/wiki/sha#sha1](https://github.com/NotReeceHarris/spino.js/wiki/sha#sha1)
sha512 | `spinojs.sha.sha512() ` | [/wiki/sha#sha512](https://github.com/NotReeceHarris/spino.js/wiki/sha#sha512)
sha512-256-rsa | `spinojs.sha.sha512_256rsa() ` | [/wiki/sha#sha512_256rsa](https://github.com/NotReeceHarris/spino.js/wiki/sha#sha512_256rsa)

<details>

  <summary>View all...</summary>

  Name | Syntax | Wiki
--- | --- | ---
aes-cbc | `spinojs.aes.cbc()` | [/wiki/AES#cbc](https://github.com/NotReeceHarris/spino.js/wiki/AES#cbc)
aes-cbc-hmac | `spinojs.aes.cbc_hmac()` | [/wiki/AES#cbc_hmac](https://github.com/NotReeceHarris/spino.js/wiki/AES#cbc_hmac)
aes-cfb | `spinojs.aes.cfb()` | [/wiki/AES#cfb](https://github.com/NotReeceHarris/spino.js/wiki/AES#cfb)
aes-cfb1 |  `spinojs.aes.cfb1()` | [/wiki/AES#cfb1](https://github.com/NotReeceHarris/spino.js/wiki/AES#cfb1)
aes-cfb8 | `spinojs.aes.cfb8()` | [/wiki/AES#cfb8](https://github.com/NotReeceHarris/spino.js/wiki/AES#cfb8)
aes-ctr | `spinojs.aes.ctr()` | [/wiki/AES#ctr](https://github.com/NotReeceHarris/spino.js/wiki/AES#cbc)
aes-ecb | `spinojs.aes.ecb()` | [/wiki/AES#ecb](https://github.com/NotReeceHarris/spino.js/wiki/AES#ctr)
aes-gcm | `spinojs.aes.gcm()` | [/wiki/AES#gcm](https://github.com/NotReeceHarris/spino.js/wiki/AES#gcm)
aes-ofb | `spinojs.aes.ofb()` | [/wiki/AES#ofb](https://github.com/NotReeceHarris/spino.js/wiki/AES#ofb)
 | | |
sha1 | `spinojs.sha.sha1() ` | [/wiki/sha#sha1](https://github.com/NotReeceHarris/spino.js/wiki/sha#sha1)
sha1-rsa | `spinojs.sha.sha1rsa() ` | [/wiki/sha#sha1rsa](https://github.com/NotReeceHarris/spino.js/wiki/sha#sha1rsa)
sha244 | `spinojs.sha.sha244() ` | [/wiki/sha#sha244](https://github.com/NotReeceHarris/spino.js/wiki/sha#sha244)
sha244-rsa | `spinojs.sha.sha244rsa() ` | [/wiki/sha#sha244rsa](https://github.com/NotReeceHarris/spino.js/wiki/sha#sha244rsa)
sha256 | `spinojs.sha.sha256() ` | [/wiki/sha#sha256](https://github.com/NotReeceHarris/spino.js/wiki/sha#sha256)
sha256-rsa | `spinojs.sha.sha256rsa() ` | [/wiki/sha#sha256rsa](https://github.com/NotReeceHarris/spino.js/wiki/sha#sha256rsa)
sha3 | `spinojs.sha.sha3() ` | /[wiki/sha#sha3](https://github.com/NotReeceHarris/spino.js/wiki/sha#sha3)
sha3-224 | `spinojs.sha.sha3_224() ` | [/wiki/sha#sha3_224](https://github.com/NotReeceHarris/spino.js/wiki/sha#sha3_224)
sha3-256 | `spinojs.sha.sha3_256() ` | [/wiki/sha#sha3_256](https://github.com/NotReeceHarris/spino.js/wiki/sha#sha3_256)
sha3-384 | `spinojs.sha.sha3_384() ` | [/wiki/sha#sha3_384](https://github.com/NotReeceHarris/spino.js/wiki/sha#sha3_384)
sha3-512 | `spinojs.sha.sha3_512() ` | [/wiki/sha#sha3_512](https://github.com/NotReeceHarris/spino.js/wiki/sha#sha3_512)
sha384 | `spinojs.sha.sha384() ` | [/wiki/sha#sha384](https://github.com/NotReeceHarris/spino.js/wiki/sha#sha384)
sha384-rsa | `spinojs.sha.sha384rsa() ` | [/wiki/sha#sha384rsa](https://github.com/NotReeceHarris/spino.js/wiki/sha#sha384rsa)
sha512 | `spinojs.sha.sha512() ` | [/wiki/sha#sha512](https://github.com/NotReeceHarris/spino.js/wiki/sha#sha512)
sha512-rsa | `spinojs.sha.sha512rsa() ` | [/wiki/sha#sha512rsa](https://github.com/NotReeceHarris/spino.js/wiki/sha#sha512rsa)
sha512-224 | `spinojs.sha.sha512_224() ` | [/wiki/sha#sha512_224](https://github.com/NotReeceHarris/spino.js/wiki/sha#sha512_224)
sha512-224-rsa | `spinojs.sha.sha512_224rsa() ` | [/wiki/sha#sha512_224rsa](https://github.com/NotReeceHarris/spino.js/wiki/sha#sha512_224rsa)
sha512-256 | `spinojs.sha.sha512_256() ` | [/wiki/sha#sha512_256](https://github.com/NotReeceHarris/spino.js/wiki/sha#sha512_256)
sha512-256-rsa | `spinojs.sha.sha512_256rsa() ` | [/wiki/sha#sha512_256rsa](https://github.com/NotReeceHarris/spino.js/wiki/sha#sha512_256rsa)
 | | |
md5 | `spinojs.md5.md5() ` | [/wiki/md5#md5](https://github.com/NotReeceHarris/spino.js/wiki/md5#md5)
md5-sha1 | `spinojs.md5.md5sha1() ` | [/wiki/md5#md5_sha1](https://github.com/NotReeceHarris/spino.js/wiki/md5#md5sha1)



  </details>

## Licensing

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FNotReeceHarris%2Fspino.js.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FNotReeceHarris%2Fspino.js?ref=badge_large)
