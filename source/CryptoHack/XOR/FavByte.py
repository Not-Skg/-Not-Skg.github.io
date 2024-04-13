encrypted_data = bytes.fromhex("73626960647f6b206821204f21254f7d694f7624662065622127234f726927756d")

Flag = ""

print("Starting the BrutForce")
for byte in range(256):
	decrypted_data = [chr(n^byte) for n in encrypted_data]
	Flag = "".join(decrypted_data)
	print("[-] Occurence N°",byte+1)

	if Flag.startswith("crypto"):
		print("[-] SUCCESS")
		print("[-]  FlAG : ", Flag)
		break

	else :
		print("[-]  FAIL")

