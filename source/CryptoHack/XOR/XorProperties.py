from pwn import xor

A = bytes.fromhex("a6c8b6733c9b22de7bc0253266a3867df55acde8635e19c73313")
BA = bytes.fromhex("37dcb292030faa90d07eec17e3b1c6d8daf94c35d4c9191a5e1e") # = B^A
BC = bytes.fromhex("c1545756687e7573db23aa1c3452a098b71a7fbf0fddddde5fc1") # = B^C
FlagACB = bytes.fromhex("04ee9855208a2cd59091d04767ae47963170d1660df7f56f5faf")  # = Flag^A^C^B

# Donc A^B^A = B
# De même B^B^C = C


print("[-] A: ",A)
B =  xor(A,BA)
print("[-] B :",B)

C = xor(B,BC)
print("[-] C :",C)

Flag = xor(xor(FlagACB,A),xor(B,C))
print("[-] Flag :",Flag)
