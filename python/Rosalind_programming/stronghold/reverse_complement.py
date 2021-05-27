s=input('please enter your DNA sequence:')

comp=list()

for nt in s:
    if nt == 'A':
        comp.append('T')
    elif nt == 'T':
        comp.append('A')
    elif nt == 'C':
        comp.append('G')
    elif nt == 'G':
        comp.append('C')

st_comp=""

#! because I want to form the reverse.. I've to use the .reverse() method in the list
comp.reverse()
print('comp: ', st_comp.join(comp))
