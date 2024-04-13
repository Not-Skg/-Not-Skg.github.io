
# Flag = "crypto{string}"
# encrypted_data = Flag ^ key
# So PartialKey = b"crypto{"
# So encrypted_data ^ PartialKey = PartialKey
data = "0e0b213f26041e480b26217f27342e175d0e070a3c5b103e2526217f27342e175d0e077e263451150104"

data_bytes = bytes.fromhex(data)

partial_key = b''
for a, b in zip(data_bytes[:7], "crypto{".encode("utf-8")):
    partial_key += bytes([a ^ b])
    print("[-] PartialKey : ", partial_key)
    print("[-] PartialFlag : ", partial_key.decode("utf-8"))
key = (partial_key.decode("utf-8") + "y").encode("utf-8")
print("[-] Key : ",key)
key += key * int((len(data_bytes) - len(key) / len(key)))

flag = b''
for a, b in zip(data_bytes, key):
    flag += bytes([a ^ b])

print("[-] SUCCESS !!")
print("FLAG : ", flag.decode("utf-8"))
