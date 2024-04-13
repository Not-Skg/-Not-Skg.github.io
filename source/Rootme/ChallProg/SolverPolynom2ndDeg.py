import socket 
import math 
#TCP CONNX
HOST = 'challenge01.root-me.org'  # Hostname
PORT = 52018       		  # Port du serveur

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect((HOST, PORT))


def solve(poly):
    poly = poly.split(" ")
    coef = []
    for i in range(len(poly)):
        terme = poly[i]
        if terme != "-" and terme != "+" and terme != "=" and  terme != '':
            sign = 1
            if i > 0 and poly[i - 1] == "-":
                sign = -1
            elif i > 0 and poly[i - 1] == "+":
                sign = 1
            elif i > 0 and poly[i - 1] == "=":
                sign = 1 
            if terme.find(".") != -1:
            	terme = terme[:terme.find(".")] 
            coef.append(sign * int(terme))
    a,b,c,d = coef[0], coef[1], coef[2], coef[3]
    c = c-d
    discri = (b**2) - (4*a*c)
    sqrt_val = math.sqrt(abs(discri))
    if discri < 0:
	    result = "Not possible"

    if discri == 0:
	    result = "x: " + str(round((-b / (2 * a)),3))
    if discri > 0:
    	    x1, x2 = round((-b - sqrt_val)/(2 * a),3), round((-b + sqrt_val)/(2 * a),3) 
    	    x1, x2 = "{:.3f}".format(x1), "{:.3f}".format(x2)
    	    result = "x1: " +x1 + " ; x2: " + x2
    return result	
	


for i in range(25):

	response = sock.recv(1000).decode()
	print(response)
	start_marker = "Solve this equation please:"
	end_marker = "\n?>"

	start_index = response.find(start_marker)
	end_index = response.find(end_marker, start_index + len(start_marker))


	equation = response[start_index + len(start_marker):end_index]
	equation_solved = solve(equation)
	print("Equation solved:", equation_solved)

	sock.send((str(equation_solved) + "\n").encode())

response = sock.recv(1000).decode()
print(response)
