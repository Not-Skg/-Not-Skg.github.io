from pwn import xor
string = "label"
xored = xor(string.encode(),13)
print(xored)
