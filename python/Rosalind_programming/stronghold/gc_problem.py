#Given: At most 10 DNA strings in FASTA format (of length at most 1 kbp each).
#Return: The ID of the string having the highest GC-content, followed by the GC-""
#content of that string. Rosalind allows for a default error of 0.001 in all decimal
#answers unless otherwise stated; please see the note on absolute error below.

name = input('please enter the name of your FASTA file:')
if len(name) < 1 : name = 'example_gc.fasta'
hand = open(name, 'r')

#!save the file in a list type
seqs=list()
for line in hand:
    line = line.rstrip()
    seqs.append(line)
##print(seqs)

#!get each one of the fastas
name_seq=""
each_seq= dict()
id=list()

for line in seqs:
    if ">" in line:
        name_seq=line
        id.append(line)
        each_seq[name_seq]=[]
        continue
    else:
        each_seq[name_seq].append(line)
        continue

##print(id)
##print(each_seq)

#!Parse each fasta

bigseqgc=dict()

for a in id:
    counts=dict()
    num_nt=0

    for b in each_seq[a]:
        for nt in b:
            counts[nt]=counts.get(nt,0)+1
            num_nt=num_nt+1

    sumgc=((int(counts['G'])+int(counts['C']))/num_nt)
    bigseqgc[a]=sumgc

    ##print(counts)
    ##print(sumgc)
    ##print(num_nt)

print('this is the final dictionary:', bigseqgc)
maximum=max(bigseqgc, key=bigseqgc.get)
print(maximum)
print(bigseqgc[maximum])
