import socket 
import re
import base64

host = "challenge01.root-me.org"
port = 52023

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 
client.connect((host, port))
reponse = client.recv(1024).decode("utf-8")
print(reponse)

match = re.search(r"my string is '(.*?)'\. What is your answer", reponse)

if match:
    name = match.group(1)
    name = base64.b64decode(name)
    name = name.decode('utf-8')
else:
    print("Aucune correspondance trouvée.")

print(name)

client.send((str(name) + "\n").encode())
mdp = client.recv(1024).decode("utf-8")
print(mdp)
