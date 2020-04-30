## How to generate a cert

 * generate a private key: openssl genrsa -out key.pem
 * generate a certificate signing request: openssl req -new -key key.pem -out csr.pem
 * approve the signing requst:  openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem\n
 * view the content of the cert: openssl x509 -in cert.pem -text -noout

## Convert cert to p12 format (the password need at least 6 characters):
openssl pkcs12 -export -in cert.pem -inkey key.pem -name dev -out sample.p12

## Conver p12 to jks format. This is optional if you choose pkcs12 farmat.See example [here](http://zetcode.com/springboot/https/). 
keytool -importkeystore -deststorepass changeit  -destkeystore sample.jks -srckeystore sample.p12 -srcstoretype PKCS12

## view the jks 
keytool -list -keystore sample.jks

## Move jks to resources folder
mv sample.jks demossl/src/main/resources/sample.jks

## build the project
cd demossl && mvn clean install

## Run the server.
java -jar target/demossl-0.0.1-SNAPSHOT.jar

## How to open a self-signed site on chrome.
https://www.andrewconnell.com/blog/updated-creating-and-trusting-self-signed-certs-on-macos-and-chrome/







