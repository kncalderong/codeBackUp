s = input('enter your string: ')

words = s.split()
##print(words)

counts=dict()

for word in words:
    counts[word]=counts.get(word, 0) + 1

for k,v in counts.items():
    print(k,v)
