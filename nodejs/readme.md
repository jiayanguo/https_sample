## How to generate a cert

 * generate a private key: openssl genrsa -out key.pem
 * generate a certificate signing request: openssl req -new -key key.pem -out csr.pem
 * approve the signing requst:  openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem\n
 * view the content of the cert: openssl x509 -in cert.pem -text -noout

## How to open a self-signed site on chrome.

https://www.andrewconnell.com/blog/updated-creating-and-trusting-self-signed-certs-on-macos-and-chrome/

## Build
npm install

## run
node server.js