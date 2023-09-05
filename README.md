<div align="center">
  <p></p>
  <img src="https://github.com/NotReeceHarris/spino.js/blob/main/spino-logo.png?raw=true" width="40%"/>
  <p></p>
  <p>Harnessing the power of <a href="https://nodejs.org/api/crypto.html">crypto</a> and <a href="https://github.com/tugrul/cryptian">cryptian</a> to provide a user-friendly framework. With support for a diverse range of algorithms and industry compliances, it makes encrypting your data straightforward and secure.</p>
</div>

<h2 align="center">
  <img src="https://img.shields.io/npm/v/spino.js?style=for-the-badge&amp;labelColor=%23313531&amp;color=%23f1e845" alt="npm">
  <img src="https://img.shields.io/github/license/notreeceharris/spino.js?style=for-the-badge&amp;labelColor=%23313531&amp;color=%23f1e845" alt="GitHub">
  <img alt="GitHub Workflow Status (with event)" src="https://img.shields.io/github/actions/workflow/status/NotReeceHarris/spino.js/github-code-scanning%2Fcodeql?style=for-the-badge&label=CodeQL&labelColor=%23313531&color=%23f1e845">
  <p> </p>
</h2>

```py
# Install module package
npm i spino.js@latest

# Require the package
const spinojs = require('spino.js')
```

## Supported Algorithms

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


## Licensing

 [![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FNotReeceHarris%2Fspino.js.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FNotReeceHarris%2Fspino.js?ref=badge_large)
