name = input("Enter file:")
if len(name) < 1 : name = "mbox-short.txt"
handle = open(name)

counts=dict()
emails=list()
bigcount=None
bigemail=None

for line in handle:
    line=line.rstrip()
    if not line.startswith('From '):continue

    words=line.split()
    email=words[1]
    emails.append(email)

for name in emails:
    counts[name]=counts.get(name, 0) + 1

for k,v in counts.items():
    if bigcount is None or v > bigcount:
        bigcount=v
        bigemail=k

print(bigemail,bigcount)
