import requests

cookies = {'PHPSESSID': 'f2a9eecb6bf9c1fcaba06cd09a0bc6e8', '_ga_SRYSKX09J7':'GS1.1.1709564158.12.1.1709564344.0.0.0', '_ga':'GA1.1.343325900.1708022507'}

page = requests.get("http://challenge01.root-me.org/programmation/ch1/", cookies=cookies)
rep = page.text
rep = rep[rep.find("U<sub>n+1</sub> =")+len("U<sub>n+1</sub> = "):rep.find("</sub><br /><br />")]
print(rep)

a = rep[1 : rep.find("+ U<sub>n</sub>")]
b = rep[rep.find("[ n * ") + len("[ n * ") : rep.find(" ]<br />")]

u0 = rep[rep.find("U<sub>0</sub> = ") + len("U<sub>0</sub> = ") : rep.find("<br />You")]
q = rep[rep.find("<br />You must find U<sub>") + len("<br />You must find U<sub>"):]

a,b,u0,q = int(a), int(b), int(u0), int(q)

print("a =", a,"\n" "b =", b,"\n","u0 =", u0,"\n","on veut :", q,"\n")


u = u0
for i in range(int(q)):
	u = (a + u) + (i *b)
print(u)

reponse = requests.get("http://challenge01.root-me.org/programmation/ch1/ep1_v.php?result=" + str(u), cookies=cookies)
print(reponse.text[:200])

