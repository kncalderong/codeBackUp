name = input('please enter the name of your FASTA file:')
hand = open(name, 'r')

### dictionary con el código genético
cod = {}

cod['F']=['UUU','UUC']
cod['L']=['UUA','UUG','CUU','CUC','CUA','CUG']
cod['I']=['AUU','AUC','AUA']
cod['M']=['AUG']
cod['V']=['GUU','GUC','GUA','GUG']
cod['S']=['UCU','UCC','UCA','UCG','AGU','AGC']
cod['P']=['CCU','CCC','CCA','CCG']
cod['T']=['ACU','ACC','ACA','ACG']
cod['A']=['GCU','GCC','GCA','GCG']
cod['Y']=['UAU','UAC']
cod['Stop']=['UAA','UAG','UGA']
cod['H']=['CAU','CAC']
cod['Q']=['CAA','CAG']
cod['N']=['AAU','AAC']
cod['K']=['AAA','AAG']
cod['D']=['GAU','GAC']
cod['E']=['GAA','GAG']
cod['C']=['UGU','UGC']
cod['W']=['UGG']
cod['R']=['CGU','CGC','CGA','CGG','AGA','AGG']
cod['G']=['GGU','GGC','GGA','GGG']

### fragmentar la secuencia en codones

str_by3 = list()

for str in hand:
    str = str.rstrip()
    for i in range(0, (len(str)), 3):
        codon = (str[i:(i+3)])
        str_by3.append(codon)
#!print(str_by3)
print(len(str_by3))
### compare each codon to dictionary keys and store the protein

protein=list()

for a in str_by3:
    for k,v in cod.items():
        if a in v:
            if k is 'Stop':
                break
            else:
                protein.append(k)


#!print(protein)
print(len(protein))
result=""
print('Translate: ', result.join(protein))

f = open("translated.txt","w")
f.write(result.join(protein))
f.close()
