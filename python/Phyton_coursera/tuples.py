name = input("Enter file:")
if len(name) < 1 : name = "mbox-short.txt"
handle = open(name)

h=list()
for line in handle:
    line=line.rstrip()
    if not line.startswith('From '): continue
    words=line.split()
    time=words[5]
    hours=time.split(':')
    hour=hours[0]
    h.append(hour)

counts=dict()
for x in h:
    counts[x]=counts.get(x,0) + 1

lst=list()
for k,v in counts.items():
    newtap = (k,v)
    lst.append(newtap)

lst=sorted(lst)
for key,value in lst:
    print(key,value)
