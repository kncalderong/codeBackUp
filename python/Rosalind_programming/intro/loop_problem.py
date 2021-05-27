a = int(input('please enter a: '))
b = int(input('please enter b: '))

total=list()

for i in range(a, b+1):
    ##print(i)
    if (i%2==0):
        continue
        ##print('par')

    else:
        total.append(i)
        #print('inpar')

print('sum of odd numbers of the range: ', sum(total))
