fname = input("Enter file name: ")
fh = open(fname)

lst = list()

for line in fh:
    line = line.rstrip()
    stuff = line.split()
    for word in stuff:
        if len(lst) == 0:
            lst.append(word)
        elif word in lst:
            continue
        else:
            lst.append(word)
lst.sort()
print(lst)
