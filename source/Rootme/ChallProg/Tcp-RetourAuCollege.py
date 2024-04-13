import socket 
import math
import re

host = "challenge01.root-me.org"
port = 52002

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM) #crée un objet socket configuré pour utiliser IPv4 et TCP
client.connect((host, port))
reponse = client.recv(1024).decode("utf-8")
print(type(reponse))

nombres = re.findall(r'\d+', reponse)
temps = int(nombres[0]) # on ne l'utilise pas mais c'est bien le premier nombre présent dans la réponse
nombre1 = int(nombres[1])
nombre2 = int(nombres[2])
print("Nombre 1:", nombre1)
print("Nombre 2:", nombre2)


resultat = math.sqrt(nombre1) * nombre2
resultat = round(resultat, 2)
print("Résultat:", str(resultat))

client.send((str(resultat) + "\n").encode())
mdp = client.recv(1024).decode("utf-8")
print(mdp)
