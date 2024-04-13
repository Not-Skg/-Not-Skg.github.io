import socket 
import re
import codecs

host = "challenge01.root-me.org"
port = 52021

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM) #crée un objet socket configuré pour utiliser IPv4 et TCP
client.connect((host, port))
reponse = client.recv(1024).decode("utf-8")
print(reponse)

match = re.search(r"my string is '(.*?)'\. What is your answer", reponse)

if match:
    string = match.group(1)
    print(string)
    string = codecs.decode(string, 'rot_13')
else:
    print("Aucune correspondance trouvée.")

print(string)


client.send((str(string) + "\n").encode())
mdp = client.recv(1024).decode("utf-8")
print(mdp)
