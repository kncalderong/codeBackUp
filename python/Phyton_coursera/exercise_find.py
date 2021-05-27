text = "X-DSPAM-Confidence:    0.8475";
inicio = text.find(":")

final = len(text)

num = text[inicio+5 : final]
fnum= float(num)
print(fnum)
