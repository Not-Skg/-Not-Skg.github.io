def InvModul(a,m):
#Fonction qui renvoi 'b', l'inverse de 'a' module 'b' tel que a * b ≡ 1 mod m
	a = a%m
	for i in range(m):
		if (a*i)%m ==1:
			return i
		elif i ==m -1:
			return "Null"
		else:
			continue

print(InvModul(3, 13))
