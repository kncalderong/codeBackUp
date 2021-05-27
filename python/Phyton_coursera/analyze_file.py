fname = input("Enter file name: ")
try:
    fh = open(fname)
except:
    print("Error, name not found:",fname)
    quit()
count = 0
total = 0
for line in fh:
    line = line.rstrip()
    if not line.startswith("X-DSPAM-Confidence:") : continue
    count = count + 1
    value = float(line[line.find(":")+2:])
    total = total+value
average = total/count
print ("Average spam confidence:",average)
