handle = input('Please enter the file name:')
if len(handle) < 1: handle = "test.txt"
file = open(handle)
import re

numlist=list()
for line in file:
    line = line.rstrip()
    #print(line)

    hit = re.findall('[0-9]+',line)
    if len(hit) < 1 : continue

    for num in hit:
        x = int(num)
        #print(x)
        numlist.append(x)

#print(numlist)
print('the sum of all the numbers founded in this file is:', sum(numlist))
