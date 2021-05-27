s=input('enter your sequence: ')

counts=dict()

for nt in s:
    counts[nt]=counts.get(nt,0)+1
    ##print(nt)

print(counts['A'],'',counts['C'],'',counts['G'],'',counts['T'])
