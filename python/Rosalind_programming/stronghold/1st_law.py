k = int(input('number of organisms homozygous dominant: '))
m = int(input('number of organisms heterozygous: '))
n = int(input('number of organisms homozygous recessive: '))

total = k + m + n

prob = ((k/total)*((k-1)/(total-1)))+((k/total)*((m)/(total-1)))+((k/total)*((n)/(total-1)))+((m/total)*((k)/(total-1)))+(((m/total)*((m-1)/(total-1)))*0.75)+(((m/total)*((n)/(total-1)))*0.5)+((n/total)*((k)/(total-1)))+(((n/total)*((m)/(total-1)))*0.5)

print(prob)
