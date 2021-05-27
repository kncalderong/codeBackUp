fruit='banana'
count=0
for letters in fruit:
    if letters == 'a':
        count = count + 1
print(count)

if 'a' in fruit:
    print('found it')
