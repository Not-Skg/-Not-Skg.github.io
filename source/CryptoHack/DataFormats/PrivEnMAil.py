
from Crypto.PublicKey import RSA

f = open('privacy_enchanced_mail.pem','r')
key = RSA.importKey(f.read())
print(key)
