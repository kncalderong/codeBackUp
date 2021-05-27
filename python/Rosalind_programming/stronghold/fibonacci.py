n = int(input('enter the month: '))
k = int(input ('enter the number of litter pairs per couple of rabbits: '))


m=[1,1]

if n == 1 or n == 2:
    total = 1
else:
    for num in range(2,n):
        print('month:',num)
#!creo una lista para almacenar los datos de hasta dos iteraciones anteriores
        total = (m[num-2]+(k*(m[num-1])))
        m.append(total)

## crear dictionario en cada iteracion almacenando el m.number
print(m)
print(total)
