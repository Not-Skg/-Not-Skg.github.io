import socket 
import base64
import difflib



#dict
MORSE_CODE_DICT = { 'a':'.-', 'b':'-...',
                    'c':'-.-.', 'd':'-..', 'e':'.',
                    'f':'..-.', 'g':'--.', 'h':'....',
                    'i':'..', 'j':'.---', 'k':'-.-',
                    'l':'.-..', 'm':'--', 'n':'-.',
                    'o':'---', 'p':'.--.', 'q':'--.-',
                    'r':'.-.', 's':'...', 't':'-',
                    'u':'..-', 'v':'...-', 'w':'.--',
                    'x':'-..-', 'y':'-.--', 'z':'--..',
                    '1':'.----', '2':'..---', '3':'...--',
                    '4':'....-', '5':'.....', '6':'-....',
                    '7':'--...', '8':'---..', '9':'----.',
                    '0':'-----', ', ':'--..--', '.':'.-.-.-',
                    '?':'..--..', '/':'-..-.', '-':'-....-',
                    '(':'-.--.', ')':'-.--.-'}


#decoder le morse
def morse(st):
    result = []
    st = st.split('/')
    for code in st:
        for dic in MORSE_CODE_DICT.items():
            if code == dic[1]:
                result.append(dic[0])
    return ''.join(result)



            
#Tester tous les types de décodage que je connais
def decode(st):
    result = []
    try:
        result.append(base64.b64decode(st).decode('UTF-8')) #--> base64
    except:
        pass
    try:
    	result.append(bytes.fromhex(st).decode('UTF-8'))  #--> Hexa
    except:
        pass
    try:
        result.append(base64.b85decode(st).decode('UTF-8')) # --> base 85
    except:
        pass
    try:
        result.append(morse(st))  #  --> Morse
    except:
        pass
    try:
        result.append(base64.b32decode(st).decode('UTF-8')) # --> base 32
    except:
        pass
    
    for i in result:
    	if i != "":
    		return i



#TCP CONNX
HOST = 'challenge01.root-me.org'  # Hostname
PORT = 52017        		  # Port du serveur

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect((HOST, PORT))


for i in range(100):

	response = sock.recv(1000).decode()
	print(response)
	
	start_marker = "Decode this please: '"
	end_marker = "'\n?>"

	start_index = response.find(start_marker)
	end_index = response.find(end_marker, start_index + len(start_marker))

	if start_index != -1 and end_index != -1:
	    encoded_data = response[start_index + len(start_marker):end_index]
	    print("Encoded data:", encoded_data)

	decoded_data = decode(encoded_data)
	print("Decoded data:",decoded_data)

	sock.send((str(decoded_data) + "\n").encode())

response = sock.recv(1000).decode()
print(response)
