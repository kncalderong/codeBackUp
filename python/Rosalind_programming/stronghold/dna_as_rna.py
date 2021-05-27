dna=input('please enter your DNA sequence: ')

rna=list()

#!string to print a list as a string after..
string=""


for nt in dna:
    if nt == 'T':
        rna.append('U')
    else:
        rna.append(nt)

print('dna:',dna)

#!with .join() I can print a list as a string:
print('rna:', string.join(rna))
