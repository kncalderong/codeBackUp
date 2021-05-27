name = input('please enter the name of your FASTA file: ')
if len(name) < 1: name = 'motif.txt'

hand = open(name, 'r')
lines = hand.readlines()

#! New method to store values {} {}.. and then use it by format()..
#count=0
#for line in lines:
#    count += 1
#    print("line{}: {}".format(count, line.rstrip()))

s = (lines[0].rstrip())
t = (lines[1].rstrip())

#! to find multiple times in the line.. while loop.

index = 0
where = list()

while index < len(s):
    index = s.find(t, index) ## inicia desde donde quedo index, si no es especificada por default es 0.. loop infinito¿?
    if index == -1:
        break
    print(t,'found at:', index+1)
    where.append(index+1)
    index += 1

listToStr = ' '.join(map(str, where)) ## convierte aquellos que no sean strings de la lista, para ser printed by join
print(listToStr)



#####!!!!! ANother great solution, that doesn't requiere find method:

#with open("rosalind_subs.txt","r") as data:
#d = data.read().splitlines()

#dna, myFilter = d[0], d[1]

#for i in range(len(dna)):
#    if myFilter == dna[i:i+len(myFilter)]:
#        print(i+1, end=' ')
