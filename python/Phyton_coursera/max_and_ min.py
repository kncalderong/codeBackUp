largest = None
smallest = None

while True:
    num = input("Enter a number: ")
    if num == "done" :
        break
    try:
        fnum = int(num)
    except:
        print('Invalid input')
        continue
    if smallest is None:
        smallest = fnum
    if largest is None:
        largest = fnum
    if fnum < smallest:
        smallest = fnum
    if fnum > largest:
        largest = fnum

print("Maximum is ", largest)
print('Minimum is ', smallest)
