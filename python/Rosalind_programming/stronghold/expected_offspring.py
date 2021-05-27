
##! entry of dates
values = list()
while len(values) < 6:
    entry = int(input('Please enter the number of couples for each genome:'))
    values.append(entry)
print(values)
print( '-----------------')
##! probabilities and genomes
prob = [1,1,1,0.75,0.5,0]

##! math

con = 0
total = 0
for n in values:
    sum = n * prob[con] * 2
    print('n:',n)
    print('con',prob[con])
    con += 1
    total = total + sum

print(total)
