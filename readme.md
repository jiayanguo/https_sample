## About
This is a sample which tells you how to build ssl server
1. java folder contains the way how to build ssl server using java and spring.
2. nodejs folder contains the way how to build ssl server using nodejs and express.

## More
Instead of self signed certificate. We can create our own CA signed Certificate. 
Note, it requires to import CA public key to our truststore in this case.

### steps
* generate ca private key. (Need a password)

  `openssl genrsa -aes256 -out CAPrivate.key 2048`
  
* generate CA public key. Use password created before (Need to import this public key to client truststore to establish trust).

  `openssl req -new -x509 -key CAPrivate.key -sha256  -days 3650 -out FakeCA.pem`

* Generate a private key for sever. Need a password as well.
    
    `openssl genrsa -aes256 -out www.fakesite.key 2048`
    
* generate a certificate signing request

    `openssl req -new -key www.fakesite.key -out www.fakesite.csr`
    
* sign the csr
   
   `openssl x509 -req -in www.fakesite.csr -CA FakeCA.pem -CAkey CAPrivate.key -CAcreateserial -out www.fackesite.crt -days 365 -sha256`
* Now you should have signed crt.
  
   ```aidl
  CAPrivate.key
  FakeCA.pem
  FakeCA.srl
  www.fackesite.crt
  www.fakesite.csr
  www.fakesite.key
   ``` 
   
## Reference
* http://www.steves-internet-guide.com/ssl-certificates-explained/
* https://www.youtube.com/watch?v=iQsKdtjwtYI
* https://www.linkedin.com/learning/learning-ssl-tls/hashing-and-digital-signatures
