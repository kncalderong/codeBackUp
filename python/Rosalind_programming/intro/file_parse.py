name=input('please enter the name of the file: ')

handle=open(name,'r')

output=open('output_fileparse.txt','w')
counter=0

for line in handle:
    line=line.rstrip()
    ##print(line)
    counter=counter+1

    if int(counter)%2==0:
        ##print(counter)
        print(line)
        output.write(line + '\n')
    else:
        continue
