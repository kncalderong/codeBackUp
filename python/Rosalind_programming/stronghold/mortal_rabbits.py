n = int(input('enter the month: '))
m = int(input('please enter the estimated life time (months): '))
k = int(1)

rec = [1,1]

if n == 1 or n == 2 or m == 2:
    total = 1
elif m == 1:
    total = 1

for num in range(2,m):
    total = (rec[num-2]+(k*(rec[num-1])))
    rec.append(total)
print('rec without dying:',rec)

for num in range (m,n):
    temp = 0
    for quad in range (2,m+1):
        print(quad)
        temp = temp + (rec[num-quad])

    total =temp
    rec.append(total)

print('.....')
print(rec)
print(total)
