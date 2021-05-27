nums = list()

while True:
    value = input ("enter the number:")
    if value == "done":
        break
    try:
        fvalue=int(value)
    except:
        print('Invalid input')
        continue

    fvalue = fvalue-442

    if fvalue in nums:
        print('num already exist...')
        continue

    nums.append(fvalue)

print(nums)
