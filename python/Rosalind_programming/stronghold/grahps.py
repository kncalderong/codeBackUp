###! open file and read the FASTA

name = input('Please enter the name of FASTA file: ')
if len(name) < 1: name = "graphs_sample.fasta"

try:
    with open(name, "r") as data:
        d = data.read().splitlines()
except:
    print('sorry, name of FASTA not found')
    quit()

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

each_seq, id_fa = getfastas(d)

for k,v in each_seq.items():
    print(k,v)

###! Select each sequence end and compare each sequence start

o = input('please enter the overlap size: ')
try:
    o=int(o)
except:
    print('sorry, overlap size request is not a number..')
    quit()

result=[]

for id,seq in each_seq.items():
    end = seq[-o:]
    #print(end)
    for idd,seqq in each_seq.items():
        start=seqq[:o]
        #print(start)
        if seqq == seq:
            continue
        elif end == start:
            if (idd,id) in result:
                continue
            else:
                result.append([id,idd])
                print('Match!:',id,idd)

for i in result:
    print(str((i[0]).lstrip('>')),str((i[1]).lstrip('>')))
