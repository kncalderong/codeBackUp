st1 = input('please enter your first sequence:')
st2 = input('please enter your second sequence:')

hamming_count=0

for num in range(0,len(st1)):
    if st1[num] != st2[num]:
        hamming_count = hamming_count + 1
    else: continue

print('Hamming distance: ', hamming_count)
