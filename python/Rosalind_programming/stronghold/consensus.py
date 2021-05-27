
#! Open file and get each fasta in a dictionary

name = input('please enter the FASTA file name: ')
if len(name) < 1: name = "example_consensus.fasta"

try:
    with open(name, "r") as data:
        d = data.read().splitlines()
except:
    print('sorry, name of FASTA not found')
    quit()

############################
    #! function to retrieve each fasta in a dictionary and their respectives IDs in a list

def getfastas(self):

    name_seq = ""
    each_seq = dict()
    id = list()

    for line in self:
        if ">" in line:
            name_seq=line
            id.append(line)
            each_seq[name_seq]=''
            continue
        else:
            each_seq[name_seq]+=line
            continue

    return(each_seq,id)
#############################

    #!handle in this document


each_seq, id_fa = getfastas(d)

#! make a dictionary of lists with postions of length

positions=dict()

for id,seq in each_seq.items():
    for i in range(0, len(seq)):
        if i in positions:
            positions[i].append(seq[i])
        else:
            positions[i]=[]
            positions[i].append(seq[i])
#print(positions)

#! count letters in each list and choose de max value (maybe another function )

consensus=list()
nt_by_pos=dict()

for k,v in positions.items():

    counts=dict()
    counts['A']=0
    counts['C']=0   ### because I need all have counts..
    counts['G']=0
    counts['T']=0
    for nt in v:
        counts[nt]=counts.get(nt,0)+1
    #print('the position parsed is: ', k, 'and the nts are: ', counts)

    nt_by_pos[k] = counts

    maximum=None
    nt_max=None
    for k,v in counts.items():
        if maximum is None:
            maximum = v
            nt_max = k
        elif v > maximum:
            maximum = v
            nt_max = k
    consensus.append(nt_max)

#print(nt_by_pos)
print('Consensus: ', ''.join(map(str,consensus)))

#! organize the info to print an array style..

A = list()
G = list()
C = list()
T = list()

for k,v in nt_by_pos.items():
    for k1,v1 in v.items():
        if k1 is 'A':
            A.append(v1)
        elif k1 is 'G':
            G.append(v1)
        elif k1 is 'C':
            C.append(v1)
        elif k1 is 'T':
            T.append(v1)
print('A: ', *A )
print('C: ', *C )
print('G: ', *G )
print('T: ', *T )
